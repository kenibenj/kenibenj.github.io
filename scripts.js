// Benjamin Keninger 2024

// On-load functions
$(window).on("load", function () {
  $(".loader").fadeOut("medium"); // Fade-in Effect when page is loaded

  var theme = sessionStorage.getItem("theme"); // Tracks what theme has been used so far
  if (theme == "dark") {
    themeChanges();
  }

  setStaticPageLoad();
  drawChangeOnLoad();
  setInterval(musicTracker, 1);
  playAudioOnLoad();
  if(sessionStorage.getItem("visitedDemonRealm") == "trueAgain"){
    var demonRealmP = document.getElementById('demon-realm-p');
    demonRealmP.style.display = 'none';
  }
});

// Fade-out when link is clicked
$(document).ready(function () {
  $("a").click(function (event) {
    // Get the href attribute of the clicked link
    var href = $(this).attr("href");

    // Ignore links that just link to "#" or are undefined
    if (!href || href === "#" || href.startsWith("#")) {
      return;
    }

    event.preventDefault(); // Prevent default link behavior

    // Fade in the overlay and navigate to the href after the fade-in
    $(".loader").fadeIn(200, function () {
      window.location.href = href;
    });
  });
});

// Code for switching the background theme of the site
var counter = 0;
function switchTheme() {
  $(".loader").fadeIn("medium", themeChanges);
  $(".loader").fadeOut("medium");
}

function themeChanges() {
  var element = document.getElementById("sun");
  var para = document.getElementsByClassName("para");
  var pageTitle = document.getElementsByClassName("page-title");
  var modalTitle = document.getElementsByClassName("modal-title");
  var mainTitle = document.getElementsByClassName("main-title");
  var subTitle = document.getElementsByClassName("sub-title");
  var main = document.getElementsByClassName("main");
  var imageSelector = document.getElementsByClassName("image-selector");
  var imageNormal = document.getElementsByClassName("image-normal");
  var label = document.getElementsByTagName("label");
  var textarea = document.getElementsByTagName("textarea");
  var input = document.getElementsByTagName("input");
  var hr = document.getElementsByTagName("hr");
  var mergedCollection = [
    ...para,
    ...pageTitle,
    ...modalTitle,
    ...mainTitle,
    ...subTitle,
    ...main,
    ...label,
    ...textarea,
    ...input,
    ...hr,
  ];
  var mergedInput = [...textarea, ...input];
  var mergedImage = [...imageSelector, ...imageNormal];
  var modal = document.getElementsByClassName("modal-content");
  var modalButton = document.getElementsByClassName("modal-button");
  var modalIcon = document.getElementsByClassName("modal-icon");
  var card = document.getElementsByClassName("card");
  var showMoreButton = document.getElementsByClassName("show-more-button");
  var mergedCards = [...card, ...showMoreButton];
  var blackBorder = document.getElementsByClassName("black-border");
  var carousel = document.getElementsByClassName("carousel");
  var cardHr = document.getElementsByClassName("card-hr");
  var dateTheme = document.getElementsByClassName("date-theme");
  var btnClose = document.getElementsByClassName("btn-close");
  var loader = document.getElementsByClassName("loader");
  var radialGradientWrapper = document.getElementsByClassName("wrapper");

  if (counter % 2 == 0) {
    sessionStorage.setItem("theme", "dark");
    element.classList.add("bi-moon");
    element.classList.remove("bi-sun");
    document.body.style.background =
      "linear-gradient(to left bottom, rgb(101,101,101), rgb(35,35,35) 70%)";
    document.body.style.backgroundAttachment = "fixed";
    Array.from(mergedCollection).forEach(function (element) {
      element.style.color = "white";
    });
    Array.from(mergedImage).forEach(function (element) {
      element.style.borderColor = "white";
      element.style.outlineColor = "white";
    });

    Array.from(mergedInput).forEach(function (element) {
      element.addEventListener("focus", function () {
        this.style.filter = "drop-shadow(0 0 .15em white)";
      });
      element.addEventListener("focusout", function () {
        this.style.filter = "none";
      });
    });

    Array.from(modal).forEach(function (element) {
      element.classList.add("bg-dark");
    });
    Array.from(modalButton).forEach(function (element) {
      element.classList.add("btn-light");
      element.classList.remove("btn-dark");
    });
    Array.from(modalIcon).forEach(function (element) {
      element.style.color = "white";
    });
    Array.from(dateTheme).forEach(function (element) {
      element.style.color = "white";
    });
    Array.from(mergedCards).forEach(function (element) {
      element.classList.add("bg-black");
      element.classList.remove("bg-dark");
    });
    Array.from(blackBorder).forEach(function (element) {
      element.style.borderColor = "white";
    });
    Array.from(carousel).forEach(function (element) {
      element.classList.remove("carousel-dark");
    });
    Array.from(btnClose).forEach(function (element) {
      element.classList.add("btn-close-white");
    });
    Array.from(radialGradientWrapper).forEach(function (element) {
      element.style.background =
        "radial-gradient(#ffffff00, rgb(35,35,35) 95%)";
    });
  } else {
    sessionStorage.setItem("theme", "light");
    element.classList.add("bi-sun");
    element.classList.remove("bi-moon");
    document.body.style.background =
      "linear-gradient(to right top, rgb(201,201,201), white 70%)";
    document.body.style.backgroundAttachment = "fixed";
    Array.from(mergedCollection).forEach(function (element) {
      element.style.color = "black";
    });
    Array.from(mergedImage).forEach(function (element) {
      element.style.borderColor = "black";
      element.style.outlineColor = "black";
    });

    Array.from(mergedInput).forEach(function (element) {
      element.addEventListener("focus", function () {
        this.style.filter = "drop-shadow(0 0 .1em black)";
      });
      element.addEventListener("focusout", function () {
        this.style.filter = "none";
      });
    });

    Array.from(modal).forEach(function (element) {
      element.classList.remove("bg-dark");
    });

    Array.from(modalButton).forEach(function (element) {
      element.classList.add("btn-dark");
      element.classList.remove("btn-light");
    });
    Array.from(modalIcon).forEach(function (element) {
      element.style.color = "black";
    });
    Array.from(dateTheme).forEach(function (element) {
      element.style.color = "black";
    });
    Array.from(mergedCards).forEach(function (element) {
      element.classList.add("bg-dark");
      element.classList.remove("bg-black");
    });
    Array.from(blackBorder).forEach(function (element) {
      element.style.borderColor = "black";
    });
    Array.from(carousel).forEach(function (element) {
      element.classList.add("carousel-dark");
    });
    Array.from(btnClose).forEach(function (element) {
      element.classList.remove("btn-close-white");
    });
    Array.from(radialGradientWrapper).forEach(function (element) {
      element.style.background =
        "radial-gradient(circle, transparent 20%, rgb(201,201,201) 100%)";
    });
  }
  Array.from(cardHr).forEach(function (element) {
    element.style.color = "white";
  });
  counter++;
}

// functions for changing static
var staticCounter = 0;

function staticChange() {
  const staticOverlay = document.getElementsByClassName("static-overlay")[0];
  const staticButton = document.getElementById("static");

  let currentOpacity = parseFloat(
    window.getComputedStyle(staticOverlay).opacity
  );

  var staticLevelprev =
    "bi-reception-" + Math.floor((currentOpacity / 4) * 100);

  if (currentOpacity < 0.16) {
    currentOpacity += 0.04;
  } else {
    currentOpacity = 0.0;
  }

  var staticLevel = "bi-reception-" + Math.floor((currentOpacity / 4) * 100);

  staticButton.classList.remove(staticLevelprev);
  staticButton.classList.add(staticLevel);

  staticOverlay.style.opacity = currentOpacity;
  sessionStorage.setItem("static", String(currentOpacity));
}

function setStaticPageLoad() {
  const staticOverlay = document.getElementsByClassName("static-overlay")[0];
  const staticButton = document.getElementById("static");

  var static = sessionStorage.getItem("static");

  if (static) {
    let currentOpacity = parseFloat(
      window.getComputedStyle(staticOverlay).opacity
    );

    var staticLevel = "bi-reception-" + Math.floor((static / 4) * 100);

    var staticLevelprev =
      "bi-reception-" + Math.floor((currentOpacity / 4) * 100);

    staticButton.classList.remove(staticLevelprev);
    staticButton.classList.add(staticLevel);

    staticOverlay.style.opacity = static;
  }
}


// Functions for drawing canvas
function drawChange() {
  const drawingBoard = document.getElementsByClassName("drawing-board")[0];
  const wrapper = document.getElementsByTagName("section")[0];
  const drawingButton = document.getElementById("draw");

  drawingBoardDisplay = window.getComputedStyle(drawingBoard).display;

  if (drawingBoardDisplay == "none") {
    drawingBoard.style.display = "block";
    drawingButton.classList.remove("bi-cursor-fill");
    drawingButton.classList.add("bi-brush-fill");
    wrapper.style.userSelect = "none";
    wrapper.style.pointerEvents = "none";
    sessionStorage.setItem("draw", "true");
  } else {
    drawingBoard.style.display = "none";
    drawingButton.classList.remove("bi-brush-fill");
    drawingButton.classList.add("bi-cursor-fill");
    wrapper.style.userSelect = "unset";
    wrapper.style.pointerEvents = "unset";
    sessionStorage.setItem("draw", "false");
  }
}

function drawChangeOnLoad() {
  const drawingBoard = document.getElementsByClassName("drawing-board")[0];
  const wrapper = document.getElementsByTagName("section")[0];
  const drawingButton = document.getElementById("draw");

  drawingBoardDisplay = window.getComputedStyle(drawingBoard).display;

  if (sessionStorage.getItem("draw") == "true") {
    drawingBoard.style.display = "block";
    drawingButton.classList.remove("bi-cursor-fill");
    drawingButton.classList.add("bi-brush-fill");
    wrapper.style.userSelect = "none";
    wrapper.style.pointerEvents = "none";
  } else {
    drawingBoard.style.display = "none";
    drawingButton.classList.remove("bi-brush-fill");
    drawingButton.classList.add("bi-cursor-fill");
    wrapper.style.userSelect = "unset";
    wrapper.style.pointerEvents = "unset";
  }
}

// Changes settings display when clicked
function settingsChange() {
  const elements = document.querySelectorAll(".icon-settings");
  elements.forEach((element) => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
      element.classList.add("hidden");
    }
  });
}

// Drawing Canvas
$(document).ready(function () {
  const canvas = document.getElementById("drawing-board");
  const ctx = canvas.getContext("2d");

  const canvasOffsetX = canvas.offsetLeft;
  const canvasOffsetY = canvas.offsetTop;

  canvas.width = 10000;
  canvas.height = 10000;
  canvas.style.overflow = 'hidden';

  let isPainting = false;
  let lineWidth = 8;
  let startX;
  let startY;

  const draw = (e) => {
    if (!isPainting) {
      return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
    ctx.stroke();
  };

  const drawMobile = (e) => {
    if (!isPainting) {
      return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.lineTo(
      e.touches[0].clientX - canvasOffsetX,
      e.touches[0].clientY - canvasOffsetY - 50
    );
    ctx.stroke();
  };

  canvas.addEventListener("mousedown", (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  canvas.addEventListener("mouseup", (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
  });

  canvas.addEventListener("mousemove", draw);

  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    isPainting = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  canvas.addEventListener("touchend", (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
  });

  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    drawMobile(e);
  });
});

// Tracks current time of music if it is playing
function musicTracker() {
    var audio = document.getElementById("myAudio");
    if(sessionStorage.getItem("audioIsPlaying") == "true"){
        sessionStorage.setItem("audioCurrentTime", audio.currentTime);
    }
}

// Music Player functions
function playAudioOnLoad(){
    var audio = document.getElementById("myAudio");
    var audioIcon = document.getElementById("audio");
    var savedTime = sessionStorage.getItem("audioCurrentTime");

    if (sessionStorage.getItem("audioIsPlaying") == "true") {

        audioIcon.classList.remove("bi-volume-mute-fill");
        audioIcon.classList.add("bi-volume-up-fill");
        if (savedTime) {
            audio.currentTime = savedTime;
        }
        audio.play().catch((error) => {
            // Handle the error if the audio cannot be played
            audioIcon.classList.remove("bi-volume-up-fill");
            audioIcon.classList.add("bi-volume-mute-fill");
        });
        this.textContent = "Pause Audio";
    } else {
        audioIcon.classList.remove("bi-volume-up-fill");
        audioIcon.classList.add("bi-volume-mute-fill");
        audio.pause();
        this.textContent = "Play Audio";
    }
}

function playAudio(){
    var audio = document.getElementById("myAudio");
    var audioIcon = document.getElementById("audio");

    if (audio.paused) {
        audioIcon.classList.remove("bi-volume-mute-fill");
        audioIcon.classList.add("bi-volume-up-fill");
        if(sessionStorage.getItem("audioCurrentTime")){
            audio.currentTime = sessionStorage.getItem("audioCurrentTime");
        }
        audio.play();

        this.textContent = "Pause Audio";
        sessionStorage.setItem("audioIsPlaying", "true");
    } else {
        audioIcon.classList.remove("bi-volume-up-fill");
        audioIcon.classList.add("bi-volume-mute-fill");
        audio.pause();
        this.textContent = "Play Audio";
        sessionStorage.setItem("audioIsPlaying", "false");
    }
}

// Navbar icon hover animation
$(document).ready(function () {
  const frames = [
    "gram icon animation 2.png",
    "gram icon animation 3.png",
    "gram icon animation 1.png",
  ];
  let currentFrame = 0;
  let intervalId;

  function animateFaucet() {
    currentFrame = (currentFrame + 1) % frames.length;
    $("#faucet-icon").attr("src", "images//" + frames[currentFrame]);
  }

  function startAnimation() {
    currentFrame = (currentFrame + 1) % frames.length;
    $("#faucet-icon").attr("src", "images//" + frames[currentFrame]);
    intervalId = setInterval(animateFaucet, 333); // Change frame every 333ms for a 1s animation cycle
  }

  function stopAnimation() {
    clearInterval(intervalId);
    $("#faucet-icon").attr("src", "images//" + frames[1]); // Reset to first frame
    currentFrame = 0;
  }

  $("#faucet-icon").hover(startAnimation, stopAnimation);
});

// Footer Code attatched using JS across all pages since it is shared across the site
document.addEventListener("DOMContentLoaded", (event) => {
  const footerHTML = `
    <footer class="pb-1 text-white text-center position-relative" style=" background-color: black; box-shadow: 0px -4px 4px 2px rgb(50,50,50, .3);">
    <div class="container">
        <ul class="d-flex flex-row navbar-nav justify-content-center pt-3 p-2">
            <li class="social-items mx-3"><a href="https://github.com/kenibenj"><i class="fa-brands fa-github"></i></a></li>
            <li class="social-items mx-3"><a href="https://www.linkedin.com/in/benjamin-keninger-858352223/"><i class="fa-brands fa-linkedin"></i></a></li>
            <li class="social-items mx-3"><a href="https://www.instagram.com/kenibenj/"><i class="fa-brands fa-instagram"></i></a></li>
            <li class="social-items mx-3"><a href="https://www.youtube.com/channel/UCZRzfx7rSdtQDxwk9zvJw4A"><i class="fa-brands fa-youtube"></i></a></li>
            <li class="social-items mx-3"><a href="https://soundcloud.com/gramfaucet"><i class="fab fa-soundcloud"></i></a></li>
        </ul>
        <p class="mb-0">&copy; Benjamin Keninger &bull; <span id="current-year"></span></p>
        <p id="demon-realm-p" onclick="demonRealm()" class="nav-custom" style="display:inline-block">???</p>
        <a href="#" id="to-top" class="position-fixed bottom-0 end-0 p-1 m-3 d-md-block d-none hidden" style="transition: .15s;">
            <i class="bi bi-arrow-up-circle h2 text-white bg-black" style="border-radius: 100px;"></i>
        </a>
    </div>
</footer>
    `;

  // Create a div element and set its innerHTML to the footerHTML
  const footerDiv = document.getElementById("footer-container");
  footerDiv.innerHTML = footerHTML;

  // Append the footer to the body
  document.body.appendChild(footerDiv);

  // Set the current year in the footer
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
});

window.addEventListener("scroll", () =>{
    const toTop = document.getElementById("to-top");
    if(window.scrollY > 100){
        toTop.classList.remove("hidden");
    }
    else{
        toTop.classList.add("hidden");
    }
})


// Code for when user interacts with ??? button (displays text and demon realm)
var demonButtonCounter = 0;
function demonRealm() {
  var audio = document.getElementById("myAudio");
  if (sessionStorage.getItem("audioIsPlaying") == "true") {
    audio.pause();
  }

  if(sessionStorage.getItem("visitedDemonRealm") == "true" && demonButtonCounter <= 0){
    demonButtonCounter++;
    return
  }

  var wrapper = document.getElementsByClassName("wrapper")[0];
  var footer = document.getElementById("footer-container");
  var navbar = document.getElementsByTagName("nav")[0];

  wrapper.classList.add("d-none");
  footer.classList.add("d-none");
  navbar.classList.add("d-none");
  document.body.style.cursor = "default";

  const textsOne = [
    "...",
    "You really shouldn't be clicking on things if you don't know what they do.",
    "You will now be punished for your carelessness.",
    "Sorry, but you deserve this!",
  ];

  const textsTwo = [
    "There. I hope you learned your lesson."
  ];

  const textsThree = [
    "...",
    "Really? Again?",
    "I would have thought requiring 2 clicks would have deterred you.",
    "Now you truly deserve this!",
  ];

  const textsFour = [
    "There. Now please think about your actions.",
    "Also I am taking away the button.",
  ];

  // Create and append the div element to the body
  const textContainer = document.createElement("div");
  textContainer.id = "text-container";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.display = "flex";
  document.body.appendChild(textContainer);

  let currentIndex = 0;
  function displayNextText() {
    var currentTexts;
    if (sessionStorage.getItem("visitedDemonRealm") != "true") {
      currentTexts = textsOne;
    } else {
      currentTexts = textsThree;
    }

    if (currentIndex < currentTexts.length) {
      textContainer.textContent = currentTexts[currentIndex];
      currentIndex++;
    } else {
      clearInterval(interval); // Stop the interval after the last text is displayed
      displayDemonRealm();
      demonCountDown();
    }
  }

  let currentIndexTwo = 0;
  function displayNextTextTwo() {
    var currentTexts;
    if (sessionStorage.getItem("visitedDemonRealm") != "true") {
      currentTexts = textsTwo;
    } else {
      currentTexts = textsFour;
      var demonRealmP = document.getElementById('demon-realm-p');
      demonRealmP.style.display = 'none';
    }

    if (currentIndexTwo < currentTexts.length) {
      textContainer.textContent = currentTexts[currentIndexTwo];
      currentIndexTwo++;
    } else {
      clearInterval(interval); // Stop the interval after the last text is displayed
      returnToNormal();
    }
  }

  function returnToNormal() {
    var audio = document.getElementById("myAudio");
    if (sessionStorage.getItem("audioIsPlaying") == "true") {
      audio.play();
    }
    document.body.style.cursor = "url('images/cursor-auto.png'), auto";
    var textContainer = document.getElementById("text-container");
    var wrapper = document.getElementsByClassName("wrapper")[0];
    var footer = document.getElementById("footer-container");
    var navbar = document.getElementsByTagName("nav")[0];

    document.body.style.justifyContent = "unset";
    document.body.style.alignItems = "unset";
    document.body.style.display = "unset";
    document.body.appendChild(textContainer);

    textContainer.remove();
    wrapper.classList.remove("d-none");
    footer.classList.remove("d-none");
    navbar.classList.remove("d-none");
    drawChangeOnLoad();
    if(sessionStorage.getItem("visitedDemonRealm") == "true"){
        sessionStorage.setItem("visitedDemonRealm", "trueAgain");
    }
    else{
        sessionStorage.setItem("visitedDemonRealm", "true");
    }
  }

  function displayDemonRealm() {

    const demonHTML = `
        <div class="d-flex justify-content-center mt-5 p-5">
            <img src="images/lostsoultar.gif">
            <div id="again">
                <h2 style="color:red">Welcome to the Demon Realm!</h2>
            </div>
            <img src="images/lostsoultar.gif">
        </div>
        <marquee width="400px" behavior="SCROLL" bgcolor="black" loop="100" style="color: red;">This is where people
            like you suffer</marquee>
        <h3 style="color: red;" class="text-center">You have</h3>
        <div class="d-flex justify-content-around">
            <img src="images/doom-baron-of-hell.gif" width="200">
            <div style="color: red; font-size: 7vw;" id="countdown"></div>
            <img src="images/doom-monster.gif" width="200">
        </div>
        <h3 style="color: red;" class="text-center">seconds left in the demon world!</h3>


        <!-- hitwebcounter Code START -->
        <div class="d-flex justify-content-center p-5">
    <!-- hitwebcounter Code START -->
    <a href="https://www.hitwebcounter.com" target="_blank">
    <img src="https://hitwebcounter.com/counter/counter.php?page=15278132&style=0025&nbdigits=5&type=ip&initCount=0" alt="Visit counter For Websites" border="0" /></a>        
        </div>

        <div class="d-flex" style="position: absolute; bottom: 0;">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
            <img src="/images/fireplace-love.gif">
        </div>
        
        `;

    // Create a div element and set its innerHTML to the footerHTML
    const demonDiv = document.getElementById("demon-realm");
    demonDiv.style.display = "block";
    demonDiv.innerHTML = demonHTML;
  }

  displayNextText();
  var interval = setInterval(displayNextText, 3000); // Change text every 3 seconds

  function demonCountDown() {
    // Set the countdown duration in seconds
    let countdownDuration = 4;

    // Check if the session variable 'visitedDemonRealm' is true
    if (sessionStorage.getItem("visitedDemonRealm") == "true") {
      const messageContainer = document.getElementById("again");
      countdownDuration = 9; // 10 seconds

      // Check if the <p> element already exists
      if (!messageContainer.querySelector("p")) {
        const p = document.createElement("p");
        // Set the text content of the <p> element
        p.textContent = "(again)";
        p.style.textAlign = "center";
        p.style.color = "red";
        // Append the <p> element to the message container
        messageContainer.appendChild(p);
      }
    }
    document.getElementById("countdown").innerHTML = countdownDuration + 1;

    // Update the count down every 1 second
    const countdownFunction = setInterval(function () {
      // Display the current countdown value
      document.getElementById("countdown").innerHTML = countdownDuration;

      // Decrement the countdown duration
      countdownDuration--;

      // If the countdown is over, stop the interval and show "EXPIRED"
      if (countdownDuration < 0) {
        clearInterval(countdownFunction);
        const demonDiv = document.getElementById("demon-realm");
        demonDiv.style.display = "none";
        interval = setInterval(displayNextTextTwo, 3000); // Change text every 3 seconds
        displayNextTextTwo();
      }
    }, 1000);
  }
}
