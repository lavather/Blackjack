


// let firstCard=11
// let lastCard=11

// let sum= firstCard+lastCard


// if (sum < 21){
//     console.log(sum)
//     console.log("Do you want to draw a new card?")
// }else if(sum===21){
//     console.log(sum)
//     console.log("Blackjack!")
// }else if(sum>21){  //can get rid of the if here, since there is nothing else it could be. 
//     console.log(sum)
//     console.log("Sorry, you lost!")
// }

// let age = 112

// if (age<21){
//     console.log("You are not old enough to be here.")
// }else{
//     console.log("welcome to the club!")
// }

// if (age<100){
//     console.log("you need to get older to receive a card")
// }else if (age===100){
//     console.log("enjoy your card")
// }else{
//     console.log("dont be greedy, you already had one, see ya at 200")
// }


//  let firstCard=Math.floor(Math.random()*(11 -2 +1)) +2
//  let lastCard=Math.floor(Math.random()*(11 -2 +1)) +2

 let cardDraw=0
 let sum=0
 
 sum=sum+cardDraw
 let summing= 0
 let blackJack=false
 let isAlive=true
 let message =""
 let kartenText=document.getElementById("sep-btn")
 let textErgebnis=document.getElementById("sep-btn2")

 function claning() {
    
    kartenText.textContent= "Karten: "
    textErgebnis.textContent= "Ergebnis: "
    sum=0
}

 function drawCard() {
    cardDraw=Math.floor(Math.random()*(11 -2 +1)) +2
    sum=sum+cardDraw
    summing= parseInt(sum)
    kartenText.textContent+= " + " + cardDraw
    console.log(summing)
    if (summing<=20){
        message=" Willst du noch eine Karte ziehen?"
       
    }else if (summing===21){
        message=" Blackjack!"
        blackJack=true
        claning()
    }else {
        message=" Leider verloren."
        isAlive=false
        claning()
        
    }

    let thingsInText= "Ergebnis: "+summing + "! " + message
    textErgebnis.textContent= thingsInText

 } 

 
 


// funktion Knopfdruck löschen aller inhalte


