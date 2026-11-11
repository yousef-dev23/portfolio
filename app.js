const GH = 'https://github.com/yousef-dev23'; // TODO: replace with each repo link

const PROJECTS = [
  {
    id: 'lamha', name: 'Lamha', short: 'Lamha', a: '#ff8a1f',
    icon: 'assets/lamha-icon.png', shot: 'assets/lamha.jpg', wide: true,
    kind: 'Multi-supermarket delivery app · Team project',
    role: 'Built the complete driver module, working with a team on GitHub.',
    story: 'A central marketplace that shows products from several supermarkets, with delivery and two roles: customer and driver.',
    built: [
      'Driver dashboard with online/offline status',
      'Available orders and order acceptance',
      'Current delivery details and live location updates',
      'Delivery status updates with OTP and photo confirmation',
      'Delivery history and earnings summary'
    ],
    tech: ['Flutter', 'Dart', 'JSON / REST', 'Git & GitHub'],
    note: 'I tested the full driver journey and presented the app to project supervisors and professionals.'
  },
  {
    id: 'anaqa', name: 'anaqa (Dori)', short: 'anaqa', a: '#c9a24b',
    icon: 'assets/anaqa-icon.png', shot: 'assets/anaqa.jpg',
    kind: 'Barber reservation app',
    role: 'Implemented the app from a Postman API collection and a Figma design.',
    story: 'A booking app for barber services. I worked from the design file and API collection instead of building from scratch.',
    built: [
      'Splash screen using the ping and place-info endpoints',
      'No-connection error screen with retry',
      'Login and registration screens',
      'GetX state management'
    ],
    tech: ['Flutter', 'Dart', 'GetX', 'Postman', 'Figma']
  },
  {
    id: 'rivo', name: 'Rivo Store', short: 'Rivo', a: '#1ea7e6',
    icon: 'assets/rivo-icon.png', shot: 'assets/rivo.jpg',
    kind: 'Electronics store app',
    role: 'Built the store app and redesigned the interface.',
    story: 'A complete store for laptops, computers and other electronics, with an Arabic right-to-left interface.',
    built: [
      'Category browsing, product cards and discounts',
      'Favorites, cart and account tabs',
      'iOS-style redesign based on the RIVO brand colors',
      'Design refined with the ui-taste skill'
    ],
    tech: ['Flutter', 'Dart', 'RTL UI']
  },
  {
    id: 'notely', name: 'Notely', short: 'Notely', a: '#6c63ff', letter: 'N',
    kind: 'Notes app with cloud storage',
    role: 'Built the app end to end and redesigned its interface.',
    story: 'A notes app where every note is stored in the cloud and syncs through Firestore.',
    built: [
      'Create, edit and delete notes',
      'Pin and search notes',
      'Color-coded notes',
      'Cloud storage in Firebase Cloud Firestore'
    ],
    tech: ['Flutter', 'Dart', 'Firebase Firestore']
  },
  {
    id: 'minilab', name: 'Mobile Mini Lab', short: 'Mini Lab', a: '#3ddc97', letter: 'M',
    kind: 'Graduation project · Java learning app',
    role: 'Graduation project for my Bachelor of IT.',
    story: 'A mobile app that lets university students learn and practice Java from a phone.',
    built: [
      'Interactive lessons',
      'Code editor with syntax highlighting',
      'Online code execution',
      'Auto-tested exercises with progressive hints',
      'Progress tracking'
    ],
    tech: ['Mobile (Java)', 'Online code execution']
  }
];

const strip = document.getElementById('strip');
const stage = document.getElementById('stage');

const iconHTML = p => p.icon
  ? `<img class="ico" src="${p.icon}" alt="" width="56" height="56">`
  : `<span class="ico">${p.letter}</span>`;

function shotHTML(p) {
  if (p.shot && p.wide) return `<div class="shot wide"><img src="${p.shot}" alt="${p.name} app screens"></div>`;
  if (p.shot) return `<div class="shot"><div class="phone"><img src="${p.shot}" alt="${p.name} home screen"></div></div>`;
  return `<div class="shot"><div class="soon">${iconHTML(p)}<span>Screenshots coming soon</span></div></div>`;
}

function show(id, animate = true) {
  const p = PROJECTS.find(x => x.id === id) || PROJECTS[0];
  stage.style.setProperty('--a', p.a);
  stage.style.borderColor = p.a + '55';
  stage.innerHTML = `${shotHTML(p)}
    <div class="story">
      <h3>${p.name}</h3>
      <p class="kind">${p.kind}</p>
      <p>${p.story}</p>
      <h4>What I built</h4>
      <ul>${p.built.map(b => `<li>${b}</li>`).join('')}</ul>
      ${p.note ? `<p style="margin-top:14px">${p.note}</p>` : ''}
      <ul class="tags">${p.tech.map(t => `<li>${t}</li>`).join('')}</ul>
      <a class="btn" href="${GH}" target="_blank" rel="noopener" style="color:#04101a">View on GitHub</a>
    </div>`;
  strip.querySelectorAll('.tab').forEach(b => b.setAttribute('aria-pressed', b.dataset.id === id));
  if (animate) { stage.classList.remove('swap'); void stage.offsetWidth; stage.classList.add('swap'); }
}

strip.innerHTML = PROJECTS.map(p =>
  `<button class="tab" type="button" data-id="${p.id}" aria-pressed="false" style="--a:${p.a}">${iconHTML(p)}${p.short}</button>`
).join('');

strip.addEventListener('click', e => {
  const b = e.target.closest('.tab');
  if (b) { show(b.dataset.id); history.replaceState(null, '', '#' + b.dataset.id); }
});

const start = location.hash.slice(1);
show(PROJECTS.some(p => p.id === start) ? start : PROJECTS[0].id, false);
document.getElementById('yr').textContent = new Date().getFullYear();
