//Object constructor
//day la ham tao ob constructor ko phai doi tuong ma la mo ta
function User(firstName,lastName,avarta){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avarta=avarta;

}
//day la constructor
var author=new User('Son','Dang','Ava');// doi tuong day la contructor tuc la goi den ban thiet ke
var user=new User('Vu','Vu','Ava');// doi tuong
var author=new User('Son','Dang','Ava');

author.title='chia se f8';
user.comment='lieu co khoa asp ko';

console.log(author)// tao them moi khong anh huong gi ca
console.log(user.constructor==User)
console.log(user)
function User(firstName,lastName,avarta){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avarta=avarta;
    this.getName=function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(author.getName());
console.log(user.getName());
//Object protottype nguyen mau tao len mot doi tuong
User.prototype.className='minh'
console.log(user.className);
//Object protottype nguyen mau tao len mot doi tuong
User.prototype.getClassName=function(){
    return this.className
}

///Nam
var date=new Date();// doi tuong
console.log(date)
var date=Date()// dang o string
console.log(date)
// nam
var date=new Date()
var year=date.getFullYear();
var month=date.getMonth()+1;
var day= date.getDate();
console.log(day)
date.getHours()
date.getMinutes()
console.log(date.getMinutes())
console.log(date.getSeconds)
console.log(`${day}/${mont}`)

var date=2
switch(date){
    case 1:
        console.log("hom nay")
        break;
    case 2:
        console.log("mai")
        break;
    default:
        console.log("chiu")
}
// khi nao dung if else so sanh tinh dung sai ><=
// cho truoc gia tri vi du tu 2 den 8 biet truoc gia tri dung switch 3case tro len dung case
var course={
    name:'Hai',
    coin:250
}
var result=course.coin>0 ? `${course.coin} coin`: 'Mien '; // neu ve 1 dung in ra course.coin ve 2 in ra coin ve 3 in ra mien phi
// 
for (var i=1;i<=100;i++ ){
    console.log(i,"toi yeu em")
}
var myArray=[
    'java',
    'hp',
    'goi',

];
for (var i=0;i<myArray.length;i++){
    console.log(myArray[i])
}
//////////////////
var myinfor={
    name:'sondang',
    age:18,
    address:'hanoi'
 };
 for (var key in myinfor){
    console.log(key)
    console.log(myinfor[key])
 }
 /////for of
 var lan=[
    'toan',
    'ly',
    'hoa'
];
for (var value of lan){
    console.log(value)
}
/////
var infor={
    name:'sondang',
    age:18
}
for (var value of Object.values(myinfor)){
    console.log(value)
}
////////while
var lan=[
    'toan',
    'ly',
    'hoa'
];
var i=0;
while(i<lan.length){
    //i++;
    console.log(lan[i])
    i++// i xuong day de no duye tu 0 ko thi vao cai no se cong len 1
}
////
var i=0
do {
    i++;
    console.log(i)
}while(i<10)// kiem tra dieu kien tu lan 2 tro di
//lam code ben trong xong kiem tra dieu kien
// vi du
var i=0
var is=false
do{
    i++;
    console.log("nap the lan",+i)
    if (false){
        is=True
    }
}while(!is && i<=3);// vong lap chay khi khong nap

