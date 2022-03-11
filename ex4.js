function getTypeOfTriangle(){
    //sort 3 edge to determine if it can be a triangle or not
    let a = document.getElementById('ex4__edge1').value * 1;
    let b = document.getElementById('ex4__edge2').value * 1;
    let c = document.getElementById('ex4__edge3').value * 1;
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
    // done sort;
    let type;
    if(a + b > c){
        if(a === b && b ===c)
            type = 'Đều';
        else if(a === b || a === c || b === c)
            type = 'Cân';
        else if( a*a + b*b === c*c)
            type = 'Vuông';
        else
            type ='Thường';
        document.getElementById('ex4__result').innerText = `Tam giác ${type}`;
    }
    else
    document.getElementById('ex4__result').innerText = `Đây không thể là tam giác`;

}