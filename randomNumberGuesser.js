const form = document.querySelector('form');

form.addEventListener('submit',function (e){
    e.preventDefault();

    const myNum = 1 + Math.floor((5*Math.random()));
    console.log(myNum);
    const userNum = parseInt(document.querySelector('#num').value);
    const result = document.querySelector('#result');

    if(userNum==='' || userNum<1 || userNum>5 || isNaN(userNum)){
        result.innerHTML = "Enter valid number";
    }
    else if(userNum==myNum){
        result.innerHTML = `${userNum} is correct guess!`;
    }
    else{
        result.innerHTML = `${userNum} is incorrect guess :(`;
    }



});
