/* enhance.js — network canvas, cursor glow, card spotlight, text decode, terminal replay */
(function(){
  var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- animated network / node background ---- */
  var cv = document.createElement('canvas'); cv.id = 'netCanvas';
  document.body.prepend(cv);
  var ctx = cv.getContext('2d'), W, H, pts = [], mouse = { x:-999, y:-999 }, raf;
  var cols = ['53,208,192','139,92,246','240,168,72','242,87,122','84,212,124'];
  function resize(){
    var d = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W*d; cv.height = H*d; ctx.setTransform(d,0,0,d,0,0);
    var n = Math.min(95, Math.floor(W*H/15000));
    pts = [];
    for(var i=0;i<n;i++) pts.push({
      x:Math.random()*W, y:Math.random()*H,
      vx:(Math.random()-.5)*.45, vy:(Math.random()-.5)*.45,
      r:Math.random()*1.6+.8, c:cols[i%cols.length]
    });
  }
  function frame(){
    ctx.clearRect(0,0,W,H);
    for(var i=0;i<pts.length;i++){
      var p = pts[i];
      if(!rm){
        p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>W) p.vx*=-1;
        if(p.y<0||p.y>H) p.vy*=-1;
        var mx = p.x-mouse.x, my = p.y-mouse.y, md = mx*mx+my*my;
        if(md<14000){ p.x += mx*.0035; p.y += my*.0035; }
      }
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,6.283);
      ctx.fillStyle = 'rgba('+p.c+',.9)'; ctx.shadowColor = 'rgba('+p.c+',.9)'; ctx.shadowBlur = 8; ctx.fill();
      ctx.shadowBlur = 0;
      for(var j=i+1;j<pts.length;j++){
        var q = pts[j], dx = p.x-q.x, dy = p.y-q.y, dd = dx*dx+dy*dy;
        if(dd<16900){
          ctx.strokeStyle = 'rgba('+p.c+','+(0.22*(1-dd/16900))+')';
          ctx.lineWidth = .8; ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.stroke();
        }
      }
      var ex = p.x-mouse.x, ey = p.y-mouse.y, ed = ex*ex+ey*ey;
      if(ed<25600){
        ctx.strokeStyle = 'rgba('+p.c+','+(0.55*(1-ed/25600))+')';
        ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke();
      }
    }
    if(!rm) raf = requestAnimationFrame(frame);
  }
  resize(); frame();
  addEventListener('resize', function(){ resize(); if(rm) frame(); });
  document.addEventListener('visibilitychange', function(){
    if(rm) return;
    if(document.hidden) cancelAnimationFrame(raf); else frame();
  });

  /* ---- cursor glow + card spotlight ---- */
  var glow = document.createElement('div'); glow.className = 'cursor-glow'; document.body.appendChild(glow);
  var SEL = '.stat-card,.skill-chip,.htb-badge,.bb-card,.project-card';
  document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX; mouse.y = e.clientY;
    glow.style.transform = 'translate('+e.clientX+'px,'+e.clientY+'px)';
    var c = e.target.closest && e.target.closest(SEL);
    if(c){
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX-r.left)+'px');
      c.style.setProperty('--my', (e.clientY-r.top)+'px');
    }
  }, { passive:true });
  document.addEventListener('mouseleave', function(){ mouse.x = mouse.y = -999; });

  /* ---- "decode" text effect on section titles / kickers ---- */
  if(!rm){
    var chars = '01#$%&*<>/\\{}[]';
    var io = new IntersectionObserver(function(es){
      es.forEach(function(en){
        if(!en.isIntersecting) return;
        var el = en.target, txt = el.getAttribute('data-orig'), t0 = null, dur = 750;
        io.unobserve(el);
        (function step(ts){
          if(!t0) t0 = ts;
          var k = Math.min((ts-t0)/dur,1), out = '';
          for(var i=0;i<txt.length;i++){
            out += (txt[i]===' ' || i < txt.length*k) ? txt[i] : chars[Math.floor(Math.random()*chars.length)];
          }
          el.textContent = out;
          if(k<1) requestAnimationFrame(step); else el.textContent = txt;
        })(performance.now());
      });
    }, { threshold:.6 });
    document.querySelectorAll('.section-title,.section-kicker').forEach(function(el){
      el.setAttribute('data-orig', el.textContent); io.observe(el);
    });
  }

  /* ---- terminal session replays in a loop ---- */
  if(!rm){
    setInterval(function(){
      var body = document.getElementById('termBody');
      if(!body) return;
      var lines = body.querySelectorAll('.line');
      lines.forEach(function(l){ l.style.animation = 'none'; });
      void body.offsetWidth;
      lines.forEach(function(l){ l.style.animation = ''; });
    }, 10500);
  }
})();
