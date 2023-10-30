function getAllOrders() {
    $("#tblBodyOrders").empty();

    //get all customers
    for (let i = 0; i < orderdb.length; i++) {
        let id = orderdb[i].id;
        let date = orderdb[i].date;
        let cuID = orderdb[i].customerId;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${date}</td>
                     <td>${cuID}</td>
            
                    </tr>`;

        $("#tblBodyOrders").append(row);

    }
}