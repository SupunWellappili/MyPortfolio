var items = [];
var itemObject;

////////////////////////////////Item Save & Get All Buttons////////////////////////////////////////////////
$('#btnSaveItem').click(function () {
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
    getAllItem();
    bindRowItemClickEvents();
    getSearchItem();


//////////////////////////////////Customer Table///////////////////////////////////////////

    $('#itemCode,#itemName,#itemUnitPrice,#itemQuantity').on('keydown', function (event) {
        if (event.key == "Tab") {
            event.preventDefault();
        }
    })


//////////////////////////////////Item Row data Remove///////////////////////////////////////////

    $('#tblItem>tr').on('dblclick', function () {
        // this.remove();
        $(this).remove();
    });

//////////////////////////////////table Row On click ///////////////////////////////////////////
    function bindRowItemClickEvents() {
        $('#tblItem>tr').click(function () {
            let code = $(this).children().eq(0).text();
            let name = $(this).children().eq(1).text();
            let price = $(this).children().eq(2).text();
            let quantity = $(this).children().eq(3).text();

            $('#itemCode').val(code);
            $('#itemName').val(name);
            $('#itemUnitPrice').val(price);
            $('#itemQuantity').val(quantity);
        })
    }

});


function getAllItem() {
    $('#tblItem').empty();
    for (var i of items) {
        var row = `<tr><td>${i.code}</td><td>${i.name} </td><td>${i.price}</td><td> ${i.quantity}</td></tr>`;
        $('#tblItem').append(row);
    }
}

///////////////////////////////////Item Search controller////////////////////////////////////////////////
$('#btnSearchItem').click(function () {
    getSearchItem();
});


$('#itemCode').on('keydown', function (event) {
    if (event.code == "Enter") {
        getSearchItem()
    }
});


function getSearchItem() {
    let typedCode = $('#itemCode').val();
    let item = searchItem(typedCode);
    if (item != null) {
        setTextFiledValuesItem(item.code, item.name, item.price, item.quantity)
    } else {
        alert("There id no Item available for that " + typedCode);
        setTextFiledValuesItem("", " ", "", "")
    }
}

function setTextFiledValuesItem(code, name, price, quantity) {
    $('#itemCode').val(code);
    $('#itemName').val(name);
    $('#itemUnitPrice').val(price);
    $('#itemQuantity').val(quantity);
};


function searchItem(itemCode) {
    for (let item of items) {
        if (item.code == itemCode) {
            return item;
        }
    }
    return null;
};


////////////////////////////////Item Delete Button////////////////////////////////////////////////


$("#btnDeleteItem").click(function () {
    let deleteCode = $('#itemCode').val();
    let option = confirm("Do you really want to delete " + deleteCode);
    if (option) {
        if (deleteItem(deleteCode)) {
            alert("Item Successfully Deleted..");
            setTextFiledValues("", " ", "", "")
        } else {
            alert("No such Item to delete. please check the Code");
        }
    }
});


///////////////////////////////////Item Delete controller////////////////////////////////////////////////

function deleteItem(itemCode) {
    let item = searchItem(itemCode);
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        getAllItem();
        return true;
    } else {
        return false;
    }
}


