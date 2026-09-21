/* ==========================================================================
   JEEVIKA R - ELECTRONICS & COMMUNICATION ENGINEERING PORTFOLIO INTERACTION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Theme Toggle (Light Sandal / Dark Cyber Mode)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const htmlTag = document.documentElement;

  // Load saved theme or default to sandal
  const savedTheme = localStorage.getItem('jeevika_theme') || 'sandal';
  htmlTag.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlTag.getAttribute('data-theme');
    const newTheme = (currentTheme === 'sandal' || currentTheme === 'light') ? 'dark' : 'sandal';
    htmlTag.setAttribute('data-theme', newTheme);
    localStorage.setItem('jeevika_theme', newTheme);
  });

  // 3. Customizer Drawer Toggle & Live Sync Engine
  const customizerToggleBtn = document.getElementById('customizerToggleBtn');
  const quickEditBtn2 = document.getElementById('quickEditBtn2');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const customizerDrawer = document.getElementById('customizerDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');

  const openDrawer = () => {
    customizerDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
  };

  const closeDrawer = () => {
    customizerDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
  };

  if (customizerToggleBtn) customizerToggleBtn.addEventListener('click', openDrawer);
  if (quickEditBtn2) quickEditBtn2.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  // Live Data Fields Engine
  const saveDetailsBtn = document.getElementById('saveDetailsBtn');
  const inputName = document.getElementById('inputName');
  const inputCollege = document.getElementById('inputCollege');
  const inputDepartment = document.getElementById('inputDepartment');
  const inputYearOfStudy = document.getElementById('inputYearOfStudy');
  const inputGradYear = document.getElementById('inputGradYear');
  const inputCGPA = document.getElementById('inputCGPA');
  const inputPhone = document.getElementById('inputPhone');
  const inputEmail = document.getElementById('inputEmail');
  const inputLinkedin = document.getElementById('inputLinkedin');
  const inputGithub = document.getElementById('inputGithub');

  // Load saved user info from localStorage if available
  const loadSavedData = () => {
    const savedData = JSON.parse(localStorage.getItem('jeevika_custom_data') || '{}');
    if (savedData.name) inputName.value = savedData.name;
    if (savedData.college) inputCollege.value = savedData.college;
    if (savedData.department) inputDepartment.value = savedData.department;
    if (savedData.yearOfStudy) inputYearOfStudy.value = savedData.yearOfStudy;
    if (savedData.gradYear) inputGradYear.value = savedData.gradYear;
    if (savedData.cgpa) inputCGPA.value = savedData.cgpa;
    if (savedData.phone) inputPhone.value = savedData.phone;
    if (savedData.email) inputEmail.value = savedData.email;
    if (savedData.linkedin) inputLinkedin.value = savedData.linkedin;
    if (savedData.github) inputGithub.value = savedData.github;

    applyDataToDOM();
  };

  const applyDataToDOM = () => {
    const nameVal = inputName.value.trim() || 'Jeevika R';
    const collegeVal = inputCollege.value.trim() || 'Nandha Engineering College';
    const deptVal = inputDepartment.value.trim() || 'Electrical and Electronics Engineering';
    const yearStudyVal = inputYearOfStudy.value.trim() || '3rd Year';
    const gradYearVal = inputGradYear.value.trim() || '2028';
    const cgpaVal = inputCGPA.value.trim() || '9.045 CGPA';
    const phoneVal = inputPhone.value.trim() || '+91 7397227878';
    const emailVal = inputEmail.value.trim() || 'jeevikasathiya06@gmail.com';
    const linkedinVal = inputLinkedin.value.trim() || '[Add LinkedIn Profile]';
    const githubVal = inputGithub.value.trim() || 'github.com/RJEEVIKA06';

    // Update all matching elements by class name
    document.querySelectorAll('.data-field-name').forEach(el => el.textContent = nameVal);
    document.querySelectorAll('.data-field-college').forEach(el => el.textContent = collegeVal);
    document.querySelectorAll('.data-field-department').forEach(el => el.textContent = deptVal);
    document.querySelectorAll('.data-field-year-study').forEach(el => el.textContent = yearStudyVal);
    document.querySelectorAll('.data-field-grad-year').forEach(el => el.textContent = gradYearVal);
    document.querySelectorAll('.data-field-cgpa').forEach(el => el.textContent = cgpaVal);
    document.querySelectorAll('.data-field-phone').forEach(el => el.textContent = phoneVal);
    document.querySelectorAll('.data-field-email').forEach(el => el.textContent = emailVal);
    document.querySelectorAll('.data-field-linkedin').forEach(el => el.textContent = linkedinVal);
    document.querySelectorAll('.data-field-github').forEach(el => el.textContent = githubVal);

    // Update mailto and links if valid
    if (emailVal && !emailVal.includes('[')) {
      document.querySelectorAll('.data-link-email').forEach(el => el.setAttribute('href', `mailto:${emailVal}`));
      document.querySelectorAll('.data-link-email-href').forEach(el => el.setAttribute('href', `mailto:${emailVal}`));
    }
    if (linkedinVal && !linkedinVal.includes('[')) {
      const url = linkedinVal.startsWith('http') ? linkedinVal : `https://${linkedinVal}`;
      document.querySelectorAll('.data-link-linkedin').forEach(el => el.setAttribute('href', url));
    }
    if (githubVal && !githubVal.includes('[')) {
      const url = githubVal.startsWith('http') ? githubVal : `https://${githubVal}`;
      document.querySelectorAll('.data-link-github').forEach(el => el.setAttribute('href', url));
    }
  };

  saveDetailsBtn.addEventListener('click', () => {
    const dataToSave = {
      name: inputName.value.trim(),
      college: inputCollege.value.trim(),
      department: inputDepartment.value.trim(),
      yearOfStudy: inputYearOfStudy.value.trim(),
      gradYear: inputGradYear.value.trim(),
      cgpa: inputCGPA.value.trim(),
      phone: inputPhone.value.trim(),
      email: inputEmail.value.trim(),
      linkedin: inputLinkedin.value.trim(),
      github: inputGithub.value.trim()
    };
    localStorage.setItem('jeevika_custom_data', JSON.stringify(dataToSave));
    applyDataToDOM();
    closeDrawer();

    // Show temporary feedback toast or alert
    alert('Details successfully applied to Portfolio and ATS Resume!');
  });

  loadSavedData();

  // 4. Copy Raw ATS Resume Text
  const copyResumeBtn = document.getElementById('copyResumeBtn');
  if (copyResumeBtn) {
    copyResumeBtn.addEventListener('click', () => {
      const atsPaper = document.getElementById('atsPaper');
      if (!atsPaper) return;

      const rawText = atsPaper.innerText;
      navigator.clipboard.writeText(rawText).then(() => {
        const origHTML = copyResumeBtn.innerHTML;
        copyResumeBtn.innerHTML = `<i data-lucide="check"></i> Copied to Clipboard!`;
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          copyResumeBtn.innerHTML = origHTML;
          if (window.lucide) lucide.createIcons();
        }, 2500);
      }).catch(err => {
        console.error('Copy failed: ', err);
        alert('Could not copy text automatically. Please select and copy manually.');
      });
    });
  }

  // 5. Mobile Navigation Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking link
    navLinks.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 6. Navbar Scroll Active Link Highlight
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 7. Auto Current Year in Footer
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 8. ── SCROLL WAVE ANIMATION ENGINE ─────────────────────────────────────

  // 8a. Split section-title headings into per-letter spans for wave effect
  document.querySelectorAll('.section-title, .hero-title, .sub-title, .ambition-heading').forEach(heading => {
    // Skip if already split
    if (heading.dataset.split) return;
    heading.dataset.split = '1';

    // Collect child nodes; wrap text chars, keep element nodes (icons) intact
    const nodes = Array.from(heading.childNodes);
    heading.innerHTML = '';

    nodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split('').forEach((ch, i) => {
          const span = document.createElement('span');
          span.classList.add('wave-char');
          span.textContent = ch === ' ' ? '\u00A0' : ch;
          span.style.setProperty('--char-i', i);
          heading.appendChild(span);
        });
      } else {
        // keep icons / child elements as-is
        heading.appendChild(node);
      }
    });
  });

  // 8b. Mark every major block with alternating slide direction
  const slideTargets = document.querySelectorAll(
    '.about-card, .about-photo-col, .timeline-item, .project-card, ' +
    '.skill-card, .cert-card, .contact-card, .highlight-box, ' +
    '.soft-skill-pill, .ambition-card, .experience-card, .ats-paper'
  );

  slideTargets.forEach((el, i) => {
    el.classList.add('slide-block');
    el.classList.add(i % 2 === 0 ? 'from-left' : 'from-right');
  });

  // 8c. Section title wrappers slide up
  document.querySelectorAll('.section-title-wrap').forEach(el => {
    el.classList.add('slide-up-block');
  });

  // 8d. Intersection Observer — bidirectional (adds/removes class)
  const waveObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        // Remove so it re-animates when scrolled back
        entry.target.classList.remove('in-view');
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.wave-char, .slide-block, .slide-up-block').forEach(el => {
    waveObserver.observe(el);
  });

  // 9. Hero Section Interactive Electrical Particle Canvas Engine
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    const resizeCanvas = () => {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(180, 83, 9, 0.45)';
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(width / 25), 40);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(180, 83, 9, ${0.25 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }

  // 10. Dynamic Rotating Engineering Subtitle Rotator
  const subtitleEl = document.getElementById('dynamicSubtitle');
  if (subtitleEl) {
    const titles = [
      "Electrical and Electronics Engineering Student",
      "Embedded Systems & Circuit Design Enthusiast",
      "Power Systems & IoT Hardware Developer",
      "Technology & Continuous Learning Specialist"
    ];
    let titleIdx = 0;

    setInterval(() => {
      subtitleEl.style.opacity = '0';
      subtitleEl.style.transform = 'translateY(8px)';
      subtitleEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

      setTimeout(() => {
        titleIdx = (titleIdx + 1) % titles.length;
        subtitleEl.textContent = titles[titleIdx];
        subtitleEl.style.opacity = '1';
        subtitleEl.style.transform = 'translateY(0px)';
      }, 400);
    }, 4500);
  }

  // 11. Mouse Spotlight Glow Effect on Cards
  const cards = document.querySelectorAll('.project-card, .skill-card, .cert-card, .workshop-card, .about-card, .contact-card, .experience-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ==========================================================================
  // DYNAMIC CURSOR REACTIVE INTERACTIVE ANIMATION ENGINE
  // ==========================================================================

  // 12. Fluid Custom Cursor Ring & Velocity Speed Tracker
  const cursorRing = document.getElementById('cursorRing');
  const cursorDot = document.getElementById('cursorDot');

  let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let lastMousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let mouseVelocity = 0;
  let speedTimeout = null;

  window.addEventListener('mousemove', e => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;

    if (cursorDot) {
      cursorDot.style.left = `${mousePos.x}px`;
      cursorDot.style.top = `${mousePos.y}px`;
    }

    // Calculate mouse speed velocity
    const dx = mousePos.x - lastMousePos.x;
    const dy = mousePos.y - lastMousePos.y;
    mouseVelocity = Math.sqrt(dx * dx + dy * dy);

    lastMousePos = { x: mousePos.x, y: mousePos.y };

    if (mouseVelocity > 16) {
      document.body.classList.add('cursor-fast');
      clearTimeout(speedTimeout);
      speedTimeout = setTimeout(() => {
        document.body.classList.remove('cursor-fast');
      }, 300);

      // Spawn directional spark particles on fast movement
      if (Math.random() < 0.35) {
        const spark = document.createElement('div');
        spark.classList.add('cursor-reactive-spark');
        spark.style.left = `${mousePos.x}px`;
        spark.style.top = `${mousePos.y}px`;
        spark.style.width = `${Math.random() * 5 + 3}px`;
        spark.style.height = spark.style.width;
        spark.style.background = Math.random() > 0.5 ? '#d97706' : '#10b981';
        spark.style.boxShadow = `0 0 10px ${spark.style.background}`;
        spark.style.setProperty('--dx', `${-dx * 0.8 + (Math.random() - 0.5) * 20}px`);
        spark.style.setProperty('--dy', `${-dy * 0.8 + (Math.random() - 0.5) * 20}px`);
        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 550);
      }
    }
  });

  // Smooth lerp loop for outer ring
  const animateCursorRing = () => {
    ringPos.x += (mousePos.x - ringPos.x) * 0.18;
    ringPos.y += (mousePos.y - ringPos.y) * 0.18;

    if (cursorRing) {
      cursorRing.style.left = `${ringPos.x}px`;
      cursorRing.style.top = `${ringPos.y}px`;
    }
    requestAnimationFrame(animateCursorRing);
  };
  animateCursorRing();

  // 13. Fullscreen Interactive Dynamic Particle Mesh Canvas (Position & Speed Reactive)
  const bgCanvas = document.getElementById('cursorInteractiveCanvas');
  if (bgCanvas) {
    const bgCtx = bgCanvas.getContext('2d');
    let bgWidth, bgHeight;
    let bgParticles = [];

    const resizeBgCanvas = () => {
      bgWidth = bgCanvas.width = window.innerWidth;
      bgHeight = bgCanvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeBgCanvas);
    resizeBgCanvas();

    class BgParticle {
      constructor() {
        this.x = Math.random() * bgWidth;
        this.y = Math.random() * bgHeight;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.baseRadius = Math.random() * 2 + 1;
        this.radius = this.baseRadius;
      }

      update() {
        // Distance to cursor
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // React differently based on cursor proximity and speed
        if (dist < 170) {
          const force = (170 - dist) / 170;
          // Magnet attraction or repulsion based on speed
          if (mouseVelocity > 20) {
            // Repulsion on fast swipe
            this.vx -= (dx / dist) * force * 1.5;
            this.vy -= (dy / dist) * force * 1.5;
          } else {
            // Gentle orbital attraction on slow move
            this.vx += (dx / dist) * force * 0.05;
            this.vy += (dy / dist) * force * 0.05;
          }
          this.radius = this.baseRadius + force * 2.5;
        } else {
          this.radius = this.baseRadius;
        }

        // Friction
        this.vx *= 0.98;
        this.vy *= 0.98;

        this.x += this.vx;
        this.y += this.vy;

        // Bounce off screen edges
        if (this.x < 0 || this.x > bgWidth) this.vx *= -1;
        if (this.y < 0 || this.y > bgHeight) this.vy *= -1;
      }

      draw(colorHex) {
        bgCtx.beginPath();
        bgCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        bgCtx.fillStyle = colorHex;
        bgCtx.fill();
      }
    }

    const initBgParticles = () => {
      bgParticles = [];
      const count = Math.min(Math.floor((bgWidth * bgHeight) / 22000), 55);
      for (let i = 0; i < count; i++) {
        bgParticles.push(new BgParticle());
      }
    };
    initBgParticles();

    const animateBgCanvas = () => {
      bgCtx.clearRect(0, 0, bgWidth, bgHeight);

      // Dynamically calculate particle & arc color based on cursor X/Y position spectrum!
      const normX = mousePos.x / bgWidth;
      const normY = mousePos.y / bgHeight;

      // Interpolate between Golden Amber (#d97706), Emerald (#10b981), and Cyan (#06b6d4)
      let r = Math.round(217 * (1 - normX) + 16 * normX);
      let g = Math.round(119 * (1 - normY) + 185 * normY);
      let b = Math.round(6 * (1 - normX) + 212 * normX);
      const activeColor = `rgba(${r}, ${g}, ${b}, 0.65)`;
      const activeStroke = `rgba(${r}, ${g}, ${b}, `;

      for (let i = 0; i < bgParticles.length; i++) {
        bgParticles[i].update();
        bgParticles[i].draw(activeColor);

        // Connect nearby particles
        for (let j = i + 1; j < bgParticles.length; j++) {
          const dx = bgParticles[i].x - bgParticles[j].x;
          const dy = bgParticles[i].y - bgParticles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            bgCtx.beginPath();
            bgCtx.moveTo(bgParticles[i].x, bgParticles[i].y);
            bgCtx.lineTo(bgParticles[j].x, bgParticles[j].y);
            bgCtx.strokeStyle = `${activeStroke}${0.25 * (1 - dist / 130)})`;
            bgCtx.lineWidth = 0.8;
            bgCtx.stroke();
          }
        }

        // Draw dynamic lightning energy arcs to cursor
        const dxMouse = bgParticles[i].x - mousePos.x;
        const dyMouse = bgParticles[i].y - mousePos.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < 160) {
          bgCtx.beginPath();
          bgCtx.moveTo(bgParticles[i].x, bgParticles[i].y);

          // Add slight electric jitter on fast movement
          const midX = (bgParticles[i].x + mousePos.x) / 2 + (mouseVelocity > 10 ? (Math.random() - 0.5) * 8 : 0);
          const midY = (bgParticles[i].y + mousePos.y) / 2 + (mouseVelocity > 10 ? (Math.random() - 0.5) * 8 : 0);

          bgCtx.lineTo(midX, midY);
          bgCtx.lineTo(mousePos.x, mousePos.y);
          bgCtx.strokeStyle = `${activeStroke}${0.7 * (1 - distMouse / 160)})`;
          bgCtx.lineWidth = mouseVelocity > 15 ? 1.6 : 1.0;
          bgCtx.stroke();
        }
      }

      requestAnimationFrame(animateBgCanvas);
    };

    animateBgCanvas();
  }

  // 14. 3D Tilt Card Motion responding to cursor position
  const tiltCards = document.querySelectorAll(
    '.project-card, .skill-card, .cert-card, .about-card, .contact-card, .experience-card, .timeline-content'
  );

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cardWidth = rect.width;
      const cardHeight = rect.height;
      const centerX = rect.left + cardWidth / 2;
      const centerY = rect.top + cardHeight / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (+1) * (mouseY / (cardHeight / 2)) * 8;
      const rotateY = (-1) * (mouseX / (cardWidth / 2)) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });

});


