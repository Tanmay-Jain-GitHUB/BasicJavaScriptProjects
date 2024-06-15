const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#result');
    
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML = "Please give valid height";
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML = "Please give valid weight";
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<p>${bmi}</p>`;
        let message;
        if(bmi<18.6)
            message = document.createTextNode(`${bmi} makes you Underweight`);
        else if(bmi>28.9)
            message = document.createTextNode(`${bmi} makes you Overweight`);
        else
            message = document.createTextNode(`${bmi} makes you Normal weight`);
        result.appendChild(message);
    }
});

