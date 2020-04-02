let moles = document.querySelectorAll(".black-column");
console.log(moles);

let score = 0;
const victoryNumber = 10;

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
      //   moles[pos].appendChild(img);
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

      event.target.src = "images/king-mole-fed.png";
    }
  });
}

function kingMoleLeaving(pos) {
  moles[pos].innerHTML = "";
  let img = document.createElement("img");
  img.src = "images/king-mole-leaving.png";
  moles[pos].appendChild(img);
  setTimeout(() => {
    moles[pos].innerHTML = "";
  }, 1000);
}

function moleLeaving(pos) {
  moles[pos].innerHTML = "";
  let img = document.createElement("img");
  img.src = "images/mole-leaving.png";
  moles[pos].appendChild(img);
  setTimeout(() => {
    moles[pos].innerHTML = "";
  }, 1000);
}

function hideMole(pos) {
  if (
    moles[pos].firstElementChild.src ===
    "http://127.0.0.1:5500/images/mole-hungry.png"
  ) {
    moles[pos].innerHTML = "";
    let img = document.createElement("img");
    img.src = "images/mole-sad.png";
    moles[pos].appendChild(img);

    setTimeout(() => {
      moleLeaving(pos);
    }, 1000);
  } else {
    moleLeaving(pos);
  }
}

function hideKingMole(pos) {
  if (
    moles[pos].firstElementChild.src ===
    "http://127.0.0.1:5500/images/king-mole-hungry.png"
  ) {
    moles[pos].innerHTML = "";
    let img = document.createElement("img");
    img.src = "images/king-mole-sad.png";
    moles[pos].appendChild(img);
    setTimeout(() => {
      kingMoleLeaving(pos);
    }, 1000);
  } else {
    kingMoleLeaving(pos);
  }
  //   moles[pos].innerHTML = "";
  //   let img = document.createElement("img");
  //   img.src = "images/king-mole-leaving.png";
  //   moles[pos].appendChild(img);

  //   setTimeout(() => (moles[pos].innerHTML = ""), 1000);
}

function showKingMole(pos) {
  if (moles[pos].innerHTML === "") {
    let img = document.createElement("img");
    img.src = "images/king-mole-hungry.png";
    moles[pos].appendChild(img);
    // debugger;
    setTimeout(() => hideKingMole(pos), 3000);
  }
}

function showMole(pos) {
  if (moles[pos].innerHTML === "") {
    let img = document.createElement("img");
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
  if (pos < 5) {
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
