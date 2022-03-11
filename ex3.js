function countEvenAndOddNum(){
    let num1 = document.getElementById('ex3__num1').value * 1;
    let num2 = document.getElementById('ex3__num2').value * 1;
    let num3 = document.getElementById('ex3__num3').value * 1;
    let numOfOdd = 0;
    let numOfEven = 0;
    if(num1 % 2)
        numOfOdd++;
    else
        numOfEven++;
    if(num2 % 2)
        numOfOdd++;
    else
        numOfEven++;
    if(num3 % 2)
        numOfOdd++;
    else
        numOfEven++;
        document.getElementById('ex3__result').innerHTML = `Số lượng số chẵn: ${numOfEven} <br> Số lượng số lẻ: ${numOfOdd}`;

}