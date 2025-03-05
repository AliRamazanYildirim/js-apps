import bcrypt from "bcrypt";

/* const meinPass = "Passwort123.";
const saltRounds = 10;

const salt = await bcrypt.genSalt(saltRounds);
const hash = await bcrypt.hash(meinPass, salt);
console.log(hash); */

const measureHashTime = async () => {
  const saltRounds = 10;
  const meinPass = "Passwort123.";
  const startTime = Date.now();

  const hash = await bcrypt.hash(meinPass, saltRounds);

  const endTime = Date.now();
  const hashTime = ((endTime - startTime) / 1000).toFixed(3);
  console.log(`Hashing took ${hashTime} seconds`, { hash });
};

//measureHashTime();

const estimateHashTime = async (saltRounds) => {
    const baseTime = 50;
    const timeMultiplier = 2;
    const estimatedTime = baseTime * Math.pow(timeMultiplier, saltRounds- 10)
    return estimatedTime;
}

const displayEstimatedTime = async () => {
    const estimatedTime = await estimateHashTime(15);
    console.log(`Estimated time to hash: ${estimatedTime} ms, ${estimatedTime / 1000} s, ${estimatedTime / 1000 / 60} min, ${estimatedTime / 1000 / 60 / 60} h`);
}

//displayEstimatedTime();

const checkIdenticalHash = async () => {
    const saltRounds = 10;
    const meinPass = "Passwort123.";
    const salt1 = await bcrypt.genSalt(saltRounds);
    const salt2 = await bcrypt.genSalt(saltRounds);

    const hash1 = await bcrypt.hash(meinPass, salt1);
    const hash2 = await bcrypt.hash(meinPass, salt2);

    console.log({ hash1 });
    console.log({ hash2 });

    const isIdentical = hash1 === hash2;

    console.log({isIdentical});
}

//checkIdenticalHash();

//Password checking

const checkPassword = async () => {
    const saltRounds = 10;
    let meinPass = "Passwort123.";
    const hash = await bcrypt.hash(meinPass, saltRounds);
    console.log({hash});

    const db = {meinPass:hash}
    meinPass = "Pass123."
    const isIdentical = await bcrypt.compare(meinPass, db.meinPass);
    //const isIdentical = await bcrypt.compare("Passwort123.", db.meinPass);
    console.log({isIdentical});
};

checkPassword();