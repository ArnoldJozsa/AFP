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
		var IsThereAnyBet = false;
		var minimumBet = rendOsszeg * 0.10;
		var activeBet = 0;
	
//Arnold
//Lilli
function DrawRandomCard(deck) {
	
	var randomindex = Math.floor(deck.length * Math.random())
	return deck[randomindex];
}

function StartGame() {
	jatekosKartyai = [DrawRandomCard(deck), DrawRandomCard(deck)];
	VDKartyai = [DrawRandomCard(deck), DrawRandomCard(deck)];
	if ((VDKartyai[0] + VDKartyai[1]) == 17) {
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
	if(activeBet != 0){
		return;
	}

	let bet;
	do{
		bet = prompt("Kérem adja meg a tétet, nem lehet tört! (minimum tét: "+ minimumBet + ")","100");
	}while(bet == null || bet < minimumBet || isNaN(bet) || !IsInt(bet));

	activeBet = parseInt(bet);
	tempstorage = nyertOsszeg;
	if(activeBet > rendOsszeg){
		activeBet = 0;
		do{
			bet = prompt("Kérem adja meg a tétet, nem lehet tört! (minimum tét: " + minimumBet +")");
		}while(bet == null || bet < minimumBet || isNaN(bet) || !IsInt(bet));
		activeBet = parseInt(bet);
	}
	rendOsszeg = rendOsszeg - activeBet;
	document.getElementById("AvailableFunds").innerHTML = rendOsszeg+" (Nyert: "+nyertOsszeg+")";
	document.getElementById("ShowPlayerCards").innerHTML = jatekosKartyai+ " ("+GetCardValue(jatekosKartyai)+")";
}
//Enikő
//Bogi
function Throw() {
	if (activeBet == 0) 
	{
		alert("Először tétet kell raknia!");
		return;
	}
	alert("Mivel bedobta kártyáit, elvesztette a tétet és kártyáit!😟");
	nyertOsszeg = nyertOsszeg - activeBet;
	StartGame();
	document.getElementById("ShowPlayerCards").innerHTML = "?, ? (Tegyen tétet a kör megkezdéséhez!)";
	document.getElementById("ShowVDCards").innerHTML = VDKartyai[0] + ", ?";
	activeBet = 0;
	Doubling = false;
}
function RoundLost() {
	alert("Elvesztette a kört, a tétje elveszett és új kártyákat kap.😟Lapjai: "+ jatekosKartyai+" ("+GetCardValue(jatekosKartyai)+")");
	nyertOsszeg = nyertOsszeg - activeBet;
	activeBet = 0;
	if (rendOsszeg == 0 || rendOsszeg < 0) {
		GameLost();
	}
	StartGame();
	document.getElementById("ShowPlayerCards").innerHTML = "?, ? (Tegyen tétet a kör megkezdéséhez!)";
	document.getElementById("ShowVDCards").innerHTML = VDKartyai[0] + ", ?";
	doubling = false;
}
		
//Bogi
//Zsani
function RoundWon() {
			alert("Gratulálunk! Megnyerte a kört és nyert🎉💲: " + (activeBet * 2) + " zsetont!");
			rendOsszeg = rendOsszeg + (activeBet * 2);
			nyertOsszeg = nyertOsszeg + (activeBet * 2)
			document.getElementById("AvailableFunds").innerHTML = rendOsszeg+ " (Nyert: "+nyertOsszeg+")";
			StartGame();
			document.getElementById("ShowPlayerCards").innerHTML = "Tegyen tétet a kör megkezdéséhez!💸";
			document.getElementById("ShowVDCards").innerHTML = VDKartyai[0] + ", ?";
			activeBet = 0;
			Doubling = false;
		}
	function GetCardValue(CardDeck) {
			sumvalue = 0;
			for (let i = 0; i < CardDeck.length; i++) {
				sumvalue = sumvalue + CardDeck[i];
			}
			return sumvalue;
		}

		function Call() {
			if (activeBet == 0) {
				alert("Először tétet kell raknia!");
				Bet();
				Call();
				return;
			}
			
			jatekosKartyai.push(DrawRandomCard(deck));
			document.getElementById("ShowPlayerCards").innerHTML = jatekosKartyai+ " ("+GetCardValue(jatekosKartyai)+")";
			if (GetCardValue(jatekosKartyai) == 21) {
				StopAndEvaluate();
			}
			if (GetCardValue(jatekosKartyai) > 21) {
				RoundLost();
			}
		}

//Zsani
//Lilli
function StopAndEvaluate() {
	if (activeBet == 0) {
		alert("Először tétet kell raknia!");
		Bet();
		return;
	}
	document.getElementById("ShowVDCards").innerHTML = VDKartyai;
	if (GetCardValue(VDKartyai) > GetCardValue(jatekosKartyai)) {
		RoundLost();
		return;
	}
	while (GetCardValue(VDKartyai) <= 21 || GetCardValue(VDKartyai) < GetCardValue(jatekosKartyai)) {
		if (GetCardValue(VDKartyai) > GetCardValue(jatekosKartyai)) {
			break;
		}
		VDKartyai.push(DrawRandomCard(deck));
		document.getElementById("ShowVDCards").innerHTML = VDKartyai;
	}
	alert("Virtuális dealer kártyái: " + VDKartyai+" ("+(GetCardValue(VDKartyai))+")" + "\n" + "A játékos kártyái: " + jatekosKartyai+" ("+GetCardValue(jatekosKartyai)+")");
	if (GetCardValue(VDKartyai) > GetCardValue(jatekosKartyai) && GetCardValue(VDKartyai) <= 21) {
		RoundLost();
		return;
	}
	if (GetCardValue(VDKartyai) == GetCardValue(jatekosKartyai) && GetCardValue(VDKartyai) <= 21) {
		RoundWon();
		return;
	}
	if (GetCardValue(VDKartyai) > 21) {
		RoundWon();
		return;
	}
}
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
			alert("Kifogyott a zsetonokból, vége a játéknak!💵 Indítson egy újabb kört az alapértelmezett 1000 zsetonnal való induláshoz!");
			StartGame();
		}	
//Enikő
//Zsani
function DoubleDown() {
			if (activeBet == 0) {
				alert("Először tétet kell raknia!");
				Bet();
				DoubleDown();
				return;
			}
			if ((rendOsszeg - activeBet) < minimumBet) {
				alert("Nincs elég zsetonja a duplázáshoz!");
				return;
			}
			if (Doubling) {
				alert("Már duplázva van a tét!");
				return;
			}

			let storedbet = activeBet;

			activeBet = activeBet * 2;
			rendOsszeg = rendOsszeg - storedbet;
			Doubling = true;

			Call();
			if (GetCardValue(jatekosKartyai) > 21) {
				RoundLost();
			}
		}		
//Zsani
//Bogi
/Meghívom a StartGame függvényt, hogy alaphelyzetbe rakja a játékot./
StartGame();
	
/Felhasználó számára fontos összegek vagy információk vizualizálása./
document.getElementById("ShowPlayerCards").innerHTML = "?, ? (Tegyen tétet a kör megkezdéséhez!)"
document.getElementById("ShowVDCards").innerHTML = VDKartyai[0] + ", ?";
document.getElementById("AvailableFunds").innerHTML = rendOsszeg+ " (Nyert: "+nyertOsszeg+")";
		
//Bogi
