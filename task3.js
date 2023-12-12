//call back function :1
let arr=[1,2,3,4,4,5,6,7,7,7,8];
function a(arr,sum){
    let x=arr.filter((e)=>{
        return e%2==0;
    })
    return sum(x)
}
function sum(z){
    let y=z.reduce((u,v)=>{return u+v;});
    return y;
}
console.log("1.Sum of Even Numbers : "+a(arr,sum));
document.write("1.Sum of Even Numbers : "+a(arr,sum)+"<br>")

/*.................................................................................*/
//call back function :2
function leapyear(year,Find){
    let y=year;

    let x=new Date();
    let z=x.getFullYear();
    return Find(z,y)
}
function Find(z,y){
    let age=z-y;
    return age;
}
console.log("2.Your age is : "+leapyear(2003,Find));
document.write("2.Your age is : "+leapyear(2003,Find)+"<br>")

/*.................................................................................*/
//call back function :3
function we(d,y,m,check){
    var old=new Date(y,m,d);
    var x=old.getDay();
    return check(x);
}
let week=(x)=>{
    var days=["sunday","monday","Tuesday","wednesday","thursday","friday","saturday"];
    if(days[x]=="sunday" || days[x]=="saturday"){
        return days[x]+"  is weekend";
    }
    else{
        return days[x]+"  is not weekend";
    }
}
console.log("3."+we(23,2,2020,week));
document.write("3."+we(23,2,2020,week))

