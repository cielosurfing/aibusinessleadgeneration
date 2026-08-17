const toggle = document.querySelector('[data-lang-toggle]');
const english = document.querySelector('[data-lang="en"]');
const spanish = document.querySelector('[data-lang="es"]');

toggle?.addEventListener('click', () => {
  const showSpanish = spanish.hidden;
  spanish.hidden = !showSpanish;
  english.hidden = showSpanish;
  toggle.textContent = showSpanish ? 'English' : 'Español';
  document.documentElement.lang = showSpanish ? 'es' : 'en';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('[data-preview-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = form.querySelector('[data-form-note]');
    if (note) {
      note.textContent = document.documentElement.lang === 'es'
        ? 'Llama al +1 657-644-7540 o escribe a admin@cielosurfing.com.'
        : 'Call +1 657-644-7540 or email admin@cielosurfing.com.';
    }
  });
});
