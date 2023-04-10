function tabuada(){
    let number = window.document.getElementById('number')
    let answer = document.getElementById('answer')
    let tabuada = ''
    
    for(let count = 1; count > 0 ; count++){

        tabuada += number+ "x" +count+ "=" +number*count+ "</br>";

        answer.innerHTML = tabuada;

        


    }
    

}

