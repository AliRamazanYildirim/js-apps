interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UserPreview = Pick<User, "id" | "name">;

const user: UserPreview = {
  id: 1,
  name: "Ali",
};

console.log(user); // { id: 1, name: "Ali" }

//Erklärung: Pick<User, "id" | "name"> erstellt ein neues Interface, welches nur die Properties id und name von User enthält. user ist ein Objekt, welches die Properties id und name enthält.
