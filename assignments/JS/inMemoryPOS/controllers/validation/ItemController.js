$('#itemCode').focus();


const itCodeRegEx = /^(It-0)[0-9]{1,3}$/;
const itNameRegEx = /^[A-z ]{5,20}$/;
const itUnitPrice = /^[0-9]{0,}[.]?[0-9]{1,2}$/;
const itQuantity = /^[0-9]{1,}$/;



let itemValidation = [];
itemValidation.push({reg: itCodeRegEx, field: $('#itemCode'), error: 'Item Code pattern is  Wrong : (It-0001)'});
itemValidation.push({reg: itNameRegEx, field: $('#itemName'), error: 'Item Name pattern is Wrong : (A-z)'});
itemValidation.push({reg: itUnitPrice, field: $('#itemUnitPrice'), error: 'Item Unit Price pattern is Wrong : (0-9).(0-9){1,2}'});
itemValidation.push({reg: itQuantity, field: $('#itemQuantity'), error: 'Item Quantity pattern is Wrong : 00'});



$('#itemCode,#itemName,#itemUnitPrice,#itemQuantity').on('keyup', function (event) {
    checkValidationItem();
})

function checkValidationItem() {
    let errorCount = 0;
    for (let validation of itemValidation) {
        if (validation.reg.test(validation.field.val())) {
            // if (check(validation.reg, validation.field)) {
            textSuccessItem(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setTextErrorItem(validation.field, validation.error);
        }
    }
    setButtonStateItem(errorCount);
}


function setButtonStateItem(value) {
    if (value > 0) {
        // $('#btnSave').attr('disabled', true);
    } else {
        $('#btnSave').attr('disable', false);
    }
}


function check(regex, txtFiled) {
    let inputValue = txtFiled.val();
    return regex.text(inputValue) ? true : false;
}


function setTextErrorItem(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textSuccessItem(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}


function defaultText(txtField) {
    txtField.css('border', '2px solid black');
    txtField.parent().children('span').text(error);
}


/*
function focusText(txtField) {
    txtField.focus();
}*/




