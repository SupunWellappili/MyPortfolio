
$('#custId').focus();


const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z]{5,20}$/;
const custAddressRegEx =/^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx =/^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidation =[];
customerValidation.push({reg: cusIDRegEx, field: $('#custId'),error:'Customer ID pattern is  Wrong : (C00-001)'});
customerValidation.push({reg: cusNameRegEx, field: $('#custName'),error: 'Customer Name pattern is Wrong : (A-z)'});
customerValidation.push({reg: custAddressRegEx, field: $('#custAddress'),error: 'Customer Address pattern is Wrong : (0-9/a-z)'});
customerValidation.push({reg:cusSalaryRegEx,field:$('#custSalary'),error: 'Customer Salary pattern is Wrong : (0-9).(0-9){1,2}'});

