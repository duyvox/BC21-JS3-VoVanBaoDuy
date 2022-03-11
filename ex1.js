function sort3Integers(){
    let a = document.getElementById('ex1__num1').value * 1;
    let b = document.getElementById('ex1__num2').value * 1;
    let c = document.getElementById('ex1__num3').value * 1;
    console.log(a,b,c)
    if(a > b){
        let tmp = a;
        a = b;
        b = tmp;
    }
    console.log(a,b,c)
    
    if(a > c){
        let tmp = a;
        a = c;
        c = tmp;
    }
    if(b > c){
        let tmp = b;
        b = c;
        c = tmp;
    }
    document.getElementById('ex1__result').innerText = `${a} ${b} ${c}`;
}