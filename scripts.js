// Benjamin Keninger 2023

$(window).on("load", function () {
    $(".loader").fadeOut("medium"); // Fade-in Effect when page is loaded

    var theme = sessionStorage.getItem("theme"); // Tracks what theme has been used so far
    if (theme == "dark"){
        themeChanges();
    }
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

    if (counter % 2 == 0) {
        sessionStorage.setItem("theme", "dark");
        element.classList.add("bi-moon");
        element.classList.remove("bi-sun");
        document.body.style.background = "linear-gradient(to left bottom, rgb(101,101,101), rgb(35,35,35) 70%)";
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
    }
    Array.from(cardHr).forEach(function (element) {
        element.style.color = 'white';
    });
    counter++;
}
