let n1='';
let n2='';
let op='';
let ans='';

$(document).ready(function(){
    $('button').on('click',function(e){
        let btn=e.target.innerHTML;
        if(btn>="0" && btn<="9"|| btn=='.'){
            handleNumber(btn);
        }
        else if(btn === 'Clear'){
            n1 = n2 = op='';
            ans=0;
            displayButton(ans);
        }
        else{
            handleOperator(btn);
        }
    });

});

function handleNumber(num){
    if(op===""){
        n1+=num;
        displayButton(n1);
    }
    else{
        n2+=num;
        displayButton(n2);
    }

}

function handleOperator(oper){
    if(op===""){
        op=oper;
    }
    else{
        handleAns();
        op=oper;
    }
}


function handleAns(){
    // +n1 ->converts n1 from string to integer
    switch(op){
        case '+':
            ans= +n1 + +n2;
            displayButton(ans);
            break;
        case '-':
            ans= +n1 - +n2;
            displayButton(ans);
            break;
        case '/':
            ans= +n1 / +n2;
            displayButton(ans);
            break;
        case 'X':
            ans= +n1 * +n2;
            displayButton(ans);
            break;
    }

    updateVariables();
}

function displayButton(btn){
    $('.input').text(btn);
}

function updateVariables(){
    n1=ans;
    n2='';
}