getAllCustomers();

$('#btnSaveCustomer').click(function () {
    if (checkAll()){
        saveCustomer();
        // console.log(customerdb);
    }else {
        alert("Error When Saving...")
    }
    clearCustomerInputFields();
    clearCusTextFields();

    //getAllCustomers();
})

$('#btnUpdateCus').click(function () {
    let id = $("#InputCID").val();
    updateCustomer(id);
    clearCusTextFields();
    clearCustomerInputFields();
    // getAllCustomers();
})

$('#btnGetAllCus').click(function () {
    getAllCustomers();
})

$("#btnDeleteCustomer").click(function () {
    let id = $("#InputCID").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            clearCusTextFields();
            clearCustomerInputFields();
            getAllCustomers();
            alert("Customer Deleted");
        } else {
            alert("Customer Not Removed..!");
        }
    }


});

function saveCustomer() {
    let customerID = $("#InputCID").val();
    if (searchCustomer(customerID.trim()) == undefined) {

        let customerName = $("#InputName").val();
        let customerAddress = $("#inputAddress").val();
        let customerContact = $("#inputContact").val();

        let newCustomer = Object.assign({}, customer);
        newCustomer.id = customerID;
        newCustomer.name = customerName;
        newCustomer.address = customerAddress;
        newCustomer.contact = customerContact;

        //add customer record to the customer array
        customerdb.push(newCustomer);
        getAllCustomers();
        clearCustomerInputFields();
        clearCusTextFields();
    }
    else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
        clearCusTextFields();
    }
}


function getAllCustomers() {
    $("#tableBodyCus").empty();

    //get all customers
    for (let i = 0; i < customerdb.length; i++) {
        let id = customerdb[i].id;
        let name = customerdb[i].name;
        let address = customerdb[i].address;
        let contact = customerdb[i].contact;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${contact}</td>
                    </tr>`;

        $("#tableBodyCus").append(row);

        bindTrEvents();
    }
}

function bindTrEvents() {
    $('#tableBodyCus>tr').click(function () {
        //get the selected rows data
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let contact = $(this).children().eq(3).text();

        //set the selected rows data to the input fields
        $("#InputCID").val(id);
        $("#InputName").val(name);
        $("#inputAddress").val(address);
        $("#inputContact").val(contact);
    })
}


function searchCustomer(id) {
    return customerdb.find(function (customer) {
        //if the search id match with customer record
        //then return that object
        return customer.id == id;
    });
}

function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);
            //if the customer available can we update.?

            let customerName = $("#InputName").val();
            let customerAddress = $("#inputAddress").val();
            let customerContact = $("#inputContact").val();

            customer.name = customerName;
            customer.address = customerAddress;
            customer.contact = customerContact;

            getAllCustomers();
        }
    }

}

function deleteCustomer(id) {
    for (let i = 0; i < customerdb.length; i++) {
        if (customerdb[i].id == id) {
            customerdb.splice(i, 1);
            return true;
        }
    }
    return false;
}


function clearCusTextFields() {
    $('#InputCID').val('');
    $('#InputName').val('');
    $('#inputAddress').val('');
    $('#inputContact').val('');
}