(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('site-nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});}
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  var f=document.getElementById('contact-form');
  if(f){f.addEventListener('submit',function(e){
    if(!f.checkValidity())return;e.preventDefault();
    var g=function(id){return (document.getElementById(id).value||'').trim()};
    var subj='Website inquiry: '+g('f-topic')+' - '+g('f-name');
    var body='Name: '+g('f-name')+'\nPhone: '+g('f-phone')+'\nTown: '+g('f-town')+'\nInterested in: '+g('f-topic')+'\n\n'+g('f-msg');
    window.location.href='mailto:'+f.getAttribute('data-email')+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
    f.querySelector('.form-status').textContent="Your email app should open with your message. If it doesn't, please call 856-294-1775 or email us directly.";
  });}
})();
