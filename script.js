const content={
about:{
 title:'Minusta',
 html:`<p>Kokenut palkkahallinnon asiantuntija, jolla on laaja vastuu palkanlaskennasta, TES-tulkinnasta, laskutuksesta, järjestelmien kehittämisestä ja taloushallinnon prosesseista.</p><p>Työskentelen itsenäisesti, analyyttisesti ja ennakoivasti sekä rakennan toimintatapoja, joilla työ sujuu tehokkaammin ja virheriski pienenee.</p><p>Etsin seuraavaksi uutta työympäristöä, selkeää ja johdonmukaista työnkuvaa, sopivasti vaihtelua sekä mahdollisuuksia kehittyä ja edetä uralla.</p>`
},
experience:{
 title:'Kokemus',
 html:`<div class="entry"><span>2019–</span><h3>Suomen Vuokramestarit Oy</h3><strong>Palkkahallinnon asiantuntija</strong><p>Palkanlaskenta, TES-tulkinta, myyntilaskutus, vuosiloma- ja lomakorvausasiat sekä ostolaskujen tarkastus ja seuranta. Kehitän ja ylläpidän Saarni Likeit -järjestelmän asetuksia ja asiakaskohtaisia toimintamalleja sekä osallistun palkanlaskennan työnjakoon, perehdytykseen ja laadun varmistamiseen.</p></div><div class="entry"><span>SVM Oy:n liiketoiminta</span><h3>Suomen Ensiturva</h3><strong>B2B-myynti ja asiakkuudet</strong><p>Diphoterine- ja Hexafluorine-tuotteiden asiakkuudet, tarjoukset, tilaukset, hankinta, tuoteohjaus sekä toimitusprosessien hallinta.</p></div>`
},
skills:{
 title:'Osaaminen',
 html:`<div class="tags"><span>Palkanlaskenta</span><span>TES-tulkinta</span><span>Myyntilaskutus</span><span>Monivaiheisten prosessien hallinta</span><span>Järjestelmien kehittäminen</span><span>Saarni Likeit</span><span>Procountor</span><span>Excel</span><span>Easoft</span><span>Microsoft 365</span></div><p class="skill-note">TES-kokemusta mm. leipomo-, talonrakennus-, pelti- ja eristys-, teknologiateollisuus- sekä kaupan alalta.</p>`
},
cv:{
 title:'CV',
 html:`<p>CV lisätään tähän seuraavassa vaiheessa sekä selaimessa katseltavaksi että ladattavaksi.</p>`
},
contact:{
 title:'Yhteys',
 html:`<div class="contact-links"><a href="mailto:mika.mahonen@protonmail.com">mika.mahonen@protonmail.com</a><a href="https://www.linkedin.com/in/mika-m%C3%A4h%C3%B6nen-0b94bb107" target="_blank" rel="noopener">LinkedIn ↗</a></div>`
}
};
const panel=document.querySelector('#panel'),box=document.querySelector('#panel-content');
const closePanel=()=>panel.classList.remove('open');
document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>{const item=content[b.dataset.panel];box.innerHTML='<h2>'+item.title+'</h2>'+item.html;panel.classList.add('open')}));
document.querySelector('.close').addEventListener('click',closePanel);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel()});
document.addEventListener('click',e=>{if(panel.classList.contains('open')&&!panel.contains(e.target)&&!e.target.closest('[data-panel]'))closePanel()});