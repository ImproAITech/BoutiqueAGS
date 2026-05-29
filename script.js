/* ═══════════════════════════════════════════
   BOUTIQUE AGS — JavaScript
   ═══════════════════════════════════════════ */

'use strict';

// ── Catalog Data (Zara / Massimo Dutti curate list) ──────────────────────
const CATALOG = [
  // 💍 JOYERÍA - MUJER
  {
    id: 'j-m-1',
    name: 'Collar Choker de Oro Minimalista',
    brand: 'Cartier',
    price: '$8,500 MXN',
    img: 'images/joyeria/mujer/collar_gold.png',
    gender: 'mujer',
    category: 'joyeria'
  },
  // 💍 JOYERÍA - HOMBRE
  {
    id: 'j-h-1',
    name: 'Reloj Chronograph de Acero',
    brand: 'Rolex',
    price: '$240,000 MXN',
    img: 'images/joyeria/hombre/reloj_luxury.png',
    gender: 'hombre',
    category: 'joyeria'
  },
  // 👗 PRENDAS - MUJER
  {
    id: 'pr-m-1',
    name: 'Vestido de Seda Minimalista',
    brand: 'Versace',
    price: '$18,900 MXN',
    img: 'images/prendas/mujer/vestido_seda.png',
    gender: 'mujer',
    category: 'prendas'
  },
  // 👔 PRENDAS - HOMBRE
  {
    id: 'pr-h-1',
    name: 'Camisa Clásica de Lino Puro',
    brand: 'Massimo Dutti',
    price: '$2,199 MXN',
    img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=80',
    gender: 'hombre',
    category: 'prendas'
  },
  // 👠 CALZADO - MUJER
  {
    id: 'c-m-1',
    name: 'Tacones de Diseño en Piel Suave',
    brand: 'Prada',
    price: '$15,400 MXN',
    img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
    gender: 'mujer',
    category: 'calzado'
  },
  // 👟 CALZADO - HOMBRE
  {
    id: 'c-h-1',
    name: 'Tenis Urbanos Premium Minimalistas',
    brand: 'Adidas Y-3',
    price: '$7,200 MXN',
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80',
    gender: 'hombre',
    category: 'calzado'
  },
  // 🌸 PERFUMES - HOMBRE
  {
    id: 'pf-h-1',
    name: 'Dylan Blue 100ML',
    brand: 'Versace',
    price: '$1,699 MXN',
    img: 'images/perfumes/hombre/versace_dylan_blue.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-2',
    name: 'Eros Edt 100ML',
    brand: 'Versace',
    price: '$1,660 MXN',
    img: 'images/perfumes/hombre/versace_eros_edt.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-3',
    name: 'Light Blue Pour Homme 100ML',
    brand: 'Dolce & Gabbana',
    price: '$1,599 MXN',
    img: 'images/perfumes/hombre/dg_light_blue.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-4',
    name: 'Jean Lowe Immortel 100ML',
    brand: 'Maison Alhambra',
    price: '$899 MXN',
    img: 'images/perfumes/hombre/jean_lowe_immortel.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-5',
    name: 'Intimation EDP 100ML',
    brand: 'Maison Alhambra',
    price: '$899 MXN',
    img: 'images/perfumes/hombre/intimation_edp.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-6',
    name: 'Explorer 100ML / 200ML',
    brand: 'Montblanc',
    price: '$1,399 / $1,790 MXN',
    img: 'images/perfumes/hombre/montblanc_explorer.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-7',
    name: 'Pour Homme 100ML',
    brand: 'Versace',
    price: '$1,490 MXN',
    img: 'images/perfumes/hombre/versace_pour_homme.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-8',
    name: 'Le Beau Paradise Garden 125ML',
    brand: 'Jean Paul Gaultier',
    price: '$2,450 MXN',
    img: 'images/perfumes/hombre/jpg_paradise_garden.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-9',
    name: 'Le Male Elixir 125ML',
    brand: 'Jean Paul Gaultier',
    price: '$2,650 MXN',
    img: 'images/perfumes/hombre/jpg_le_male_elixir.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-10',
    name: 'Le Male Le Parfum 125ML',
    brand: 'Jean Paul Gaultier',
    price: '$2,699 MXN',
    img: 'images/perfumes/hombre/jpg_le_male_le_parfum.png',
    gender: 'hombre',
    category: 'perfumes'
  },
  {
    id: 'pf-h-11',
    name: 'Arabian Sky 100ML',
    brand: 'Armaf',
    price: '$1,399 MXN',
    img: 'images/perfumes/hombre/arabian_sky_armaf.png',
    gender: 'hombre',
    category: 'perfumes'
  },

  // 🌸 PERFUMES - MUJER
  {
    id: 'pf-m-1',
    name: '212 VIP Rosé Elixir 80ML',
    brand: 'Carolina Herrera',
    price: '$2,190 MXN',
    img: 'images/perfumes/mujer/212_vip_rose.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-2',
    name: 'Good Girl Blush 80ML',
    brand: 'Carolina Herrera',
    price: '$2,599 MXN',
    img: 'images/perfumes/mujer/good_girl_blush.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-3',
    name: 'Born in Roma Donna Coral Fantasy 100ML',
    brand: 'Valentino',
    price: '$2,990 MXN',
    img: 'images/perfumes/mujer/valentino_donna_coral_fantasy.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-4',
    name: 'Her Eau de Parfum 100ML',
    brand: 'Burberry',
    price: '$2,350 MXN',
    img: 'images/perfumes/mujer/burberry_her.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-5',
    name: 'Flowerbomb 100ML',
    brand: 'Viktor & Rolf',
    price: '$2,480 MXN',
    img: 'images/perfumes/mujer/flowerbomb.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-6',
    name: 'My Way 90ML',
    brand: 'Giorgio Armani',
    price: '$2,871 MXN',
    img: 'images/perfumes/mujer/my_way_armani.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-7',
    name: 'Light Blue Dama 100ML',
    brand: 'Dolce & Gabbana',
    price: '$1,780 MXN',
    img: 'images/perfumes/mujer/dg_light_blue_dama.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-8',
    name: 'Libre 90ML',
    brand: 'Yves Saint Laurent',
    price: '$2,871 MXN',
    img: 'images/perfumes/mujer/ysl_libre.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-9',
    name: 'Good Girl 80ML',
    brand: 'Carolina Herrera',
    price: '$2,376 MXN',
    img: 'images/perfumes/mujer/ch_good_girl.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-10',
    name: 'J’adore 100ML',
    brand: 'Dior',
    price: '$3,195 MXN',
    img: 'images/perfumes/mujer/dior_jadore.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  {
    id: 'pf-m-11',
    name: 'La Vie Est Belle 100ML',
    brand: 'Lancôme',
    price: '$2,520 MXN',
    img: 'images/perfumes/mujer/la_vie_est_belle.png',
    gender: 'mujer',
    category: 'perfumes'
  },
  // 👜 ACCESORIOS - MUJER
  {
    id: 'a-m-1',
    name: 'Bolso de Mano Minimalista en Piel',
    brand: 'Hermès',
    price: '$110,000 MXN',
    img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
    gender: 'mujer',
    category: 'accesorios'
  },
  // 🕶️ ACCESORIOS - HOMBRE
  {
    id: 'a-h-1',
    name: 'Gafas de Sol Acetato Premium',
    brand: 'Tom Ford',
    price: '$8,900 MXN',
    img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80',
    gender: 'hombre',
    category: 'accesorios'
  }
];

// ── State ──────────────────────────────────────────────────────
let lightboxOpen = false;
const WHATSAPP_PHONE = '524491234567'; // Boutique Ags Contact Number

// ── DOM Ready ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initTabs();
  initProducts();
  initLightbox();
  initScrollReveal();
  initScrollHeader();
  initNavActiveSection();
  initSearch();
});


// ── Navigation (Zara Mobile Menu Drawer style) ──────────────────────
function initNav() {
  const navToggle = document.getElementById('navToggle');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

  if (!navToggle || !mobileMenuOverlay) return;

  navToggle.addEventListener('click', () => {
    const isOpen = mobileMenuOverlay.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when clicking on any mobile nav link
  const mobileLinks = mobileMenuOverlay.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuOverlay.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Adjust overlay top on window resize (to handle height changes)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 850 && mobileMenuOverlay.classList.contains('open')) {
      mobileMenuOverlay.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

function initScrollHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initNavActiveSection() {
  const sections = document.querySelectorAll('.catalog-section[id], #inicio, #contacto');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  if (!navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));
}


// ── Gender Tabs (Zara Minimalist switcher) ─────────────────────────
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat    = btn.dataset.cat;
      const gender = btn.dataset.gender;

      // Update active tabs in current container
      const tabGroup = document.getElementById(`tabs-${cat}`);
      if (!tabGroup) return;

      tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show/hide grids
      const mujerGrid  = document.getElementById(`grid-${cat}-mujer`);
      const hombreGrid = document.getElementById(`grid-${cat}-hombre`);

      if (!mujerGrid || !hombreGrid) return;

      if (gender === 'mujer') {
        mujerGrid.classList.remove('hidden');
        hombreGrid.classList.add('hidden');
      } else {
        mujerGrid.classList.add('hidden');
        hombreGrid.classList.remove('hidden');
      }

      // Re-trigger scroll reveal for the newly visible grid
      const activeGrid = gender === 'mujer' ? mujerGrid : hombreGrid;
      activeGrid.querySelectorAll('.product-card').forEach(card => {
        card.classList.add('visible'); // instantly show on tab switch for speed
      });
    });
  });
}


// ── Products Rendering ──────────────────────────────────────────
function initProducts() {
  const groups = {};

  CATALOG.forEach(product => {
    const key = `${product.category}-${product.gender}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
  });

  // Render each group into their grids
  Object.entries(groups).forEach(([key, products]) => {
    const grid = document.getElementById(`grid-${key}`);
    if (!grid) return;

    // Clear loading placeholder
    grid.innerHTML = '';

    products.forEach(product => {
      grid.appendChild(createProductCard(product));
    });
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card reveal';
  card.setAttribute('data-id', product.id);
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Ver detalles de ${product.name}`);

  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${product.img}" alt="${product.name}" loading="lazy" />
      <div class="product-overlay">
        <div class="product-view-btn">Vista Rápida</div>
      </div>
    </div>
    <div class="product-info">
      <span class="product-brand">${product.brand}</span>
      <h3 class="product-name">${product.name}</h3>
      <span class="product-price">${product.price}</span>
    </div>
  `;

  // Interaction events
  card.addEventListener('click', () => openLightbox(product));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(product);
    }
  });

  return card;
}


// ── Lightbox (Zara / Massimo Dutti Side Split style) ──────────────────
function initLightbox() {
  const box   = document.getElementById('lightbox');
  const close = document.getElementById('lightboxClose');

  if (!box || !close) return;

  close.addEventListener('click', closeLightbox);
  
  // Close when clicking outside content area
  box.addEventListener('click', e => {
    if (e.target === box) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightboxOpen) closeLightbox();
  });
}

function openLightbox(product) {
  const box   = document.getElementById('lightbox');
  const img   = document.getElementById('lightboxImg');
  const brand = document.getElementById('lightboxBrand');
  const name  = document.getElementById('lightboxName');
  const price = document.getElementById('lightboxPrice');
  const cta   = document.getElementById('lightboxCta');

  if (!box || !img || !brand || !name || !price || !cta) return;

  img.src   = product.img;
  img.alt   = product.name;
  brand.textContent = product.brand;
  name.textContent  = product.name;
  price.textContent = product.price;

  // Custom prefilled WhatsApp message
  const msg = `Hola! Me interesa obtener más información sobre el producto *${product.name}* (${product.brand}) que vi en Boutique Ags. ¿Está disponible?`;
  cta.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;

  box.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightboxOpen = true;
}

function closeLightbox() {
  const box = document.getElementById('lightbox');
  if (!box) return;

  box.classList.remove('active');
  document.body.style.overflow = '';
  lightboxOpen = false;

  // Clean image after modal close animation
  setTimeout(() => {
    const img = document.getElementById('lightboxImg');
    if (img) img.src = '';
  }, 400);
}


// ── Scroll Reveal ─────────────────────────────────────────────
function initScrollReveal() {
  const elements = document.querySelectorAll(
    '.section-header, .product-card, .contact-left, .contact-card'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Grid items stagger layout delay
        const delay = entry.target.closest('.products-grid')
          ? [...entry.target.parentElement.children].indexOf(entry.target) * 60
          : 0;

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

  elements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ── Search Overlay Logic (Zara Style) ────────────────────────────────
function initSearch() {
  const searchToggle = document.getElementById('searchToggle');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const searchSuggestions = document.getElementById('searchSuggestions');
  const searchResultsSection = document.getElementById('searchResultsSection');
  const searchResultsCount = document.getElementById('searchResultsCount');
  const searchResultsGrid = document.getElementById('searchResultsGrid');
  const tagBtns = document.querySelectorAll('.suggestion-tags .tag-btn');

  if (!searchToggle || !searchOverlay || !searchClose || !searchInput || !searchClear || !searchResultsGrid) return;

  // Open Search
  searchToggle.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
  });

  // Close Search
  searchClose.addEventListener('click', () => closeSearch(false));

  // Close on backdrop click
  searchOverlay.addEventListener('click', e => {
    if (e.target === searchOverlay || e.target.classList.contains('search-container')) {
      closeSearch(false);
    }
  });

  // Esc key close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch(false);
    }
  });

  // Input Events
  searchInput.addEventListener('input', e => {
    const query = e.target.value;
    searchClear.classList.toggle('hidden', query.length === 0);
    performSearch(query);
  });

  // Clear Input
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchClear.classList.add('hidden');
    performSearch('');
    searchInput.focus();
  });

  // Suggestion tags search click
  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const term = btn.dataset.search;
      searchInput.value = term;
      searchClear.classList.remove('hidden');
      performSearch(term);
      searchInput.focus();
    });
  });

  function performSearch(query) {
    const cleanQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

    if (!cleanQuery) {
      searchResultsSection.classList.add('hidden');
      searchSuggestions.classList.remove('hidden');
      return;
    }

    // Filter
    const filtered = CATALOG.filter(p => {
      const nameClean = p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const brandClean = p.brand.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const catClean = p.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return nameClean.includes(cleanQuery) || brandClean.includes(cleanQuery) || catClean.includes(cleanQuery);
    });

    searchResultsGrid.innerHTML = '';
    searchSuggestions.classList.add('hidden');
    searchResultsSection.classList.remove('hidden');

    searchResultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}`;

    if (filtered.length > 0) {
      filtered.forEach(product => {
        const card = createProductCard(product);
        card.classList.add('visible');
        
        // When opening the product lightbox from search, close the search overlay first but keep body scroll hidden
        card.addEventListener('click', () => {
          closeSearch(true);
        });
        card.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            closeSearch(true);
          }
        });

        searchResultsGrid.appendChild(card);
      });
    } else {
      const emptyState = document.createElement('div');
      emptyState.className = 'product-placeholder';
      emptyState.style.padding = '4rem 2rem';
      emptyState.innerHTML = `
        <div class="placeholder-icon">🔍</div>
        <p>No encontramos artículos que coincidan con "${query}"</p>
      `;
      searchResultsGrid.appendChild(emptyState);
    }
  }
}

function closeSearch(keepBodyHidden = false) {
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const searchSuggestions = document.getElementById('searchSuggestions');
  const searchResultsSection = document.getElementById('searchResultsSection');

  if (!searchOverlay) return;
  searchOverlay.classList.remove('active');
  if (!keepBodyHidden) {
    document.body.style.overflow = '';
  }

  if (searchInput) searchInput.value = '';
  if (searchClear) searchClear.classList.add('hidden');
  if (searchSuggestions) searchSuggestions.classList.remove('hidden');
  if (searchResultsSection) searchResultsSection.classList.add('hidden');
}
