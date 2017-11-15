//Game

var  scores, roundScrore, activePlayer, gamePlay;// dice;


// var x = document.querySelector('#score0').textContent;
// console.log(x);

document.querySelector('.dice').style.display='none';

document.querySelector('.btn-new').addEventListener('click', ()=>{
	scores = [0,0];
	roundScrore = 0;
	activePlayer = 0;
	winningScore = 50;
	gamePlay = true;


});

document.querySelector('.btn-roll').addEventListener('click', ()=>{

	if(gamePlay){
		//1. Random Number
		var dice = Math.floor(Math.random() * 6) + 1;

		//2. Display the result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

		//3. update the round score if the number is not 1s
		if(dice !== 1){
			roundScrore += dice;
			document.querySelector('#current-'+ activePlayer).textContent = roundScrore;
		}else{
			next();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click',()=>{
	if(gamePlay){
		console.log('On hold');
		console.log(activePlayer);
		scores[activePlayer] += roundScrore;

		//change player final score
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		if(scores[activePlayer] >= winningScore){
			console.log('Winner');
            gamePlay = false;
		}else{
			next();
		}
	}
});

//next move
var next = ()=>{
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScrore = 0;

	
	console.log('cancel player score');
	console.log(activePlayer + 'current score: ' + scores[activePlayer]);
}
