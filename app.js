const main = document.getElementById('main');
const hoverTitle = document.getElementById('hover-title');
const gallery = document.getElementById('gallery');
const rightPane = document.getElementById('right-pane');
const homeLink = document.getElementById('home-link');
const contactLink = document.querySelector('.contact');
const splash = document.getElementById('splash');
const pageTransition = document.getElementById('page-transition');

const subtitleHTML = '*is <u>not</u> a registered trademark, please do not steal it. :)';

let transitioning = false;

// ——— Media rendering ———

function renderMedia(src, alt, lazy, w, h) {
  const ext = src.split('.').pop().toLowerCase();
  const isVideo = ['mp4', 'webm', 'mov'].includes(ext);
  const dims = w ? `width="${w}" height="${h}"` : '';

  if (isVideo) {
    return `<video src="${src}" ${dims} autoplay loop muted playsinline preload="metadata" onloadeddata="this.classList.add('loaded')"></video>`;
  }
  return `<img src="${src}" alt="${alt}" ${dims} ${lazy ? 'loading="lazy"' : ''} onload="this.classList.add('loaded')">`;
}

// ——— Build thumbnails ———

projects.forEach((project, index) => {
  const item = document.createElement('div');
  item.className = 'image-item';

  const thumbSrc = project.thumbnailSmall || project.thumbnail;
  item.innerHTML = renderMedia(thumbSrc, project.title, index > 0, project.thumbnailWidth, project.thumbnailHeight);

  item.addEventListener('mouseenter', () => {
    hoverTitle.textContent = project.title;
    hoverTitle.classList.add('visible');
  });

  item.addEventListener('mouseleave', () => {
    hoverTitle.classList.remove('visible');
  });

  item.addEventListener('click', () => openGallery(index));

  main.appendChild(item);
});

// ——— Splash ———

(function dismissSplash() {
  const firstMedia = main.querySelector('img, video');
  const minTime = new Promise(r => setTimeout(r, 800));
  const mediaReady = new Promise(r => {
    if (!firstMedia) return r();
    if (firstMedia.tagName === 'VIDEO') {
      if (firstMedia.readyState >= 2) return r();
      firstMedia.addEventListener('loadeddata', r, { once: true });
    } else {
      if (firstMedia.complete) return r();
      firstMedia.addEventListener('load', r, { once: true });
    }
  });

  Promise.all([minTime, mediaReady]).then(() => {
    splash.classList.add('done');
    splash.addEventListener('transitionend', () => splash.remove(), { once: true });
  });
})();

// ——— Page transitions ———

function transitionTo(callback) {
  if (transitioning) return;
  transitioning = true;
  pageTransition.classList.add('active');

  setTimeout(() => {
    callback();
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      pageTransition.classList.remove('active');
      setTimeout(() => { transitioning = false; }, 300);
    });
  }, 300);
}

// ——— Gallery ———

function openGallery(index) {
  transitionTo(() => {
    const project = projects[index];

    gallery.innerHTML = project.images
      .map(src => renderMedia(src, project.title, true))
      .join('')
      + `<div class="gallery-text-mobile">${project.text}</div>`;

    rightPane.innerHTML = project.text;
    rightPane.classList.add('project-info');

    main.style.display = 'none';
    gallery.classList.add('active');
    hoverTitle.classList.remove('visible');

    if (window.innerWidth > 768) {
      contactLink.textContent = 'back';
      contactLink.href = '#';
    }
  });
}

function closeGallery() {
  transitionTo(() => {
    gallery.querySelectorAll('video').forEach(v => v.pause());

    main.style.display = '';
    gallery.classList.remove('active');
    rightPane.innerHTML = subtitleHTML;
    rightPane.classList.remove('project-info');

    contactLink.textContent = 'contact';
    contactLink.href = 'mailto:albab.rahman98@gmail.com';
  });
}

// ——— Navigation ———

contactLink.addEventListener('click', (e) => {
  if (gallery.classList.contains('active')) {
    e.preventDefault();
    closeGallery();
  }
});

homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (gallery.classList.contains('active')) {
    closeGallery();
  }
});

rightPane.addEventListener('click', () => {
  if (rightPane.classList.contains('project-info')) {
    closeGallery();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && gallery.classList.contains('active')) {
    closeGallery();
  }
});
