function loadAllCustomerForOption() {
    // console.log(customers);
    $('#orderCustID').empty();
    for (let cus of customers) {
        $('#orderCustID').append(`<option>${cus.id}</option>`);
    }

}