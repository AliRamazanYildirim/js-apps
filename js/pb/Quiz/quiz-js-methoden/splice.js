const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
colors.splice(2, 1, 'Cyan', 'Magenta'); // Ersetzt 'Blue' mit 'Cyan', 'Magenta'

console.log(colors); // ['Red', 'Green', 'Cyan', 'Magenta', 'Yellow', 'Purple']

//Erklärung:
// colors.splice(2, 1, 'Cyan', 'Magenta') entfernt 1 Element ab Index 2 ('Blue') und fügt 'Cyan' und 'Magenta' hinzu.
