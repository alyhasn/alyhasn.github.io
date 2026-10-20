/* effects.js: ripple, tilt, magnetic, parallax, cursor glow, header hide, back-to-top */
(function(){
  var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  var $=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};

  /* click ripple */
  if(!rm) document.addEventListener('pointerdown',function(e){
    var t=e.target.closest&&e.target.closest('.btn,.filter-btn,.contact-link,.nav-cta');
    if(!t) return;
    var r=t.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,d=document.createElement('span');
    d.className='ripple';
    d.style.cssText='width:'+s+'px;height:'+s+'px;left:'+(e.clientX-r.left-s/2)+'px;top:'+(e.clientY-r.top-s/2)+'px';
    t.appendChild(d);setTimeout(function(){d.remove();},700);
  },{passive:true});

  /* back-to-top + hide header on scroll down (one rAF-throttled listener) */
  var top=document.createElement('button');
  top.className='to-top';top.setAttribute('aria-label','Back to top');
  top.innerHTML='<i class="fas fa-arrow-up"></i>';
  top.onclick=function(){scrollTo({top:0,behavior:'smooth'});};
  document.body.appendChild(top);
  var header=document.getElementById('siteHeader'),nav=document.getElementById('siteNav'),last=0,tick=false;
  addEventListener('scroll',function(){
    if(tick) return; tick=true;
    requestAnimationFrame(function(){
      var y=scrollY;
      top.classList.toggle('show',y>600);
      if(header&&!(nav&&nav.classList.contains('open'))) header.classList.toggle('hide',y>last&&y>200);
      last=y;tick=false;
    });
  },{passive:true});

  if(rm||!fine) return;

  /* 3D tilt on cards */
  var T='.project-card,.badge-card:not(.featured):not(.locked),.stat-card,.bb-card';
  $(T).forEach(function(c){
    c.classList.add('tilt');
    c.addEventListener('mousemove',function(e){
      var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
      c.style.setProperty('--ry',(px*7).toFixed(2)+'deg');
      c.style.setProperty('--rx',(-py*7).toFixed(2)+'deg');
    });
    c.addEventListener('mouseleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg');});
  });

  /* magnetic buttons */
  $('.btn-primary,.social-row a,.nav-cta').forEach(function(el){
    el.classList.add('mag');
    el.addEventListener('mousemove',function(e){
      var r=el.getBoundingClientRect();
      el.style.setProperty('--tx',((e.clientX-r.left-r.width/2)*.25).toFixed(1)+'px');
      el.style.setProperty('--ty2',((e.clientY-r.top-r.height/2)*.25).toFixed(1)+'px');
    });
    el.addEventListener('mouseleave',function(){el.style.setProperty('--tx','0px');el.style.setProperty('--ty2','0px');});
  });

  /* hero photo parallax */
  var hp=document.querySelector('.hero-photo');
  if(hp){
    var f=hp.querySelector('.photo-frame'),chips=$('.photo-chip',hp);
    var reset=function(){
      f.style.setProperty('--rx','0deg');f.style.setProperty('--ry','0deg');
      chips.forEach(function(c){c.style.setProperty('--px','0px');c.style.setProperty('--py','0px');});
    };
    hp.addEventListener('mousemove',function(e){
      var r=hp.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      f.style.setProperty('--ry',(x*8)+'deg');f.style.setProperty('--rx',(-y*8)+'deg');
      chips.forEach(function(c,i){var k=i?-1:1;c.style.setProperty('--px',(x*18*k)+'px');c.style.setProperty('--py',(y*14*k)+'px');});
    });
    hp.addEventListener('mouseleave',reset);
  }

  /* cursor glow: rAF loop runs only while catching up */
  var g=document.createElement('div');g.className='cursor-glow';document.body.appendChild(g);
  var gx=0,gy=0,tx=0,ty=0,run=false;
  function loop(){
    gx+=(tx-gx)*.12;gy+=(ty-gy)*.12;
    g.style.transform='translate('+gx.toFixed(1)+'px,'+gy.toFixed(1)+'px)';
    if(Math.abs(tx-gx)>.5||Math.abs(ty-gy)>.5) requestAnimationFrame(loop); else run=false;
  }
  addEventListener('mousemove',function(e){
    tx=e.clientX;ty=e.clientY;
    if(!run){run=true;requestAnimationFrame(loop);}
  },{passive:true});
})();
