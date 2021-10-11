const sendToggle = document.querySelector(".sendToggle");
const modal = document.querySelector(".modal");
const sendMoney = document.querySelector(".sendMoney");
const rAmount = document.querySelector("#rAmount");
const rName = document.querySelector("#rName");
const cancel = document.querySelector(".cancel");
sendToggle.addEventListener("click", () => {
  if (modal.style.left === "-80%") {
    modal.style.left = "0";
    modal.style.height = "200px"
  } else {
    modal.style.left = "-80%";
    modal.style.height = "0px"
  }
});

sendMoney.addEventListener("click", () => {
  var currentBal = document.querySelector(".currentBal");
  if (currentBal.innerText - rAmount.value < 0) {
    alert("You have insufficient balance");
  } else if (rAmount.value > 7000) {
    alert("Insufficient Balance !!");
  } else {
    var final = document.getElementById(rName.value);
    final.innerHTML = parseInt(final.innerHTML) + parseInt(rAmount.value);
    currentBal.innerText = currentBal.innerText - rAmount.value;
    alert(
      `Transaction Sucessful between Vivek and ${rName.value} of Amount ${rAmount.value}$`
    );
    const history = document.querySelector(".history")
    var li = document.createElement("li")
    li.innerText = `${rAmount.value}$ is transferred to ${rName.value} now his total balance is ${final.innerText}`
    history.appendChild(li)
    rAmount.value = "";
    rName.value = "";
  }
});
cancel.addEventListener("click", () => {
    modal.style.left = "-80%";
    modal.style.height = "0px"
});

