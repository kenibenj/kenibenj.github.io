// Benjamin Keninger 2023

$(window).on("load", function () { $(".loader").fadeOut("medium"); }); // Fade-in Effect when page is loaded


// Code for switching the background theme of the site
var counter = 0;
function switchTheme() {

    var element = document.getElementById("sun");
    var para = document.getElementsByClassName('para');
    var pageTitle = document.getElementsByClassName('page-title');
    var mainTitle = document.getElementsByClassName('main-title');
    var subTitle = document.getElementsByClassName('sub-title');
    var main = document.getElementsByClassName('main');
    var imageSelector = document.getElementsByClassName('image-selector');
    var label = document.getElementsByTagName('label');
    var textarea = document.getElementsByTagName('textarea');
    var input = document.getElementsByTagName('input');
    var hr = document.getElementsByTagName('hr');
    var mergedCollection = [...para, ...pageTitle, ...mainTitle, ...subTitle, ...main, ...label, ...textarea, ...input, ...hr];
    var mergedInput = [...textarea, ...input]

    $(".loader").fadeIn("medium");
    setTimeout(function(){
        if (counter % 2 == 0) {
            element.classList.add("bi-moon");
            element.classList.remove("bi-sun");
            document.body.style.background = "linear-gradient(to left bottom, rgb(101,101,101), rgb(35,35,35) 70%)";
            document.body.style.backgroundAttachment = "fixed";
            Array.from(mergedCollection).forEach(function (element) {
                element.style.color = 'white';
            });
            Array.from(imageSelector).forEach(function (element) {
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
        }
        else {
            element.classList.add("bi-sun");
            element.classList.remove("bi-moon");
            document.body.style.background = "linear-gradient(to right top, rgb(201,201,201), white 70%)";
            document.body.style.backgroundAttachment = "fixed";
            Array.from(mergedCollection).forEach(function (element) {
                element.style.color = 'black';
            });
            Array.from(imageSelector).forEach(function (element) {
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
        }
        counter++;
        $(".loader").fadeOut("medium");
    }, 400);
}