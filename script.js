let b = 0;
let klik = 1;
let cjenaklik = 100;
let cps = 0;
let cjenas = 100;
let cjenahalil = 1000000;
let indikator = 0;
const score = document.getElementById("bodovi");
score.textContent = b;

const pare = document.getElementById("novac");

const halil = document.getElementById("halill");

pare.onclick = function(){
    
    b = b + klik;
    score.textContent = b;
    console.log(b);

}

const button1 = document.getElementById("dugme1");
const button2 = document.getElementById("dugme2");
const button3 = document.getElementById("dugme3");

button1.textContent = "+2x coin po kliku \n" + cjenaklik;

button1.onclick = function(){
    if(b >= cjenaklik){
        klik = klik * 2;
        b = b - cjenaklik;
        cjenaklik = cjenaklik * 3;
        button1.textContent = "+2x coin po kliku \n" + cjenaklik;
        score.textContent = b;
    }
    
}

setInterval(()=>{
    b = b + cps;
    score.textContent = b;

},1000);

button2.textContent = "+1 coin po sekundi \n" + cjenas;

button2.onclick = function(){
    if(b >= cjenas){
        cps = cps + 1;
        b = b - cjenas;
        cjenas = cjenas + 25;
        score.textContent = b;
        button2.textContent = "+1 coin po sekundi \n" + cjenas;
        if(cps >= 30 && cjenas != 500){
            cjenas = cjenas + 100;
            button2.textContent = "+1 coin po sekundi \n" + cjenas;
        }
    }
}

button3.textContent = "upgrade halil \n" + cjenahalil;

button3.onclick = function(){
    if(b >= cjenahalil){
        indikator++;
        if(indikator == 1){
            halil.src = "halildva.png";
            b = 0;
            klik = 1;
            cjenaklik = 100;
            cps = 0;
            cjenas = 100;
            cjenahalil = cjenahalil * 1000;
            button1.textContent = "+2x coin po kliku \n" + cjenaklik;
            button2.textContent = "+1 coin po sekundi \n" + cjenas;
            button3.textContent = "upgrade halil \n" + cjenahalil;

        }else if(indikator == 2){
            halil.src = "haliltri.png";
            b = 0;
            klik = 1;
            cjenaklik = 100;
            cps = 0;
            cjenas = 100;
            button1.textContent = "+2x coin po kliku \n" + cjenaklik;
            button2.textContent = "+1 coin po sekundi \n" + cjenas;
            button3.textContent = "upgrade halil \n" + cjenahalil;
            
        }else{
            null;
        }
    }

}
