// Progressive enhancement: the complete résumé and navigation work without JavaScript.
const printButton = document.querySelector('.print-button');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}
document.querySelector('#year').textContent = new Date().getFullYear();

// Highlight the section being read without changing native anchor navigation.
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-10% 0px -65% 0px' });
  document.querySelectorAll('#home, #work, #education, #research, #contact').forEach((section) => observer.observe(section));
}

// Include collapsed early roles in the printable résumé, then restore the UI.
const earlyExperience = document.querySelector('.earlier-work');
let wasOpen = false;
window.addEventListener('beforeprint', () => {
  wasOpen = earlyExperience.open;
  earlyExperience.open = true;
});
window.addEventListener('afterprint', () => { earlyExperience.open = wasOpen; });
