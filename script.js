// Espera todo o HTML ser carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
  /* *
   * FEATURE 1: ANIMAÇÃO AO ROLAR (Intersection Observer)
   * */
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver(callback, options);
  const elementsToObserve = document.querySelectorAll(".hidden");
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });

  /* *
   * NOVA FEATURE 2: LÓGICA DO MENU HAMBURGER (Mobile)
   * */

  // 1. Seleciona os elementos do DOM
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // 2. Adiciona o "escutador" de clique no hamburger
  hamburger.addEventListener("click", () => {
    // Adiciona/Remove a classe 'active' no botão (para animar p/ "X")
    hamburger.classList.toggle("active");
    // Adiciona/Remove a classe 'active' no menu (para mostrar/esconder)
    navMenu.classList.toggle("active");
  });

  // 3. (BÔNUS SÊNIOR) Fecha o menu quando um link é clicado
  // Isso é crucial para que a página role e o menu desapareça
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});
