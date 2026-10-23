/* =====================================================
   Ali Hassan — Portfolio script
   Edit the DATA block below to add badges / labs / progress.
   ===================================================== */

/* ---------------------- DATA (edit here) ---------------------- */
var DATA = {

  htb: { done: 6, total: 358 },

  /* Badges earned on HackerOne. Set featured:true to highlight one. */
  hackerone: [
    {
      img: 'assets/images/badges/Milestone_Program_level_1.png',
      name: 'Hacker Milestone Program: Level 1',
      desc: 'Achieved Level 1 in the HackerOne Community Milestone Program (2025–2026).',
      meta: 'Awarded June 23, 2026',
      featured: true
    }
  ],

  /* Hack The Box Academy badges. */
  academy: [
    { img: 'assets/images/badges/your-request-is-my-demand.png', name: 'Your Request Is My Demand', desc: 'Module: Web Requests' },
    { img: 'assets/images/badges/developer.png',                 name: 'Developer',                 desc: 'Module: Introduction to Web Applications' },
    { img: 'assets/images/badges/Fuzzing_guru.png',              name: 'Fuzzing Guru',              desc: 'Module: Attacking Web Applications with Ffuf' },
    { img: 'assets/images/badges/fuzzing-is-power.png',          name: 'Fuzzing Is Power',          desc: 'Module: Web Fuzzing' },
    { img: 'assets/images/badges/academician.png',               name: 'Academician',               desc: 'Hack The Box Academy badge' },
    { img: 'assets/images/badges/philomath.png',                 name: 'Philomath',                 desc: 'Hack The Box Academy badge' },
    { img: 'assets/images/badges/Unwavering_user.png',           name: 'Unwavering User',           desc: 'Hack The Box Academy badge' }
  ],

  /* Lab / machine badges. Leave empty [] until the first lab is solved. */
  labs: []
};

/* ---------------------- helpers ---------------------- */
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){
    return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
  });
}

/* run fn at most once per animation frame (smooth scroll handlers) */
function raf(f){
  var t = 0;
  return function(){
    if(t) return;
    t = 1;
    requestAnimationFrame(function(){ t = 0; f(); });
  };
}

function badgeHTML(b){
  return '<article class="badge-card' + (b.featured ? ' featured' : '') + '">' +
    '<div class="badge-img"><img src="' + esc(b.img) + '" alt="' + esc(b.name) + ' badge" loading="lazy" decoding="async"></div>' +
    '<div class="badge-body">' +
      '<h4 class="badge-name">' + esc(b.name) + '</h4>' +
      '<p class="badge-desc">' + esc(b.desc) + '</p>' +
      (b.meta ? '<div class="badge-meta">' + esc(b.meta) + '</div>' : '') +
    '</div></article>';
}

function lockedHTML(text){
  return '<article class="badge-card locked">' +
    '<div class="badge-img"><i class="fas fa-lock" aria-hidden="true"></i></div>' +
    '<h4 class="badge-name">Not earned yet</h4>' +
    '<p class="badge-desc">' + esc(text) + '</p></article>';
}

function renderBadges(){
  var h1 = document.getElementById('h1Badges');
  var htb = document.getElementById('htbBadges');
  var labs = document.getElementById('labBadges');

  if(h1) h1.innerHTML = DATA.hackerone.map(badgeHTML).join('');
  if(htb) htb.innerHTML = DATA.academy.map(badgeHTML).join('');

  if(labs){
    if(DATA.labs.length){
      labs.innerHTML = DATA.labs.map(badgeHTML).join('');
    } else {
      labs.innerHTML = lockedHTML('Badges for solved labs and machines will appear here.') +
                       lockedHTML('First lab solve is in progress.');
    }
  }

  var count = document.getElementById('htbCount');
  if(count) count.textContent = DATA.htb.done + ' / ' + DATA.htb.total;

  /* if a badge image fails to load, show a medal icon instead (no broken-image icon) */
  document.querySelectorAll('.badge-img img').forEach(function(img){
    img.addEventListener('error', function(){
      var icon = document.createElement('i');
      icon.className = 'fas fa-medal';
      icon.setAttribute('aria-hidden', 'true');
      icon.style.cssText = 'font-size:48px;color:#8C98B8';
      img.replaceWith(icon);
    });
  });
}

/* build content first so observers see it */
renderBadges();

(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- scroll progress ---- */
  var bar = document.getElementById('progressBar');
  function updateProgress(){
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? h.scrollTop / max * 100 : 0) + '%';
  }
  document.addEventListener('scroll', raf(updateProgress), { passive:true });
  updateProgress();

  /* ---- header state ---- */
  var header = document.getElementById('siteHeader');
  function updateHeader(){ header.classList.toggle('scrolled', window.scrollY > 30); }
  document.addEventListener('scroll', raf(updateHeader), { passive:true });
  updateHeader();

  /* ---- mobile nav: open/close with a real backdrop + body scroll lock ----
     Fixes the bug where the page behind the menu stayed scrollable/touchable. */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  var backdrop = document.getElementById('navBackdrop');
  var html = document.documentElement;

  function openNav(){
    nav.classList.add('open');
    backdrop.classList.add('show');
    html.classList.add('nav-locked');
    toggle.querySelector('i').className = 'fas fa-xmark';
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeNav(){
    nav.classList.remove('open');
    backdrop.classList.remove('show');
    html.classList.remove('nav-locked');
    toggle.querySelector('i').className = 'fas fa-bars';
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function(){
    nav.classList.contains('open') ? closeNav() : openNav();
  });
  backdrop.addEventListener('click', closeNav);          /* tap outside closes it */
  document.addEventListener('keydown', function(e){       /* Escape closes it */
    if(e.key === 'Escape' && nav.classList.contains('open')) closeNav();
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeNav);                /* picking a link closes it */
  });
  /* if the viewport grows back to desktop width while the menu is open, reset state */
  window.addEventListener('resize', raf(function(){
    if(window.innerWidth > 980 && nav.classList.contains('open')) closeNav();
  }));

  /* ---- active link on scroll ---- */
  var navLinks = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sections = navLinks.map(function(a){ return document.querySelector(a.getAttribute('href')); });
  function updateActive(){
    var pos = window.scrollY + 160, idx = 0;
    sections.forEach(function(sec, i){ if(sec && sec.offsetTop <= pos) idx = i; });
    navLinks.forEach(function(a, i){ a.classList.toggle('active', i === idx); });
  }
  document.addEventListener('scroll', raf(updateActive), { passive:true });
  updateActive();

  /* ---- reveal on scroll ---- */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.12 });
  document.querySelectorAll('.observe').forEach(function(el){ io.observe(el); });

  /* ---- counters ---- */
  var counterIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var el = entry.target, target = parseInt(el.getAttribute('data-count'), 10);
      counterIO.unobserve(el);
      if(reduceMotion){ el.textContent = target; return; }
      var start = null, dur = 1100;
      (function step(ts){
        if(!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if(p < 1) requestAnimationFrame(step);
      })(performance.now());
    });
  }, { threshold:0.5 });
  document.querySelectorAll('.stat-num[data-count]').forEach(function(el){ counterIO.observe(el); });

  /* ---- HTB ring (driven by DATA.htb) ---- */
  var ring = document.querySelector('.ring');
  var ringFg = document.getElementById('ringFg');
  if(ring && ringFg){
    var C = 163.4;
    var pct = Math.max(DATA.htb.done / DATA.htb.total, 0.02); /* keep a visible sliver */
    var ringIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          ringFg.style.strokeDashoffset = (C * (1 - pct)).toFixed(1);
          ringIO.unobserve(entry.target);
        }
      });
    }, { threshold:0.4 });
    ringIO.observe(ring);
  }
  var chip = document.getElementById('chipHtb');
  if(chip) chip.textContent = 'HTB Academy · ' + DATA.htb.done + ' modules';

  /* ---- rotating role text ---- */
  var roles = ['BS Cybersecurity Student', 'Bug Bounty Researcher', 'Hack The Box Learner', 'Web App Security Enthusiast'];
  var roleEl = document.getElementById('roleText');
  if(roleEl && !reduceMotion){
    var ri = 0, ch = 0, deleting = false;
    (function typeLoop(){
      var word = roles[ri];
      if(!deleting){
        ch++; roleEl.textContent = word.slice(0, ch);
        if(ch === word.length){ deleting = true; setTimeout(typeLoop, 1500); return; }
      } else {
        ch--; roleEl.textContent = word.slice(0, ch);
        if(ch === 0){ deleting = false; ri = (ri + 1) % roles.length; }
      }
      setTimeout(typeLoop, deleting ? 35 : 65);
    })();
  } else if (roleEl){
    roleEl.textContent = roles[0];
  }

  /* ---- project filter ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.project-card');
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterBtns.forEach(function(b){ b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');
      var f = btn.getAttribute('data-filter');
      cards.forEach(function(card){
        card.classList.toggle('hide', !(f === 'all' || card.getAttribute('data-cat') === f));
      });
    });
  });

  /* ---- CV preview (loads the PDF only when asked) ---- */
  var cvBtn = document.getElementById('cvToggle');
  var cvBox = document.getElementById('cvPreview');
  var cvFrame = document.getElementById('cvFrame');
  if(cvBtn && cvBox && cvFrame){
    cvBtn.addEventListener('click', function(){
      var open = cvBox.hidden;
      if(open && !cvFrame.getAttribute('src')) cvFrame.setAttribute('src', cvFrame.getAttribute('data-src'));
      cvBox.hidden = !open;
      cvBtn.setAttribute('aria-expanded', String(open));
      cvBtn.querySelector('span').textContent = open ? 'Hide preview' : 'Preview here';
    });
  }

  /* ---- card spotlight follows cursor ---- */
  var SEL = '.stat-card,.skill-chip,.bb-card,.project-card,.badge-card';
  if(!reduceMotion && window.matchMedia('(hover:hover)').matches){
    document.addEventListener('mousemove', function(e){
      var c = e.target.closest && e.target.closest(SEL);
      if(!c) return;
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive:true });
  }
})();
