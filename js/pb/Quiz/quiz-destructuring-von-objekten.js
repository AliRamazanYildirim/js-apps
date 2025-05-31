const mitarbeiter = {
  name: 'Sabine Müller',
  position: 'Entwicklerin',
  abteilung: 'IT',
  gehalt: 65000,
  erfahrung: '1 Jahre'
};

// Position und Name extrahieren, Rest in weitereInfos
const { name, position, ...weitereInfos } = mitarbeiter;

console.log(name); // 'Sabine Müller'
console.log(position); // 'Entwicklerin'
console.log(weitereInfos); // { abteilung: 'IT', gehalt: 45000, erfahrung: '1 Jahre' }