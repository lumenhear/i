/* ════════════════════════════════════════════════════
   DEEPAK SLP – Premium Medical Portfolio
   style.css
   Aesthetic: Refined Luxury-Clinical
   Fonts: Cormorant Garamond (display) + DM Sans (body)
   ════════════════════════════════════════════════════ */

/* ─── CSS VARIABLES ──────────────────────────────── */
:root {
  /* Colors – Light Mode */
  --clr-primary:    #1B4F72;   /* Deep Navy */
  --clr-primary-lt: #2E86C1;   /* Mid Blue */
  --clr-accent:     #17A589;   /* Teal accent */
  --clr-accent-lt:  #1ABC9C;
  --clr-bg:         #F8FAFB;
  --clr-bg-alt:     #EEF3F7;
  --clr-surface:    #FFFFFF;
  --clr-text:       #1C2833;
  --clr-text-muted: #5D6D7E;
  --clr-border:     #D5E8F0;
  --clr-wa:         #25D366;

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', sans-serif;

  /* Spacing & Shape */
  --radius:   14px;
  --radius-sm: 8px;
  --shadow:   0 4px 24px rgba(27,79,114,0.10);
  --shadow-lg: 0 12px 48px rgba(27,79,114,0.14);

  /* Transitions */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --dur: 0.35s;
}

/* Dark Mode */
[data-theme="dark"] {
  --clr-bg:         #0F1923;
  --clr-bg-alt:     #162030;
  --clr-surface:    #1A2840;
  --clr-text:       #E8EEF4;
  --clr-text-muted: #8FA8BD;
  --clr-border:     #253650;
  --shadow:   0 4px 24px rgba(0,0,0,0.35);
  --shadow-lg: 0 12px 48px rgba(0,0,0,0.45);
}

/* ─── RESET & BASE ───────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  background-color: var(--clr-bg);
  color: var(--clr-text);
  line-height: 1.7;
  overflow-x: hidden;
  transition: background-color var(--dur) var(--ease), color var(--dur) var(--ease);
}

img { display: block; max-width: 100%; height: auto; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
select, input, textarea { font-family: var(--font-body); }

/* ─── SCROLLBAR ──────────────────────────────────── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--clr-bg-alt); }
::-webkit-scrollbar-thumb { background: var(--clr-primary-lt); border-radius: 3px; }

/* ─── CONTAINER ──────────────────────────────────── */
.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ─── SECTION COMMON ─────────────────────────────── */
.section { padding: 96px 0; }
.section--alt { background-color: var(--clr-bg-alt); }

.section-label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--clr-accent);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  color: var(--clr-primary);
  line-height: 1.2;
  margin-bottom: 18px;
}

[data-theme="dark"] .section-title { color: #C5E0F5; }

.section-sub {
  font-size: 1.05rem;
  color: var(--clr-text-muted);
  max-width: 560px;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-header .section-sub { margin: 0 auto; }

/* ─── BUTTONS ────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all var(--dur) var(--ease);
  white-space: nowrap;
}

.btn--primary {
  background: var(--clr-primary);
  color: #fff;
}
.btn--primary:hover {
  background: var(--clr-primary-lt);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(27,79,114,0.30);
}

.btn--whatsapp {
  background: var(--clr-wa);
  color: #fff;
}
.btn--whatsapp:hover {
  background: #1ebe5d;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37,211,102,0.30);
}

.btn--outline {
  border: 2px solid rgba(255,255,255,0.7);
  color: #fff;
  background: transparent;
}
.btn--outline:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-2px);
}

.btn--full { width: 100%; justify-content: center; }

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px; height: 38px;
  border-radius: 50%;
  color: var(--clr-text);
  background: var(--clr-bg-alt);
  transition: all var(--dur) var(--ease);
  font-size: 1rem;
}
.btn-icon:hover { background: var(--clr-primary); color: #fff; }

/* ─── LOADER ─────────────────────────────────────── */
.loader {
  position: fixed;
  inset: 0;
  background: var(--clr-primary);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s var(--ease), visibility 0.6s;
}
.loader.hidden { opacity: 0; visibility: hidden; pointer-events: none; }

.loader__inner {
  text-align: center;
  color: #fff;
}

.loader__pulse {
  width: 64px; height: 64px;
  border: 3px solid rgba(255,255,255,0.2);
  border-top-color: var(--clr-accent-lt);
  border-radius: 50%;
  margin: 0 auto 28px;
  animation: spin 1s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.loader__name {
  display: block;
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}
.loader__title {
  display: block;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 8px;
}
.loader__tagline {
  display: block;
  font-size: 0.85rem;
  opacity: 0.5;
  margin-bottom: 32px;
}

.loader__bar {
  width: 220px;
  height: 3px;
  background: rgba(255,255,255,0.15);
  border-radius: 3px;
  margin: 0 auto;
  overflow: hidden;
}
.loader__fill {
  height: 100%;
  width: 0%;
  background: var(--clr-accent-lt);
  border-radius: 3px;
  animation: fill 2.2s var(--ease) forwards;
}
@keyframes fill { to { width: 100%; } }

/* ─── NAVBAR ─────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 18px 0;
  transition: all var(--dur) var(--ease);
}

.navbar.scrolled {
  background: var(--clr-surface);
  box-shadow: var(--shadow);
  padding: 12px 0;
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  transition: color var(--dur);
}
.navbar.scrolled .navbar__logo { color: var(--clr-primary); }

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px; height: 38px;
  background: var(--clr-accent);
  border-radius: 10px;
  color: #fff;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.logo-text em { font-style: normal; color: var(--clr-accent); }

.navbar__links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.navbar__links a {
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
  transition: all var(--dur) var(--ease);
}
.navbar.scrolled .navbar__links a { color: var(--clr-text); }
.navbar__links a:hover { background: rgba(255,255,255,0.12); color: #fff; }
.navbar.scrolled .navbar__links a:hover { background: var(--clr-bg-alt); color: var(--clr-primary); }

.navbar__links .nav-cta {
  background: var(--clr-accent);
  color: #fff !important;
  padding: 8px 20px;
}
.navbar__links .nav-cta:hover { background: var(--clr-accent-lt); }

.navbar__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px; height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all var(--dur) var(--ease);
}
.navbar.scrolled .hamburger span { background: var(--clr-text); }
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ─── HERO ───────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
}
.hero__bg-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(13,44,75,0.88) 0%, rgba(23,89,122,0.72) 60%, rgba(23,165,137,0.4) 100%);
}

.hero__content {
  position: relative;
  z-index: 2;
  padding-top: 120px;
  padding-bottom: 60px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(8px);
  color: #fff;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero__name {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 300;
  color: #fff;
  line-height: 1.0;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.hero__subtitle {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  font-weight: 400;
  color: rgba(255,255,255,0.8);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero__tagline {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 300;
  color: rgba(255,255,255,0.9);
  font-style: italic;
  margin-bottom: 40px;
}
.hero__tagline em { color: var(--clr-accent-lt); font-style: normal; font-weight: 500; }

.hero__btns {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 56px;
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.stat { text-align: center; }
.stat__num {
  display: block;
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 500;
  color: #fff;
  line-height: 1;
}
.stat__lbl {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.65);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.stat__divider {
  width: 1px; height: 40px;
  background: rgba(255,255,255,0.25);
}

/* Scroll hint arrow */
.hero__scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.hero__scroll-hint span {
  display: block;
  width: 22px; height: 22px;
  border-right: 2px solid rgba(255,255,255,0.6);
  border-bottom: 2px solid rgba(255,255,255,0.6);
  transform: rotate(45deg);
  animation: scrollBounce 1.8s ease-in-out infinite;
}
@keyframes scrollBounce {
  0%, 100% { transform: rotate(45deg) translate(0,0); opacity: 1; }
  50% { transform: rotate(45deg) translate(5px,5px); opacity: 0.4; }
}

/* ─── ABOUT ──────────────────────────────────────── */
.about__grid {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 72px;
  align-items: center;
}

.about__image-wrap {
  position: relative;
}

.about__img-frame {
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  aspect-ratio: 3/4;
}
.about__img-frame img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
}
.about__img-frame:hover img { transform: scale(1.04); }

.about__badge-card {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--clr-accent);
  color: #fff;
  padding: 16px 20px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 8px 24px rgba(23,165,137,0.35);
}
.about__badge-card i { font-size: 1.2rem; }

.about__lead {
  font-family: var(--font-display);
  font-size: 1.35rem;
  color: var(--clr-primary);
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 20px;
}
[data-theme="dark"] .about__lead { color: #A9CCE3; }

.about__text p {
  color: var(--clr-text-muted);
  margin-bottom: 16px;
  font-size: 0.97rem;
}

.about__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0;
}
.about__pills span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--clr-bg-alt);
  border: 1px solid var(--clr-border);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--clr-primary);
}
[data-theme="dark"] .about__pills span { color: #A9CCE3; }
.about__pills span i { color: var(--clr-accent); }

.about__contact-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 8px;
}
.about__contact-row a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--clr-primary-lt);
  transition: color var(--dur);
}
.about__contact-row a:hover { color: var(--clr-accent); }
.about__contact-row a i { color: var(--clr-accent); }

/* ─── SERVICES ───────────────────────────────────── */
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  padding: 32px 28px;
  transition: all var(--dur) var(--ease);
  position: relative;
  overflow: hidden;
}
.service-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--c, var(--clr-primary));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--ease);
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}
.service-card:hover::before { transform: scaleX(1); }

.service-card__icon {
  width: 52px; height: 52px;
  background: color-mix(in srgb, var(--c, var(--clr-primary)) 12%, transparent);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--c, var(--clr-primary));
  margin-bottom: 20px;
}

.service-card h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--clr-primary);
  margin-bottom: 10px;
  line-height: 1.3;
}
[data-theme="dark"] .service-card h3 { color: #C5E0F5; }

.service-card p {
  font-size: 0.88rem;
  color: var(--clr-text-muted);
  line-height: 1.6;
  margin-bottom: 18px;
}

.service-card__link {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--c, var(--clr-primary));
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap var(--dur);
}
.service-card__link:hover { gap: 10px; }

/* ─── GALLERY ────────────────────────────────────── */
.gallery__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 16px;
}

.gallery__item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
}
.gallery__item--wide { grid-column: span 2; }
.gallery__item--tall { grid-row: span 2; }

.gallery__item img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease);
}
.gallery__item:hover img { transform: scale(1.06); }

.gallery__caption {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(13,44,75,0.85), transparent);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 24px 16px 12px;
  transform: translateY(8px);
  opacity: 0;
  transition: all var(--dur) var(--ease);
}
.gallery__item:hover .gallery__caption { transform: translateY(0); opacity: 1; }

/* ─── WHY CHOOSE ME ──────────────────────────────── */
.why__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.why__card {
  background: var(--clr-surface);
  border-radius: var(--radius);
  padding: 36px 28px;
  text-align: center;
  border: 1px solid var(--clr-border);
  transition: all var(--dur) var(--ease);
}
.why__card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.why__icon {
  width: 64px; height: 64px;
  background: linear-gradient(135deg, var(--clr-primary), var(--clr-accent));
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  margin: 0 auto 20px;
  box-shadow: 0 6px 20px rgba(27,79,114,0.25);
}

.why__card h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--clr-primary);
  margin-bottom: 10px;
}
[data-theme="dark"] .why__card h3 { color: #C5E0F5; }

.why__card p {
  font-size: 0.88rem;
  color: var(--clr-text-muted);
  line-height: 1.6;
}

/* ─── TESTIMONIALS ───────────────────────────────── */
.testi__track-wrap {
  overflow: hidden;
  position: relative;
}

.testi__track {
  display: flex;
  gap: 24px;
  transition: transform 0.5s var(--ease);
}

.testi-card {
  min-width: calc(33.333% - 16px);
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  padding: 36px 32px;
  flex-shrink: 0;
}

.testi-card__stars {
  color: #F59E0B;
  font-size: 1.1rem;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.testi-card p {
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--clr-text);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 24px;
}

.testi-card__author {
  display: flex;
  align-items: center;
  gap: 14px;
}
.testi-card__avatar {
  width: 46px; height: 46px;
  background: linear-gradient(135deg, var(--clr-primary), var(--clr-accent));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  flex-shrink: 0;
}
.testi-card__author strong {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--clr-text);
}
.testi-card__author span {
  font-size: 0.78rem;
  color: var(--clr-text-muted);
}

.testi__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}
.testi__dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--clr-border);
  cursor: pointer;
  transition: all var(--dur);
}
.testi__dot.active {
  width: 24px;
  border-radius: 4px;
  background: var(--clr-primary);
}

/* ─── FAQ ────────────────────────────────────────── */
.faq__inner { max-width: 780px; margin: 0 auto; }

.faq__list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq__item {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: var(--radius);
  overflow: hidden;
}

.faq__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  text-align: left;
  font-size: 0.97rem;
  font-weight: 600;
  color: var(--clr-text);
  transition: color var(--dur);
  gap: 12px;
}
.faq__question:hover { color: var(--clr-primary); }
.faq__question i {
  flex-shrink: 0;
  color: var(--clr-accent);
  transition: transform var(--dur) var(--ease);
  font-size: 0.85rem;
}
.faq__item.open .faq__question i { transform: rotate(180deg); }
.faq__item.open .faq__question { color: var(--clr-primary); }

.faq__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s var(--ease), padding 0.3s;
}
.faq__item.open .faq__answer { max-height: 300px; }

.faq__answer p {
  padding: 0 24px 22px;
  font-size: 0.9rem;
  color: var(--clr-text-muted);
  line-height: 1.7;
}

/* ─── CONTACT ────────────────────────────────────── */
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
}

.contact__info .section-title { margin-bottom: 14px; }
.contact__info > p {
  color: var(--clr-text-muted);
  font-size: 0.95rem;
  margin-bottom: 32px;
}

.contact__details { margin-bottom: 28px; }

.contact__item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--clr-border);
  transition: color var(--dur);
}
.contact__item:hover { color: var(--clr-primary); }

.contact__icon {
  width: 44px; height: 44px;
  background: linear-gradient(135deg, var(--clr-primary), var(--clr-accent));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  flex-shrink: 0;
}

.contact__item div strong {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--clr-text-muted);
  margin-bottom: 2px;
}
.contact__item div span {
  font-size: 0.95rem;
  color: var(--clr-text);
  font-weight: 500;
}

.contact__map {
  margin-top: 24px;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--clr-border);
}

/* Contact Form */
.contact__form-wrap {
  background: var(--clr-surface);
  border: 1px solid var(--clr-border);
  border-radius: 20px;
  padding: 40px;
  box-shadow: var(--shadow);
}

.contact__form h3 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--clr-primary);
  margin-bottom: 28px;
}
[data-theme="dark"] .contact__form h3 { color: #C5E0F5; }

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--clr-text-muted);
  margin-bottom: 7px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--clr-border);
  border-radius: var(--radius-sm);
  font-size: 0.93rem;
  background: var(--clr-bg);
  color: var(--clr-text);
  transition: border-color var(--dur), box-shadow var(--dur);
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--clr-primary-lt);
  box-shadow: 0 0 0 3px rgba(46,134,193,0.12);
}

.form-group input.invalid,
.form-group select.invalid,
.form-group textarea.invalid {
  border-color: #E74C3C;
}

.form-group textarea { resize: vertical; }
.form-group select { appearance: none; }

.form-error {
  display: block;
  font-size: 0.78rem;
  color: #E74C3C;
  margin-top: 5px;
  font-weight: 500;
}

.form-success {
  margin-top: 16px;
  padding: 14px 18px;
  background: rgba(23,165,137,0.1);
  border: 1px solid var(--clr-accent);
  border-radius: var(--radius-sm);
  color: var(--clr-accent);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* ─── FOOTER ─────────────────────────────────────── */
.footer {
  background: var(--clr-primary);
  color: rgba(255,255,255,0.75);
  padding: 64px 0 0;
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 48px;
}

.footer__brand .navbar__logo { color: #fff; margin-bottom: 16px; }
.footer__brand p { font-size: 0.88rem; max-width: 280px; }

.footer__links h4,
.footer__contact h4 {
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 18px;
}

.footer__links ul li { margin-bottom: 10px; }
.footer__links ul li a {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.65);
  transition: color var(--dur);
}
.footer__links ul li a:hover { color: var(--clr-accent-lt); }

.footer__contact p {
  font-size: 0.88rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.footer__contact a { color: rgba(255,255,255,0.75); transition: color var(--dur); }
.footer__contact a:hover { color: var(--clr-accent-lt); }
.footer__contact i { color: var(--clr-accent); width: 14px; }

.footer__socials {
  display: flex;
  gap: 10px;
  margin-top: 18px;
}
.footer__socials a {
  width: 38px; height: 38px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  transition: all var(--dur);
}
.footer__socials a:hover { background: var(--clr-accent); color: #fff; border-color: transparent; }

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 18px 24px;
  text-align: center;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
}

/* ─── FLOATING BUTTONS ───────────────────────────── */
.float-btn {
  position: fixed;
  z-index: 900;
  width: 52px; height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.22);
  transition: all var(--dur) var(--ease);
}

.float-btn--wa {
  bottom: 100px;
  right: 20px;
  background: var(--clr-wa);
  color: #fff;
}
.float-btn--wa:hover { transform: scale(1.1); }

.float-btn--call {
  bottom: 40px;
  right: 20px;
  background: var(--clr-primary);
  color: #fff;
}
.float-btn--call:hover { transform: scale(1.1); }

.float-btn--top {
  bottom: 40px;
  left: 20px;
  background: var(--clr-surface);
  color: var(--clr-primary);
  box-shadow: var(--shadow);
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: all var(--dur) var(--ease);
  border: 1px solid var(--clr-border);
  font-size: 1rem;
}
.float-btn--top.visible { opacity: 1; pointer-events: auto; transform: translateY(0); }
.float-btn--top:hover { background: var(--clr-primary); color: #fff; }

/* ─── SCROLL REVEAL ──────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.65s var(--ease), transform 0.65s var(--ease);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

[data-delay="100"] { transition-delay: 0.1s; }
[data-delay="200"] { transition-delay: 0.2s; }

/* ─── RESPONSIVE ─────────────────────────────────── */
@media (max-width: 1024px) {
  .about__grid { grid-template-columns: 1fr 1fr; gap: 48px; }
  .services__grid { grid-template-columns: repeat(2, 1fr); }
  .gallery__grid { grid-template-columns: repeat(3, 1fr); }
  .why__grid { grid-template-columns: repeat(2, 1fr); }
  .footer__inner { grid-template-columns: 1fr 1fr; }
  .footer__brand { grid-column: span 2; }
}

@media (max-width: 768px) {
  .section { padding: 72px 0; }

  /* Nav */
  .navbar__links {
    position: fixed;
    top: 0; right: 0;
    width: min(320px, 85vw);
    height: 100vh;
    background: var(--clr-surface);
    flex-direction: column;
    align-items: flex-start;
    padding: 90px 32px 40px;
    gap: 4px;
    box-shadow: -8px 0 32px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform var(--dur) var(--ease);
    z-index: 999;
  }
  .navbar__links.open { transform: translateX(0); }
  .navbar__links a { color: var(--clr-text) !important; font-size: 1rem; width: 100%; padding: 12px 16px; border-radius: 10px; }
  .navbar__links a:hover { background: var(--clr-bg-alt) !important; color: var(--clr-primary) !important; }
  .hamburger { display: flex; }

  /* Hero */
  .hero__btns { flex-direction: column; align-items: flex-start; }
  .hero__stats { gap: 16px; }
  .stat__num { font-size: 1.8rem; }

  /* About */
  .about__grid { grid-template-columns: 1fr; gap: 48px; }
  .about__image-wrap { max-width: 380px; margin: 0 auto; }
  .about__badge-card { bottom: -16px; right: 0; }

  /* Services */
  .services__grid { grid-template-columns: 1fr; }

  /* Gallery */
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 160px;
  }
  .gallery__item--wide { grid-column: span 2; }

  /* Why */
  .why__grid { grid-template-columns: 1fr; }

  /* Testimonials */
  .testi-card { min-width: 100%; }

  /* Contact */
  .contact__grid { grid-template-columns: 1fr; gap: 48px; }
  .contact__form-wrap { padding: 28px 20px; }

  /* Footer */
  .footer__inner { grid-template-columns: 1fr; gap: 32px; }
  .footer__brand { grid-column: span 1; }
}

@media (max-width: 480px) {
  .gallery__grid { grid-template-columns: 1fr; }
  .gallery__item--wide { grid-column: span 1; }
  .hero__name { font-size: 3rem; }
  .btn { padding: 12px 20px; font-size: 0.88rem; }
}

/* ─── PRINT ──────────────────────────────────────── */
@media print {
  .loader, .navbar, .float-btn, .hero__scroll-hint { display: none; }
}
