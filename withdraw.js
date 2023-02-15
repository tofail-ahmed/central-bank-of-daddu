document.getElementById("withdraw-button").addEventListener("click", function (event) {
      const withdrawField = document.getElementById("withdraw-input-field")
      const newWithdrawFieldString = withdrawField.value
      const newWithdrawField = parseFloat(newWithdrawFieldString)
      // console.log(newWithdrawField)

      const withdrawTotal = document.getElementById("withdraw-total")
      const previousWithdrawTotalString = withdrawTotal.innerText
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)

      const currentWithdrawTotal = previousWithdrawTotal + newWithdrawField
      withdrawTotal.innerText = currentWithdrawTotal


      const balanceTotal = document.getElementById("balance-total")
      const previousBalanceTotalString = balanceTotal.innerText
      const previousBalanceTotal = parseFloat(previousBalanceTotalString)

      const currentBalanceTotal = previousBalanceTotal - newWithdrawField
      balanceTotal.innerText = currentBalanceTotal
      withdrawField.value = " "
})