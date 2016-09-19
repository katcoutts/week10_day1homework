// Episode 1

var name = 'Keith';

var printName = function() {
    console.log('My name is ' + name );
}

printName();

// Episode 1 will result in "My name is Keith" being printed to the screen because the variable name is set above the function and isn't hidden away in another function so is accessible to it.



// Episode 2

score = 5;

var result = function() {
    var score = 3;
    return score;
}

console.log(result());

// Episode 2 will result in the number 3 being printed to the screen. The variable score = 5 is accessible (it's a global variable), but as the variable score is then set in the function the local variable takes precedence.

// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
    myAnimals = ['Ducks', 'Dogs', 'Lions'];
    for(var i=0;i<myAnimals.length; i++){
      console.log(i + ": " + myAnimals[i]);
    }
}

listAnimals();

// Episode 3 will result in the below being printed to the screen. As with episode 2, the variable above the function is available to the function but the local variable set in the function takes precendence.
// 0: Ducks
// 1: Dogs
// 2: Lions

// Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
    var suspectThree = 'Harvey'
    console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// Episode 4 will result in the below being printed to the screen:

// Suspects include: Jay, Val, Harvey, Rick
// Suspect three is:Keith

// Harvey is in the list of suspects as he is set as suspectThree within that function. When it then asks for suspect three outside of that function it takes the value of Keith, as it was only Harvey within the function where that was set.

// Episode 5

var detective = {
        name : 'Ace Ventura',
        pet : 'monkey'
    }

var printName = function(detective) {
    return detective.name
}

var detectiveInfo = function() {
    detective['name'] = 'Poirot'
    return printName(detective);
}

console.log(detectiveInfo());

// Episode 5 will result in Poirot being printed to the screen as we are calling the detectiveInfo() function and it is within that function that the detective name is reset to be Poirot.

// Episode 6

var murderer = 'rick';

var outerFunction = function(){
    var murderer = 'marc';

    var innerFunction = function(){
        murderer = 'valerie';
    }

    innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// Episode 6 will result in the below being printed to the screen:
// the murderer is  rick

// This is because although we call the otherFunction() what we then get printed to the screen in the console.log line is nothing to do with that function. It is just referring to the variable murderer that was set up at the top. The other murderer variables are only accessible within the functions where they are set.

// Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var fastest = "charley";

var race = function(){
    var fastest = "david";
    var getWinner = function(){
        console.log("the fastest runner wins and that is " + fastest)
    }
    fastest = "gill";
    getWinner();
} 

race();


var room = "drawing room";
var murderer = "colonel mustard";

var cluedo = function(){
    var weapon = "candlestick";
    murderer = "professor plum";
    var whodunnit = function(){
        console.log("I conclude it was " + murderer + " in the " + room + " with the " + weapon);
        weapon = "revolver";
    }   
    whodunnit();
    room = "kitchen";
}

cluedo();