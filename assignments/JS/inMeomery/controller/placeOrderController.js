let OrderPreID="O00-00";
let orderNo=1;

$('#btnPurchase').click(function () {
    if (checkAllPlaceOrder()){
        purchaseOrder();
    }


});


$('#selectCusId').change(function(){ //the event here is change

    for (let i=0; i<customerdb.length; i++){
        if ($(this).val() == customerdb[i].id){
            $('#SelectedCusName').val(customerdb[i].name)
            break;
        }
    }
});



$('#selectItemId').change(function(){ //the event here is change

    for (let i=0; i<itemdb.length; i++){
        if ($(this).val() == itemdb[i].code){
            $('#selectedItemName').val(itemdb[i].description);
            $('#UnitPriceP').val(itemdb[i].unitPrice);
            $('#QtyOnHndP').val(itemdb[i].qtyOnHand)
            break;
        }
    }
});


$('#btnAddToCart').click(function () {
    addToCart();

});

$('#QtyP').keydown(function (event) {
    if (event.key==='Enter'){
        addToCart();
    }
})

$('#inputDiscount').keydown(function (event){

    if (event.key==='Enter'){
        if ($('#inputDiscount').val()!=="0"){
            let fullTotal = subTotal-Number($('#inputDiscount').val());

            $('#inputSubTotal').val(fullTotal);
        }
    }

});

$('#inputCash').keydown(function (event){

    if (event.key==='Enter'){
        let balance = Number($('#inputCash').val())-Number($('#inputSubTotal').val());

        $('#inputBalance').val(balance);
        //purchaseOrder();
    }

});


function loadCusIds() {
    var optionCus = '';
    for (var i = 0; i < customerdb.length; i++) {
        optionCus += '<option value="' + customerdb[i].id + '">' + customerdb[i].id + '</option>';
    }
    $('#selectCusId').append(optionCus);
}

function loadItemIds() {
    var optionItem = '';
    for (var i = 0; i < itemdb.length; i++) {
        optionItem += '<option value="' + itemdb[i].code + '">' + itemdb[i].code + '</option>';
    }
    $('#selectItemId').append(optionItem);
}

function setOrderId() {
    $('#InputOID').val(OrderPreID+orderNo);
    console.log(Number(orderNo));
}


function clearFields() {
    $("#SelectedCusName").val("");
    $("#selectedItemName").val("");
    $("#UnitPriceP").val("");
    $("#QtyOnHndP").val("");
    $("#QtyP").val("");
    $("#tblCartBody").empty();
    $("#inputSubTotal").val("");
    $("#inputTotal").val("");
    $("#inputDiscount").val("");
    $("#inputCash").val("");

}

function purchaseOrder() {
    let IdOfOrder = $('#InputOID').val();
    let dateOfOrder=$('#InputDate').val();
    let cusIDOfOrder=$('#selectCusId').val();
    let cartDetails=cartItemsdb;

    let newOrder=Object.assign({},orderob);
    newOrder.id=IdOfOrder;
    newOrder.date=dateOfOrder;
    newOrder.customerId=cusIDOfOrder;
    newOrder.cartDetail=cartDetails;

    orderdb.push(newOrder);



    orderNo++;
    setOrderId();
    console.log(orderNo);

    cartItemsdb=[];
    alert("order Placed Succesfully !");
    clearFields();
}

function addToCart() {
    subTotal=0;
    let oItemID = $("#selectItemId").val();
    let oDesc = $("#selectedItemName").val();
    let oUnitPrice = $("#UnitPriceP").val();
    let oQty = $("#QtyP").val();
    let oTotal = oUnitPrice*oQty;

    let newCart = Object.assign({}, cartOb);
    newCart.IID = oItemID;
    newCart.IName = oDesc;
    newCart.IUnitPrice = oUnitPrice;
    newCart.IQty = oQty;
    newCart.ITotal = oTotal;

    //add customer record to the customer array
    cartItemsdb.push(newCart);
    for (let i = 0; i < itemdb.length; i++) {
        if(itemdb[i].code==oItemID){
            itemdb[i].qtyOnHand=itemdb[i].qtyOnHand-oQty;
        }
    }


    //create row and add text field values
    let row=`<tr>
                    <td>${newCart.IID}</td>
                    <td>${newCart.IName}</td>
                    <td>${newCart.IUnitPrice}</td>
                    <td>${newCart.IQty}</td>
                    <td>${newCart.ITotal}</td>
                   </tr>`;
    //and then append the row to tableBody
    $("#tblCartBody").append(row);

    for (let i = 0; i <= cartItemsdb.length; i++) {
        subTotal+=cartItemsdb[i].ITotal;
        $('#inputTotal').val(parseInt(subTotal));
        console.log(parseInt(subTotal));
    }
}