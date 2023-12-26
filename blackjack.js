//Arnold
	
//Arnold
//Lilli
		
//Lilli
//Enikő
function IsInt(n){
	return n % 1 == 0;
}
function Bet(){
	if(activeBet !=0){
		return;
	}

	let bet;
	do{
		bet = prompt("Kérem adja meg a tétet, nem lehet tört! (minimum tét: "+ minimumBet + ")","100");
	}while(bet == null || bet < minimumBet || isNaN(bet) || IsInt(bet));

	activeBet = parseInt(bet);
	tempstorage = nyertOsszeg;
}
//Enikő
//Bogi
		
//Bogi
//Zsani

//Zsani
//Lilli

//Lilli
//Enikő
		
//Enikő
//Zsani
		
//Zsani
//Bogi
		
//Bogi
