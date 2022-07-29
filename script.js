const cardArray = [
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    },
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    }
    
]
// to sort the array in random order 
cardArray.sort(()=>0.5 -Math.random()) // watch sort algo explainer to get through this

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardWon = [];
const createBoard = ()=>{
    for(let i = 0;i<12;i++){
        const card = document.createElement("img");
        card.setAttribute('src',"img/blank.png");
        card.setAttribute('id',i);
        card.addEventListener('click',flipcard)
        gridDisplay.appendChild(card);
    }
}
const checkmatch = ()=>{
    const cards = document.querySelectorAll('#grid img')
    if(cardsChosenIds[0]==cardsChosenIds[1]){
        cards[cardsChosenIds[0]].setAttribute('src',"img/blank.png");
        cards[cardsChosenIds[1]].setAttribute('src',"img/blank.png");
    }
    else if(cardsChosen[0] ==cardsChosen[1]){
        // cards[cardsChosenIds[0]].setAttribute('src',"img/white.png");
        // cards[cardsChosenIds[1]].setAttribute('src',"img/white.png");
        cards[cardsChosenIds[0]].removeEventListener('click',flipcard);
        cards[cardsChosenIds[1]].removeEventListener('click',flipcard);
        cardWon.push(cardsChosen[0]);
    }
    else{
        cards[cardsChosenIds[0]].setAttribute('src',"img/blank.png");
        cards[cardsChosenIds[1]].setAttribute('src',"img/blank.png");
    }
    document.getElementById("result").innerText = cardWon.length;
    if(cardWon.length == cardArray.length/2){
        document.getElementById("result").innerText = "you won 🎉🎉🎉";
    }
    cardsChosen = [];
    cardsChosenIds = [];
}
function flipcard(){
   const cardid = this.getAttribute('id');
   this.setAttribute('src',cardArray[cardid].img);
    cardsChosen.push(cardArray[cardid].name);
    cardsChosenIds.push(cardid);
    if(cardsChosen.length == 2){
        setTimeout(checkmatch,500);
    }
}
createBoard();
