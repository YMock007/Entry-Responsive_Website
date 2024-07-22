const feedbackTexts = [
"FEEDBACK",
"Maklum Balas",   // Malay
"反馈",           // Chinese
"umpan balik",        // Indonesian
"retroaction",  // french
"တုံ့ပြန်မှု", // Myanmar
"Comentarios",    // Spanish
];

const feedbackElement = document.querySelector('.feedback-text');
let currentIndex = 0;

// Function to change the text regularly every 3 seconds
function changeFeedbackText() {
currentIndex = (currentIndex + 1) % feedbackTexts.length;
const nextText = feedbackTexts[currentIndex];

feedbackElement.classList.add('morph-animation');

// Set the new text after a short delay (1s for the animation)
setTimeout(() => {
    feedbackElement.textContent = nextText;
    feedbackElement.classList.remove('morph-animation');
}, 1000);
}

// Call the function initially
changeFeedbackText();

// Set the interval to call the function every 3 seconds
setInterval(changeFeedbackText, 3000);

// Range setting
const rangeInput = document.getElementById("customRange");
const rangeValueAge = document.getElementById("rangeValue");

rangeInput.addEventListener("input", function() {
    rangeValueAge.textContent = `Your nearest age is ${rangeInput.value}`;
});



function handleSubmit() {
    // Get the values of the form fields.
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const gender = document.getElementById("flexRadioDefault2").checked;
    const age = document.getElementById("customRange").value;
    const occupation = document.getElementById("occupation").value;
    const country = document.getElementById("country").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const likeWebsite = document.getElementById("flexCheckDefault").checked;
    const likeButImprove = document.getElementById("flexCheckChecked").checked;
    const dislikeWebsite = document.getElementById("flexCheckCheck1").checked;
    const doesntWatchAllContent = document.getElementById("flexCheckCheck2").checked;
  
    // Validate the form fields.
    const errors = [];
    if (firstName === "") {
      errors.push("First name is required.");
    }
    if (lastName === "") {
      errors.push("Last name is required.");
    }
    if (age < 10 || age > 100) {
      errors.push("Age must be between 10 and 100.");
    }
    if (occupation === "") {
      errors.push("Occupation is required.");
    }
    if (country === "") {
      errors.push("Country is required.");
    }
    if (email === "") {
      errors.push("Email is required.");
    }
    if (phone === "") {
      errors.push("Phone number is required.");
    }
  
    // If there are any errors, display them and prevent the form from submitting.
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }
  
    // The form is valid, so submit it.
    const message = `
      Name: ${firstName} ${lastName}
      Gender: ${gender ? "Female" : "Male"}
      Age: ${age}
      Occupation: ${occupation}
      Country: ${country}
      Address: ${address}
      Email: ${email}
      Phone: ${phone}
      Like website: ${likeWebsite}
      Like but improve: ${likeButImprove}
      Dislike website: ${dislikeWebsite}
      Doesn't watch all content: ${doesntWatchAllContent}
    `;
  
    document.getElementById("messageContainer").innerHTML = message;
    alert("Form submitted successfully!");
    return true;
  }
  