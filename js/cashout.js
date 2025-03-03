/*-------------------------Content Transformation-------------------------*/
window.addEventListener("DOMContentLoaded", function () {
  const title = localStorage.getItem("Title") || "N/A";
  const price = localStorage.getItem("Price") || "N/A";
  const style = localStorage.getItem("Style") || "N/A";
  const design = localStorage.getItem("Design") || "N/A";

  const titleElement = document.getElementById("Title");
  const priceElement = document.getElementById("price");
  const styleElement = document.getElementById("Style");
  const designElement = document.getElementById("design");

  if (titleElement) titleElement.textContent = title;
  if (priceElement) priceElement.textContent = price;
  if (styleElement) styleElement.textContent = style;
  if (designElement) designElement.textContent = design;
});
  
  /*-------------------------Registration System-------------------------*/
  document.querySelector('.signUp-btn').addEventListener('click', () => {
    // Get input values and trim whitespaces
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const passwordValue = document.getElementById('password').value.trim();
  
    // Validate fields
    if (!nameValue || !emailValue || !passwordValue) {
      alert('Please fill out all registration fields.');
      return;
    }
  
    // Function to generate a unique 8-character Order ID (uppercase letters and digits)
    function generateOrderId() {
      let OrderId = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      for (let i = 0; i < 8; i++) {
        OrderId += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return OrderId;
    }
  
    // Function to generate a unique 18-character User ID (lowercase letters and digits)
    function generateUserId() {
      let Id = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 18; i++) {
        Id += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return Id;
    }
  
    // Generate IDs
    const uniqueOrderId = generateOrderId();
    const uniqueUserId = generateUserId();
  
    // Populate the respective fields with the generated IDs
    const orderIdElement = document.getElementById('OrderId');
    const userIdElement = document.getElementById('Id');
    if (orderIdElement) orderIdElement.value = uniqueOrderId;
    if (userIdElement) userIdElement.value = uniqueUserId;
  
    // Update other fields based on their proper selectors
    const nameField = document.getElementById('acName');     // For displaying the user's name
    const emailField = document.getElementById('acEmail');    // For displaying the user's email
    const passwordField = document.getElementById('Pass');    // For displaying the user's password
  
    if (nameField) nameField.value = nameValue;
    if (emailField) emailField.value = emailValue;
    if (passwordField) passwordField.value = passwordValue;
  
    // Show loading animation and hide the action button
    const loadingAnimation = document.querySelector('.loading-animation-box');
    const loadActionBtn = document.querySelector('.load-action-btn');
  
    if (loadingAnimation) loadingAnimation.style.display = 'block';
    if (loadActionBtn) loadActionBtn.style.display = 'none';
  
    // Simulate loading and transition to the cash-out section
    setTimeout(() => {
      const signUpSection = document.querySelector('.signUp');
      const cashOutSection = document.querySelector('.cashOut-section');
  
      if (signUpSection) signUpSection.style.display = 'none';
      if (loadingAnimation) loadingAnimation.style.display = 'none';
      if (cashOutSection) cashOutSection.style.display = 'block';
    }, 2000);
  });
  
  /*------------------------------------dynamicTextarea------------------------------------*/
  /*-------------------------Sum All Price-------------------------*/
  window.addEventListener('DOMContentLoaded', () => {
    const priceElement = document.getElementById('price');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('Shipping');
    const totalElement = document.getElementById('Total');
    const payThisPaymentElement = document.querySelector('.pay-this-payment');
  
    const priceValue = parseFloat(priceElement.value.replace(/[^\d.-]/g, '')) || 0;
    const shippingValue = parseFloat(shippingElement.value.replace(/[^\d.-]/g, '')) || 0;
  
    const totalValue = priceValue + shippingValue;
  
    subtotalElement.value = `৳ ${priceValue.toFixed(2)}`;
    totalElement.value = `৳ ${totalValue.toFixed(2)}`;
    payThisPaymentElement.textContent = `Scan the QR code and pay ৳ ${totalValue.toFixed(2)}`;
  });
  
  /*-------------------------Toggle Password Visibility-------------------------*/
  document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      this.textContent = 'Hide';
    } else {
      passwordInput.type = 'password';
      this.textContent = 'Show';
    }
  });
  
  /*-------------------------District to Serial Thana-------------------------*/
  document.getElementById('District').addEventListener('change', function () {
    const district = this.value.toLowerCase().replace(/\s+/g, '-');
    const policeStationOptions = document.querySelectorAll('#Thana option');
  
    policeStationOptions.forEach(option => option.style.display = 'none');
    document.querySelectorAll(`.thana-option.${district}-thana`).forEach(option => option.style.display = 'block');
  });
  
  /*-------------------------Payment Selection System-------------------------*/
  document.addEventListener('DOMContentLoaded', () => {
    const fullPayBtn = document.querySelector('.full-pay-btn');
    const codPayBtn = document.querySelector('.cod-pay-btn');
    const fullPayQr = fullPayBtn.nextElementSibling;
    const codPayQr = codPayBtn.nextElementSibling;
  
    fullPayBtn.classList.add('active');
    fullPayQr.style.display = 'flex';
  
    fullPayBtn.addEventListener('click', () => {
      codPayBtn.classList.remove('active');
      codPayQr.style.display = 'none';
      fullPayBtn.classList.add('active');
      fullPayQr.style.display = 'flex';
    });
  
    codPayBtn.addEventListener('click', () => {
      fullPayBtn.classList.remove('active');
      fullPayQr.style.display = 'none';
      codPayBtn.classList.add('active');
      codPayQr.style.display = 'flex';
    });
  });
  
  /*-------------------------Database Submission-------------------------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbzLrVAJo56dSnuBBSyb_p3DcniOwLfVMGv-YPDHe78NeqHLITOo3_tPcvgNDQSwJy0JWQ/exec';
const scriptURLOne = 'https://script.google.com/macros/s/AKfycbwM4HwOOpy7vAIMgRRJ_zYOkD0BuHr5eS4avSmO3omELVh58yHT9_qaNojLNS68FcqS_Q/exec';
const scriptURLTow = 'https://script.google.com/macros/s/AKfycbw6Zbx9Fr-3JLG5L-t9WLc33Q9ZmmPu0-u58wPCbYHx9IMdqdZtf09CdUdhGIuJJ-DnAQ/exec';

const form = document.forms['submit-to-google-sheet'];
const loadingAnimation = document.querySelector('.loading-animation-box');
const loadingStatus = document.querySelector('.loading-status');
const spinner = document.querySelector('.spinner');
const loadConfirm = document.querySelector('.load-confarm');
const loadError = document.querySelector('.load-error');
const loadActionBtn = document.querySelector('.load-action-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Show loading state
  loadingAnimation.style.display = 'block';
  spinner.style.display = 'block';
  loadConfirm.style.transform = 'scale(0)';
  loadError.style.transform = 'scale(0)';
  loadingStatus.textContent = "Loading, please wait...";
  loadActionBtn.style.display = 'none';

  const formData = new FormData(form);

  Promise.all([
    fetch(scriptURL, { method: 'POST', body: formData }),
    fetch(scriptURLOne, { method: 'POST', body: formData }),
    fetch(scriptURLTow, { method: 'POST', body: formData })
  ])
  .then(async ([response1, response2, response3]) => {
    const json1 = response1.ok ? await response1.json() : null;
    const json2 = response2.ok ? await response2.json() : null;
    const json3 = response3.ok ? await response3.json() : null;

    if (!json1 || !json2 || !json3) {
      throw new Error('One or more submissions failed');
    }

    // Success handling
    spinner.style.display = 'none';
    loadConfirm.style.transform = 'scale(1)';
    loadingStatus.textContent = "Order confirmed!";
    loadActionBtn.style.display = 'flex';
    form.reset();
  })
  .catch((error) => {
    // Error handling
    spinner.style.display = 'none';
    loadError.style.transform = 'scale(1)';
    loadingStatus.textContent = `Error: ${error.message}`;
    loadActionBtn.style.display = 'none';
  });
});

  
/*-----------------------------------------refriesh page-----------------------------------------*/