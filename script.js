const panel = document.querySelector('#panel');
const buttons = [...document.querySelectorAll('[data-panel]')];
const sections = [...panel.querySelectorAll('article')];
let opener = null;

function closePanel(restoreFocus = true) {
  panel.hidden = true;
  buttons.forEach(button => button.setAttribute('aria-expanded', 'false'));
  if (restoreFocus && opener) opener.focus({preventScroll: true});
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const section = sections.find(item => item.id === button.dataset.panel);
    if (!section) return;
    if (!panel.hidden && !section.hidden) {
      closePanel();
      return;
    }
    opener = button;
    sections.forEach(item => { item.hidden = item !== section; });
    buttons.forEach(item => item.setAttribute('aria-expanded', String(item.dataset.panel === button.dataset.panel)));
    panel.hidden = false;
    panel.setAttribute('aria-labelledby', section.querySelector('h2').id);
    panel.scrollTop = 0;
    section.querySelector('h2').focus({preventScroll: true});
  });
});
document.querySelector('.close').addEventListener('click', () => closePanel());
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !panel.hidden) closePanel();
});
document.addEventListener('click', event => {
  if (!panel.hidden && !panel.contains(event.target) && !event.target.closest('[data-panel]')) {
    closePanel(false);
  }
});
