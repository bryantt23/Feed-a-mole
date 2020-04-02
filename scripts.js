let moles = document.querySelectorAll(".black-column");
console.log(moles);

function hideMole(pos) {
  if (moles[pos].hasChildNodes()) {
    console.log(pos);
    moles[pos].firstChild.style.visibility = "hidden";
    // debugger;
    setTimeout(() => showMole(pos), 3000);
  }
}

function showMole(pos) {
  if (moles[pos].hasChildNodes()) {
    console.log(pos + " show");
    moles[pos].firstChild.style.visibility = "visible";
  }
}

const callfunction = () => {
  let pos = Math.floor(Math.random() * 11);
  hideMole(pos);
};

let callCount = 1;
let repeater = setInterval(function() {
  if (callCount < 100) {
    callfunction();
    callCount += 1;
  } else {
    clearInterval(repeater);
  }
}, 1000);
