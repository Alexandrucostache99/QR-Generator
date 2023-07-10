const wrapper = document.querySelector(".wrapper");
const generateBtn = document.querySelector(".form button");
const qrInput = document.querySelector(".form input");
const qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", generateQRCode);

qrInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    generateQRCode();
  }
});

function generateQRCode() {
  let qrValue = qrInput.value;
  if (!qrValue) return;

  generateBtn.innerText = "Generating QR Code...";
  

  setTimeout(() => {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  }, 1000); 
};
    
    
    
    
    
    
    
    
