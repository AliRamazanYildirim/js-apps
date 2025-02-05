//BEISPIEL-1
document.getElementById('outer').addEventListener('click', function() {
    console.log('Outer DIV clicked!');
});

document.getElementById('inner').addEventListener('click', function() {
    console.log('Inner DIV clicked!');
});

document.getElementById('button').addEventListener('click', function(event) {
    console.log('Button clicked!');
    event.stopPropagation(); // Bu satır, olayın yayılmasını durdurur.
});

document.getElementById('outer').addEventListener('click', function(e) {
    console.log(e.target.id);
    console.log(e.currentTarget);
});

//BEISPIEL-2
document.getElementById('container').addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('btn')) {
        console.log('Button clicked: ' + event.target.textContent);
    }
});

//BEISPIEL-3
const meineListe=document.querySelector('#meineListe');
meineListe.addEventListener('click', (e)=>{
    if(e.target.tagName==='LI'){
        console.log('Element clicked: '+e.target.textContent);
    }
})