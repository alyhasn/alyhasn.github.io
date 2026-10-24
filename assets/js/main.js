/* =====================================================
   Ali Hassan — Portfolio script (v2 — professional edition)
   Edit the DATA block below to add badges / labs / progress / projects.
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
  labs: [],

  /* Core competencies shown as animated bars in About. */
  competencies: [
    { name:'Web App Penetration Testing', pct:78 },
    { name:'Access Control & Auth Flaws', pct:82 },
    { name:'GraphQL / API Security',      pct:65 },
    { name:'Burp Suite / Manual Testing', pct:85 },
    { name:'Linux & Bash Tooling',        pct:70 }
  ],

  /* Project detail text for the "Read more" modal — same facts as the
     card, just broken into scannable highlights. */
  projects: {
    vault:      { highlights:['AES-256-CBC encryption with an RSA-2048 wrapped key','SHA-256 integrity verification on every file','Password strength validation before encryption','Auto-shred after repeated failed decrypt attempts'] },
    triage:     { highlights:['Max-Heap implemented from scratch over a raw dynamic array','No STL containers used — manual memory management','FIFO overflow queue once heap capacity is reached','Built for O(log n) insert / extract-max operations'] },
    namaz:      { highlights:['Role-based dashboards for admins, teachers and students','Enrollment approval workflow before a class is joined','Class scheduling with conflict checks','Live AJAX-updated prayer counter with no page reload'] },
    realestate: { highlights:['Inheritance across property and transaction classes','Polymorphic listing behaviour by property type','Composition and aggregation used for ownership records'] },
    snake:      { highlights:['Written in raw x86 Assembly, assembled with EMU8086','BIOS interrupt-driven keyboard input','Custom screen-buffer rendering loop'] },
    address:    { highlights:['Full CRUD over a persistent text-file store','Input validation on every field','File-handling done without any external library'] },
    water:      { highlights:['Five-LED staged water level indicator','Buzzer alert triggered at maximum level','Built and wired on an Arduino UNO'] },
    university: { highlights:['Handles personal info and academic records','Department selection logic','Automated fee challan generation'] },
    ir:         { highlights:['IR remote button-to-LED mapping','Built with block-code embedded tooling'] }
  }
};

/* ---------------------- small helpers ---------------------- */
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){
    return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
  });
}
function raf(f){ var t=0; return function(){ if(t) return; t=1; requestAnimationFrame(function(){ t=0; f(); }); }; }
function $all(s,c){ return Array.prototype.slice.call((c||document).querySelectorAll(s)); }

/* ---------------------- badge rendering ---------------------- */
function badgeHTML(b,i){
  return '<article class="badge-card' + (b.featured ? ' featured' : '') + '" tabindex="0" data-badge="' + i + '">' +
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

  if(h1) h1.innerHTML = DATA.hackerone.map(function(b,i){ return badgeHTML(b,'h1-'+i); }).join('');
  if(htb) htb.innerHTML = DATA.academy.map(function(b,i){ return badgeHTML(b,'htb-'+i); }).join('');

  if(labs){
    labs.innerHTML = DATA.labs.length
      ? DATA.labs.map(function(b,i){ return badgeHTML(b,'lab-'+i); }).join('')
      : lockedHTML('Badges for solved labs and machines will appear here.') + lockedHTML('First lab solve is in progress.');
  }

  var count = document.getElementById('htbCount');
  if(count) count.textContent = DATA.htb.done + ' / ' + DATA.htb.total;

  $all('.badge-img img').forEach(function(img){
    img.addEventListener('error', function(){
      var icon = document.createElement('i');
      icon.className = 'fas fa-medal'; icon.setAttribute('aria-hidden','true');
      icon.style.cssText = 'font-size:48px;color:#8C98B8';
      img.replaceWith(icon);
    });
  });
}
function renderCompetencies(){
  var box = document.getElementById('competencyBars');
  if(!box) return;
  box.innerHTML = DATA.competencies.map(function(c){
    return '<div class="bar-row"><div class="bar-top"><span>' + esc(c.name) + '</span><span>' + c.pct + '%</span></div>' +
      '<div class="bar-track"><div class="bar-fill" data-pct="' + c.pct + '"></div></div></div>';
  }).join('');
}

renderBadges();
renderCompetencies();

(function(){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var html = document.documentElement;

  /* ---- preloader ---- */
  window.addEventListener('load', function(){
    var pre = document.getElementById('preloader');
    if(pre) setTimeout(function(){ pre.classList.add('done'); }, 250);
  });

  /* ---- theme toggle (persists via localStorage) ---- */
  var themeBtn = document.getElementById('themeToggle');
  function applyTheme(t){ html.setAttribute('data-theme', t); try{ localStorage.setItem('ah-theme', t); }catch(e){} }
  try{
    (function initTheme(){
      var saved = null;
      try{ saved = localStorage.getItem('ah-theme'); }catch(e){}
      if(saved){ applyTheme(saved); }
      else if(window.matchMedia('(prefers-color-scheme: light)').matches){ applyTheme('light'); }
    })();
    if(themeBtn) themeBtn.addEventListener('click', function(){
      applyTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });
  }catch(e){ console.warn('[portfolio] theme toggle init failed:', e); }

  /* ---- toast notifications ---- */
  var toastStack = document.getElementById('toastStack');
  function toast(msg, icon){
    if(!toastStack) return;
    var t = document.createElement('div'); t.className = 'toast';
    t.innerHTML = '<i class="fas ' + (icon || 'fa-circle-check') + '" aria-hidden="true"></i><span>' + esc(msg) + '</span>';
    toastStack.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add('show'); });
    setTimeout(function(){
      t.classList.remove('show');
      setTimeout(function(){ t.remove(); }, 300);
    }, 2600);
  }
  window.ahToast = toast;

  /* ---- copy email to clipboard ---- */
  $all('[data-copy]').forEach(function(el){
    el.addEventListener('click', function(e){
      var value = el.getAttribute('data-copy');
      if(!value || !navigator.clipboard) return;
      e.preventDefault();
      navigator.clipboard.writeText(value).then(function(){
        el.classList.add('copied');
        toast('Copied "' + value + '" to clipboard', 'fa-copy');
        setTimeout(function(){ el.classList.remove('copied'); }, 1500);
      });
    });
  });

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

  /* ---- generic overlay lock helper (shared by mobile nav + modals) ---- */
  var lockCount = 0;
  function lockScroll(){ lockCount++; html.classList.add('overlay-locked'); }
  function unlockScroll(){ lockCount = Math.max(0, lockCount - 1); if(!lockCount) html.classList.remove('overlay-locked'); }

  /* ---- mobile nav: open/close with a real backdrop + body scroll lock ----
     Fixes the bug where the page behind the menu stayed scrollable/touchable. */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  var backdrop = document.getElementById('navBackdrop');
  var navLinks = [], sections = [];

  try{
    function openNav(){
      nav.classList.add('open'); backdrop.classList.add('show'); lockScroll();
      toggle.querySelector('i').className = 'fas fa-xmark';
      toggle.setAttribute('aria-expanded', 'true');
    }
    function closeNav(){
      if(!nav.classList.contains('open')) return;
      nav.classList.remove('open'); backdrop.classList.remove('show'); unlockScroll();
      toggle.querySelector('i').className = 'fas fa-bars';
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', function(){ nav.classList.contains('open') ? closeNav() : openNav(); });
    backdrop.addEventListener('click', closeNav);
    nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeNav); });
    window.addEventListener('resize', raf(function(){
      if(window.innerWidth > 980 && nav.classList.contains('open')) closeNav();
    }));
  }catch(e){ console.warn('[portfolio] mobile nav init failed:', e); }

  /* ---- active link on scroll + right-edge dot nav sync ----
     Kept in its own try/catch: a problem here should never be able to
     take down the mobile nav above it or anything registered below it. */
  try{
    navLinks = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    sections = navLinks.map(function(a){ return document.querySelector(a.getAttribute('href')); });
    var dotBtns = $all('.dot-nav button');
    function updateActive(){
      var pos = window.scrollY + 160, idx = 0;
      sections.forEach(function(sec, i){ if(sec && sec.offsetTop <= pos) idx = i; });
      navLinks.forEach(function(a, i){ a.classList.toggle('active', i === idx); });
      dotBtns.forEach(function(d){ d.classList.toggle('active', d.getAttribute('data-target') === (sections[idx] && '#' + sections[idx].id)); });
    }
    document.addEventListener('scroll', raf(updateActive), { passive:true });
    updateActive();
    dotBtns.forEach(function(d){
      d.addEventListener('click', function(){
        var target = document.querySelector(d.getAttribute('data-target'));
        if(target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
  }catch(e){ console.warn('[portfolio] dot-nav init failed:', e); }

  /* ---- reveal on scroll ---- */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold:0.12 });
  $all('.observe').forEach(function(el){ io.observe(el); });

  /* ---- skill competency bars animate once visible ---- */
  var barIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var fill = entry.target;
      fill.classList.add('animating');
      requestAnimationFrame(function(){ fill.style.width = fill.getAttribute('data-pct') + '%'; });
      setTimeout(function(){ fill.classList.remove('animating'); }, 1300);
      barIO.unobserve(fill);
    });
  }, { threshold:0.4 });
  $all('.bar-fill').forEach(function(el){ barIO.observe(el); });

  /* ---- counters, with a small confetti burst the first time they all finish ---- */
  var countersDone = 0, countersTotal = $all('.stat-num[data-count]').length, confettiFired = false;
  function fireConfetti(){
    if(confettiFired || reduceMotion) return;
    confettiFired = true;
    var layer = document.getElementById('confettiLayer'); if(!layer) return;
    var colors = ['#35D0C0','#8B5CF6','#F0A848','#F2577A','#54D47C'];
    for(var i=0;i<34;i++){
      var p = document.createElement('span'); p.className = 'confetti-piece';
      p.style.left = (Math.random()*100) + 'vw';
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = (2.2 + Math.random()*1.4) + 's';
      p.style.animationDelay = (Math.random()*0.4) + 's';
      layer.appendChild(p);
      (function(el){ setTimeout(function(){ el.remove(); }, 4200); })(p);
    }
  }
  var counterIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      var el = entry.target, card = el.closest('.stat-card'), target = parseInt(el.getAttribute('data-count'), 10);
      counterIO.unobserve(el);
      function finish(){
        countersDone++;
        if(card) card.classList.add('done');
        if(countersDone >= countersTotal) fireConfetti();
      }
      if(reduceMotion){ el.textContent = target; finish(); return; }
      var start = null, dur = 1100;
      (function step(ts){
        if(!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if(p < 1) requestAnimationFrame(step); else finish();
      })(performance.now());
    });
  }, { threshold:0.5 });
  $all('.stat-num[data-count]').forEach(function(el){ counterIO.observe(el); });

  /* ---- HTB ring (driven by DATA.htb) ---- */
  var ring = document.querySelector('.ring');
  var ringFg = document.getElementById('ringFg');
  if(ring && ringFg){
    var C = 163.4;
    var pct = Math.max(DATA.htb.done / DATA.htb.total, 0.02);
    var ringIO = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ ringFg.style.strokeDashoffset = (C * (1 - pct)).toFixed(1); ringIO.unobserve(entry.target); }
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
      if(!deleting){ ch++; roleEl.textContent = word.slice(0, ch); if(ch === word.length){ deleting = true; setTimeout(typeLoop, 1500); return; } }
      else { ch--; roleEl.textContent = word.slice(0, ch); if(ch === 0){ deleting = false; ri = (ri + 1) % roles.length; } }
      setTimeout(typeLoop, deleting ? 35 : 65);
    })();
  } else if (roleEl){ roleEl.textContent = roles[0]; }

  /* ---- project filter ---- */
  var filterBtns = $all('.filter-btn');
  var cards = $all('.project-card');
  filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
      filterBtns.forEach(function(b){ b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active'); btn.setAttribute('aria-selected','true');
      var f = btn.getAttribute('data-filter');
      cards.forEach(function(card){ card.classList.toggle('hide', !(f === 'all' || card.getAttribute('data-cat') === f)); });
    });
  });

  /* ---- generic modal engine (used by project + badge + shortcuts modals) ---- */
  function openModal(backdropEl){ backdropEl.classList.add('show'); lockScroll(); var closeBtn = backdropEl.querySelector('.modal-close'); if(closeBtn) closeBtn.focus(); }
  function closeModal(backdropEl){ if(!backdropEl.classList.contains('show')) return; backdropEl.classList.remove('show'); unlockScroll(); }
  $all('.modal-backdrop').forEach(function(bd){
    bd.addEventListener('click', function(e){ if(e.target === bd) closeModal(bd); });
    var btn = bd.querySelector('.modal-close');
    if(btn) btn.addEventListener('click', function(){ closeModal(bd); });
  });
  document.addEventListener('keydown', function(e){
    if(e.key !== 'Escape') return;
    $all('.modal-backdrop.show').forEach(closeModal);
    if(nav.classList.contains('open')) closeNav();
  });

  /* ---- project detail modal ---- */
  var projectModal = document.getElementById('projectModal');
  if(projectModal){
    var pmTitle = projectModal.querySelector('.pm-title');
    var pmCat = projectModal.querySelector('.pm-cat');
    var pmDesc = projectModal.querySelector('.pm-desc');
    var pmList = projectModal.querySelector('.pm-list');
    var pmTags = projectModal.querySelector('.pm-tags');
    cards.forEach(function(card){
      card.setAttribute('tabindex','0');
      function open(){
        var key = card.getAttribute('data-project');
        var info = DATA.projects[key] || { highlights: [] };
        pmTitle.textContent = card.querySelector('.project-title').textContent;
        pmCat.textContent = card.querySelector('.project-cat').textContent;
        pmDesc.textContent = card.querySelector('.project-desc').textContent;
        pmList.innerHTML = info.highlights.map(function(h){ return '<li>' + esc(h) + '</li>'; }).join('');
        pmTags.innerHTML = card.querySelector('.project-tags').innerHTML;
        openModal(projectModal);
      }
      card.addEventListener('click', open);
      card.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); } });
    });
  }

  /* ---- badge lightbox modal ---- */
  var badgeModal = document.getElementById('badgeModal');
  if(badgeModal){
    var bmImg = badgeModal.querySelector('.bm-img');
    var bmTitle = badgeModal.querySelector('.bm-title');
    var bmDesc = badgeModal.querySelector('.bm-desc');
    var bmMeta = badgeModal.querySelector('.bm-meta');
    document.addEventListener('click', function(e){
      var card = e.target.closest && e.target.closest('.badge-card:not(.locked)');
      if(!card) return;
      var img = card.querySelector('.badge-img img');
      bmImg.src = img ? img.src : '';
      bmImg.alt = img ? img.alt : '';
      bmTitle.textContent = card.querySelector('.badge-name').textContent;
      bmDesc.textContent = card.querySelector('.badge-desc').textContent;
      var metaEl = card.querySelector('.badge-meta');
      bmMeta.textContent = metaEl ? metaEl.textContent : '';
      bmMeta.style.display = metaEl ? '' : 'none';
      openModal(badgeModal);
    });
  }

  /* ---- keyboard shortcuts modal (press "?") ---- */
  var shortcutsModal = document.getElementById('shortcutsModal');
  document.addEventListener('keydown', function(e){
    var tag = (e.target.tagName || '').toLowerCase();
    if(tag === 'input' || tag === 'textarea') return;
    if(e.key === '?' && shortcutsModal) openModal(shortcutsModal);
  });

  /* ---- command palette (Ctrl/Cmd+K) ---- */
  var cmdk = document.getElementById('cmdkModal');
  try{
  if(cmdk){
    var cmdkInput = document.getElementById('cmdkInput');
    var cmdkResults = document.getElementById('cmdkResults');
    var items = navLinks.map(function(a){ return { label:a.textContent.trim(), sub:'Section', icon:'fa-hashtag', action:function(){ document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'}); } }; });
    $all('.project-card').forEach(function(card){
      items.push({ label: card.querySelector('.project-title').textContent, sub:'Project', icon:'fa-diagram-project',
        action:function(){ card.scrollIntoView({behavior:'smooth', block:'center'}); setTimeout(function(){ card.click(); }, 400); } });
    });
    items.push({ label:'Toggle light / dark theme', sub:'Action', icon:'fa-circle-half-stroke', action:function(){ themeBtn && themeBtn.click(); } });
    items.push({ label:'Copy email address', sub:'Action', icon:'fa-envelope', action:function(){ var el = document.querySelector('[data-copy]'); el && el.click(); } });
    items.push({ label:'Download CV (PDF)', sub:'Action', icon:'fa-download', action:function(){ var a = document.createElement('a'); a.href = 'assets/docs/Ali_Hassan.pdf'; a.download = ''; a.click(); } });
    items.push({ label:'Open HackerOne profile', sub:'Link', icon:'fa-bug', action:function(){ window.open('https://hackerone.com/alyhasn?type=user', '_blank', 'noopener'); } });
    items.push({ label:'Open GitHub profile', sub:'Link', icon:'fa-github', action:function(){ window.open('https://github.com/alyhasn', '_blank', 'noopener'); } });

    var activeIdx = 0, shown = items;
    function renderResults(){
      shown = items.filter(function(it){ return it.label.toLowerCase().includes(cmdkInput.value.trim().toLowerCase()); });
      activeIdx = 0;
      cmdkResults.innerHTML = shown.length
        ? shown.map(function(it,i){ return '<div class="cmdk-item' + (i===0?' active':'') + '" data-i="' + i + '"><i class="fas ' + it.icon + '" aria-hidden="true"></i><span>' + esc(it.label) + '</span><span class="cmdk-sub">' + it.sub + '</span></div>'; }).join('')
        : '<div class="cmdk-empty">No matches. Try another term.</div>';
    }
    function runActive(){ if(shown[activeIdx]){ shown[activeIdx].action(); closeModal(cmdk); } }
    cmdkInput.addEventListener('input', renderResults);
    cmdkResults.addEventListener('click', function(e){
      var row = e.target.closest('.cmdk-item'); if(!row) return;
      activeIdx = parseInt(row.getAttribute('data-i'), 10); runActive();
    });
    document.addEventListener('keydown', function(e){
      var combo = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      if(combo){ e.preventDefault(); renderResults(); openModal(cmdk); cmdkInput.value=''; setTimeout(function(){ cmdkInput.focus(); }, 50); return; }
      if(!cmdk.classList.contains('show')) return;
      if(e.key === 'ArrowDown'){ e.preventDefault(); activeIdx = Math.min(activeIdx+1, shown.length-1); highlightActive(); }
      if(e.key === 'ArrowUp'){ e.preventDefault(); activeIdx = Math.max(activeIdx-1, 0); highlightActive(); }
      if(e.key === 'Enter'){ e.preventDefault(); runActive(); }
    });
    function highlightActive(){
      $all('.cmdk-item', cmdkResults).forEach(function(row,i){ row.classList.toggle('active', i === activeIdx); });
    }
    $all('[data-cmdk-open]').forEach(function(btn){
      btn.addEventListener('click', function(){ renderResults(); openModal(cmdk); setTimeout(function(){ cmdkInput.focus(); }, 50); });
    });
  }
  }catch(e){ console.warn('[portfolio] command palette init failed:', e); }

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

  /* ---- footer year ---- */
  var yearEl = document.getElementById('footYear');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- card spotlight follows cursor ---- */
  var SEL = '.stat-card,.skill-chip,.bb-card,.project-card,.badge-card,.approach-card,.now-card';
  if(!reduceMotion && window.matchMedia('(hover:hover)').matches){
    document.addEventListener('mousemove', function(e){
      var c = e.target.closest && e.target.closest(SEL);
      if(!c) return;
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive:true });
  }

  /* ---- scroll-to-top button with a circular progress ring ---- */
  var toTop = document.getElementById('toTop');
  var toTopRing = document.getElementById('toTopRing');
  if(toTop){
    toTop.addEventListener('click', function(){ scrollTo({ top:0, behavior: reduceMotion ? 'auto' : 'smooth' }); });
    function updateRing(){
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? h.scrollTop / max : 0;
      toTop.classList.toggle('show', h.scrollTop > 600);
      if(toTopRing) toTopRing.style.strokeDashoffset = (138 * (1 - pct)).toFixed(1);
    }
    document.addEventListener('scroll', raf(updateRing), { passive:true });
    updateRing();
  }
})();
