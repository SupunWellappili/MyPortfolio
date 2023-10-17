
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

    $('#custId,#custName,#custAddress,#custSalary').on('keydown', function (event) {
        if (event.key == "Tab") {
            event.preventDefault();
        }
    })

//////////////////////////////////Row data Remove///////////////////////////////////////////

    $('#tblCustomer>tr').on('dblclick', function () {
        //this.remove();
        $(this).remove();
    });

});

///////////////////////////////////Search controller////////////////////////////////////////////////

$('#custId').on('keydown', function (event) {
    if (event.code == "Enter") {
        let typedId = $('#custId').val();
        let customer = searchCustomer(typedId);
        if (customer != null) {
            setTextFiledValues(customer.id, customer.name, customer.address, customer.salary)
        } else {
            alert("There id no Customer available for that " + typedId);
            setTextFiledValues("", " ", "", "")
        }
    }
});

function setTextFiledValues(id, name, address, salary) {
    $('#custId').val(id);
    $('#custName').val(name);
    $('#custAddress').val(address);
    $('#custSalary').val(salary);
};


function searchCustomer(custId) {
    for (let customer of customers) {
        if (customer.id == custId) {
            return customer;
        }
    }
    return null;
};








