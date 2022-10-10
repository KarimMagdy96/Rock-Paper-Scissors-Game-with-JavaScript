let compChois= document.getElementById('computer-choise');
let userChoise= document.getElementById('user-choise');
let result = document.getElementById('result');
let choses= document.querySelectorAll('button');
let useranswer
for(let i=0; i<choses.length;i++){
    choses[i].addEventListener('click',function(e){
        useranswer =e.target.id;
        userChoise.innerHTML=useranswer
        computerChoise()
        finalResult()
    })
}
let compAnswer;
function computerChoise(){
    let compthinkng=Math.floor( Math.random()*3+1)
    if(compthinkng==1){
        compAnswer='paper'
    }if(compthinkng==2){
        compAnswer='Rocket'
    }if(compthinkng==3){
        compAnswer='Scissors'
    }
    compChois.innerHTML=compAnswer;
}

function finalResult(){
    
    if(compAnswer==useranswer){
        result.innerHTML='its draw!'}
    if(useranswer==='paper'&& compAnswer==="Rocket"){
        result.innerHTML='you win!'   
    }
    if(useranswer==='Rocket'&& compAnswer==="paper"){
         result.innerHTML='you lose!' 
    } 
     if(useranswer==='Scissors'&& compAnswer==="paper"){
        result.innerHTML='you win!'   
    }
    if(useranswer==='paper'&& compAnswer==="Scissors"){
         result.innerHTML='you lose!'  
    }
    if(useranswer==='Rocket'&& compAnswer==="Scissors"){
        result.innerHTML='you win!' 
    }
    if(useranswer==='Scissors'&& compAnswer==="Rocket"){
        result.innerHTML='you lose!'  
    }

}