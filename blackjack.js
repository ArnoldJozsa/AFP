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
function RoundWon() {
			alert("Gratulálunk! Megnyerte a kört és nyert: " + (activeBet * 2) + " zsetont!");
			rendOsszeg = rendOsszeg + (activeBet * 2);
			nyertOsszeg = nyertOsszeg + (activeBet * 2)
			document.getElementById("AvailableFunds").innerHTML = rendOsszeg+ " (Nyert: "+nyertOsszeg+")";
			StartGame();
			document.getElementById("ShowPlayerCards").innerHTML = "?, ? (Tegyen tétet a kör megkezdéséhez!)";
			document.getElementById("ShowVDCards").innerHTML = VDKartyai[0] + ", ?";
			activeBet = 0;
			Doubling = false;
		}

//Zsani
//Lilli

//Lilli
//Enikő
		
//Enikő
//Zsani
		
//Zsani
//Bogi
		
//Bogi
