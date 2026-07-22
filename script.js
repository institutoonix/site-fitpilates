(function () {
  const links = {
    schedules: "https://agendamento.nextfit.com.br/de96b908-1d85-4b95-a931-421502de7550",
    privacy: "https://ajuda.nextfit.com.br/support/solutions/articles/69000798726-termos-de-uso-e-pol%C3%ADtica-de-privacidade",
    instagram: "https://www.instagram.com/institutoonix",
    whatsapp: "https://wa.me/557999456327",
    maps: "https://maps.app.goo.gl/QRYprvyyzCWDvm6XA",
    reserve: "https://venda.nextfit.com.br/00fde286-4f1b-4c7f-9b53-4ff04a8eec71/contratos"
  };

  const page = document.body.dataset.page || "main";
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector("[data-footer]");

  function sectionHref(sectionId) {
    return page === "main" ? `#${sectionId}` : `index.html#${sectionId}`;
  }

  header.innerHTML = `
    <div class="header-inner">
      <a class="logo-link" href="index.html#section-hero" aria-label="ONIX Fit Pilates">
        <img src="assets/onixfitlogo.svg" alt="ONIX Fit Pilates">
      </a>
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-shell" id="site-menu">
        <nav class="nav-links" aria-label="Principal">
          <a class="nav-text" href="${sectionHref("section-rhythm")}">Experiência</a>
          <a class="nav-text" href="${links.schedules}">Horários</a>
          <a class="nav-text" href="${sectionHref("section-reformer")}">Estrutura</a>
        </nav>
        <div class="header-actions">
          ${page === "pacotes"
            ? '<a class="btn btn-outline" href="index.html">Principal</a>'
            : '<a class="btn btn-outline" href="#section-method">Nosso método</a>'}
          <a class="btn btn-solid" href="${links.reserve}">Reservar</a>
        </div>
      </div>
    </div>
  `;

  footer.innerHTML = `
    <div class="footer-inner">
      <a class="logo-link" href="index.html#section-hero" aria-label="ONIX Fit Pilates">
        <img src="assets/onixfitlogo.svg" alt="ONIX Fit Pilates">
      </a>
      <a class="footer-address" href="${links.maps}" target="_blank" rel="noopener">Av. Dr. Sílvio Cabral Santana, 399 - Lj 03, Aruana, Aracaju</a>
      <nav class="footer-links" aria-label="Redes sociais e políticas">
        <a href="${links.instagram}" target="_blank" rel="noopener">Instagram</a>
        <span>•</span>
        <a href="${links.whatsapp}" target="_blank" rel="noopener">WhatsApp</a>
        <span>•</span>
        <a href="${links.privacy}" target="_blank" rel="noopener">Política de privacidade</a>
      </nav>
    </div>
  `;

  const toggle = document.querySelector(".menu-toggle");
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    header.classList.toggle("menu-open", !isOpen);
  });

  document.addEventListener("click", (event) => {
    const clickedLink = event.target.closest("a");
    if (!clickedLink) return;

    if (clickedLink.classList.contains("nav-text")) {
      clickedLink.classList.remove("click-feedback");
      void clickedLink.offsetWidth;
      clickedLink.classList.add("click-feedback");
      window.setTimeout(() => clickedLink.classList.remove("click-feedback"), 250);
    }

    if (clickedLink.closest(".footer-links")) {
      clickedLink.classList.add("clicked");
    }

    if (clickedLink.closest(".nav-shell") && window.matchMedia("(max-width: 1020px)").matches) {
      toggle.setAttribute("aria-expanded", "false");
      header.classList.remove("menu-open");
    }
  });

  const counters = document.querySelectorAll("[data-count]");
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function animateCounter(element) {
    const target = Number(element.dataset.count || 0);
    const start = performance.now();
    const duration = 2000;

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      element.textContent = String(Math.round(target * easeOut(progress)));
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  if (counters.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
      });
    }, { threshold: 0.35 });

    counters.forEach((counter) => observer.observe(counter));
  }
})();
