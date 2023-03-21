let randomNumber = Math.floor(Math.random() *11)
const loadNumber=()=>{
    document.getElementById('lifeCount').innerText='3'
    console.log(randomNumber);
}
const guess=()=>{
    let guessNumber = userInput.value
    if (guessNumber == "") {
        document.getElementById('emptyInput').innerText='Input a number'
    }else{
        document.getElementById('emptyInput').innerText=''
        if (guessNumber>10) {
        document.getElementById('emptyInput').innerText='Out of range'
        }
        else if (guessNumber == randomNumber) {
            alert("correct")
            alert('New game start')
            window.location="Number Guessing.html"
        }else{
            document.getElementById('lifeCount').innerText-=1
            lifeCount--
            alert("Wrong try agin")
            if (document.getElementById('lifeCount').innerText==0) {
                alert('No more life')
                alert('New game start')
                window.location="Number Guessing.html"
            }
        }
    }
}