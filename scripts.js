let moles = document.querySelectorAll(".black-column");
console.log(moles);

let score = 0;

for (const mole of moles) {
  mole.addEventListener("click", function(event) {
    //...
    console.log(event);
    if (event.target.src === "http://127.0.0.1:5500/images/mole-hungry.png") {
      score++;
      console.log("is a mole");
      console.log(score);
    } else {
      console.log("not a mole");
      console.log(score);
    }
  });
}

function hideMole(pos) {
  if (moles[pos].hasChildNodes()) {
    console.log(pos);
    moles[pos].firstChild.style.visibility = "hidden";
    // debugger;
    // setTimeout(() => showMole(pos), 3000);
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
  if (callCount < 99) {
    callfunction();
    callCount += 1;
  } else {
    clearInterval(repeater);
  }
}, 1000);
