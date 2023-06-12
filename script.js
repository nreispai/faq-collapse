function openClose(e) {
  const questionCard = e.target.parentElement.parentElement.parentElement;
  if (questionCard.classList.contains("active")) {
    questionCard.classList.remove("active");
    e.target.classList.remove("fa-chevron-up");
    e.target.classList.add("fa-chevron-down");
  } else {
    questionCard.classList.add("active");
    e.target.classList.remove("fa-chevron-down");
    e.target.classList.add("fa-chevron-up");
  }
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", openClose);
});
