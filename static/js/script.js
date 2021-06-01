//Your Age in Days

function ageInDays(){
    var birthYear = prompt("What year were you born.. Good friend?");

    //check if blank
    if(birthYear !== null && birthYear !=""){

        //get the current year
        var date = new Date();
        var currentYear = date.getFullYear();

        //calculate days from the current year
        var age = (currentYear - birthYear) * 365;
    
        //creating the Node and displaying the answer
        var h2 = document.createElement('h2');
        var textAnswer = document.createTextNode('You are ' + age + ' days old.');
        h2.setAttribute('id', 'ageInDays');
        h2.appendChild(textAnswer);
        document.getElementById('flex-box-result').appendChild(h2); 
    }     
}

//removing the text from textAnswer
function reset(){
    document.getElementById('ageInDays').remove();
}

//Code for Generating Random Cats

function randoCat(){
    let catImage = document.createElement('img');
    let catDiv = document.getElementById('flex-cat-gen');

    //link to create the random cats
    catImage.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    catImage.setAttribute('name', 'classCatImages');
    catDiv.appendChild(catImage);
}

//option to delete all cats
function deleteAllCats(){
    let catElements = document.getElementsByName('classCatImages');
    while(catElements.length > 0){
        catElements[0].parentNode.removeChild(catElements[0]);
        location.reload();
    }
}

//Rock, Paper, Scissors
function rpsGame(yourChoice){
    //setting up my variables
    var humanChoice, botChoice;

    //creating the human Choice
    humanChoice = yourChoice.id;
    console.log(humanChoice);

    //Computer picking at random
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice: ', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

//Picking 0, 1 or 2 at random
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

//assign the random number to rock, paper or scissors
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

//finding the Winner
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': "You tied.", 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    //removing all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challenge 4: Change the Color of All Buttons

let all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

//Copying the original colors for the buttons
let copyAllButtons = [];
for(let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

//master function that determines what happens after someone selects an option
function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green'){
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === "random") {
        randomColors();
    }    
}

//turn all buttons Red using the Class List
function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

//turn all buttons Green
function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

//reseting all the buttons
function buttonColorReset(){
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let choices = ['btn-primary', "btn-success", "btn-danger", "btn-warning"]
    for (let i = 0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
    
}




