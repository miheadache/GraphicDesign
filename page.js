const pic = document.querySelectorAll(".pic");
const dot = document.querySelectorAll(".dot");
let slideShow;

function getCurrentPicNumber() 
{
    for(let i = 1; i <= 13; i++) 
    {
        let pic = document.getElementById("pic" + i);
        let leftCssString = getComputedStyle(pic).getPropertyValue("left");
        if(leftCssString === "0px") 
        {
            return i;
        }
    }
}

function displayPic(newNum) 
{
    if(newNum < 1 || newNum > 13) return;
    const distance = newNum - getCurrentPicNumber();
    for(let i = 1; i <= 13; i++) 
    {
        let pic = document.getElementById("pic" + i);
        let leftCssString = getComputedStyle(pic).getPropertyValue("left");
        let leftCssNum = Number(leftCssString.slice(0, leftCssString.length - 2));
        pic.style.left = leftCssNum - distance * 1000 + "px";
    }
    document.getElementById("dot" + newNum).checked = true;
}

function moveLeft()
{
    const currentPicNumber = getCurrentPicNumber();
    if(currentPicNumber > 1) 
    {
        displayPic(currentPicNumber - 1);
    } 
    else 
    {
        displayPic(13);
    }
}

function moveRight() 
{
    const currentPicNumber = getCurrentPicNumber();
    if (currentPicNumber < 13) 
    {
        displayPic(currentPicNumber + 1);
    } 
    else 
    {
        displayPic(1);
    }
}

function startShow() 
{
    slideShow = setInterval(() => 
    {
        moveRight();
    }, 2000);
}

function stopShow() 
{
    clearInterval(slideShow);
}

document.querySelector("#leftArrow").addEventListener("click", () => {
    moveLeft();
});
document.querySelector("#rightArrow").addEventListener("click", () => {
    moveRight();
});
document.querySelector("#dot1").addEventListener("click", () => {
    displayPic(1);
});
document.querySelector("#dot2").addEventListener("click", () => {
    displayPic(2);
});
document.querySelector("#dot3").addEventListener("click", () => {
    displayPic(3);
});
document.querySelector("#dot4").addEventListener("click", () => {
    displayPic(4);
});
document.querySelector("#dot5").addEventListener("click", () => {
    displayPic(5);
});
document.querySelector("#dot6").addEventListener("click", () => {
    displayPic(6);
});
document.querySelector("#dot7").addEventListener("click", () => {
    displayPic(7);
});
document.querySelector("#dot8").addEventListener("click", () => {
    displayPic(8);
});
document.querySelector("#dot9").addEventListener("click", () => {
    displayPic(9);
});
document.querySelector("#dot10").addEventListener("click", () => {
    displayPic(10);
});
document.querySelector("#dot11").addEventListener("click", () => {
    displayPic(11);
});
document.querySelector("#dot12").addEventListener("click", () => {
    displayPic(12);
});
document.querySelector("#dot13").addEventListener("click", () => {
    displayPic(13);
});

document.querySelector("#play").addEventListener("click", () => {
    startShow();
});
document.querySelector("#stop").addEventListener("click", () => {
    stopShow();
});

startShow();


var paragraph = document.getElementsByTagName('p')[0];

function textEffect(animationName) {
  var text = paragraph.innerHTML,
    chars = text.length,
    newText = '',
    animation = animationName,
    char,
    i;

  for (i = 0; i < chars; i += 1) {
    newText += '<i>' + text.charAt(i) + '</i>';
  }

  paragraph.innerHTML = newText;

  var wrappedChars = document.getElementsByTagName('i'),
    wrappedCharsLen = wrappedChars.length,
    j = 0;

  function addEffect () {
    setTimeout(function () {
      wrappedChars[j].className = animation;
      j += 1;
      if (j < wrappedCharsLen) {
        addEffect();
      }
    }, 100)
  }

  addEffect();
};

textEffect('fly-in-out');