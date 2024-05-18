const canvas=document.getElementById("diceCanvas");
const ctx= canvas.getContext('2d');
let val=1;
const drawdi=() =>{
    ctx.clearRect(0,0, canvas.clientWidth,canvas.height );
    ctx.fillText(val.toString(),40,55);

};
const rolldi=()=>{
    val=Math.floor(Math.random()*6)+1;
    drawdi()
};
document.addEventListener('keydown',(event) =>{
    if(event.code==='space'){
        rolldi();
    }
});
drawdi();