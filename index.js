const accordionBtn = document.querySelectorAll(".faq-question");
const openCloseBtn = document.querySelector(".fa-solid");

accordionBtn.forEach((openCloseBtn) => {
  openCloseBtn.addEventListener("click", (event) => {
    openCloseBtn.classList.toggle("i-closed");
  });
});
