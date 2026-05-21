function copyEmail() {

    const email = "dhanushmohanpakkam@gmail.com";

    const tempInput = document.createElement("input");
    tempInput.value = email;

    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    const message = document.getElementById("copy-message");

    message.textContent = "Email copied!";

    setTimeout(() => {
        message.textContent = "";
    }, 2000);
}

console.log("Cloud Portfolio Loaded Successfully");