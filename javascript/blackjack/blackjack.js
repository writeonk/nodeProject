let player = {
    name: "maulik",
    chips: 500
}
let cards = [];
let sum = 0;
let hasblackjack = false;
let isalive = false;
var message = "";
var messageEl = document.getElementById("msg");
var sumEL = document.getElementById("sum");
var cardEl = document.getElementById("card");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips
function getRandomNo()
{
    let randomNo = Math.floor(Math.random()*13) + 1;
    if(randomNo==1)
    {
        return 11;
    }
    else if(randomNo==11 || randomNo == 12 || randomNo == 13)
    {
        return 10;
    }
    return randomNo;
}
function startgame()
{
    let firstcard = getRandomNo();
    let secondcard = getRandomNo();
    cards.push(firstcard);
    cards.push(secondcard);
    sum = firstcard + secondcard;
    isalive = true;
    rendergame();
}
function rendergame() 
{
    cardEl.textContent = "Cards: "
    for(let i=0; i<cards.length;i++)
    {
        cardEl.textContent += cards[i] + " "
    }
    sumEL.textContent = "Sum: " + sum;
    console.log("function called")
    if (sum <= 20) {
        message = "want to pick a new card??";
    }
    else if (sum == 21) {
        message = "You have got BlackJack";
        hasblackjack = true;
    }
    else {
        message = "you are out of the game";
        isalive = false;
    }
    console.log(message);
    messageEl.textContent = message;
}

function newcard()
{
    if(isalive == true && hasblackjack == false)
    {
      var newcard = getRandomNo();
      sum += newcard;
      cards.push(newcard);
      console.log(cards)
      rendergame();
    }
}
