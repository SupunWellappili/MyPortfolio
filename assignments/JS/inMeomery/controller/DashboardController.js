
initiateUI();

function initiateUI() {
    clearAll();
    $("#home").css("display", "block");
    setTheLastView();
}

function saveLastView(clickedID) {
    switch (clickedID) {
        case "home":
            localStorage.setItem("view", "HOME");
            break;
        case "customer":
            localStorage.setItem("view", "CUSTOMER");
            break;
        case "item":
            localStorage.setItem("view", "ITEM");
            break;
        case "orders":
            localStorage.setItem("view", "ORDER");
            break;
        case "placeOrder":
            localStorage.setItem("view", "PLACEORDER");
            break;
    }
}

function setTheLastView() {
    let view = localStorage.getItem("view");
    switch (view) {
        case "HOME":
            setView($("#home"));
            break;
        case "ITEM":
            setView($("#item"));
            break;
        case "CUSTOMER":
            setView($("#customer"));
            break;
        case "ORDER":
            setView($("#orders"));
            break;
        case "PLACEORDER":
            setView($("#placeOrder"));
            break;
        default:
            setView($("#home"));
    }
}

function clearAll() {
    $("#home,#customer,#item,#orders,#placeOrder").css('display', 'none');
}

function setView(viewOb) {
    clearAll();
    viewOb.css("display", "block");
    saveLastView(viewOb.get(0).id);
    console.log(viewOb.get(0).id);
}

//bind events
$("#btnHome").click(function () {
    setView($("#home"));
});

$("#btnCustomer").click(function () {
    setView($("#customer"));
});

$("#btnItem").click(function () {
    setView($("#item"));
});

$("#btnOrders").click(function () {
    setView($("#orders"));
    getAllOrders();
});

$("#btnPlaceOrder").click(function () {
    setView($("#placeOrder"));
    loadCusIds();
    loadItemIds();
    setOrderId();

});