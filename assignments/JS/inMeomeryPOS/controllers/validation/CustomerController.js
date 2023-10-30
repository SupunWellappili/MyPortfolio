$('#custId').focus();


const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidation = [];
customerValidation.push({reg: cusIDRegEx, field: $('#custId'), error: 'Customer ID pattern is  Wrong : (C00-001)'});
customerValidation.push({reg: cusNameRegEx, field: $('#custName'), error: 'Customer Name pattern is Wrong : (A-z)'});
customerValidation.push({reg: cusAddressRegEx, field: $('#custAddress'), error: 'Customer Address pattern is Wrong : (0-9/a-z)'});
customerValidation.push({reg: cusSalaryRegEx, field: $('#custSalary'), error: 'Customer Salary pattern is Wrong : (0-9).(0-9){1,2}'});


$('#custId,#custName,#custAddress,#custSalary').on('keyup', function (event) {
    checkValidation();
})

function checkValidation() {
    let errorCount = 0;
    for (let validation of customerValidation) {
        if (validation.reg.test(validation.field.val())) {
            // if (check(validation.reg, validation.field)) {
            textSuccess(validation.field, "");
        } else {
            errorCount = errorCount + 1;
            setTextError(validation.field, validation.error);
        }
    }
    setButtonState(errorCount);
}


function setButtonState(value) {
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


function setTextError(txtField, error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField, "");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textSuccess(txtField, error) {
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







