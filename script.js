const qrContainer = document.querySelector(".qr-container"),
    qrInput = qrContainer.querySelector(".qr-form input"),
    generateButton = qrContainer.querySelector(".qr-form button"),
    qrImage = qrContainer.querySelector(".generated-qr-code img");

generateButton.addEventListener("click", () => {
    let inputValue = qrInput.value.trim();
    if (!inputValue) return;

    generateButton.innerText = "Generating QR Code...";

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`;
    qrImage.onload = () => {
        generateButton.innerText = "Generate QR Code";
        qrContainer.classList.add("active");
    };
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        qrContainer.classList.remove("active");
    }
});
