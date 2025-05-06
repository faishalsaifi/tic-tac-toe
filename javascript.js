let childs = document.querySelectorAll('.child');
const arr=['','','','','','','','','',];
let resultPanel=document.getElementById('result-panel');
let turn=document.getElementById("turn");
let currentPlayer = "X";
resultMain.style.opacity="0";
turn.innerHTML=`<p>${currentPlayer} Turn</p>
`
let gameover = false;
childs.forEach((child,index)=>{

    child.addEventListener('click',()=>{
        if(gameover || arr[index] !== "") return;
        if(currentPlayer==="X"){
    child.classList.add("xcell");
    child.innerHTML=`<i class="fa-solid fa-xmark turn-icon"></i>`;
    arr[index]="X";
    currentPlayer="O";
  
        }
        else{
            child.classList.add("ocell");
            child.innerHTML=`<i class="fa-regular fa-circle turn-icon"></i>`;
    arr[index]="O";
    currentPlayer="X";
    
        }
        updateTurn(currentPlayer)
        console.log(arr);
        result();
    });
});
function updateTurn(player){
    turn.style.opacity="0";
    setTimeout(()=>{

        turn.innerHTML=`<p>${player} Turn</p>`
     turn.style.opacity="1";
    },500);
}
function result(){
    const wincombination=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [2,5,8],
        [1,4,7],
        [0,4,8],
        [2,4,6]
    ]
    wincombination.forEach(combination=>{

        const [a,b,c]=combination;
        if(arr[a] && arr[a] === arr[b] && arr[b] === arr[c]){
            resultMain.style.opacity="1";
            resultMain.style.animationName="appear";
            resultMain.style.animationDuration="1s";
            resultMain.style.zIndex="10";
            if(arr[a]==="X"){
            resultPanel.innerHTML=`
            <i class="fa-solid fa-xmark res-icon"></i>
            <h1>Winner</h1>`;
        }
            else{
                resultPanel.innerHTML=`
               <i class="fa-regular fa-circle res-icon"></i>
                <h1>Winner</h1>`;
            }
            gameover=true;
            fire();
            
    }
    })
}
function reset(){
    childs.forEach((child,index)=>{

    child.classList.remove("xcell");
    child.classList.remove("ocell");
    resultPanel.innerHTML='';
    arr[index]='';
    child.innerHTML=``;
    if(resultMain.style.opacity==="1"){
    resultMain.style.animationName="disappear";
    resultMain.style.animationDuration="2s";
    resultMain.style.opacity="0";
    resultMain.style.zIndex="0";
}
    gameover=false;
})

}
function fire(){
setTimeout(()=>{
    confetti({
        particleCount: 120,
        spread: 120,
        origin: { y: 0.6 }})
      },1000);
}