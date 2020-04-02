const kingMole = {
  fed: "images/king-mole-fed.png",
  hungry: "images/king-mole-hungry.png",
  leaving: "images/king-mole-leaving.png",
  sad: "images/king-mole-sad.png",
  hungryImgSrc: "http://127.0.0.1:5500/images/king-mole-hungry.png"
};

const regularMole = {
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

for (const mole of moles) {
  mole.addEventListener("click", function(event) {
    console.log(event);
    if (event.target.src === regularMole.hungryImgSrc) {
      score++;
      increaseWormSize(5, 10);
      event.target.src = regularMole.fed;
    } else if (event.target.src === kingMole.hungryImgSrc) {
      score += 2;
      increaseWormSize(15, 20);
      event.target.src = kingMole.fed;
    }
  });
}

function increaseWormSize(minAmount, regularAmount) {
  let wormSize = parseInt(
    document.querySelector(".worm-container").style.width
  );
  console.log("wormSize", wormSize);
  if (wormSize === 5) {
    wormSize += minAmount;
  } else {
    wormSize += regularAmount;
  }
  document.querySelector(".worm-container").style.width = `${wormSize}%`;
  console.log("wormSize", wormSize);
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
  }
  setTimeout(() => {
    moleLeaving(pos, mole.leaving);
  }, 1000);
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
    showMole(pos, regularMole);
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
