let boxes=document.querySelectorAll(".box");
let newbtn=document.querySelector("#new-btn");
let reset=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let game=document.querySelector(".game");
let player0=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(player0) {
        box.innerText="o";
        player0=false;
        }
        else{
            box.innerText="X";
            player0=true;
        }
        box.disabled=true;
        checkwinner();
    });

});
const resetgame=()=>{
    player0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    game.classList.remove("hidden");
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    disableboxes();
    msgcontainer.classList.remove("hide");
    game.classList.add("hidden");
    pattern.forEach(index => {
        boxes[index].classList.add("winning-box");
    });
}
const  checkwinner =()=>{
    for(let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&& pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                showwinner(pos1);
            }
        }
    }
};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

