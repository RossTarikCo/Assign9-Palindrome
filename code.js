function playCraps() {
    //this is a one line comment
    /*this is a function to play craps in game.html
    rules for craps
    Roll two dice
    Add up to 7 nor 11, you lose!
    If they are doubles or even, you win!
    Everything else is a push
    Ross
    1Jun2024
    */
    console.log("playCraps() started");
    //roll the dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;
    
    //look for a loss
    if (sum == 7 || sum == 11) {
        console.log("loss");
        document.getElementById("gameRes").innerHTML = "You lost to the Blade Runner!";
    } else if (die1 == die2 && die1 % 2 == 0) {
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You beat the Blade Runner, try again for more wins";
    } else { //everything else is a push
        console.log("tie");
        document.getElementById("gameRes").innerHTML = "You did not win or lose, but who really wins anyway!";
    }
}

// =for Assignment 7.1: Event Driven Programming
function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("myMarquee").start();
}

//for Assignment 7.1: Event Driven Programming 
function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("myMarquee").stop();
 }

 function checkPalin(){
    console.log("checkPalin() started");

    //record the text input as a string
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is: " + entStr);

    //take away spaces
    var entStrNoSpace;
     entStrNoSpace = entStr.split(" ").join("");
     console.log("entStr with no spaces is: " + entStrNoSpace);
     
    //create new revArray var and reverse string
    var revStr;
    const revArray =[];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);

    //input into array and reverse it
    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    }
    
    //convert to a string from array
    revStr = revArray.join("");
    console.log("reversed is " + revStr); 

    //compare rev to string and write to status
    var equal = 0;
    equal = (entStrNoSpace == revStr);
    console.log("the entry and reversed being equal is " + equal);

    //write to palindrome status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome."
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome."
    }
 }
