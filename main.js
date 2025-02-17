// loading animation
window.onload = () => {
  document.getElementById("loading-screen").style.display = "none";
  document.querySelector(".content").style.display = "block";
};

// toggle icon animations

const getToggle = document.querySelector(".toggle-icon");
const getHeadContainer = document.querySelector(".head-container");

const getLine1 = document.querySelector(".line1");
const getLine2 = document.querySelector(".line2");

let isCross = false;

getToggle.addEventListener("click", () => {
  getHeadContainer.classList.toggle("animateWith");
  isCross = !isCross;

  if (isCross) {
    getHeadContainer.style.cssText =
      "opacity:1;transition: transform 1s ease-in-out";

    getToggle.style.cssText = "width:50px;height:50px;top: 10px; right: 15px;";
    getLine1.style.cssText =
      "transform: rotate(45deg) translateY(8px) translateX(3px) ; width: 30px; transition: transform 0.3s ease-in-out";
    getLine2.style.cssText =
      "transform: rotate(-45deg) translateY(-8px) translateX(3px) ; width: 30px; transition: transform 0.3s ease-in-out";
  } else {
    getHeadContainer.style.opacity = "0";

    getToggle.style.cssText = "top: 15px; right: 15px;";
    getLine1.style.cssText =
      "transform: rotate(0deg) translateY(0) translateX(0); width: 25px; transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;";
    getLine2.style.cssText =
      "transform: rotate(0deg) translateY(0) translateX(0); width: 40px; transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;";
  }
});

// progress-bar
const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrolled / documentHeight) * 100;

  scrollProgress.style.width = scrollPercentage + "%";
});

//form validations
const getForm = document.forms.contactForm;

// Name validation function
function nameValidation(name) {
  if (!name.trim()) {
    alert("Name cannot be empty");
    return false;
  }
  const givenName = name.toLowerCase().trim();
  if (
    ![...givenName].every(
      (char) => (char >= "a" && char <= "z") || char === " "
    )
  ) {
    alert("Invalid name. Only letters and spaces are allowed.");
    return false;
  }
  return true;
}
// Email validation function
function emailValidation(email) {
  if (!email.includes("@")) {
    alert("Invalid email. Missing '@' symbol.");
    return false;
  }
  const mailSplit = email.split("@");
  if (mailSplit.length !== 2) {
    alert("Invalid email format.");
    return false;
  }
  const domain = mailSplit[1];
  if (!domain.includes(".")) {
    alert("Invalid email. Missing domain extension (e.g., .com, .net).");
    return false;
  }
  const domainSplit = domain.split(".");
  if (domainSplit.some((part) => part.length < 2)) {
    alert("Invalid email. Domain parts should be at least 2 characters.");
    return false;
  }
  return true;
}

// Phone number validation function
function phoneNumberValidation(phone) {
  if (typeof phone !== "string" || phone.trim() === "") {
    alert("Phone number cannot be empty.");
    return false;
  }
  for (let char of phone) {
    if (char < "0" || char > "9") {
      alert("Invalid phone number. Only numbers are allowed.");
      return false;
    }
  }
  if (phone.length !== 10) {
    alert("Phone number must be exactly 10 digits.");
    return false;
  }
  let firstDigit = phone[0];
  if (
    firstDigit !== "6" &&
    firstDigit !== "7" &&
    firstDigit !== "8" &&
    firstDigit !== "9"
  ) {
    alert("Invalid Indian phone number. It must start with 6, 7, 8, or 9.");
    return false;
  }
  return true;
}

// Form submission event listener
getForm.addEventListener("submit", (eve) => {
  eve.preventDefault();

  const name = getForm.elements.fullName.value;
  const email = getForm.elements.email.value;
  const phno = getForm.elements.phoneNumber.value;

  if (!nameValidation(name)) return;
  if (!emailValidation(email)) return;
  if (!phoneNumberValidation(phno)) return;

  alert("Form submitted successfully!");
});

// form validations

// Name validation function
function nameValidation(name) {
  if (!name.trim()) {
    alert("Name cannot be empty");
    return false;
  }
  const givenName = name.toLowerCase().trim();
  if (
    ![...givenName].every(
      (char) => (char >= "a" && char <= "z") || char === " "
    )
  ) {
    alert("Invalid name. Only letters and spaces are allowed.");
    return false;
  }
  return true;
}
// Email validation function
function emailValidation(email) {
  if (!email.includes("@")) {
    alert("Invalid email. Missing '@' symbol.");
    return false;
  }
  const mailSplit = email.split("@");
  if (mailSplit.length !== 2) {
    alert("Invalid email format.");
    return false;
  }
  const domain = mailSplit[1];
  if (!domain.includes(".")) {
    alert("Invalid email. Missing domain extension (e.g., .com, .net).");
    return false;
  }
  const domainSplit = domain.split(".");
  if (domainSplit.some((part) => part.length < 2)) {
    alert("Invalid email. Domain parts should be at least 2 characters.");
    return false;
  }
  return true;
}

// Phone number validation function
function phoneNumberValidation(phone) {
  if (typeof phone !== "string" || phone.trim() === "") {
    alert("Phone number cannot be empty.");
    return false;
  }
  for (let char of phone) {
    if (char < "0" || char > "9") {
      alert("Invalid phone number. Only numbers are allowed.");
      return false;
    }
  }
  if (phone.length !== 10) {
    alert("Phone number must be exactly 10 digits.");
    return false;
  }
  let firstDigit = phone[0];
  if (
    firstDigit !== "6" &&
    firstDigit !== "7" &&
    firstDigit !== "8" &&
    firstDigit !== "9"
  ) {
    alert("Invalid Indian phone number. It must start with 6, 7, 8, or 9.");
    return false;
  }
  return true;
}

// Form submission event listener
getForm.addEventListener("submit", (eve) => {
  eve.preventDefault();

  const name = getForm.elements.fullName.value;
  const email = getForm.elements.email.value;
  const phno = getForm.elements.phoneNumber.value;

  if (!nameValidation(name)) return;
  if (!emailValidation(email)) return;
  if (!phoneNumberValidation(phno)) return;

  alert("Form submitted successfully!");
});
