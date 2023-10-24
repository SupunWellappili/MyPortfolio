var customers = [];// Create a Array in global Scope
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
    getAllCustomer();
    bindRowClickEvents();
    getSearchCustomer();


//////////////////////////////////Customer Table///////////////////////////////////////////



    $('#custId,#custName,#custAddress,#custSalary').on('keydown', function (event) {
        if (event.key == "Tab") {
            event.preventDefault();
        }
    })


    //////////////////////////////////Row data Remove///////////////////////////////////////////

    $('#tblCustomer>tr').on('dblclick', function () {
        //this.remove();
        $(this).remove();
    })


    //////////////////////////////////table Row On click ///////////////////////////////////////////

    function bindRowClickEvents() {
        $('#tblCustomer>tr').click(function () {
            let id = $(this).children().eq(0).text();
            let name = $(this).children().eq(1).text();
            let address = $(this).children().eq(2).text();
            let salary = $(this).children().eq(3).text();


            $('#custId').val(id);
            $('#custName').val(name);
            $('#custAddress').val(address);
            $('#custSalary').val(salary);

        })

    }
});


function getAllCustomer() {
    $('#tblCustomer').empty();
    for (var i of customers) {
        var row = `<tr><td>${i.id}</td><td>${i.name} </td><td>${i.address}</td><td> ${i.salary}</td></tr>`;

        $('#tblCustomer').append(row);
    }
}


///////////////////////////////////Search controller////////////////////////////////////////////////

$('#btnGet').click(function () {
    getSearchCustomer();
});


$('#custId').on('keydown', function (event) {
    if (event.code == "Enter") {
        getSearchCustomer();
    }
});


function getSearchCustomer() {
    let typedId = $('#custId').val();
    let customer = searchCustomer(typedId);
    if (customer != null) {
        setTextFiledValues(customer.id, customer.name, customer.address, customer.salary)
    } else {
        alert("There id no Customer available for that " + typedId);
        setTextFiledValues("", " ", "", "")
    }

}

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



////////////////////////////////Delete Button////////////////////////////////////////////////


$("#btnDelete").click(function () {
    let deleteId = $('#custId').val();
    let option = confirm("Do you really want to delete " + deleteId);
    if (option) {
        if (deleteCustomer(deleteId)) {
            alert("Customer Successfully Deleted..");
            setTextFiledValues("", " ", "", "")
        } else {
            alert("No such customer to delete. please check the ID");
        }
    }
});


///////////////////////////////////Delete controller////////////////////////////////////////////////

function deleteCustomer(custId) {
    let customer = searchCustomer(custId);
    if (customer != null) {
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
         getAllCustomer();
        return true;
    } else {
        return false;
    }
}







