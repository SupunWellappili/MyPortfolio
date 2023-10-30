
/*
$('#orderCode').focus();

const ordCodeRexEx=/^(Ord-0)[0-9]{1,3}$/;
const qtyOnHandRexEx =/^[0-9]{1,}$/;

*/





$("#nav-order").click(function () {
    getAllCustomer();
    getAllItem();
});


function

$('#orderCustID').click(function (){
    var customer = getSearchCustomer($(this).val());
    $('#orderCustName').val(customer.name);
    $('#orderCustSalary').val(customer.salary);
    $('#orderCustAddress').val(customer.address);
});