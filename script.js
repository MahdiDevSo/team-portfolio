const contactBtn = document.querySelector("#contactBtn");
const message = document.querySelector("#message");

contactBtn.addEventListener("click", () => {
  message.textContent = "Thanks for reaching out!";
});
