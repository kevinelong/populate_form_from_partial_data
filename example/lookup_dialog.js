function showLookupDialog() {
    alert('Imagine a contact picker here that calls the callback passing an object with key value pairs.');
    var source_data_example = {
        "id": "123",
        "username": "user1",

        "fname": "John",
        "mname": "E",
        "lname": "Doe",

        "email": "jdoe@example.com",

        "organization": "XYZ CORP",

        "street": "111 Pine Ct",
        "streetb": "Apt 1",
        "city": "Columbia City",
        "state": "OR",
        "zip": "97018",

        "street2": "123 Main ST East",
        "streetb2": "Upstairs at Erics",
        "city2": "Portland",
        "state2": "OR",
        "zip2": "12345",

        "phone": "555-888-8888",
        "fax": "555-000-1212",
        "phonew1": "555-111-1212",
        "phonew2": "555-222-1212",
        "phonecell": "555-333-1212",
        "phone_number": "555-999-1212"
    };

    lookUpCallBack(source_data_example);
}