function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["oscar", "Ricardo", "Pablo", "Tragic", "Alejandro"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
