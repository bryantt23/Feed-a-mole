const kingMole = {
  fed: "images/king-mole-fed.png",
  hungry: "images/king-mole-hungry.png",
  leaving: "images/king-mole-leaving.png",
  sad: "images/king-mole-sad.png",
  hungryImgSrc: "http://127.0.0.1:5500/images/king-mole-hungry.png"
};

const mole = {
  fed: "images/mole-fed.png",
  hungry: "images/mole-hungry.png",
  leaving: "images/mole-leaving.png",
  sad: "images/mole-sad.png",
  hungryImgSrc: "http://127.0.0.1:5500/images/mole-hungry.png"
};

let moles = document.querySelectorAll(".black-column");
console.log(moles);

let score = 0;
const victoryNumber = 10;
const urlHost = "http://127.0.0.1:5500/";

for (const mole of moles) {
  mole.addEventListener("click", function(event) {
    console.log(event);
    if (event.target.src === "http://127.0.0.1:5500/images/mole-hungry.png") {
      score++;
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

      event.target.src = "images/mole-fed.png";
    } else if (
      event.target.src === "http://127.0.0.1:5500/images/king-mole-hungry.png"
    ) {
      score += 2;

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

      event.target.src = kingMole.fed;
    }
  });
}

function moleLeaving(pos, imageSrc) {
  moles[pos].innerHTML = "";
  let img = document.createElement("img");
  img.src = imageSrc;
  moles[pos].appendChild(img);
  setTimeout(() => {
    moles[pos].innerHTML = "";
  }, 1000);
}

function hideMole(pos, mole) {
  if (moles[pos].firstElementChild.src === mole.hungryImgSrc) {
    moles[pos].innerHTML = "";
    let img = document.createElement("img");
    img.src = mole.sad;
    moles[pos].appendChild(img);

    setTimeout(() => {
      moleLeaving(pos, mole.leaving);
    }, 1000);
  } else {
    moleLeaving(pos, mole.leaving);
  }
}

function showMole(pos, mole) {
  if (moles[pos].innerHTML === "") {
    let img = document.createElement("img");
    img.src = mole.hungry;
    moles[pos].appendChild(img);
    setTimeout(() => hideMole(pos, mole), 3000);
  }
}

const callfunction = () => {
  let pos = Math.floor(Math.random() * 11);
  if (pos < 5) {
    //random number that represents 10%
    showMole(pos, kingMole);
  } else {
    showMole(pos, mole);
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
