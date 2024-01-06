//Arnold
		var deck = [2,3,4,5,6,7,8,9,10,10,10,10,
					2,3,4,5,6,7,8,9,10,10,10,10,
					2,3,4,5,6,7,8,9,10,10,10,10,
					2,3,4,5,6,7,8,9,10,10,10,10];
		var jatekosKartyai;
		var VDKartyai;
		var Doubling = false;
		var rendOsszeg = 1000;
		var nyertOsszeg = 0;
		var VDHuzhat = true;
		var IsThereAnyBet = true;
		var minimumBet = rendOsszeg * 0.10;
		var activeBet = 0;
	
//Arnold
//Lilli
function DrawRandomCard(deck) 
{	
	var randomindex = Math.floor(deck.length * Math.random())
	return deck[randomindex];
}

function StartGame() 
{
	jatekosKartyai = [DrawRandomCard(deck), DrawRandomCard(deck)];
	VDKartyai = [DrawRandomCard(deck), DrawRandomCard(deck)];
	if ((VDKartyai[0] + VDKartyai[1]) == 17) 
	{
		VDHuzhat = false;
	}
	Doubling = false;
}
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
	if(activeBet > rendOsszeg){
		activeBet = 0;
		do{
			bet = prompt("Kérem adja meg a tétet, nem lehet tört! (minimum tét: " + minimumBet +")");
		}while(bet == null || bet < minimumBet || isNaN(bet) || !isInt(bet));
	}
	rendOsszeg = rendOsszeg - activeBet;
	rendOsszeg = rendOsszeg - activeBet;
	document.getElementById("AvailableFunds").innerHTML = rendOsszeg+" (Nyert: "+nyertOsszeg+")";
	document.getElementById("ShowPlayerCards").innerHTML = jatekosKartyai+ " ("+GetCardValue(jatekosKartyai)+")";
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
function GameLost() {
			jatekosKartyai;
			VDKartyai;
			rendOsszeg = 1000;
			nyertOsszeg = 0;
			VDHuzhat = true;
			IsThereAnyBet = false;
			minimumBet = rendOsszeg * 0.10;
			activeBet = 0;
			Doubling = false;
			alert("Kifogyott a zsetonokból, vége a játéknak! Indítson egy újabb kört az alapértelmezett 1000 zsetonnal való induláshoz!");
			StartGame();
		}	
//Enikő
//Zsani
		
//Zsani
//Bogi
		
//Bogi
