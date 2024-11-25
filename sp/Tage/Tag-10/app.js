const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

myPromise.then((result) => {
  console.log(result);
}).catch((error) => console.log(error)); 

console.log('End of script');
console.log('Program finished');

//! Asnyc Await

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const container = document.getElementById('container');
    data.forEach((element) => {
        const title = document.createElement("h2");
        const neueBody = document.createElement("p");
        title.textContent = element.title;
        neueBody.textContent = element.body;
        title.style.background = 'red';
        container.append(title, neueBody);
    //   console.log(element.title);
    });
    console.log(data);
    }
    catch (error) {
        console.log(error);
        }
    }
fetchData();

//BEISPIEL-1

let sendData = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      //! Header => Ermöglicht dem Server, das Format der gesendeten Daten zu verstehen
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Ali", city: "FFM" }),
  });
  
  sendData
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => console.log("That's error"));
  
//BEISPIEL-2

const url = "http://localhost:3000/users";

const myFetch = (e) => {
  e.preventDefault();
  const city = document.getElementById("city");
  const cityName = city.value;
  if (cityName) {
    const data1 = {
      city: cityName,
    };
    fetch(url,{
        method: "POST",
        headers:  {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data1)
    }).then((res)=> res.json()).then((data)=> console.log(data)).catch()
  }
};

const form = document.getElementById("myForm");
form.addEventListener("submit", myFetch);

//! with async - await
const url1 = "http://localhost:3000/users";
const myFetch1 = async (e) => {
  e.preventDefault();
  const city = document.getElementById("city");
  const cityName = city.value;
  if (cityName) {
    const data = {
      nameOfCity: cityName,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add city!!!");
      }
      await response.json();
    } catch (err) {
      console.log(err);
    }
  }
};

const form1 = document.getElementById("myForm");
form1.addEventListener("submit", myFetch1);

//! DELETE
const cityId = "9809";
const deleteFunction = async () => {
  try {
    await fetch(`${url}/${cityId}`, {
      method: "DELETE",
    });
  } catch (err) {}
};
const deleting = document.getElementById("del");
deleting.addEventListener("click", deleteFunction);
//! DELETE

const cities = async () => {
    try {
      const response = await fetch(url);
      const ourCities = await response.json();
      console.log(ourCities);
      showCities(ourCities);
    } catch (error) {}
  };
  
  const showCities = (x) => {
    const parentUl = document.getElementById("list");
    x.forEach((myCity) => {
      const item = document.createElement("li");
      const deleteBtn = document.createElement("button");
      item.textContent = myCity.city;
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        deleteCity(myCity.id);
      });
      item.appendChild(deleteBtn);
      parentUl.appendChild(item);
    });
  };
  
  const deleteCity = async (id) => {
    try {
      await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      cities()
    } catch (error) {
      console.log(error);
    }
  };
  
  cities();
  