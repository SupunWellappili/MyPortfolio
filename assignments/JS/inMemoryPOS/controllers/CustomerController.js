
var customers= [];// Create a Array in global Scope
var customerObject;

$('#btnSave').click(function () {
    let customerID = $('#custId').val();
    let customerName = $('#custName').val();
    let customerAddress = $('#custAddress').val();
    let customerSalary = $('#custSalary').val();


    customerObject = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    }

    customers.push(customerObject);



//////////////////////////////////Customer Table///////////////////////////////////////////

    function getAllCustomer() {
        $('#tblCustomer').empty();
        for (var i of customers) {
            var row = `<tr><td>${i.id}</td><td>${i.name} </td><td>${i.address}</td><td> ${i.salary}</td></tr>`;

            $('#tblCustomer').append(row);
        }
    }


    getAllCustomer();

});





