document.getElementById("deposit-button").addEventListener("click", function () {
      const depositField = document.getElementById("deposit-input-field")
      const newDepositFieldString = depositField.value
      const newDepositField = parseFloat(newDepositFieldString)
      // console.log(newDepositField)


      const depositTotal = document.getElementById("deposit-total")
      const previousDepositTotalString = depositTotal.innerText
      const previousDepositTotal = parseFloat(previousDepositTotalString)

      const currentTotalDeposit = newDepositField + previousDepositTotal
      depositTotal.innerText = currentTotalDeposit


      const balanceTotal = document.getElementById("balance-total")
      const previousBalanceTotalString = balanceTotal.innerText
      const previousBalanceTotal = parseFloat(previousBalanceTotalString)

      const currentBalanceTotal = newDepositField + previousBalanceTotal
      balanceTotal.innerText = currentBalanceTotal


      depositField.value = " "
})