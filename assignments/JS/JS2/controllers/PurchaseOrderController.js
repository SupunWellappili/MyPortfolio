
/////////////////////////////cust ID//////////////////////////////////////////////////
function loadAllCustomerForOption() {
    // console.log(customers);
    $('#orderCustID').empty();
    for (let cus of customers) {
        $('#orderCustID').append(`<option>${cus.id}</option>`);
    }
}


/////////////////////////////Item Code//////////////////////////////////////////////////

function loadAllItemForOption(){
    // console.log(items);
    $('#orderItemCode').empty();
    for (let item of items) {
        $('#orderItemCode').append(`<option>${item.code}</option>`);
    }
}