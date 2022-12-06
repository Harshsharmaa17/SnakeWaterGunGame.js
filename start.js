// window 
// 1. DOM = documentpbject model
// 2. BOM = browser object model
// 3. javascript ConvolverNode
// window object represent browser window and methods to control it is a 
// global object 
// console.log(document)
// window.console.log(window)
// document.body.style.background = "grey"
// document.body.style.fontSize ="100px"
// document.body.style.fontFamily ="sans-serif"
// if(body == "grey")
// {
//     document.h1.style.background= "red"
// }


// Browser object model
// it represents objects provided by the browser for working
// everything except the document
// alert,confirm and prompt are parts of bom



let a = prompt("Enter your age")
a = Number.parseInt(a)
 while(a != 0) {
if(a<0)
{
    console.error("Please enter the correct number")
    break;
}
else if(a >= 18){
alert("You can drive")
document.write("Go for  ride!!")
document.body.style.background = "blue"

}
 else {
alert("You cannot Drive")
document.write("Stay at home until you grow old")
document.body.style.background = "red"

}
confirm("Do you want to see the Prompt again")
break;
}
