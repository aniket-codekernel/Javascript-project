let user=false;
let num=Math.floor(Math.random()*10)+1
let arr=[]

for (let i = 0; i < 10; i++) {
    let guess=Number(prompt("Enter a number betn 1 to 10"))
    arr.push(guess);
    if (guess>num) {
        console.log("Your given value is to High")
    }else if(guess<num){
        console.log("Your given value is to low")
    }else if(guess==num){
        console.log("You give value is same:",num,guess)
        user=true;
        break;
    }
}
if (user==false) {
    console.log("Your all the attempt is done")
}

console.log("Your all guess:",arr)
console.log("This is a Your guess number:",num)