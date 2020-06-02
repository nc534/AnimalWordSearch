var wordsLeft = 5; //for countdown of words left after guessed correctly
var errors = 0; //wrong guesses
var correct = 0; //correct guesses
var totalTries = 0; //total guesses

function ButtonClicked(){
    var w = document.getElementById("word").value.toLowerCase();

    if(w == "cat" || w == "pig" || w == "dog" || w == "fox" || w == "lion"){ //check if input equals one of these words
        if(checkRepeat() == true){ //check if the word has already been inputted
            correct++;
            totalTries = correct + errors;
            wordsLeft -= 1; //countdown words left
            //alert for correct word guess
            alert("Correct. '" + w.toUpperCase() + "' is a word. There are " + wordsLeft + " words left to guess");
            //check if all words are guessed
            if(wordsLeft == 0){
                //alert for finding all words
                alert("Congrats! You found all the words! It took you " + totalTries + " attempts.");
                //disable button after all words are guessed
                document.getElementById("enterButton").disabled = true;
            }
            //call this function to input correct word in array
            insertWords();
        }else{ //if word was already guessed
        errors++;
        //alert for repeated input
        alert("You guessed '" + w.toUpperCase() + "' already. Try again.");
        }
    }else{ //if the word guessed is not one of the words
        errors++;
        //alert for wrong guess
        alert("Incorrect. '"+ w + "' is not one of the  words. You have " + errors + " incorrect input(s). Try again.");
    }
}

//List of correct word guesses displayed 
var words = []; //undefined array of words
var wordsInput = document.getElementById("word");
//using the list id from the html to display each correct word guessed
var wordsList  = document.getElementById("list");

function insertWords(){
    words.push(wordsInput.value.toLowerCase()); //add correct word to array
    wordsList.innerHTML = ""; //clears list so it does not keep adding on the string below
    //returns a string of each element in the array with the ',' and space separating them and send to html
    wordsList.innerHTML += "Words Guessed: " + words.join(", ");
    //clear input box
    document.getElementById("word").value = "";
}

//check for repeated input
var i;
var j;

function checkRepeat(){
    if(words.length >= 1){ //if there is at least one word in the words array
        for(i = 0; i < words.length; i++){ //go through each element
            if(wordsInput.value.toLowerCase() == words[i]){ //check if word inputted is already in the array
                return false;
            }
        }
    }
    return true;
}