"use strict";

document.addEventListener("DOMContentLoaded", function () {
 //-------------------slot machine
  var SlotArray = ["appelsin", "bar", "blomme", "citron", "diamant", "jordbaer", "kirsebaer", "klokker", "melon", "syv", "appelsin", "blomme", "citron", "diamant", "jordbaer", "kirsebaer", "klokker", "melon", "syv", "appelsin", "blomme", "citron", "diamant", "jordbaer", "kirsebaer", "klokker", "melon"];
  var showArr = [0, 1, 2];
  var slot1 = document.querySelector(".slot1");
  var slot2 = document.querySelector(".slot2");
  var slot3 = document.querySelector(".slot3");
  slot1.innerHTML = '<img src="../assets/images/icons/' + SlotArray[0] + '.png" alt="' + SlotArray[0] + '" class="main__slot-img"> <img src="../assets/images/icons/' + SlotArray[1] + '.png" alt="' + SlotArray[1] + '" class="main__slot-img"> <img src="../assets/images/icons/' + SlotArray[2] + '.png" alt="' + SlotArray[2] + '" class="main__slot-img">';
  slot2.innerHTML = '<img src="../assets/images/icons/' + SlotArray[0] + '.png" alt="' + SlotArray[0] + '" class="main__slot-img"> <img src="../assets/images/icons/' + SlotArray[1] + '.png" alt="' + SlotArray[1] + '" class="main__slot-img"> <img src="../assets/images/icons/' + SlotArray[2] + '.png" alt="' + SlotArray[2] + '" class="main__slot-img">';
  slot3.innerHTML = '<img src="../assets/images/icons/' + SlotArray[0] + '.png" alt="' + SlotArray[0] + '" class="main__slot-img"> <img src="../assets/images/icons/' + SlotArray[1] + '.png" alt="' + SlotArray[1] + '" class="main__slot-img"> <img src="../assets/images/icons/' + SlotArray[2] + '.png" alt="' + SlotArray[2] + '" class="main__slot-img">';

  function updateDOM(SlotArray, showArr, slot) {
    slot.innerHTML = "";
    showArr.forEach(function (number) {
      slot.innerHTML += '<img src="../assets/images/icons/' + SlotArray[number] + '.png" alt="' + SlotArray[number] + '" class="main__slot-img">';
    });
    indexCount();
  }
  /* -----------------------------------index counter----------------------------------- */


  var index = 0;

  function indexCount() {
    if (index === 0) {
      index = SlotArray.length - 1;
    } else {
      index--;
    }
  }
  /* -----------------------------------update array(showarr)----------------------------------- */


  function findPrevInArray() {
    if (index === 0) {
      return SlotArray.length - 1;
    } else {
      return index - 1;
    }
  }

  function updateArray() {
    var newIndex = findPrevInArray(index, showArr[0]);
    showArr.unshift(newIndex);
    showArr.splice(-1);
  }
  /* -----------------------------------interval----------------------------------- */


  var slot1Var;
  var slot2Var;
  var slot3Var;
  var stopCheck;

  function interval() {
    slot1Var = setInterval(function () {
      updateArray();
      updateDOM(SlotArray, showArr, slot1);
    }, 300);
    setTimeout(function () {
      clearInterval(slot1Var);
    }, 2000);
    slot2Var = setInterval(function () {
      updateArray();
      updateDOM(SlotArray, showArr, slot2);
    }, 300);
    setTimeout(function () {
      clearInterval(slot2Var);
    }, 2250);
    slot3Var = setInterval(function () {
      updateArray();
      updateDOM(SlotArray, showArr, slot3);
    }, 300);
    setTimeout(function () {
      clearInterval(slot3Var);
    }, 2000);
    stopCheck = setInterval(function () {
      checkForWin();
    }, 3500);
  }
  /* -----------------------------------buttons----------------------------------- */


  var spinButton = document.querySelector(".btn_spin");
  var blink = document.querySelector("h1");
  var errorBox = document.querySelector("#error-box");
  var errorText = document.querySelector(".error-box-text");
  var spinIndex = 1;
  spinButton.addEventListener("click", function () {
    if (spinIndex === 1) {
      spinIndex++;
      spin();
    }
  });
  var pointsElement = document.querySelector(".footer__points");
  var points = 2000;
  pointsElement.innerHTML = points + " points";

  function spin() {
    winnerBox.style.display = "none";
    errorBox.style.display = "none";

    if (points >= 100) {
      points = points - 100;
      pointsElement.innerHTML = points + " points";
      blink.classList.remove("blink");
      interval();
    } else {
      errorBox.style.display = "block";
      errorText.innerHTML = "You need a 100 points to play!";
    }
  }
  /*-------------------------------check if you won or lost------------------------------- */


  var winCount = 0;
  var loseCount = 0;
  document.querySelector(".wins-count").innerHTML = "Wins: " + winCount;
  document.querySelector(".losses-count").innerHTML = "Losses: " + loseCount;
  var winText = document.querySelector(".wins-count");
  var LossText = document.querySelector(".losses-count");
  var winnerBox = document.querySelector("#winner-box");
  var winnerText = document.querySelector(".winner-box-text");

  function checkForWin() {
    var firstChecks = document.querySelectorAll(".slot1 .main__slot-img");
    var secondChecks = document.querySelectorAll(".slot2 .main__slot-img");
    var thirdChecks = document.querySelectorAll(".slot3 .main__slot-img");
    var firstCheck = firstChecks[1].getAttribute("src");
    var secondCheck = secondChecks[1].getAttribute("src");
    var thirdCheck = thirdChecks[1].getAttribute("src");
    spinIndex = 1;
    clearInterval(stopCheck);

    if (firstCheck === secondCheck && secondCheck === thirdCheck && firstCheck.search("bar") != -1) {
      points = points + 500;
      pointsElement.innerHTML = points + " points";
      winCount++;
      winText.innerHTML = "Wins: " + winCount;
      winnerBox.style.display = "block";
      winnerText.innerHTML = "Tripple Bar Winner! 500 Points!";
      blink.classList.add("blink");
    } else if (firstCheck === secondCheck && secondCheck === thirdCheck && firstCheck.search("syv") != -1) {
      points = points + 400;
      pointsElement.innerHTML = points + " points";
      winCount++;
      winText.innerHTML = "Wins: " + winCount;
      winnerBox.style.display = "block";
      winnerText.innerHTML = "Tripple Seven Winner! 400 Points!";
      blink.classList.add("blink");
    } else if (firstCheck === secondCheck && secondCheck === thirdCheck && firstCheck.search("diamant") != -1) {
      points = points + 300;
      pointsElement.innerHTML = points + " points";
      winCount++;
      winText.innerHTML = "Wins: " + winCount;
      winnerBox.style.display = "block";
      winnerText.innerHTML = "Tripple Diamond Winner! 300 Points!";
      blink.classList.add("blink");
    } else if (firstCheck === secondCheck && secondCheck === thirdCheck) {
      points = points + 100;
      pointsElement.innerHTML = points + " points";
      winCount++;
      winText.innerHTML = "Wins: " + winCount;
      winnerBox.style.display = "block";
      winnerText.innerHTML = "Tripple Winner! 100 Points!";
      blink.classList.add("blink");
    } else {
      loseCount++;
      LossText.innerHTML = "Losses: " + loseCount;
      errorBox.style.display = "block";
      errorText.innerHTML = "Better luck next time!";
    }
  }
});