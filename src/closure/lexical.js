'use strict'

const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal  + " myFunction");

    function parent (){ // Función interna | Closure
        const inner = 2;
        console.log(myNumber, myGlobal + " parent");

        function child() {
            console.log(inner, myNumber, myGlobal + " child")
        }

        return child();
    }

    return parent();
}

myFunction();