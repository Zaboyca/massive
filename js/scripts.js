console.log('Задача №1');
var arr1 = [1, 2, 3, 4, 5];
for (var i = 0; i < arr1.length; i++ )
{
	console.log(arr1[i]);
}
console.log('');
console.log('Задача №2');
var arr2 =  [-2, -1, -3, 15, 0, -4, 2, -5, -9, -15, 0, 4, 5, -6, 10, 7];
for (var i = 0; i < arr2.length; i++ )
{
	if ( (arr2[i]) > -10 && (arr2[i]) < -3 ) {
	console.log(arr2[i]);
	}
}
console.log('');
console.log('Задача №3');
var arr3 = [];
for ( i = 23; i <= 57; i++)
{
	arr3.push(i);
	// console.log(arr3[i]);  здесь почему-то показывает как undefined;
}
console.log(arr3);
var sum=0;
for (var i = 0; i < arr3.length; i++ )
{
	sum = sum + arr3[i]
}
console.log(sum);

console.log('');
console.log('Задача №4');
var arr4 =  ['10', '20', '30', '50', '235', '3000'];
var simbol;
for (var i = 0; i < arr4.length; i++ )
{
	simbol = arr4[i];

	if (simbol[0] == '1' || simbol[0] == '2' || simbol[0] == '5')
	{
		console.log(simbol);
	}
}

console.log('');
console.log('Задача №5');
var days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
for (var key in days) { 
if (key <=5) { 
document.write(days[key] + '<br>'); 
} 
else { 
document.write('<b style="color: red">' + days[key] + '<br>' + '</b>') 
} 
}

console.log('');
console.log('Задачи №6-7');
var arr6 = [];
while (true) {

  var value = +prompt("Введите элемент массива", '');
  if (!value || value == 0) break;
  arr6.push(value);
}
console.log("Ваш массив: " +arr6);
console.log("Последний элемент массива: " +arr6[arr6.length-1]);
function compareNumeric(a, b) { // Не понимаю как эта крень работает... функции мы должны были передать 2 аргумента, в итоге ничего не передаём 
  if (a > b) return 1;          // и каким образом -1 или +1 влияют на сортировку тоже не особо ясно )))
  if (a < b) return -1;
}
arr6.sort(compareNumeric);
console.log("Массив после сортировки: " +arr6);

console.log('');
console.log('Задача №8');
var arr8 = [12, false, "Текст", 4, 2, -5, 0];
arr8.reverse();                 // цикл while тут явно лишний...
console.log(arr8); 

console.log('');
console.log('Задача №9');
var j=0,
	arr9 = [5, 9, 21, , , 9, 78, , , , 6];
for (var i = 0; i < arr9.length; i++ )
{
	if (arr9[i] == undefined) {
	console.log("Ключ пустой позиции: " + i);
	j++;
	}
}
console.log("Количество пустых позиций:" + j);

console.log('');
console.log('Задача №10');
var arr10 =  [1,8,0,13,76,8,7,0,22,0,2,3,2],
	arrSum = [],
	arrKeys = [],
	sum=0;
for (var i = 0; i < arr10.length; i++ ){
		if (arr10[i] == 0){
			console.log(i);
			arrKeys.push(i);
			arrSum = arr10.slice(arrKeys[0], arrKeys[arrKeys.length-1]);  
		}
	}
console.log("Ключи массива с нулями: " + arrKeys);
console.log("Элементы между нулями: " + arrSum);
if (arrKeys[1]){
	for (var j = 0; j < arrSum.length; j++ )
		{
			sum += arrSum[j];
		}	
}
else {console.log("В массиве меньше двух нолей!")}
console.log("Сумма элементов массива: " + sum);

console.log('');
console.log('Задача №11');
var max = +prompt("Введите высоту ёлки", ''),
	i = 0,
	j = 0,
	space = "",
    elka = "";

while (i < max) {
    space = "";
    elka = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) elka += "^";
    console.log(space + elka);
    i++;
}