let numMatchsticks = parseInt(prompt("how many matchsticks do you want?"));
let currentPlayer = 1;

function updateText () {
   $("#number-of-matchsticks").html(numMatchsticks)
   $("#current-player").html(currentPlayer)
}

function drawMatchsticks () {
   $("#matchstick-box").empty()
      for (let i = 0; i < numMatchsticks; i ++) {
         $("#matchstick-box").append(`
   <img class=matchstick 
      src="https://image.shutterstock.com/image-vector/vector-illustration-unused-match-stick-260nw-448414696.jpg"/>
   />`)
   }
}

drawMatchsticks();
updateText();

$("#restart-game-btn").click(function() {
      currentPlayer = 1;
      numMatchsticks = parseInt(prompt("how many matchsticks do you want?"));
      drawMatchsticks();
      updateText();
})


$("#submit-move-btn").click(function () {
   let numMatchToRemove = parseInt($("#num-matchstick-to-remove").val(),10);
   if (numMatchToRemove>3 || numMatchToRemove>numMatchsticks) {
      alert ("you can't draw that much!!");
      return;
   }
   if (numMatchToRemove<1) {
      alert ("you have to draw more");
      return;
   }
    numMatchsticks = numMatchsticks - numMatchToRemove;
   if (numMatchsticks == 0) {
      alert("Player " + currentPlayer + " wins!!!!!!!!!!!!!!!!!")
   }

    currentPlayer = currentPlayer == 1 ? 2 : 1
    drawMatchsticks(numMatchsticks);
    updateText();

});

