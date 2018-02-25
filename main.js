//task#1
var day = 365;
var earth = "Земля";
var number = "7 млрд.";
var sun = "Солнца";

document.getElementById('task1').innerHTML = '<h1>Мы живем на планете ' + earth + ', она делает один оборот вокруг ' + sun + ' за ' + day + ' дней. Население нашей планеты составляет примерно ' + number + 'человек.' + '</h1>';

//task2
/*

var a = 5;
var b, c;
осуществлено определение переменных a (и присвоение ей значение равному 5), b и с:

b = a * 5;
переменной b присвоено значение выражения a * 5 = 25;

b = c = b/2;
потом переменной b присваевается новое значение, так как приоритет деления больше, то сначала выполнится подвыражение  b/2 = 25/2 = 12.5, а дальше совершится присвоение этого значение переменной b и с, и они будут равны 12.5.

чтобы код работал как в ввышерасмотренном варианте, скобки возможно раставить в следующем порядке: 
(b = c) = b/2;

*/

//task#3 
/*согласно кодировки UTF-8: для кодировки русских букв используются 2байта, для символов, пробелов - 1байт
в сообщении:

"Найдите количество Килобайт (KB) и Байт (B) в данном сообщении.

В 1 Килобайте -- 1024 Байта;
В 1 Байте -- 8 бит;

"
115символов, с них 73символа русских букв, а это 73*2 = 146байта(или 146/1024=0,14KB), и 42символ - 41байт(или 41/1024=0,04KB), всего - 188байт.
 */


//task#4
var country = ['USA', 'Ukraine', 'Italy', 'Belgium', 'Canada'];
var population = ['323,1млн.', '45млн.', '60,6млн.', '11,35млн.', '36,29млн.'];

for (var i=0; i<=4; i++) {
	document.write('<h4>' + country[i] + ' - ' + population[i] + '</h4>');
}

//task#5
var fruit = ['апельсин', 'банан', 'груша'];
document.write('<p> Изначально массив состоит из ' + fruit.length + ' элементов: ' + fruit.join(', ') + '</p>');
fruit.push('яблоко', 'ананас');
fruit.unshift('грейпфрут');
document.write('<p> После добавления массив состоит из ' + fruit.length + ' элементов: ' + fruit.join(', ') + '</p>');
fruit.pop();
fruit.shift();
document.write('<p> После удаления массив состоит из ' + fruit.length + ' элеметов: ' + fruit.join(', ') + '</p>');

//task#6
var fruits = ['яблоко', 'апельсин', 'груша', 'гранат'];
fruits.splice(fruits.length-2, 1, "ананас");
document.write('<p> После использования splice массив состоит из следующих элементов: ' + fruits.join(', ') + '</p>');

//if - task#1
var students = ['Сергей', 'Матвей', 'Лейла', 'Алина', 'Иоган'];
if (students.length >= 3) {
	alert('это большой массив, в котором как минимум 3 элемента');
} else {
	alert('это маленький массив, в котором менее 3-х элементов')
}

//if - task#2
var students = ['Дмитрий', 'Алексей', 'Петр', 'Виктор'];
if (students.length == 4 && students[students.length-1] == 'Виктор') {
	alert('этот массив мне подходит');
} else {
	alert('этот массив мне не подходит');
}

//if - task#3
var color = prompt('введите цвет светлофора (red, yellow, green)');

if (color == 'red') {
	alert('стоять');
} else if (color == 'yellow') {
		alert('приготовиться');
} else {
	alert('можно идти');
}

//if - task#4
a=1;
b=8;
result = (a + b < 4) ? 'Мало' : 'Много';
document.write(result);

//if - task#5
var message;
var login;
message = (login == 'Вася') ? 'Привет' :
			(login == 'Директор') ? 'Здравствуйте' :
			(login == '') ? 'Нет логина' : '';

//modal - task#1
var userAge = prompt('Сколько Вам лет?') 
if (userAge <= 20) {
	alert('Вы еще молоды, у Вас  все впереди!');
} else { alert('Вы уже взрослый человек!');}

//modal - task#2
var visitorName = prompt('Кто пришёл?', '');
if (visitorName == 'Админ') {
	var password = prompt('Пароль?', '');
	if (password == 'Чёрный Властелин') {
		alert( 'Добро пожаловать!' );
	} else if (password == null) { 
		alert( 'Вход отменён' );
	} else {
		alert( 'Пароль неверен' );
	}
} else if (visitorName == null) {
	alert( 'Вход отменён' );
} else {
	alert( 'Я вас не знаю' );
}

//modal - task#3
var question = prompt('Каково "официальное" название JavaScript?', '');
var answer = (answer == 'ECMAScript') ? 'Верно!' : 'Не знаете? "ECMAScript"!'
alert (answer);