var myObj = {
    id: 2,
    name: 'nombre',
    method: function () {
        console.log('Hola');
    },
    methodWithReturn: function () {
        return 2;
    },
    sum: function (numbers) {
        return numbers.reduce(function (a, b) { return a + b; });
    }
};
var sum = myObj.sum([1, 2, 3, 4, 5]);
//# sourceMappingURL=main.js.map