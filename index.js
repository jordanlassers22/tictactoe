let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")
let resetButton = document.getElementById("reset")
let playersTurn = 'X'

box1.addEventListener('click', boxClicked)
box2.addEventListener('click', boxClicked)
box3.addEventListener('click', boxClicked)
box4.addEventListener('click', boxClicked)
box5.addEventListener('click', boxClicked)
box6.addEventListener('click', boxClicked)
box7.addEventListener('click', boxClicked)
box8.addEventListener('click', boxClicked)
box9.addEventListener('click', boxClicked)
resetButton.addEventListener('click', resetBoard)

function updateTurn(box){
    //Sets playersTurn variable to whichever letter is next up. Changes class of squares in order to match player color.
    let h2 = document.getElementById('playerTurn')
    let turnLetter = document.getElementById('turnLetter')
    if (playersTurn == 'X'){
        playersTurn = 'O'
        box.classList.add('red')
        box.classList.remove('blue')
        turnLetter.classList.add('blue')
        turnLetter.classList.remove('red')
        turnLetter.innerText = 'O'
    }
    else{
        playersTurn = 'X'
        box.classList.add('blue')
        box.classList.remove('red')
        turnLetter.classList.add('red')
        turnLetter.classList.remove('blue')
        turnLetter.innerText = 'X'
    }
    checkWin()
}

function resetBoard(e){
    //Cleans up the board, enables event listeners, hides win message.
    let playerTurn = document.getElementById('playerTurn')
    let winMessage = document.getElementById('winMessage')
    playerTurn.style.display = "block"
    winMessage.style.display = "none"
    box1.value = ''
    box2.value = ''
    box3.value = ''
    box4.value = ''
    box5.value = ''
    box6.value = ''
    box7.value = ''
    box8.value = ''
    box9.value = ''
    box1.addEventListener('click', boxClicked)
    box2.addEventListener('click', boxClicked)
    box3.addEventListener('click', boxClicked)
    box4.addEventListener('click', boxClicked)
    box5.addEventListener('click', boxClicked)
    box6.addEventListener('click', boxClicked)
    box7.addEventListener('click', boxClicked)
    box8.addEventListener('click', boxClicked)
    box9.addEventListener('click', boxClicked)
    box1.style.backgroundColor = 'white'
    box2.style.backgroundColor = 'white'
    box3.style.backgroundColor = 'white'
    box4.style.backgroundColor = 'white'
    box5.style.backgroundColor = 'white'
    box6.style.backgroundColor = 'white'
    box7.style.backgroundColor = 'white'
    box8.style.backgroundColor = 'white'
    box9.style.backgroundColor = 'white'
    document.body.style.backgroundColor = 'white'
}

function boxClicked(e){
    //Triggers when an input cell is clicked.
    let box = e.target
    if (box.value == ''){
        box.value = playersTurn
        updateTurn(box)
        box.blur()
    }
}

function checkWin(){
    //Checks all of the different possible win conditions on call. Then passes winning combination of cells to win().
    if (box1.value == box2.value && box2.value == box3.value && box1.value != ''){
        win(box1.value, box1, box2, box3)
    }
    else if(box4.value == box5.value && box5.value == box6.value && box5.value != ''){
        win(box4.value, box4, box5, box6)
    }
    else if(box7.value == box8.value && box8.value == box9.value && box7.value != ''){
        win(box7.value, box7, box8, box9)
    }
    else if(box3.value == box6.value && box6.value == box9.value && box3.value != ''){
        win(box3.value, box3, box6, box9)
    }
    else if(box2.value == box5.value && box5.value == box8.value && box2.value != ''){
        win(box2.value, box2, box5, box8)
    }
    else if(box1.value == box4.value && box4.value == box7.value && box1.value != ''){
        win(box1.value, box1, box4, box7)
    }
    else if(box1.value == box5.value && box5.value == box9.value && box1.value != ''){
        win(box1.value, box1, box5, box9)
    }
    else if(box3.value == box5.value && box5.value == box7.value && box3.value != ''){
        win(box3.value, box3, box5, box7)
    }
    else if(box1.value != '' && box2.value != '' && box3.value != '' && box4.value != '' && box5.value != '' && box6.value != '' && box7.value != '' && box8.value != '' && box9.value != ''){
        let winMessage = document.getElementById('winMessage')
        let playerTurn = document.getElementById('playerTurn')
        playerTurn.style.display = 'none'
        winMessage.style.display = 'block'
        winMessage.innerText = "Cat's Game! It's a tie."
        winMessage.classList.remove('red')
        winMessage.classList.remove('blue')
        document.body.style.backgroundColor = 'DarkGrey'
    }
}

function win(winningPlayer, winningBox1, winningBox2, winningBox3){
    //Triggers on win. Displays winning player, changes background of body and cells, and disables cells from being clicked.
    let playerTurn = document.getElementById('playerTurn')
    let winningLetter = document.getElementById('winningLetter')
    let winMessage = document.getElementById('winMessage')
    playerTurn.style.display = "none"
    winMessage.innerText = `${winningPlayer} Wins!`
    if (winningPlayer == 'X'){
        winMessage.classList.add('red')
        winMessage.classList.remove('blue')
    }
    else if (winningPlayer == 'O') {
        winMessage.classList.add('blue')
        winMessage.classList.remove('red')
    }
    winMessage.style.display = "block"
    winningBox1.style.backgroundColor = '#32CD32'
    winningBox2.style.backgroundColor = '#32CD32'
    winningBox3.style.backgroundColor = '#32CD32'

    box1.removeEventListener('click', boxClicked)
    box2.removeEventListener('click', boxClicked)
    box3.removeEventListener('click', boxClicked)
    box4.removeEventListener('click', boxClicked)
    box5.removeEventListener('click', boxClicked)
    box6.removeEventListener('click', boxClicked)
    box7.removeEventListener('click', boxClicked)
    box8.removeEventListener('click', boxClicked)
    box9.removeEventListener('click', boxClicked)
    document.body.style.backgroundColor = '#C4B454'
}