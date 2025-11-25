const input = document.getElementById("qr-input");
const btn = document.getElementById("qr-generate");
const output = document.getElementById("qr-output");
const downloadBtn = document.getElementById("qr-download");

let qr;

btn.onclick = () => {
    const text = input.value.trim();

    if (!text) return;

    qr = new QRious({
        element: document.createElement("canvas"),
        value: text,
        size: 220,
        background: "#000000",
        foreground: "#00ff66"
    });

    output.innerHTML = "";
    output.appendChild(qr.element);

    downloadBtn.style.display = "inline-block";
};

downloadBtn.onclick = () => {
    if (!qr) return;

    const link = document.createElement("a");
    link.download = "qr.png";
    link.href = qr.toDataURL("image/png");
    link.click();
};

