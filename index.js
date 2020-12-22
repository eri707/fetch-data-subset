// install fetch module
const fetch = require('node-fetch');
// assign arguments from user inputs
let argv1 = process.argv[2];
let argv2 = process.argv[3];
// early return if argv1 and argv2 don't exist
if (!argv1) return console.log('Please input name, code, currency or capital');
if (!argv2) return console.log('Please input any words');
// normalize argv1 and argv2
argv1 = argv1.toLowerCase();
argv2 = argv2.toLowerCase();

// transfer the code word input by user into alpha word to show data 
if (argv1 == 'code') {
     argv1 = 'alpha';
} 

fetch(`https://restcountries.eu/rest/v2/${argv1}/${argv2}?fields=name;capital;alpha2Code;population;region`)
    .then(res => {
        // error handling if the data which user wants doesn't exist 
        if(res.status == 404){
            throw new Error(`${argv1} ${argv2} not found`);
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    });


