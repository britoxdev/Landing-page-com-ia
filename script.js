const currentYear = document.getElementById("currentYear");
const navLinks = document.querySelectorAll("#navLinks .nav-link");
const sections = document.querySelectorAll("main section[id], header section[id]");
const reveals = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contactForm");
const feedbackForm = document.getElementById("feedbackForm");

currentYear.textContent = new Date().getFullYear();

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  reveals.forEach((element) => {
    const top = element.getBoundingClientRect().top;

    if (top < trigger) {
      element.classList.add("is-visible");
    }
  });
}

function updateActiveLink() {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();
  updateActiveLink();
});

window.addEventListener("load", () => {
  revealOnScroll();
  updateActiveLink();
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const assunto = document.getElementById("assunto");
  const mensagem = document.getElementById("mensagem");

  if (
    nome.value.trim() === "" ||
    email.value.trim() === "" ||
    assunto.value.trim() === "" ||
    mensagem.value.trim() === ""
  ) {
    feedbackForm.textContent = "Preencha todos os campos antes de enviar.";
    feedbackForm.style.color = "#fca5a5";
    return;
  }

  feedbackForm.textContent =
    "Mensagem validada com sucesso. Agora você pode conectar este formulário a um serviço real.";
  feedbackForm.style.color = "#86efac";

  contactForm.reset();
});
const buyButton = document.querySelector(".buy-btn");

if (buyButton) {
  buyButton.addEventListener("click", function () {
    console.log("Usuário clicou para comprar a mentoria.");
  });
}