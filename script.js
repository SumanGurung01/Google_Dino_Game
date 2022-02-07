function jump(){

    var dino = document.getElementById("dino");
    
    dino.classList.add("dino");
    
    console.log("Dino Jump");

    setTimeout(function(){
        dino.classList.remove("dino");
    },500)
}


var score = 0;

setInterval(function gameover(){

    var screen = document.getElementById('game').clientWidth;   // get the width of game

    var dino = document.getElementById("dino");

    var catcus = document.getElementById("catcus");

    var dinobottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));   // get the length between screen edge and dino bottom

    var catcusbottom = parseInt(window.getComputedStyle(catcus).getPropertyValue("bottom"));   // get the length between screen edge and catcus bottom

    var catcusright = parseInt(window.getComputedStyle(catcus).getPropertyValue("right"));   // get the length between screen edge and catcus bottom

    var catcusleft = parseInt(window.getComputedStyle(catcus).getPropertyValue("left"));   // get the length between screen edge and catcus left


    //game over condition : if leftspace of catcus is greater than leftscape of dino but smaller than leftspace of  dino + width of dino ( overlaping )  and the dino didnt jump i.e. bottom of dino === 0.

    if(catcusbottom===dinobottom && (catcusright>(0.74*screen) && catcusright<(0.84*screen))){
        console.log("Game Over");
        catcus.style.display="none";
        dino.style.display="none";
        document.getElementById('score').innerHTML = `Game Over<br> Score : ${score/4}`;
    }

    if(catcusleft===0){
        score = score + 1;
        console.log(score);
    }

},1);
