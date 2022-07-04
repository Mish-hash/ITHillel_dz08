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
