// validation for item
const ITEM_CODE_REGEX = /^(I00-)[0-9]{3}$/;
const ITEM_NAME_REGEX = /^[A-Za-z ]{3,}$/;
const ITEM_QTY_REGEX = /^[0-9]+$/;
const ITEM_PRICE_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

//add validations and text fields to the
let i_vArray = new Array();
i_vArray.push({field: $("#InputItemID"), regEx: ITEM_CODE_REGEX});
i_vArray.push({field: $("#InputDesc"), regEx: ITEM_NAME_REGEX});
i_vArray.push({field: $("#inputUnitPrice"), regEx: ITEM_PRICE_REGEX});
i_vArray.push({field: $("#inputQty"), regEx: ITEM_QTY_REGEX});

function clearItemInputFields() {
    $("#InputItemID,#InputDesc,#inputUnitPrice,#inputQty").val("");
    $("#InputItemID,#InputDesc,#inputUnitPrice,#inputQty").css("border", "1px solid white");
    $("#InputItemID").focus();
    setItemBtn();
}

setItemBtn();

//disable tab
$("#InputItemID,#InputDesc,#inputUnitPrice,#inputQty").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = i_vArray.indexOf(i_vArray.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkItemValidations(i_vArray[indexNo]);

    setItemBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != i_vArray[i_vArray.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkItemValidations(i_vArray[indexNo])) {
                i_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkItemValidations(i_vArray[indexNo])) {
                saveItem();
            }
        }
    }
});


function checkItemValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setItemBorder(true, object)
         return true;
    }
    setItemBorder(false, object)
    return false;
}

function setItemBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
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

function checkAllItems() {
    for (let i = 0; i < i_vArray.length; i++) {
        if (!checkItemValidations(i_vArray[i])) return false;
    }
    return true;
}

function setItemBtn() {
    $("#btnDeleteItem").prop("disabled", true);
    $("#btnUpdateItem").prop("disabled", true);

    if (checkAllItems()) {
        $("#btnSaveItem").prop("disabled", false);
    } else {
        $("#btnSaveItem").prop("disabled", true);
    }

    let code = $("#InputItemID").val();
    if (searchItem(code) == undefined) {
        $("#btnDeleteItem").prop("disabled", false);
        $("#btnUpdateItem").prop("disabled", true);
    } else {
        $("#btnDeleteItem").prop("disabled", false);
        $("#btnUpdateItem").prop("disabled", false);
    }

}