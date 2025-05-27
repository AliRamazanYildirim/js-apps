const obj = {};
function transform(data) {
    data.name = 'JS';
    data = null;
    return data;
}

const newObj = transform(obj);
console.log({obj, newObj})
