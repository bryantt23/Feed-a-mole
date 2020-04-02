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
    } else if (
      event.target.src === "http://127.0.0.1:5500/images/king-mole-hungry.png"
    ) {
      score += 2;
      console.log("is a mole");
      console.log("score", score);
      let wormSize = parseInt(
        document.querySelector(".worm-container").style.width
      );
      console.log("wormSize", wormSize);
      if (wormSize === 5) {
        wormSize += 15;
      } else {
        wormSize += 20;
      }
      document.querySelector(".worm-container").style.width = `${wormSize}%`;
      console.log("wormSize", wormSize);
    }
  });
}

function hideMole(pos) {
  moles[pos].innerHTML = "";

  //   if (moles[pos].hasChildNodes()) {
  //     console.log(pos);
  //     moles[pos].firstChild.style.visibility = "hidden";
  //   }
}

function showKingMole(pos) {
  if (moles[pos].innerHTML === "") {
    var img = document.createElement("img");
    img.src = "images/king-mole-hungry.png";
    moles[pos].appendChild(img);
    setTimeout(() => hideMole(pos), 3000);
  }
}

function showMole(pos) {
  if (moles[pos].innerHTML === "") {
    var img = document.createElement("img");
    img.src = "images/mole-hungry.png";
    moles[pos].appendChild(img);
    setTimeout(() => hideMole(pos), 3000);
  }

  //   if (moles[pos].hasChildNodes()) {
  //     console.log(pos + " show");
  //     moles[pos].firstChild.style.visibility = "visible";
  //   setTimeout(() => hideMole(pos), 3000);
  //   }
}

const callfunction = () => {
  let pos = Math.floor(Math.random() * 11);
  if (pos === 5) {
    //random number that represents 10%
    showKingMole(pos);
  } else {
    showMole(pos);
  }
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
