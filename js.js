function first() {

    let num1= +prompt("please enter your number (1):");
    let num2= +prompt("please enter your number (2):");
    let num3= +prompt("please enter your number (3):");
    let num4= +prompt("please enter your number (4):");
    let num5= +prompt("please enter your number (5):");
    let num6= +prompt("please enter your number (6):");
    let num7= +prompt("please enter your number (7):");
    let num8= +prompt("please enter your number (8):");
    let num9= +prompt("please enter your number (9):");
    let num10= +prompt("please enter your number (10):");
    const result= (num1+num2+num3+num4+num5+num6+num7+num8+num9+num10) / 10;
    let allValues= num1||num2||num3||num4||num5||num6||num7||num8||num9||num10;
    
    while(true){    
    if(allValues > 20) {
        alert("your entry number is incorect!")
    } else if(result < 10) {
        alert(result.toFixed(1)+" you failed!")
    } else if(result > 10 ) {
        alert(result.toFixed(1)+" you passed!")
    }

}

}
first()