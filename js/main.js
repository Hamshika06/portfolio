// ============================================================
// Utilities
// ============================================================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

document.getElementById("year").textContent = new Date().getFullYear();

// ============================================================
// Sticky nav shrink + active-section indicator
// ============================================================
const nav = $("#nav");
const sections = $$("main > section[id]");
const navLinks = $$(".nav-link");

function onScroll() {
  nav.classList.toggle("nav-scrolled", window.scrollY > 24);

  let current = sections[0]?.id;
  const scrollPos = window.scrollY + window.innerHeight * 0.35;
  for (const sec of sections) {
    if (sec.offsetTop <= scrollPos) current = sec.id;
  }
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === current);
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Smooth scroll for internal links
$$('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length < 2) return;
    const target = $(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    closeMobileMenu();
  });
});

// ============================================================
// Mobile menu
// ============================================================
const hamburger = $("#hamburger");
const mobileMenu = $("#mobileMenu");

function closeMobileMenu() {
  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  document.body.classList.remove("no-scroll");
}
function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("no-scroll", isOpen);
}
hamburger.addEventListener("click", toggleMobileMenu);

// ============================================================
// Reveal-on-scroll animations
// ============================================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);

function observeReveal(el) {
  el.classList.add("reveal");
  revealObserver.observe(el);
}

// ============================================================
// Render: Experience timeline
// ============================================================
function renderJobs(list, selector) {
  const wrap = $(selector);
  wrap.innerHTML = list.map((job, i) => `
    <div class="timeline-item">
      <div class="timeline-card">
        <div class="timeline-head">
          <div class="timeline-title">
            ${job.logo ? `<img class="company-logo" src="${job.logo}" alt="" width="52" height="52" />` : ""}
            <div>
              <h3 class="timeline-role">${job.role}</h3>
              <p class="timeline-company">${job.company}</p>
            </div>
          </div>
          <div class="timeline-meta">
            <span class="timeline-dates"><svg class="meta-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>${job.dates}</span>
            ${job.location ? `<span class="timeline-location"><svg class="meta-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>${job.location}</span>` : ""}
          </div>
        </div>
        <p class="timeline-summary">${job.summary}</p>
        <div class="chip-row">
          ${job.stack.map((s) => `<span class="mini-chip stack-chip">${s}</span>`).join("")}
        </div>

        <div class="timeline-projects">
          ${job.projects.map((p, idx) => `
            <details class="exp-detail" open>
              <summary>
                <span class="exp-detail-title">${p.title}</span>
                ${p.dates ? `<span class="exp-detail-date"><svg class="meta-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>${p.dates}</span>` : ""}
                <svg class="chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <ul class="exp-points">
                ${p.points.map((pt) => `<li>${pt}</li>`).join("")}
              </ul>
              ${p.metrics.length ? `
                <div class="exp-metrics">
                  ${p.metrics.map((m) => `<div class="exp-metric"><span class="exp-metric-value">${m.value}</span><span class="exp-metric-label">${m.label}</span></div>`).join("")}
                </div>` : ""}
            </details>
          `).join("")}
        </div>
      </div>
    </div>
  `).join("");

  $$(".timeline-item", wrap).forEach(observeReveal);
}

// ============================================================
// Render: Projects + filtering
// ============================================================
function iconFor(tech) {
  return tech;
}

function projectCardHTML(p) {
  return `
    <article class="project-card ${p.featured ? "project-card-featured" : ""}" data-tags="${p.tags.join(",")}">
      ${p.ongoing ? '<span class="project-badge">Ongoing Research</span>' : ""}
      <div class="project-tags">
        ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
      </div>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-tagline">${p.tagline}</p>

      <div class="project-problem">
        <span class="project-label">Problem</span>
        <p>${p.problem}</p>
      </div>

      <ul class="project-details">
        ${p.details.map((d) => `<li>${d}</li>`).join("")}
      </ul>

      <div class="chip-row project-tech">
        ${p.tech.map((t) => `<span class="mini-chip mini-chip-mono">${t}</span>`).join("")}
      </div>

      <div class="project-actions">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-sm btn-outline">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 .5C5.73.5.5 5.74.5 12.03c0 5.03 3.26 9.29 7.79 10.8.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.17.69-3.84-1.36-3.84-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12.03C23.5 5.74 18.27.5 12 .5Z"/></svg>
          Code
        </a>` : `<span class="btn btn-sm btn-outline btn-disabled">Code (soon)</span>`}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">Live Demo</a>` : ""}
      </div>
    </article>
  `;
}

function renderProjects(filter = "All") {
  const grid = $("#projectGrid");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter));
  grid.innerHTML = list.map(projectCardHTML).join("");
  $$(".project-card", grid).forEach(observeReveal);
}

function renderFilters() {
  const wrap = $("#filterRow");
  wrap.innerHTML = FILTER_TAGS.map(
    (tag, i) => `<button class="filter-chip ${i === 0 ? "active" : ""}" data-filter="${tag}">${tag}</button>`
  ).join("");

  $$(".filter-chip", wrap).forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter-chip", wrap).forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

// ============================================================
// Render: Skills
// ============================================================
function renderSkills() {
  const grid = $("#skillsGrid");
  grid.innerHTML = SKILLS.map(
    (group, i) => `
    <div class="skill-card" style="--delay:${i * 60}ms">
      <h3 class="skill-category">${group.category}</h3>
      <div class="chip-row">
        ${group.items.map((item) => `<span class="skill-chip">${item}</span>`).join("")}
      </div>
    </div>
  `
  ).join("");
  $$(".skill-card", grid).forEach(observeReveal);
}

// ============================================================
// Neural network background (hero) — lightweight canvas
// ============================================================
function initNetworkCanvas() {
  const canvas = $("#networkCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width, height, nodes;
  const NODE_COUNT_BASE = 90;

  function resize() {
    const hero = canvas.parentElement;
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
    const count = Math.max(42, Math.min(NODE_COUNT_BASE, Math.floor((width * height) / 15000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent-rgb").trim();

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;
        if (dist < maxDist) {
          ctx.strokeStyle = `rgba(${accent}, ${0.12 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${accent}, 0.5)`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!prefersReducedMotion) requestAnimationFrame(step);
  }

  resize();
  window.addEventListener("resize", resize);
  step();
}

// ============================================================
// Research background nodes (subtle abstract svg)
// ============================================================
function initResearchNodes() {
  const g = $("#researchNodes");
  if (!g) return;
  const pts = Array.from({ length: 14 }, () => [
    Math.random() * 800,
    Math.random() * 600,
  ]);
  let svg = "";
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[j];
      const d = Math.hypot(x1 - x2, y1 - y2);
      if (d < 180) svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`;
    }
  }
  pts.forEach(([x, y]) => {
    svg += `<circle cx="${x}" cy="${y}" r="2.5" fill="var(--accent)" fill-opacity="0.5" stroke="none" />`;
  });
  g.innerHTML = svg;
}

// ============================================================
// Init
// ============================================================
renderJobs(EXPERIENCE, "#experienceTimeline");
renderJobs(RESEARCH, "#researchTimeline");
renderFilters();
renderProjects();
renderSkills();
initNetworkCanvas();
initResearchNodes();

$$(".section-title, .section-kicker").forEach(observeReveal);
$$(".about-copy, .about-flow, .education-grid, .research-card, .contact-inner").forEach(observeReveal);
