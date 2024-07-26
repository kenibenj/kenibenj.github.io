// Benjamin Keninger 2023


// On-load functions
$(window).on("load", function () {
    $(".loader").fadeOut("medium"); // Fade-in Effect when page is loaded

    var theme = sessionStorage.getItem("theme"); // Tracks what theme has been used so far
    if (theme == "dark"){
        themeChanges();
    }
});


// Fade-out when link is clicked
$(document).ready(function() {
    $('a').click(function(event) {
        // Get the href attribute of the clicked link
        var href = $(this).attr('href');

        // Ignore links that just link to "#"
        if (href === '#' || href.startsWith('#')) {
            return;
        }

        event.preventDefault(); // Prevent default link behavior

        // Fade in the overlay and navigate to the href after the fade-in
        $(".loader").fadeIn(200, function() {
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

function themeChanges(){
    var element = document.getElementById("sun");
    var para = document.getElementsByClassName('para');
    var pageTitle = document.getElementsByClassName('page-title');
    var modalTitle = document.getElementsByClassName('modal-title');
    var mainTitle = document.getElementsByClassName('main-title');
    var subTitle = document.getElementsByClassName('sub-title');
    var main = document.getElementsByClassName('main');
    var imageSelector = document.getElementsByClassName('image-selector');
    var imageNormal = document.getElementsByClassName('image-normal');
    var label = document.getElementsByTagName('label');
    var textarea = document.getElementsByTagName('textarea');
    var input = document.getElementsByTagName('input');
    var hr = document.getElementsByTagName('hr');
    var mergedCollection = [...para, ...pageTitle, ...modalTitle, ...mainTitle, ...subTitle, ...main, ...label, ...textarea, ...input, ...hr];
    var mergedInput = [...textarea, ...input];
    var mergedImage = [...imageSelector, ...imageNormal];
    var modal = document.getElementsByClassName('modal-content');
    var modalButton = document.getElementsByClassName('modal-button');
    var modalIcon = document.getElementsByClassName('modal-icon');
    var card = document.getElementsByClassName('card');
    var showMoreButton = document.getElementsByClassName('show-more-button');
    var mergedCards = [...card, ...showMoreButton];
    var blackBorder = document.getElementsByClassName('black-border');
    var carousel = document.getElementsByClassName('carousel');
    var cardHr = document.getElementsByClassName('card-hr');
    var dateTheme = document.getElementsByClassName('date-theme');
    var btnClose = document.getElementsByClassName('btn-close');
    var loader = document.getElementsByClassName('loader');
    var radialGradientWrapper = document.getElementsByClassName('wrapper');

    if (counter % 2 == 0) {
        sessionStorage.setItem("theme", "dark");
        element.classList.add("bi-moon");
        element.classList.remove("bi-sun");
        document.body.style.background = "linear-gradient(to left bottom, rgb(101,101,101), rgb(35,35,35) 70%)";
        //radialGradientWrapper.style.background = "radial-gradient(#ffffff00, rgb(201,201,201))";
        //radialGradientWrapper.style.co = "radial-gradient(#ffffff00, rgb(201,201,201))";
        document.body.style.backgroundAttachment = "fixed";
        Array.from(mergedCollection).forEach(function (element) {
            element.style.color = 'white';
        });
        Array.from(mergedImage).forEach(function (element) {
            element.style.borderColor = 'white';
            element.style.outlineColor = 'white';
        });

        Array.from(mergedInput).forEach(function (element) {
            element.addEventListener("focus", function () {
                this.style.filter = 'drop-shadow(0 0 .15em white)';
            });
            element.addEventListener("focusout", function () {
                this.style.filter = 'none';
            });
        });

        Array.from(modal).forEach(function (element) {
            element.classList.add('bg-dark');
        });
        Array.from(modalButton).forEach(function (element) {
            element.classList.add('btn-light');
            element.classList.remove('btn-dark');
        });
        Array.from(modalIcon).forEach(function (element) {
            element.style.color = 'white';
        });
        Array.from(dateTheme).forEach(function (element) {
            element.style.color = 'white';
        });
        Array.from(mergedCards).forEach(function (element) {
            element.classList.add('bg-black');
            element.classList.remove('bg-dark');
        });
        Array.from(blackBorder).forEach(function (element) {
            element.style.borderColor = 'white';
        });
        Array.from(carousel).forEach(function (element) {
            element.classList.remove('carousel-dark');
        });
        Array.from(btnClose).forEach(function (element) {
            element.classList.add('btn-close-white');
        });
        Array.from(radialGradientWrapper).forEach(function (element) {
            element.style.background = "radial-gradient(#ffffff00, rgb(201,201,201))";
        });
    }

    else {
        sessionStorage.setItem("theme", "light");
        element.classList.add("bi-sun");
        element.classList.remove("bi-moon");
        document.body.style.background = "linear-gradient(to right top, rgb(201,201,201), white 70%)";
        document.body.style.backgroundAttachment = "fixed";
        Array.from(mergedCollection).forEach(function (element) {
            element.style.color = 'black';
        });
        Array.from(mergedImage).forEach(function (element) {
            element.style.borderColor = 'black';
            element.style.outlineColor = 'black';
        });

        Array.from(mergedInput).forEach(function (element) {
            element.addEventListener("focus", function () {
                this.style.filter = 'drop-shadow(0 0 .1em black)';
            });
            element.addEventListener("focusout", function () {
                this.style.filter = 'none';
            });
        });

        Array.from(modal).forEach(function (element) {
            element.classList.remove('bg-dark');
        });

        Array.from(modalButton).forEach(function (element) {
            element.classList.add('btn-dark');
            element.classList.remove('btn-light');
        });
        Array.from(modalIcon).forEach(function (element) {
            element.style.color = 'black';
        });
        Array.from(dateTheme).forEach(function (element) {
            element.style.color = 'black';
        });
        Array.from(mergedCards).forEach(function (element) {
            element.classList.add('bg-dark');
            element.classList.remove('bg-black');
        });
        Array.from(blackBorder).forEach(function (element) {
            element.style.borderColor = 'black';
        });
        Array.from(carousel).forEach(function (element) {
            element.classList.add('carousel-dark');
        });
        Array.from(btnClose).forEach(function (element) {
            element.classList.remove('btn-close-white');
        });
        Array.from(radialGradientWrapper).forEach(function (element) {
            element.style.background = "radial-gradient(circle, transparent 20%, rgb(201,201,201) 100%)"
        });
    }
    Array.from(cardHr).forEach(function (element) {
        element.style.color = 'white';
    });
    counter++;
}

// Navbar icon hover animation
$(document).ready(function() {
    const frames = ['gram icon animation 2.png', 'gram icon animation 3.png', 'gram icon animation 1.png'];
    let currentFrame = 0;
    let intervalId;

    function animateFaucet() {
      currentFrame = (currentFrame + 1) % frames.length;
      $('#faucet-icon').attr('src', "images//" + frames[currentFrame]);
    }

    function startAnimation() {
        currentFrame = (currentFrame + 1) % frames.length;
        $('#faucet-icon').attr('src', "images//" + frames[currentFrame]);
      intervalId = setInterval(animateFaucet, 333); // Change frame every 333ms for a 1s animation cycle
    }

    function stopAnimation() {
      clearInterval(intervalId);
      $('#faucet-icon').attr('src', "images//" + frames[1]); // Reset to first frame
      currentFrame = 0;
    }

    $('#faucet-icon').hover(startAnimation, stopAnimation);
  });


  // Footer Code attatched using JS across all pages since it is shared across the site
  document.addEventListener('DOMContentLoaded', (event) => {
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
        <p class="">&copy; Benjamin Keninger &bull; <span id="current-year"></span></p>
        <a href="#" class="position-absolute bottom-0 end-0 p-3 d-md-block d-none"><i class="bi bi-arrow-up-circle h2 text-white"></i></a>
    </div>
</footer>
    `;

    // Create a div element and set its innerHTML to the footerHTML
    const footerDiv = document.getElementById('footer-container');
    footerDiv.innerHTML = footerHTML;

    // Append the footer to the body
    document.body.appendChild(footerDiv);

    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  });
