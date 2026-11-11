/* Kangasalan Konehuolto Oy — pieni, riippumaton käyttöliittymäkoodi */
(function () {
  'use strict';

  /* Vuosiluku alatunnisteeseen */
  var vuosi = document.getElementById('vuosi');
  if (vuosi) vuosi.textContent = String(new Date().getFullYear());

  /* Mobiilivalikko */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Yhteydenottolomake — vain ilmoitus ilman palvelinta.
     Todellisessa käytössä lomake lähetetään esimerkiksi
     Formspree-, Netformin- tai oman palvelimen kautta. */
  var form = document.getElementById('yhteydenotto');
  var note = document.getElementById('form-note');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.className = 'form-note';

      var nimi = form.elements.nimi.value.trim();
      var yhteys = form.elements.yhteys.value.trim();

      if (!nimi || !yhteys) {
        note.textContent = 'Täytä nimi ja yhteystieto, niin hoidan loput.';
        note.classList.add('err');
        return;
      }

      note.textContent = 'Kiitos ' + nimi + '! Viestisi on valmis lähetettäväksi — ' +
        'puhelimitse saat nopeimman vastauksen: 040 123 4567.';
      note.classList.add('ok');
      form.reset();
    });
  }
})();
