function task1(){
    let str = prompt("Введите строку");
    let re = /[\da-z]/ig;
    let arr = str.match(re);
    console.log(arr.length);
}

function task2(){
    let str = prompt("Введите строку без спецсимволов и цифр. Она должна состоять не менее чем из 10 символов");
    let reg = /^[a-z]{10,}$/
    let check = reg.test(str);
    console.log(check);
}

function task3(){
    let str = prompt("Введите строку из букв и цифр");
    let reg = /^[\da-z]$/i
    let check = reg.test(str);
    console.log(check);
}

function task4(){
    let str = prompt("Введите переменную, учитывая все правила");
    let reg = /^[a-z][\w$]*$/
    let check = str.match(reg);
    console.log(check);
   
}

function task5(){
    let str = prompt("Введите сайт");
    let reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    let check = str.match(reg);
    console.log(check)
}