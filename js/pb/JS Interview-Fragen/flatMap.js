// javascript
const posts = [
  { id: 1, title: 'A', tags: ['js', 'web'] },
  { id: 2, title: 'B', tags: ['web', 'security'] },
  { id: 3, title: 'C', tags: ['js'] }
];

// flatMap mit allen Tags in einem einzigen Array sammeln
const allTags = posts.flatMap(p => p.tags);
// ['js','web','web','security','js']

// Wiederholungen entfernen
const uniqueTags = Array.from(new Set(allTags)); 
// ['js','web','security']
console.log(uniqueTags);