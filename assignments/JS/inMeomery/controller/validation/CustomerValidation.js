

// validation for customers
const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const CUS_CONTACT_REGEX = /^(07)[0-9]{8}?$/;

//add validations and text fields to the
let c_vArray = new Array();
c_vArray.push({field: $("#InputCID"), regEx: CUS_ID_REGEX});
c_vArray.push({field: $("#InputName"), regEx: CUS_NAME_REGEX});
c_vArray.push({field: $("#inputAddress"), regEx: CUS_ADDRESS_REGEX});
c_vArray.push({field: $("#inputContact"), regEx: CUS_CONTACT_REGEX});

function clearCustomerInputFields() {
    //$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").val("");
    $("#InputCID,#InputName,#inputAddress,#inputContact").css("border", "1px solid White");
    $("#InputCID").focus();
    setBtn();
}

setBtn();

//disable tab
$("#InputCID,#InputName,#inputAddress,#inputContact").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = c_vArray.indexOf(c_vArray.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(c_vArray[indexNo]);

    setBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != c_vArray[c_vArray.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkValidations(c_vArray[indexNo])) {
                c_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(c_vArray[indexNo])) {
                saveCustomer();
            }
        }
    }
});


function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red", "!Important");
        } else {
            ob.field.css("border", "1px solid white");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid white");
        }
    }

}

function checkAll() {
    for (let i = 0; i < c_vArray.length; i++) {
        if (!checkValidations(c_vArray[i])) return false;
    }
    return true;
}

function setBtn() {
    $("#btnDeleteCustomer").prop("disabled", true);
    $("#btnUpdateCus").prop("disabled", true);

    if (checkAll()) {
        $("#btnSaveCustomer").prop("disabled", false);
    } else {
        $("#btnSaveCustomer").prop("disabled", true);
    }

    let id = $("#InputCID").val();
    if (searchCustomer(id) == undefined) {
        $("#btnDeleteCustomer").prop("disabled", false);
        $("#btnUpdateCus").prop("disabled", true);
    } else {
        $("#btnDeleteCustomer").prop("disabled", false);
        $("#btnUpdateCus").prop("disabled", false);
    }

}