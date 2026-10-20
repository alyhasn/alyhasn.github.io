/* animations.js: stagger indexes, filter re-animation, pause offscreen work */
(function(){
  var $=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s));};
  ['.stat-grid','.skills-grid','.project-grid','.badge-grid','.timeline','.about-text'].forEach(function(sel){
    $(sel).forEach(function(g){Array.prototype.forEach.call(g.children,function(c,i){c.style.setProperty('--i',i);});});
  });

  var cards=$('.project-card');
  $('.filter-btn').forEach(function(b){
    b.addEventListener('click',function(){
      var n=0;
      cards.forEach(function(c){
        c.classList.remove('pop');
        if(!c.classList.contains('hide')){c.style.setProperty('--i',n++);void c.offsetWidth;c.classList.add('pop');}
      });
    });
  });

  var root=document.documentElement;
  document.addEventListener('visibilitychange',function(){root.classList.toggle('paused',document.hidden);});
  var hero=document.getElementById('home');
  if(hero&&'IntersectionObserver' in window){
    new IntersectionObserver(function(e){root.classList.toggle('hero-off',!e[0].isIntersecting);}).observe(hero);
  }

  /* safety net: never leave a visible section hidden */
  setTimeout(function(){
    $('.observe:not(.in)').forEach(function(el){
      if(el.getBoundingClientRect().top<window.innerHeight) el.classList.add('in');
    });
  },1500);
})();
