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
});


