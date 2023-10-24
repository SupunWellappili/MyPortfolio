var items =[];
var itemObject;
$("#btnSaveItem").click(function () {
    let itCode = $('#itemCode').val();
    let itName = $('#itemName').val();
    let itUnitePrice = $('#itemUnitPrice').val();
    let itQuantity = $('#itemQuantity').val();


    itemObject = {
        code: itCode,
        name: itName,
        price: itUnitePrice,
        quantity: itQuantity
    };


    items.push(itemObject);
    bindRowClickEvents();
    getAllCustomer();
});

////////////////////////////////Save & Get All Buttons////////////////////////////////////////////////

function bindRowClickEvents() {
    $('#tblItem>tr').click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let price = $(this).children().eq(2).text();
        let quantity = $(this).children().eq(3).text();

        $('#itCode').val(code);
        $('#itName').val(name);
        $('#itUnitPrice').val(price);
        $('#itQuantity').val(quantity);
    })
};


function getAllCustomer() {
    $('#tblItem').empty();
    for (var i of items) {
        var row = `<tr><td>${i.code}</td><td>${i.name} </td><td>${i.price}</td><td> ${i.quantity}</td></tr>`;
        $('#tblItem').append(row);
    }
}
