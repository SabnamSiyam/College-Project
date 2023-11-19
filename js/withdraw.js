// adding Event Listener to the  Withdraw button.
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawamount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("total-withdraw");
  const newWithdrawTotal = previousWithdrawTotal + withdrawamount;
  const previousTotalBalance = getTextElementValueById("total-balance");

  if (withdrawamount > previousTotalBalance) {
    alert("Insufficient Funds !!");
    return;
  }

  setTextElementValueById("total-withdraw", newWithdrawTotal);
  const newTotalBalance = previousTotalBalance - withdrawamount;

  setTextElementValueById("total-balance", newTotalBalance);
});
