const content={
about:{
 title:'Minusta',
 html:`<p class="panel-lead">Olen Oulun seudulla työskentelevä palkkahallinnon asiantuntija. Nykyisessä tehtävässäni vastaan useiden asiakasyritysten palkanlaskennasta ja sovellan työssäni 5–8 eri työehtosopimusta. Työhöni kuuluu lisäksi myyntilaskutusta, taloushallinnon tehtäviä, järjestelmien kehittämistä sekä toisen palkkahallinnon työntekijän ohjaamista.</p><h3 class="section-heading">Mitä tuon työyhteisöön?</h3><ul class="values"><li><strong>Tarkkuutta ja vastuullisuutta</strong><span>Palkkahallinnossa lopputuloksen täytyy olla oikein ja ajallaan.</span></li><li><strong>Ennakoivaa työskentelyä</strong><span>Tunnistan poikkeamia ja mahdollisia ongelmia ennen kuin ne ehtivät kasvaa suuremmiksi.</span></li><li><strong>Kehittämisotetta</strong><span>Etsin aktiivisesti tapoja sujuvoittaa työtä ja vähentää manuaalisia tai epäselviä työvaiheita.</span></li><li><strong>Itsenäistä ongelmanratkaisua</strong><span>Selvitän asioita oma-aloitteisesti, mutta kysyn tarvittaessa ja kuuntelen myös muiden näkemyksiä.</span></li><li><strong>Kokonaisuuksien hallintaa</strong><span>Pidän samanaikaisesti hallinnassa useita asiakkaita, työehtosopimuksia, palkkajaksoja ja laskutuskäytäntöjä.</span></li></ul><p class="goal">Etsin seuraavaksi vaativampaa asiantuntija- tai esihenkilöroolia, jossa voin hyödyntää kokemustani, kehittää toimintatapoja ja kasvaa osana suurempaa asiantuntijatiimiä.</p>`
},
experience:{
 title:'Kokemus',
 html:`<div class="entry"><span>2019–</span><h3>Suomen Vuokramestarit Oy</h3><strong>Palkkahallinnon asiantuntija</strong><p>Palkanlaskenta, TES-tulkinta, myyntilaskutus, vuosiloma- ja lomakorvausasiat sekä ostolaskujen tarkastus ja seuranta. Kehitän ja ylläpidän Saarni Likeit -järjestelmän asetuksia ja asiakaskohtaisia toimintamalleja sekä osallistun palkanlaskennan työnjakoon, perehdytykseen ja laadun varmistamiseen.</p></div><div class="entry"><span>SVM Oy:n liiketoiminta</span><h3>Suomen Ensiturva</h3><strong>B2B-myynti ja asiakkuudet</strong><p>Diphoterine- ja Hexafluorine-tuotteiden asiakkuudet, tarjoukset, tilaukset, hankinta, tuoteohjaus sekä toimitusprosessien hallinta.</p></div>`
},
skills:{
 title:'Ydinosaamiseni',
 html:`<div class="feature-grid"><article class="feature-card"><h3>Palkanlaskenta ja TES-tulkinta</h3><p>Vastaan noin 100–150 palkan käsittelystä erilaisilla palkkajaksoilla. Minulla on kokemusta muun muassa rakennusalan, pelti- ja eristysalan, teknologiateollisuuden, leipomoalan ja kaupan alan työehtosopimuksista.</p></article><article class="feature-card"><h3>Monivaiheisten prosessien hallinta</h3><p>Hallitsen asiakaskohtaiset palkka-, työaika- ja laskutuskäytännöt sekä niiden väliset riippuvuudet työajanseurannasta maksatukseen ja asiakaslaskutukseen saakka.</p></article><article class="feature-card"><h3>Järjestelmät ja toimintatavat</h3><p>Kehitän Saarni Likeit -järjestelmän asetuksia, TES-määrityksiä, hinnastoja ja työnkulkuja. Rakennan ratkaisuja, joilla työ nopeutuu ja virheriski pienenee.</p></article><article class="feature-card"><h3>Laskutus ja taloushallinto</h3><p>Kokemusta myyntilaskutuksesta, ostolaskujen tarkastuksesta, raportoinnista, hinnastoista sekä tarjous-, tilaus- ja hankintaprosesseista.</p></article></div><div class="tags tool-tags"><span>Saarni Likeit</span><span>Procountor</span><span>Excel</span><span>Easoft</span><span>Microsoft 365</span></div>`
},
contact:{
 title:'Yhteys',
 html:`<p>Kiinnostuitko osaamisestani? Minuun saat yhteyden sähköpostilla tai LinkedInissä.</p><div class="contact-links"><a href="mailto:mika.mahonen@protonmail.com">mika.mahonen@protonmail.com</a><a href="https://www.linkedin.com/in/mika-m%C3%A4h%C3%B6nen-0b94bb107" target="_blank" rel="noopener">LinkedIn ↗</a></div>`
}
};
const panel=document.querySelector('#panel'),box=document.querySelector('#panel-content');
const closePanel=()=>panel.classList.remove('open');
document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>{const item=content[b.dataset.panel];box.innerHTML='<h2>'+item.title+'</h2>'+item.html;panel.classList.add('open')}));
document.querySelector('.close').addEventListener('click',closePanel);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel()});
document.addEventListener('click',e=>{if(panel.classList.contains('open')&&!panel.contains(e.target)&&!e.target.closest('[data-panel]'))closePanel()});
