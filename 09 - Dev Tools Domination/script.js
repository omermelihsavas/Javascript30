function changeTextStyle() {
    const text = document.querySelector('p');
    text.style.color = 'blue';
    text.style.fontSize = 'xx-large';
    text.style.cursor = 'auto';
}

const animals = [
    {
        name: 'Maya',
        age: 7
    },
    {
        name: 'İsmet',
        age: 2
    },
    {
        name: 'Cengiz',
        age: 3
    }
];

// Typeface to console
// 1- Regular
console.log('Regular');

// 2- Interpolated
console.log('Hello I am sun %s', '🌞');

// 3- Styled console
console.log('%c I am styled text.', 'font-size:32px; background:red; color:white');

// 4- Warning 
console.warn('WARNING!');

// 5- Error 
console.error('ERROR!');

// 6- Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('hey'), 'That is wrong!');

// 7- Clearing
// console.clear();

// 8- Viewing DOM Elements
console.log(p);
console.dir(p);

// 9- Grouping together
animals.forEach(animal => {
    console.groupCollapsed(`${animal.name}`);
    console.log(`This is ${animal.name}.`);
    console.log(`${animal.name} is ${animal.age} years old.`);
    console.groupEnd(`${animal.name}`);
});

// 10- Counting
console.count('Ömer');
console.count('Ömer');
console.count('Ömer');
console.count('Ömer');
console.count('Ömer');
console.count('Melih');
console.count('Melih');
console.count('Melih');

// 11- Timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

    console.table(animals);