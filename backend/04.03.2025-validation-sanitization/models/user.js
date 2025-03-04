import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const blackList = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
};

const escapeHtml = (text) => {
    return text.replace(/[<>"'&]/g, char => blackList[char]);
}


const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Bitte einen Namen eingeben"],
    trim: true,
    minlength: [3, "Der Name muss mindestens 3 Zeichen lang sein"],
    maxlength: [50, "Der Name darf maximal 50 Zeichen lang sein"],
    match: [/^[a-zA-ZäöüÄÖÜß\s]+$/, "Der Name darf nur Buchstaben und Leerzeichen enthalten"],
    set: escapeHtml,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    set: escapeHtml,
    validate: {
      validator: function (v) {
        return /.+\@.+\..+/.test(v); // A valid email format
      },
      message: (props) => `${props.value} ist keine gültige E-Mail-Adresse!`,
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    set: escapeHtml,
    minlength: [6, "Das Passwort muss mindestens 6 Zeichen lang sein"],
    validate: {
      validator: function (v) {
        return v.length >= 6; // Must be at least 6 characters long
      },
      message: (props) => `Das Passwort muss mindestens 6 Zeichen lang sein`,
    },
  },
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

export default model("User", userSchema);