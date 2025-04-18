// Function to handle toggle of abstract visibility
function toggleAbstract(id) {
    var abstract = document.getElementById(id);
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}

// JavaScript to automatically reverse‑number items in multiple sections
document.addEventListener("DOMContentLoaded", function() {
  const sections = [
    { itemSelector: '.paper-item',      titleSelector: '.paper-title'      },
    { itemSelector: '.talk-item',       titleSelector: '.talk-title'       },
    { itemSelector: '.supervising-item',titleSelector: '.supervising-title' },
    { itemSelector: '.teaching-item',   titleSelector: '.teaching-title'   },
  ];

  sections.forEach(({itemSelector, titleSelector}) => {
    const items = document.querySelectorAll(itemSelector);
    let n = items.length;
    items.forEach(item => {
      const titleEl = item.querySelector(titleSelector);
      if (titleEl) {
        titleEl.innerHTML = `${n}. ${titleEl.innerHTML}`;
      }
      n--;
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
