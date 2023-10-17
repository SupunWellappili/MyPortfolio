
var customers= [];// Create a Array in global Scope
var customerObject;

$('btnSave').click(function () {
    let customerID = $('cusId').val();
    let customerName = $('custName').val();
    let customerAddress = $('custAddress').val();
    let customerSalary = $('custSalary').val();


    customerObject = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    }

    customers.push(customerObject);
});
