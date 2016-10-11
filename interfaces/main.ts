let myObj : MyInterface = {
    id: 2,
    name: 'nombre',

    method() {
        console.log('Hola');
    },

    methodWithReturn() {
        return 2;
    },

    sum(numbers) {
        return numbers.reduce((a,b) => { return a + b });
    }

};

let sum = myObj.sum([1,2,3,4,5]);