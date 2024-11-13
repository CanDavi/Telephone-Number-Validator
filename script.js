document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("user-input");
  const resultsDiv = document.getElementById("results-div");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const keys = document.querySelectorAll(".key");

    keys.forEach(key => {
    key.addEventListener("click", () => {
      input.value += key.textContent;
    });
  });
  checkBtn.addEventListener("click", () => {
    const phoneNumber = input.value;
    if (!phoneNumber) {
      alert("Please provide a phone number");
      return;
    }
    const isValidUSNumber = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(phoneNumber);
    resultsDiv.textContent = isValidUSNumber ? `Valid US number: ${phoneNumber}` : `Invalid US number: ${phoneNumber}`;
  });

    clearBtn.addEventListener("click", () => {
    input.value = "";
    resultsDiv.textContent = "";
  });
});
