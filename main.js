/**
 * variable  ES5
 * date type
     + number
     + string
     + undefine
     + null
 */

var type = null;
var chaiNuoc = "nuoc";
console.log("chai nuoc chua " + chaiNuoc);

var firstName = "nguyen";
console.log("ho la: " + firstName);

var lastName = "dang";
console.log("ten la: " + lastName);

var age = 18;
console.log("tuoi la: " + age);

var numberStudent = "2";
console.log("so lop hoc " + numberStudent);

var address = "216 lo A";
console.log("dia chi nha: " + address);
/*
var status;
= "to do";
*/

/*
 * tính tổng 2 số
 *
 */

var number1 = 15;
var number2 = 10;
var tong = number1 + number2;
console.log("tong la: " + tong);

var number3 = 30;
var number4 = 40;
var hieu = number3 - number4;
console.log("hieu la: " + hieu);

var number5 = 1;
var number6 = 2;
var tich = number5 * number6;
console.log("tich la: " + tich);

/*chia lay du*/
var number7 = 4.2;
var number8 = 2;
var thuong = number7 / number8;
console.log("thuong la: " + thuong);

/*chia lay đủ*/
var number9 = 10;
var number10 = 5;
var chiaLayDu = number9 % number10;
console.log("so du la: " + chiaLayDu);

/* toan tu  ++*/
var count = 10;
var newCount = count++;
console.log(newCount);

//toan tu +=
var stt = 1;
stt += 2;
console.log(stt);

/*
var a;
var b = 2;
a = 4;
b = ++b + ++a;
b = 3 + 5;



var a =3; // a=3 
var b=1;    //a =3   b=1
a+=b;  ( a=4 b=1)  //a=a+b+>> a=3+1    b=1
b= (b++) +(a++) //  b= 1++ + 4++ =>> b =5  a= 5 



var a=3;
var b=4;
a=b--;   //a=4 b=3
b=--b+ ++a;  //b= 2+5 =>b=7 a=5 
*/

// ES6
let usename = "dang";

// const hằng số : bien kh cập nhật gtri mới
// khai báo biến phai gan gtri ngay
const PI = "3.14";

/**
 * Tam giác vuông
 * + đầu vào
 * 2 cạnh tam giác vuông :   AB ,AC
 * + xử lí
 * lấy 2 cạnh tam giác vuông bình lên xong cộng lại chia căn bậc 2
 *    bình phương AB
 *    bình phương AC
 *    tính tổng, chia căn bậc 2
 * + đầu ra
 * tính chiều dài cạnh huyền BC
 */

let canh1 = 3;
let canh2 = 4;
canh1 = canh1 * canh1;
canh2 = canh2 * canh2;
canh3 = canh1 + canh2;
canh3 = Math.sqrt(canh3);
const result = "canh huyen la " + canh3;
console.log(result);
