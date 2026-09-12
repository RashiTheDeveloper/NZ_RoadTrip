(function () {
  const path = location.pathname.split("/").pop() || "index.html";
  const links = [
    ["index.html", "Home"],
    ["itinerary.html", "Itinerary"],
    ["places.html", "Places"],
    ["kai.html", "Kai"],
    ["kupu.html", "Te reo"],
    ["wildlife.html", "Wildlife"],
    ["tips.html", "Tips"]
  ];
  const fern = `<svg viewBox="0 0 40 64" aria-hidden="true"><path fill="#d7dee4" d="M20 2c1 8 7 12 14 14-8 1-13 6-14 16C19 22 14 17 6 16 13 14 19 10 20 2zm0 18c2 9 9 14 16 16-9 2-14 8-16 18-2-10-7-16-16-18 7-2 14-7 16-16zm0 20c1 8 6 12 12 13-7 2-11 7-12 15-1-8-5-13-12-15 6-1 11-5 12-13z"/></svg>`;
  const header = document.querySelector("[data-header]");
  if (header) {
    header.innerHTML = `
      <div class="header-top">
        <a class="brand" href="index.html">${fern}<span><strong>Aotearoa</strong>Road trip 11 to 23 Dec</span></a>
        <button class="menu-btn" type="button" aria-expanded="false">Menu</button>
      </div>
      <nav>${links.map(([href, label]) => `<a href="${href}" ${href === path ? 'aria-current="page"' : ""}>${label}</a>`).join("")}</nav>
    `;
    const btn = header.querySelector(".menu-btn");
    const nav = header.querySelector("nav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }
})();
