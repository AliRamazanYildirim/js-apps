// BEISPIEL-1
//!CORS

const fetchDaten = async () => {
    let main = document.getElementById("main");
    const url ="https://corsproxy.io/?" + encodeURIComponent("https://openwhyd.org/adrien?format=json");
    const response = await fetch(url, async () => {
        response.headers.set('Access-Control-Allow-Origin', '*');
        return response;
    });
    const data = await response.json();
    console.log(data);
    data.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = element.name;
        main.appendChild(div);
    });
};
fetchDaten();