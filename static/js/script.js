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
    catDiv.appendChild(catImage);
}




