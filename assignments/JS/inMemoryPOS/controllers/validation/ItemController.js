$('#itemCode').focus();


const itCodeRegEx = /^(It-0)[0-9]{1,3}$/;
const itNameRegEx = /^[A-z]{5,20}$/;
const itUnitPrice = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
const itQuantity = /^[0-9]{1,}$/;



let itemValidation = [];
itemValidation.push({reg: itCodeRegEx, field: $('#itemCode'), error: 'Item Code pattern is  Wrong : (It-0001)'});
itemValidation.push({reg: itNameRegEx, field: $('#itemName'), error: 'Item Name pattern is Wrong : (A-z)'});
itemValidation.push({reg: itUnitPrice, field: $('#itemUnitPrice'), error: 'Item Unit Price pattern is Wrong : (0-9).(0-9){1,2}'});
itemValidation.push({reg: itQuantity, field: $('#itemQuantity'), error: 'Item Quantity pattern is Wrong : 00'});



