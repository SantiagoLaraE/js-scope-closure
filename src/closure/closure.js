'use strict'

function greeting(){
    let username = "Oscar";
    
    function displayUsername(){
        return `Hello ${username}`;
    }

    return displayUsername;
}

const a = greeting();
console.log(a);

const g = greeting();
console.log(g);
console.log(g());