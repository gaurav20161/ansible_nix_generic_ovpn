// scripts.js

function isNameAlreadyUsed(name) {
    // Check if the name is already in use in the client_data list
    for (var i = 0; i < client_data.length; i++) {
        if (client_data[i].hostname === name) {
            return true; // Name is already in use
        }
    }
    return false; // Name is not in use
}

function createCertificate() {
    // Add your code to create a new certificate here
    var certificateName = document.getElementById("certificateName").value;

    // Check if the name is already in use
    if (isNameAlreadyUsed(certificateName)) {
        alert("Name is already in use. Please choose a different name.");
    } else {
        // Proceed with certificate creation logic here
        // You can use certificateName to perform the creation.
        // ...

        // Optionally, you can update the client_data list with the new certificate information.
        // client_data.push({ 'hostname': certificateName, 'ip_address': 'new_ip_address' });
    }
}
