import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(url)
  .then(response => {
    console.log('Daten abgerufen:', response.data);
  })
  .catch(error => {
    console.error('Fehler aufgetreten:', error);
  });