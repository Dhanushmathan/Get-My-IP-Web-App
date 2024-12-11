// Get the ip address for this url: https://ipv4.icanhazip.com/
const ipAddressPlaceholder = document.querySelector("#ipAddress");
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        ipAddressPlaceholder.textContent = xhr.responseText;
    }
};

xhr.open("GET", "https://ipv4.icanhazip.com/", true)
xhr.send()
