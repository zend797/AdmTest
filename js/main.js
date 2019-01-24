(function() {
  /*  Scroll to element */
  function scroll() {
    let element = document.getElementById('section-a');
    element.scrollIntoView();
  }
  document.getElementById('favorite-chooser').addEventListener('click', scroll);

  /* Accordion functions */
  const items = document.querySelectorAll('.accordion-item-heading');
  let count = 0;

  const itemContent = document.querySelectorAll('.accordion-item-content');
  itemContent.forEach(element => {
    let rowsLength = element.getElementsByClassName('accordion-row').length;
    const counter = element.parentElement.getElementsByClassName('counter')[0];
    counter.innerHTML = count + ' / ' + rowsLength;
  });

  function toggleAccordion() {
    count = 0;

    const active = document.querySelector('.accordion-item-content.active');
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
    if (active && active != this) {
      active.classList.remove('active');
    }
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));

  const next = document.querySelectorAll('.next');

  function nextArticle() {
    count = 0;

    const parentRow = this.parentElement;
    parentRow.classList.remove('active');
    const parentEl = parentRow.parentElement;
    const nextElRow = parentEl.nextElementSibling.getElementsByClassName('accordion-item-content')[0];
    if (typeof nextElRow != 'undefined') {
      nextElRow.classList.add('active');
    }
  }

  next.forEach(el => el.addEventListener('click', nextArticle));

  function checked() {
    const row = this.parentElement;
    const accordionRow = this.parentElement.parentElement.parentElement;
    let counted = accordionRow.getElementsByClassName('counter')[0].textContent.slice(0, 1);
    if (counted) {
      count = parseInt(counted);
    }
    this.checked ? (row.style.backgroundColor = '#fffdef') : (row.style.backgroundColor = '#fff');
    this.checked ? count++ : count--;
    activateDoneBtn(count);
    selectedCounter(this, count);
  }

  function activateDoneBtn(count) {
    const readyBtn = document.getElementById('btn-ready');
    if (count != 0) {
      readyBtn.classList.remove('btn-inactive');
      readyBtn.classList.add('btn');
    } else {
      readyBtn.classList.remove('btn');
      readyBtn.classList.add('btn-inactive');
    }
  }

  function selectedCounter(element, count) {
    const accordionRow = element.parentElement.parentElement.parentElement;
    const rowsLength = accordionRow.getElementsByClassName('accordion-row').length;
    const counter = accordionRow.getElementsByClassName('counter')[0];
    counter.innerHTML = count + ' / ' + rowsLength;
  }

  const checkBox = document.querySelectorAll('.magic-checkbox');
  checkBox.forEach(el => el.addEventListener('click', checked));
})();
