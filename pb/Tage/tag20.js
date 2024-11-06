//BEISPIEL-1
const benutzerListe = [
    {ID:1, vorName:'Ali', email:'ali@gmail.com', alter:30},
    {ID:2, vorName:'Elif', email:'elif@gmail.com', alter:25},
    {ID:3, vorName:'Alparslan', email:'alparslan@gmail.com', alter:20}
];
const transformierteListe=benutzerListe.map(benutzer=>{
    return{
        ID:benutzer.ID,
        vorName:benutzer.vorName,
        email:benutzer.email,
        alter:benutzer.alter
    };
});
console.log(transformierteListe);

//BEISPIEL-2
const sayilar = [1, 2, 3, 4, 5];

const yeniDizi = sayilar.map((eleman, indeks, dizi) => {
  console.log(`Eleman: ${eleman}, Indeks: ${indeks}, Dizi: ${dizi}`);
  return eleman * 2;
});

console.log(yeniDizi); // [2, 4, 6, 8, 10]

//BEISPIEL-3
const laptops = [
    { brand: " Apple", price: 2300, color: "Gray" },
    { brand: "Sony", price: 800, color: "Blue" },
    { brand: "Lenovo", price: 1300, color: "Black" },
    { brand: "Asus", price: 2100, color: "Red" },
  ];
  
  const result12 = laptops.filter((laptop) => laptop.price > 2000);
  console.log(result12);
  
  // Chaining
  const result13 = laptops
    .filter((x) => x.price > 1000)
    .map((y) => ({ brand: y.brand, price: y.price }));
  console.log(result13); // [ 2300, 1300, 2100 ]
  