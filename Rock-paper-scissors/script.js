const rock=document.getElementById("rock")
const paper=document.getElementById("paper")
const scissor=document.getElementById("scissor")
const user=document.getElementById("user")
const comp=document.getElementById("comp")
const res=document.getElementById("res")
rock.onclick=function(){
    user.src=rock.src
}
paper.onclick=function(){
    user.src=paper.src
}
scissor.onclick=function(){
    user.src=scissor.src
}
function getrandom(arr){
    var i=Math.floor(Math.random()*arr.length)
    return arr[i]
}
var score=0
onkeypress=function(){
    res.textContent=""
    const arr=[rock,paper,scissor]
    comp.src=getrandom(arr).src
    if(comp.src===user.src)
        res.textContent="Draw"
    else if((comp.src===rock.src&&user.src===paper.src)||(comp.src===scissor.src&&user.src===rock.src)||(comp.src===paper.src&&user.src===scissor.src)){
        score++
        res.textContent="You won!!\nScore:"+score
    }
    else{
        score=0
        res.textContent="Computer wins!\nScore:"+score
    }
}