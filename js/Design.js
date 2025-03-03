document.querySelector('.logIn-btn').addEventListener('click', async function () {
  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;
  const load = document.querySelector('.loading-animation-box');
  const errorMsg = document.querySelector('.error-msg');
  const loginS = document.querySelector('.logIn');
  const designS = document.querySelector('.design-section');

  const sheetId = "1GOKMUAeNefOMPE8KflSIqeoodHYFesaD6aJgRGCi5Ng";
  const apiKey = "AIzaSyACww_yoqNc1ZnF14GTf-WmOR0_gYO8bms";
  const sheetRange = "card";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}?key=${apiKey}`;

  try {
      const response = await fetch(url);
      const data = await response.json();

      // Process Google Sheets data
      const rows = data.values;
      const headers = rows[0];
      const records = rows.slice(1).map(row =>
          headers.reduce((obj, key, i) => {
              obj[key] = row[i] || "";
              return obj;
          }, {})
      );
      // Validate login data
      const user = records.find(
          (record) =>
              record.Email === emailInput && record.Password === passwordInput
      );
      console.log("loading");
      if (user) {
          load.style.display = 'flex';
          setTimeout(() => {
              load.style.display = 'none';
              errorMsg.style.display = 'none';
              loginS.style.display = 'none';
              designS.style.display = 'block';
              console.log("loading compleate");
              
              document.querySelector('textarea[name="UserId"]').value = user.UserId || "";
              document.querySelector('textarea[name="Id"]').value = user.Id || "";
              document.querySelector('textarea[name="Name"]').value = user.Name || "";
              document.querySelector('textarea[name="Email"]').value = user.Email || "";
              document.querySelector('textarea[name="Password"]').value = user.Password || "";

              document.getElementById('ctName').value = user.ctName || "";
              document.getElementById('ctProfessionOne').value = user.ctProfessionOne || "";
              document.getElementById('ctProfessionTow').value = user.ctProfessionTow || "";
              document.getElementById('ctProfessionThree').value = user.ctProfessionThree || "";
              document.getElementById('ctphOne').value = user.ctPhOne || "";
              document.getElementById('ctphTow').value = user.ctPhTow || "";
              document.getElementById('ctEmail').value = user.ctEmail || "";
              document.getElementById('ctAddress').value = user.ctAddress || "";

              console.log("Data has been successfully filled!");
          }, 2000);
      } else {
          load.style.display = 'flex';
          setTimeout(() =>{
              load.style.display = 'none';
              errorMsg.style.display = 'block';
              loginS.style.display = 'block';
              designS.style.display = 'none';
              console.log("error");
              console.error("Invalid email or password!");
          }, 2000)
      }
  } catch (error) {
      console.error("Error fetching data from Google Sheets API:", error);
  }
});
// save content
const scriptURL = 'https://script.google.com/macros/s/AKfycbwM4HwOOpy7vAIMgRRJ_zYOkD0BuHr5eS4avSmO3omELVh58yHT9_qaNojLNS68FcqS_Q/exec'
const form = document.forms['submit-to-google-sheet']
const loadingAnimation = document.querySelector('.loading-animation-box');
const loadingStatus = document.querySelector('.loading-status');
const spinner = document.querySelector('.spinner');
const loadConfarm = document.querySelector('.load-confarm');
const loadError = document.querySelector('.load-error');
const lodActionBtn = document.querySelector('.load-action-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Show loading animation
  loadingAnimation.style.display = 'block';
  spinner.style.display = 'block';
  loadingStatus.textContent = "Loading, please wait...";
  lodActionBtn.style.display = 'none';

  // Submit the form data
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      if (response.ok) {
        // Hide loading animation
        // loadingAnimation.style.display = 'none';
        // Confirm order
        spinner.style.display = 'none';
        loadConfarm.style.scale = '1';
        loadingStatus.textContent = "Submitted successfully.";
        lodActionBtn.style.display = 'flex';
        
        // Optionally clear the form
        form.reset();
      } else {
        throw new Error('Failed to submit. Please try again.');
      }
    })
    .catch((error) => {
      // Hide loading animation
      loadingAnimation.style.display = 'none';
      // Show error message
      loadError.style.scale ='1';
      loadError.style.color ='#ff0000';
      loadingStatus.textContent = `Error: ${error.message}`;
    });
});
const scriptURLOne = 'https://script.google.com/macros/s/AKfycbw6Zbx9Fr-3JLG5L-t9WLc33Q9ZmmPu0-u58wPCbYHx9IMdqdZtf09CdUdhGIuJJ-DnAQ/exec'
  const formOne = document.forms['submit-to-google-sheet']

  formOne.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURLOne, { method: 'POST', body: new FormData(formOne)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
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
/*----------------------------------card design----------------------------------*/
const ctn = document.getElementById('ctName');
const displayCtn = document.getElementById('display-ctn');
const displayCtnOne = document.getElementById('display-ctn-one');

// Update the top box content whenever the input changes
ctn.addEventListener('input', () => {
  displayCtn.textContent = ctn.value;
  displayCtnOne.textContent = ctn.value;
});

/*-----------profession input-----------*/
const ctpOne = document.getElementById('ctProfessionOne');
const displayCtpOne = document.getElementById('display-ctp-one');
const displayCtpOneOne = document.getElementById('display-ctp-one-one');

// Update the top box content whenever the input changes
ctpOne.addEventListener('input', () => {
  displayCtpOne.textContent = ctpOne.value;
  displayCtpOneOne.textContent = ctpOne.value;
});
/*-----------profession input tow-----------*/
const ctpTow = document.getElementById('ctProfessionTow');
const displayCtpTow = document.getElementById('display-ctp-tow');
const displayCtpTowTow = document.getElementById('display-ctp-tow-tow');

// Update the top box content whenever the input changes
ctpTow.addEventListener('input', () => {
  displayCtpTow.textContent = ' | ' + ctpTow.value;
  displayCtpTowTow.textContent = ' | ' + ctpTow.value;
});
/*-----------profession input Three-----------*/
const ctpThree = document.getElementById('ctProfessionThree');
const displayCtpThree = document.getElementById('display-ctp-three');
const displayCtpThreeThree = document.getElementById('display-ctp-three-three');

// Update the top box content whenever the input changes
ctpThree.addEventListener('input', () => {
  displayCtpThree.textContent = ' | ' + ctpThree.value;
  displayCtpThreeThree.textContent = ' | ' + ctpThree.value;
});

/*input phone number*/
const ctphOne = document.getElementById('ctphOne');
const displayCtphOne = document.getElementById('display-ctphOne');
const displayCtphOneOne = document.getElementById('display-ctphOne-one');

// Update the display content whenever the input changes
ctphOne.addEventListener('input', () => {
  displayCtphOne.innerHTML = `<i class="fa-solid fa-phone"></i> ${ctphOne.value}`;
  displayCtphOneOne.innerHTML = `<i class="fa-solid fa-phone"></i> ${ctphOne.value}`;
});

const ctphTow = document.getElementById('ctphTow');
const displayCtphTow = document.getElementById('display-ctphTow');
const displayCtphTowTow = document.getElementById('display-ctphTow-tow');

// Update the display content whenever the input changes
ctphTow.addEventListener('input', () => {
  displayCtphTow.innerHTML = `<i class="fa-solid fa-phone"></i> ${ctphTow.value}`;
  displayCtphTowTow.innerHTML = `<i class="fa-solid fa-phone"></i> ${ctphTow.value}`;
});
/*-----------input email address-----------*/
const ctem = document.getElementById('ctEmail');
const displayCtem = document.getElementById('display-ctem');
const displayCtemOne = document.getElementById('display-ctem-one');

// Update the display content whenever the input changes
ctem.addEventListener('input', () => {
  displayCtem.innerHTML = `<i class="fa-solid fa-envelopes"></i> ${ctem.value}`;
  displayCtemOne.innerHTML = `<i class="fa-solid fa-envelopes"></i> ${ctem.value}`;
});
/*-----------input address-----------*/
const ctad = document.getElementById('ctAddress');
const displayCtad = document.getElementById('display-ctad');
const displayCtadOne = document.getElementById('display-ctad-one');

// Update the display content whenever the input changes
ctad.addEventListener('input', () => {
  displayCtad.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${ctad.value}`;
  displayCtadOne.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${ctad.value}`;
});
/*------------------------------------settings open------------------------------------*/
const settingBtns = document.querySelectorAll('.setting-btn');
const settingBoxes = document.querySelectorAll('.setting-box');

// Add event listeners to each button
settingBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from propagating to the document

    // Toggle the visibility of the corresponding setting box
    const settingBox = settingBoxes[index];
    settingBox.style.display = settingBox.style.display === 'block' ? 'none' : 'block';

    // Hide all other setting boxes
    settingBoxes.forEach((box, boxIndex) => {
      if (boxIndex !== index) {
        box.style.display = 'none';
      }
    });
  });
});

// Hide all setting boxes when clicking anywhere else on the document
document.addEventListener('click', () => {
  settingBoxes.forEach((box) => {
    box.style.display = 'none';
  });
});

// Prevent the setting box from closing when clicking inside it
settingBoxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

/*----------------------------------settings----------------------------------*/
// Name
const topLeftN = document.getElementById('top-left-n');
const topRightN = document.getElementById('top-right-n');
const ctnN = document.querySelectorAll('.ctn');

// Profession
const topLeftP = document.getElementById('top-left-p');
const topRightP = document.getElementById('top-right-p');
const ctnP = document.querySelectorAll('.ctp');

// Phone Number
const topLeftPn = document.getElementById('top-left-pn');
const topRightPn = document.getElementById('top-right-pn');
const ctph = document.querySelectorAll('.ctph');

// Email Address
const topLeftEm = document.getElementById('top-left-em');
const topRightEm = document.getElementById('top-right-em');
const ctema = document.querySelectorAll('.ctEmail');

// Address
const topLeftAd = document.getElementById('top-left-ad');
const topRightAd = document.getElementById('top-right-ad');
const ctadd = document.querySelectorAll('.ctAddress');

/*--------------------- Name ---------------------*/
// Name Top Left button click
topLeftN.addEventListener('click', () => {
  ctnN.forEach(element => {
    element.style.top = '2rem';
    element.style.bottom = '';
    element.style.left = '2rem';
    element.style.right = '';
  });
});

// Name Top Right button click
topRightN.addEventListener('click', () => {
  ctnN.forEach(element => {
    element.style.top = '2rem';
    element.style.bottom = '';
    element.style.left = '';
    element.style.right = '2rem';
  });
});

/*--------------------- Profession ---------------------*/
// Profession Top Left button click
topLeftP.addEventListener('click', () => {
  ctnP.forEach(element => {
    element.style.top = '4.5rem';
    element.style.bottom = '';
    element.style.left = '2rem';
    element.style.right = '';
  });
});

// Profession Top Right button click
topRightP.addEventListener('click', () => {
  ctnP.forEach(element => {
    element.style.top = '4.5rem';
    element.style.bottom = '';
    element.style.left = '';
    element.style.right = '2rem';
  });
});

/*--------------------- Phone Number ---------------------*/
topLeftPn.addEventListener('click', () => {
  ctph.forEach(element => {
    element.style.top = '';
    element.style.left = '2rem';
    element.style.right = '';
  });
});

topRightPn.addEventListener('click', () => {
  ctph.forEach(element => {
    element.style.top = '';
    element.style.left = '';
    element.style.right = '2rem';
  });
});

/*--------------------- Email Address ---------------------*/
topLeftEm.addEventListener('click', () => {
  ctema.forEach(element => {
    element.style.top = '';
    element.style.left = '2rem';
    element.style.right = '';
  });
});

topRightEm.addEventListener('click', () => {
  ctema.forEach(element => {
    element.style.top = '';
    element.style.left = '';
    element.style.right = '2rem';
  });
});

/*--------------------- Address ---------------------*/
topLeftAd.addEventListener('click', () => {
  ctadd.forEach(element => {
    element.style.top = '';
    element.style.left = '2rem';
    element.style.right = '';
  });
});

topRightAd.addEventListener('click', () => {
  ctadd.forEach(element => {
    element.style.top = '';
    element.style.left = '';
    element.style.right = '2rem';
  });
});
/*------------------------------Add event listener to the button------------------------------*/
document.getElementById('add-profession-input').addEventListener('click', () => {
  // Get all the hidden textareas
  const textAreas = ['ctProfessionTow', 'ctProfessionThree'];
  
  for (let id of textAreas) {
    const textArea = document.getElementById(id);
    // Show the first hidden textarea
    if (textArea.style.display === 'none') {
      textArea.style.display = 'block';
      break;
    }
  }
});
document.getElementById('delete-profession-input').addEventListener('click', () => {
  const deleteCtpThree = document.getElementById('ctProfessionThree');
  const deleteCtpTow = document.getElementById('ctProfessionTow');
  const threeValue = document.getElementById('display-ctp-three');
  const towValue = document.getElementById('display-ctp-tow');

  if (deleteCtpThree.style.display === 'block') {
    deleteCtpThree.value = '';
    deleteCtpThree.style.display = 'none';
    threeValue.innerText ='';
  } else {
    deleteCtpTow.value = '';
    deleteCtpTow.style.display = 'none';
    towValue.innerText = '';
  }
});

document.getElementById('add-phone-number-input').addEventListener('click', () => {
  const phoneNumber = document.getElementById('ctphTow');
  const cardCtphAdd = document.getElementById('display-ctphTow');

  if (phoneNumber.style.display === 'none') {
    phoneNumber.style.display = 'block'; // Show the element
  } else {
    phoneNumber.style.display = 'block'; // Hide the element
  }
});
document.getElementById('delete-phone-number-input').addEventListener('click', () => {
  const phoneNumber = document.getElementById('ctphTow');
  const cardCtphDelete = document.getElementById('display-ctphTow');

  if (phoneNumber.style.display === 'block') {
    phoneNumber.style.display = 'none';
    phoneNumber.value = '';
    cardCtphDelete.innerText = '';
  } else {
    phoneNumber.style.display = 'none';
    phoneNumber.value = '';
    cardCtphDelete.innerText = '';
  }
});

/*-----------------------------textarea type number system-----------------------------*/
// Select all textareas with the class 'phoneNumber'
const textareanum = document.querySelectorAll('.phoneNumber');

// Initialize each textarea with '+880'
textareanum.forEach((textarea) => {
  if (!textarea.value.startsWith('+880')) {
    textarea.value = '+880';
  }

  textarea.addEventListener('input', () => {
    let value = textarea.value;
    
    // Make sure the value always begins with '+880'
    if (!value.startsWith('+880')) {
      value = '+880' + value.replace(/^\+?880?/, '');
    }
    
    // Get the part after '+880'
    let numberPart = value.slice(4);
    
    // Remove all non-numeric characters from the number part
    numberPart = numberPart.replace(/[^0-9]/g, '');
    
    // If the number starts with one or more 0's, remove them.
    // This allows the user to type a 0, but it won't be part of the final number.
    numberPart = numberPart.replace(/^0+/, '');
    
    // Insert a dash after the first 4 digits if more than 4 digits are present
    if (numberPart.length > 4) {
      numberPart = numberPart.slice(0, 4) + '-' + numberPart.slice(4);
    }
    
    // Update the textarea with '+880' and the formatted number
    textarea.value = '+880 ' + numberPart;
  });
});


/*------------------card background design*------------------*/
document.querySelectorAll('.card-color-box input[type="radio"]').forEach(input => {
  input.addEventListener('change', function () {
    const label = this.closest('label');
    const img = label.querySelector('img');
    const svgBox = document.querySelector('.svg-box');
    const svgBoxOne = document.querySelector('.svg-box-one');
    const cardTheme = document.querySelector('.front.card-theme');
    const cardThemeSum = document.querySelector('.front.card-summary');

    // Always clear previous content
    svgBox.innerHTML = "";
    svgBoxOne.innerHTML = "";
    cardTheme.style.background = "";
    cardThemeSum.style.background = "";

    // Get computed styles from the label.
    const computedStyle = window.getComputedStyle(label);
    const bgImage = computedStyle.backgroundImage; // e.g., "none" or "linear-gradient(...)"
    const bgColor = computedStyle.backgroundColor; // e.g., "rgb(255, 255, 255)" or "rgba(0, 0, 0, 0)"
    
    // Determine if a background style is explicitly defined.
    // (Assumes "transparent" means no background was set.)
    const hasBackground = (bgImage && bgImage !== 'none' && bgImage.includes('gradient'))
                          || (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent');

    if (hasBackground) {
      // If a background (solid or gradient) is set, apply it to the card theme containers.
      // Using the shorthand "background" will carry both color and any gradient.
      cardTheme.style.background = computedStyle.background;
      cardThemeSum.style.background = computedStyle.background;
    } else if (img) {
      // If there’s no background style but an image exists, use the image.
      svgBox.innerHTML = img.outerHTML;
      svgBoxOne.innerHTML = img.outerHTML;
    }
  });
});



// Select all radio inputs for background color
const radioInputs = document.querySelectorAll('input[type="radio"][name="background"]');
const cardTheme = document.querySelector('.front.card-theme');
const cardThemeSum = document.querySelector('.front.card-summary');

// Function to apply the color of the checked radio input
function applyColor() {
  // Loop through all inputs
  radioInputs.forEach((input) => {
    if (input.checked) {
      // Find the associated p.color element
      const colorElement = input.parentElement.querySelector('.color');
      if (colorElement) {
        // Apply the color to the target elements
        const color = window.getComputedStyle(colorElement).color;
        cardTheme.style.color = color;
        cardThemeSum.style.color = color;
      }
    }
  });
}

// Add event listeners to all radio inputs for background color
radioInputs.forEach((input) => {
  input.addEventListener('change', applyColor);
});

// Apply color on page load
applyColor();

/*----------------------------next button to submit----------------------------*/
document.getElementById('next').addEventListener('click', () => {
  // Hide the main preview and card design form
  const mainPreview = document.getElementById('main-preview');
  const cardDesignForm = document.querySelector('.card-design-form');
  if (mainPreview) mainPreview.style.display = 'none';
  if (cardDesignForm) cardDesignForm.style.display = 'none';

  // Show the design summary
  const designSummary = document.querySelector('.design-summary');
  if (designSummary) designSummary.style.display = 'block';
});
/*----------------------------back button to submit----------------------------*/
document.getElementById('back').addEventListener('click', () => {
  // Hide the main preview and card design form
  const mainPreview = document.getElementById('main-preview');
  const cardDesignForm = document.querySelector('.card-design-form');
  if (mainPreview) mainPreview.style.display = 'flex';
  if (cardDesignForm) cardDesignForm.style.display = 'flex';

  // Show the design summary
  const designSummary = document.querySelector('.design-summary');
  if (designSummary) designSummary.style.display = 'none';
});

/*----------------------------design selection slide----------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const faqToggles = document.querySelectorAll(".faq-toggle");

  faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const faqItem = toggle.parentElement;

      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
          item.querySelector(".faq-content").style.display = "none";
          item.querySelector(".faq-toggle").classList.remove("active");
        }
      });

      const content = toggle.nextElementSibling;
      faqItem.classList.toggle("active");
      toggle.classList.toggle("active");
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
});
/*----------------------------backgrund design----------------------------*/
document.getElementById('cttd').addEventListener('change', function() {
  var wireBoxes = document.querySelectorAll('.wire-design-box');
  wireBoxes.forEach(function(box) {
    box.style.display = (this.value === 'wire') ? 'block' : 'none';
  }.bind(this)); // bind 'this' to ensure the correct context for this.value
});
