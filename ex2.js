function sayHello(){
    let user = document.getElementById('ex2__user').value * 1;
    let act__userName;
    switch(user){
        case 1: 
            act__userName = 'Bố';
            break;
        case 2: 
            act__userName = 'Mẹ';
            break;
        case 3: 
            act__userName = 'anh Trai';
            break;
        case 4: 
            act__userName = 'Em Gái';
            break;
    }
    document.getElementById('ex2__result').innerHTML = `Xin chào ${act__userName}`;

}