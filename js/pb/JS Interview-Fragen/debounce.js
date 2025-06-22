// Verwendung für das Suchfeld
const searchBox = document.querySelector('#search');
const apiSearch = debounce(query => {
    fetch(`/api/search?q=${query}`)
        .then(res => res.json())
        .then(data => console.log(data));
}, 300);

searchBox?.addEventListener('input', e => apiSearch(e.target.value));