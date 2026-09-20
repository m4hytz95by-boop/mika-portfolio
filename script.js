const content={
about:['Minusta','Kokenut palkkahallinnon asiantuntija, joka työskentelee analyyttisesti, itsenäisesti ja ennakoivasti.'],
experience:['Kokemus','Palkanlaskenta, TES-tulkinta, laskutus, järjestelmien kehittäminen ja taloushallinnon monivaiheiset prosessit.'],
skills:['Osaaminen','Saarni Likeit · Procountor · Excel · TES-tulkinta · prosessien kehittäminen · laskutus'],
cv:['CV','Tähän tuodaan seuraavaksi ladattava ja selaimessa avattava CV.'],
contact:['Yhteys','Tähän rakennetaan selkeä yhteydenottotapa sekä LinkedIn-linkki.']
};
const panel=document.querySelector('#panel'),box=document.querySelector('#panel-content');
document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>{const [h,p]=content[b.dataset.panel];box.innerHTML='<h2>'+h+'</h2><p>'+p+'</p>';panel.classList.add('open')}));
document.querySelector('.close').addEventListener('click',()=>panel.classList.remove('open'));