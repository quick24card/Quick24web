/*-----------------------buy click to cash out .html-----------------------*/
document.querySelector(".buy-now-btn").addEventListener("click", function () {
    // Get the values
    const title = document.querySelector(".p-title").textContent.trim();
    const price = document.querySelector(".p-price.sell").textContent.trim();
    const style = document.querySelector('input[name="style"]:checked').value;

    // Store values in localStorage
    localStorage.setItem("Title", title);
    localStorage.setItem("Price", price);
    localStorage.setItem("Style", style);
});

/*-----------------------------quick logo with and without-----------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const priceElement = document.querySelector(".p-price.price");
    const sellElement = document.querySelector(".p-price.sell");
    const styleRadios = document.querySelectorAll('input[name="style"]');
    
    const basePrice = 1350; // Base price
    const baseSell = 600;  // Base sell price

    function updatePrices() {
        let priceMultiplier = 1; // No additional percentage by default
        let sellMultiplier = 1;

        // Check if "With Quick logo" is selected
        if (document.querySelector('input[name="style"]:checked').value === "Without Quick logo") {
            priceMultiplier += 0.25;
            sellMultiplier += 0.25;
        }

        // Update price and sell values
        priceElement.textContent = `৳ ${(basePrice * priceMultiplier).toFixed(2)}`;
        sellElement.textContent = `৳ ${(baseSell * sellMultiplier).toFixed(2)}`;
    }

    // Add event listeners to style and design radio buttons
    styleRadios.forEach(radio => {
        radio.addEventListener("change", updatePrices);
    });

    designRadios.forEach(radio => {
        radio.addEventListener("change", updatePrices);
    });

    // Initialize prices
    updatePrices();
});


/*-----------------------------------------------sub products-----------------------------------------------*/
function changeMainModel(modelSrc, element) {
    const mainModel = document.getElementById('main-model');
    mainModel.src = modelSrc;
  
    // Use const for sub-products collection
    const subProducts = document.querySelectorAll('.sub-product');
  
    // Reset all sub-products to default styling
    subProducts.forEach(el => {
      el.style.borderColor = '#00000050'; // Default border color
      el.style.transform = 'scale(1)';
      el.style.transition = 'transform 0.2s ease'; // Smooth scaling animation
    });
  
    // Apply active styling to clicked element
    element.style.borderColor = '#f6b544'; // Active border color
    element.style.transform = 'scale(1.1)';
  }
  
  // Initialize first sub-product on load
  document.addEventListener('DOMContentLoaded', () => {
    const subProducts = document.querySelectorAll('.sub-product');
    if (subProducts.length > 0) {
      const firstProduct = subProducts[0];
      const modelSrc = firstProduct.onclick.toString()
        .match(/changeMainModel\('(.*?)',/)[1];
      changeMainModel(modelSrc, firstProduct);
    }
  });