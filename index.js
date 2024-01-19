let list= [1,2,3,4,5,6]
let length= list.length;

window.addEventListener('load', function(e) {
    let dice_no1= Math.floor(Math.random()*length);
    let dice_no2= Math.floor(Math.random()*length);
    let img= document.querySelectorAll("div.image");
    let random= (dice_no, img) =>{
        if(dice_no===0){
            img.innerHTML= "<img src=\"dice1.png\">";
        }
        else if(dice_no===1){
            img.innerHTML= "<img src=\"dice2.png\">";
        }
        else if(dice_no===2){
            img.innerHTML= "<img src=\"dice3.png\">";
        }
        else if(dice_no===3){
            img.innerHTML= "<img src=\"dice4.png\">";
        }
        else if(dice_no===4){
            img.innerHTML= "<img src=\"dice5.png\">";
        }
        else{
            img.innerHTML= "<img src=\"dice6.png\">";
        }
        return (dice_no);
    }
    let dice1=random(dice_no1, img[0]);
    let dice2= random(dice_no2, img[1]);

    if(dice1===dice2){
        document.querySelector("h1").innerHTML="Its a Draw!";
    }
    else if(dice1>dice2){
        document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="🚩Player 2 Wins!";
    }
})