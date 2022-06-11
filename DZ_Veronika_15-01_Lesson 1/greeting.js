alert('Hello');

let name = prompt('Как тебя зовут?', '');
alert(`Привет, ${name}`);


let a = 5
switch (a) {
    case 1:
        alert('Красный');
        break;
    case 2:
        alert('Желтый');
        break;
    case 3:
        alert('Зеленый');
        break;
    default:
        alert('Дождись зеленого сигнала сфетофора')
}


let arr1 = [2,4,6,8];
let arr2 = [1,3,5];
console.log(arr1.length===arr2.length);