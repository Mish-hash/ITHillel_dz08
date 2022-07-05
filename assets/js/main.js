/*
) Создайте объект triangle со следующими свойствами: aSide, bSide, cSide.

Создайте метод setValues(), который вызывает функцию prompt и заполняет свойства aSide, bSide, cSide значениями.

Создайте в объекте triangle метод для расчета периметра треугольника.
Создайте в объекте triangle метод, который проверяет является ли треугольник
равносторонним:

Выведите информацию о созданном треугольнике (включая результат выполнения

всех методов) в консоль.

Initial object

let triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,
    setValues: function() { <- это метод объекта triangle
      // your code should be here
    },
    getPerimeter: function() { <- это метод объекта triangle
      // your code should be here
    },
    isEqualSides: function() { <- это метод объекта triangle
      // your code should be here
    },
 }
 В консоли ожидаю увидеть:

 triangle.setValues(); // for examle 3 3 3
 console.log(triangle.getPerimeter()); // 9
 console.log(triangle.isEqualSides()); // true
*/

const triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,

    setValues: function(a, b, c) {
        this.aSide = a;
        this.bSide = b;
        this.cSide = c;
    },

    getPerimeter: function() {
        return this.aSide + this.bSide + this.cSide;
    },

    isEqualSides: function() {
        return this.aSide === this.bSide && this.bSide === this.cSide ? true : false;
    }
}

triangle.setValues(3, 3, 2);

console.log(triangle.getPerimeter());
console.log(triangle.isEqualSides());


/*
2) Создайте объект calculator с методами:

- read() запрашивает prompt() для двух значений и сохраняет их как свойства объекта x, y
- sum() возвращает сумму этих двух значений
- multi() возвращает произведение этих двух значений
- diff() возвращает разницу
- div() возвращает частное
В консоли ожидаю увидеть:

calculator.read(); // for example 5 2
console.log(calculator.sum()); // 7
console.log(calculator.diff()); // 3
*/

const calculator = {
    x: 0,
    y: 0,

    read: function () {
        this.x = parseFloat(prompt('Please enter first number'));
        this.y = parseFloat(prompt('Please enter second number'));
    },

    sum: function () {
        return this.x + this.y;
    },

    multi: function() {
        return this.x * this.y;
    },

    diff: function() {
        return this.x - this.y;
    },

    div: function() {
        return this.x / this.y;
    }
};

calculator.read();
console.log('Calculator sum() => ' + calculator.sum());
console.log('Calculator multi() => ' + calculator.multi());
console.log('Calculator diff() => ' + calculator.diff());
console.log('Calculator div() => ' + calculator.div());


/*
3)* Дан объект country и функция format():

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}
Допишите код так, чтобы в консоли появились строки указанные в комментариях.

format.call( Ваш код ); // Ukraine
format.apply( Ваш код ); // [Ukraine]
format.call( Ваш код ); // Kyiv
format.apply( Ваш код ); // Kyiv
format.apply( Ваш код ); // undefined
*/

const country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    },
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.language, ['', '']); // undefined
