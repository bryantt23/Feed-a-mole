let moles = document.querySelectorAll(".black-column");
console.log(moles);

let score = 0;
const victoryNumber = 10;

for (const mole of moles) {
  mole.addEventListener("click", function(event) {
    //...
    console.log(event);
    if (event.target.src === "http://127.0.0.1:5500/images/mole-hungry.png") {
      score++;
      console.log("is a mole");
      console.log("score", score);
      let wormSize = parseInt(
        document.querySelector(".worm-container").style.width
      );
      console.log("wormSize", wormSize);
      if (wormSize === 5) {
        wormSize += 5;
      } else {
        wormSize += 10;
      }
      document.querySelector(".worm-container").style.width = `${wormSize}%`;
      console.log("wormSize", wormSize);
    } else {
      console.log("not a mole");
      console.log("score", score);
    }
  });
}

function hideMole(pos) {
  if (moles[pos].hasChildNodes()) {
    console.log(pos);
    moles[pos].firstChild.style.visibility = "hidden";
  }
}

function showMole(pos) {
  if (moles[pos].hasChildNodes()) {
    console.log(pos + " show");
    moles[pos].firstChild.style.visibility = "visible";
    setTimeout(() => hideMole(pos), 3000);
  }
}

const callfunction = () => {
  let pos = Math.floor(Math.random() * 11);
  showMole(pos);
};

let callCount = 1;
let repeater = setInterval(function() {
  if (callCount < 999 && score < victoryNumber) {
    callfunction();
    callCount += 1;
  } else {
    clearInterval(repeater);
    document.querySelector(".some-page-wrapper").style.display = "none";
    document.querySelector("#win").style.visibility = "visible";
  }
}, 1000);
