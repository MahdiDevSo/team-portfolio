const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.className = "";
  const fields = [...form.querySelectorAll("input, textarea")];
  let firstInvalid = null;

  fields.forEach((field) => {
    const invalid = !field.checkValidity();
    field.setAttribute("aria-invalid", invalid);
    if (invalid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    status.textContent = "Please complete all fields with valid information.";
    status.className = "error";
    firstInvalid.focus();
    return;
  }

  // Replace with a real request (e.g. fetch to your backend or a form service).
  form.reset();
  status.textContent = "Message sent. We'll reply soon.";
  status.className = "success";
});
