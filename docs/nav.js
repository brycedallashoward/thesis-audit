// Shared nav — single source of truth for all pages
(function() {
  var currentPage = location.pathname.split('/').pop() || 'index.html';
  var links = [
    { href: 'factsheet.html', label: 'Fact Sheet' },
    { href: 'audit.html', label: 'Audit' },
    { href: 'campaigns.html', label: 'Campaigns' },
    { href: 'mindshift.html', label: 'Mindshift Concept WIP' }
  ];

  var nav = document.querySelector('nav .nav-inner');
  if (!nav) return;

  var html = '<img src="headshot.png" alt="Bryce Radick" style="width:36px; height:36px; border-radius:6px; object-fit:cover;">';
  html += '<a href="index.html" class="brand">Thesis + Stasis <span>Klaviyo Audit</span></a>';
  links.forEach(function(link) {
    var active = (link.href === currentPage) ? ' class="active"' : '';
    html += '<a href="' + link.href + '"' + active + '>' + link.label + '</a>';
  });

  nav.innerHTML = html;
})();
