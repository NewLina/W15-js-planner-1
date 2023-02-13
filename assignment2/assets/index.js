const enteredNumber=document.querySelector('.number');
const resultNumber=document.querySelector('.result__number');
const resultLength=document.querySelector('.result__length');
const resultSum=document.querySelector('.result__sum');
const resultReverse=document.querySelector('.result__reverse');
const button=document.querySelector('.button');



button.onclick = () => {
    clean();

    const enteredNumberValue=enteredNumber.value;
    resultNumber.textContent=resultNumber.textContent+enteredNumberValue;

    let arrayOfNumbers=enteredNumberValue.split('');

    resultLength.textContent=resultLength.textContent+arrayOfNumbers.length;

    const sum = arrayOfNumbers.reduce(function (currentSum, item) {
        return Number(currentSum) + Number(item);
    });
    resultSum.textContent=resultSum.textContent+sum;

    arrayOfNumbers.reverse();
    resultReverse.textContent=resultReverse.textContent+arrayOfNumbers.join('');

    enteredNumber.value='';
}

function clean() {
    resultNumber.textContent='Число —' +'';
    resultLength.textContent='— цифр в числе:' +'';
    resultSum.textContent='— сумма:' +'';
    resultReverse.textContent='—обратный порядок:' +'';
}