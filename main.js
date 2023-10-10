
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let opt = document.getElementById('opt');
let solve = document.getElementById('solve');

solve.addEventListener('click' , function(){
    
    let firstnum = parseInt(num1.value);
    let secondnum = parseInt(num2.value);
    let operator = opt.value;

    console.log(firstnum + secondnum);
    switch (operator) {

        case '+':
            window.alert(firstnum + secondnum);
            break;
    
        case '-':
            window.alert(num1 - num2);
            break;
    
        case '*':
            window.alert(num1 * num2);
            break;
    
        case '/':
            window.alert(num1 / num2);
            break;
    
        case '%':
            window.alert(num1 % num2);
            break;
    
    }

})

    





