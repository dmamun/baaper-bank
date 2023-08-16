document.getElementById("withdraw-button").addEventListener('click',function(){
    const withdrawField=document.getElementById("withdraw-field");
    const withdrawAmountString=withdrawField.value;
    const withdrawAmount=parseFloat(withdrawAmountString);
    withdrawField.value='';

    

    const withdrawOutput=document.getElementById("withdraw-output");
    const previousWithdrawAmountString=withdrawOutput.innerText;
    const previousWithdrawAmount=parseFloat(previousWithdrawAmountString);

    const totalWithdraw=withdrawAmount+previousWithdrawAmount;
    withdrawOutput.innerText=totalWithdraw;

    // add balance total
    const totalBalance=document.getElementById("balance");
    const previousTotalBalanceString=totalBalance.innerText;
    const previousBalanceTotal=parseFloat(previousTotalBalanceString);
    if(withdrawAmount>previousBalanceTotal){
        alert("baaper eto tk nai");
    }

    const newTotalBalance=previousBalanceTotal-withdrawAmount;
    totalBalance.innerText=newTotalBalance;


})