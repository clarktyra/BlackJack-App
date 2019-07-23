
// bets
let bet = 0;
$("#5bet").on("click", function(){
    bet += 5;
    console.log(bet);
})
$("#10bet").on("click", function(){
    bet += 10;
    console.log(bet);
})
$("#25bet").on("click", function(){
    bet += 25;
    console.log(bet);
})
$("#50bet").on("click", function(){
    bet += 50;
    console.log(bet);
})
// console.log(bet);





















// Generate Deck
var cardNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
var suits = ['H', 'D', 'S', 'S'];

var array = [];
for (let i = 0; i< suits.length ; i++){
    for (let j = 0; j< cardNums.length ; j++){
        array.push( cardNums[j] + suits[i])
    }
}

// console.log(array)

// Shuffle Desk
function shuffle() {

}

// Deal a 2 cards

function deal(thing) {
//  console.log(thing.pop())
//  console.log(thing.pop())
}

deal(array);

// Add 2 cards values