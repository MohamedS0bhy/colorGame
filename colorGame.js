let newGame = document.querySelector("#newGame");
let easyMode = document.querySelector("#easy");
let hardMode = document.querySelector("#hard");
let background = "#232323";
let headerDisp = document.querySelector(".header");
let guessColor = document.querySelector("#guessColor");
let message = document.querySelector("#message");
let mode = 6;
let colors = generateColors(mode);
let pickedColor = pickeColor();
let squares = document.querySelectorAll('.square');

guessColor.textContent = pickedColor;

for(let i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click' , function(){
        let Color = this.style.backgroundColor;
        if(Color == pickedColor){
            headerDisp.style.backgroundColor = Color;
            message.textContent = "Correct!";
            changeColors(Color);
            newGame.textContent = "Play again?";
        }else{
            message.textContent = "try again!";
            this.style.backgroundColor = background;
        }

    });
}

newGame.addEventListener('click' , function (){ reset(); });

easyMode.addEventListener('click' , function(){
    newGame.textContent = "new Colors";
    message.textContent ="";
    headerDisp.style.backgroundColor = "steelblue";

    easyMode.classList.add("active");
    hardMode.classList.remove("active");
    mode = 3;
    colors = generateColors(mode);
    pickedColor = pickeColor();
    guessColor.textContent = pickedColor;

    for(let i=0 ; i<squares.length ; i++){
        if(colors[i])
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.display = "none";
    }

});

hardMode.addEventListener('click' , function(){
    newGame.textContent = "new Colors";
    message.textContent ="";
    headerDisp.style.backgroundColor = "steelblue";

    easyMode.classList.remove("active");
    hardMode.classList.add("active");
    mode = 6;
    colors = generateColors(mode);
    pickedColor = pickeColor();
    guessColor.textContent = pickedColor;

    for(let i=0 ; i<squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

});

function reset() {
    headerDisp.style.backgroundColor = "steelblue";
    easyMode.classList.remove("active");
    hardMode.classList.add("active");
    message.textContent ="";
    mode = 6;
    newGame.textContent = "new Colors";
    colors = generateColors(mode);
    pickedColor = pickeColor();
    guessColor.textContent = pickedColor;

    for(let i=0 ; i<squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click' , function(){
            let Color = this.style.backgroundColor;
            if(Color == pickedColor){
                message.textContent = "Correct!";
                changeColors(Color);
                newGame.textContent = "Play again?";
            }else{
                message.textContent = "try again!";
                this.style.backgroundColor = background;
            }
    
        });
        squares[i].style.display = "block";
    }
}

function getRandColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function generateColors(num){
    let arr = [];
    for(let i=0 ; i<num ; i++){
        arr.push(getRandColor());
    }
    return arr;
}

function pickeColor(){
    return colors[Math.floor(Math.random() * mode)];
}

function changeColors(color){
    for(let i=0 ; i<mode ; i++){
        squares[i].style.backgroundColor = color;
    }
}



