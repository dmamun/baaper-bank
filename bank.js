document.getElementById("deposite-btn").addEventListener('click',function(){
  const depositeField=document.getElementById("deposite-field");
  const newDepositeAmountString=depositeField.value;
  const newDepositeAmount=parseFloat(newDepositeAmountString);


  const depositTotalElement=document.getElementById("deposite-output");
  const previousDepositeTotalString=depositTotalElement.innerText;
  const previousDepositeTotal=parseFloat(previousDepositeTotalString);

  //addition
  const currentDepositeTotal=previousDepositeTotal+newDepositeAmount;

  depositTotalElement.innerText=currentDepositeTotal;

  // balance add

  const balanceTotalElement=document.getElementById("balance");
  const previousBalanceTotalString=balanceTotalElement.innerText;
  const previousBalanceTotal=parseFloat(previousBalanceTotalString);
  const currentBalanceTotal=previousBalanceTotal+newDepositeAmount;
  balanceTotalElement.innerText=currentBalanceTotal;


  depositeField.value='';

})
deposite-output
deposite-btn
deposite-field