

///////////////////////////////////Loading Time////////////////////////////////////////////////


$(window).on('load', function () {
    // console.log("Window in load");
    // $('#loader').css('display', 'none');
    $('#loader').fadeOut(5000);
});

//////////////////////////////////////////////////////////////////////////////////

let navBar = document.querySelector("#nav-bar");

let homePage = document.querySelector("#home-page");
let cusPage = document.querySelector("#customer-page");
let itemPage = document.querySelector("#item-page");
let orderPage = document.querySelector("#order-page");

let navHome = document.querySelector("#nav-home");
let navCus = document.querySelector("#nav-cus");
let navItem = document.querySelector("#nav-item");
let navOrder = document.querySelector("#nav-order");


let homeCus = document.querySelector("#home-cus");
let homeItem = document.querySelector("#home-item");
let homeOrder = document.querySelector("#home-order");


navBar.style.display = 'block';
homePage.style.display = 'block';
cusPage.style.display = 'none';
itemPage.style.display = 'none';
orderPage.style.display = 'none';


homeCus.addEventListener("click", function () {
    navBar.style.display = 'block';
    cusPage.style.display = 'block';
    homePage.style.display = 'none';
    itemPage.style.display = 'none';
    orderPage.style.display = 'none';
});


homeItem.addEventListener("click", function () {
    navBar.style.display = 'block';
    itemPage.style.display = 'block';
    cusPage.style.display = 'none';
    orderPage.style.display = 'none';
    homePage.style.display = 'none';
});


homeOrder.addEventListener("click", function () {
    navBar.style.display = 'block';
    orderPage.style.display = 'block';
    cusPage.style.display = 'none';
    itemPage.style.display = 'none';
    homePage.style.display = 'none';
});


navHome.addEventListener("click", function () {
    navBar.style.display = 'block';
    homePage.style.display = 'block';
    cusPage.style.display = 'none';
    itemPage.style.display = 'none';
    orderPage.style.display = 'none';
});


navCus.addEventListener("click", function () {
    navBar.style.display = 'block';
    cusPage.style.display = 'block';
    homePage.style.display = 'none';
    itemPage.style.display = 'none';
    orderPage.style.display = 'none';
});

navItem.addEventListener("click", function () {
    navBar.style.display = 'block';
    itemPage.style.display = 'block';
    cusPage.style.display = 'none';
    homePage.style.display = 'none';
    orderPage.style.display = 'none';
});

navOrder.addEventListener("click", function () {
    navBar.style.display = 'block';
    orderPage.style.display = 'block';
    itemPage.style.display = 'none';
    cusPage.style.display = 'none';
    homePage.style.display = 'none';
});


