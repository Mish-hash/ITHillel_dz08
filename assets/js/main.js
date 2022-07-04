/* Создайте переменную типа number и присвойте ей значение 123456; */

const number = 123456;


/* Создайте переменную типа string и присвойте ей значение c; */

const string = "IT School 'Hillel'";


/* Создайте переменную типа boolean и присвойте ей значение false; */

const boolean = false;

/* Определите тип созданных переменных; */

const object = {
    number: {
        value: number,
        type: typeof number,
    },
    string: {
        value: string,
        type: typeof string,
    },
    boolean: {
        value: boolean,
        type: typeof boolean,
    },
};

/* Отобразите значение каждой переменной и её тип в консоли в следующем виде: */

console.log(object);


/* После запуска скрипт должен вывести сообщение с помощью alert */

const greeting = "Результат выподлнения первого ДЗ от IT School 'Hillel'";

alert(greeting);



