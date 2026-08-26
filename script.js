const responsive=document.createElement('link');responsive.rel='stylesheet';responsive.href='responsive.css?v=8';document.head.appendChild(responsive);

(async()=>{
  const imgs=[...document.querySelectorAll('img[src^="assets/"]')];
  await Promise.all(imgs.map(async img=>{
    const src=img.getAttribute('src');
    try{
      const r=await fetch(`${src}.b64?v=8`,{cache:'no-cache'});
      if(!r.ok)return;
      const b64=(await r.text()).replace(/\s+/g,'');
      const mime=b64.startsWith('/9j/')?'image/jpeg':b64.startsWith('iVBORw0KGgo')?'image/png':b64.startsWith('AAAAIGZ0eXBhdmlm')||b64.startsWith('AAAAHGZ0eXBhdmlm')?'image/avif':'image/webp';
      img.src=`data:${mime};base64,${b64}`;
    }catch(e){}
  }));
})();

const data=[
{role:'CAPTAIN / NAVIGATOR',ja:'アドニス',en:'ADONIS',desc:'私掠船プリンセス・ブルーアネモネ号の船長。温和で思慮深く慕われているがたまにずれている。離れ離れになってしまった妹の行方を探している。航海士としての腕は一流。'},
{role:'VICE CAPTAIN',ja:'ビル',en:'BILL',desc:'アドニスの海賊時代からの幼馴染で、彼の右腕。無口だが義理堅く、スラムから自身を救い出してくれたアドニスに忠誠を誓っている。'},
{role:'DOCTOR',ja:'ペトラ・ヘマトス',en:'PETRA',desc:'世界を飛び回り人々を救える医者になるため、アドニスの船に飛び乗った。好奇心旺盛で明るく元気な女の子。実はずっと前からアドニスが好き。'},
{role:'SCHOLAR',ja:'ランポート・デ・ウルクス',en:'LAMPORT',desc:'ウルクス子爵家の当主だが、伯爵の命令で身分を隠して学者として船に同行。現実主義で口うるさく偉そうだが、誰より心配性で皆を気にかける。'},
{role:'CREW',ja:'パンガ',en:'PANGA',desc:'お調子者で、なんとかなるさを体現したような人物。奴隷船が難破し、漂流した末たまたまブルーアネモネ号に流れ着いた。粗野で無遠慮な振る舞いで度々ランポートを悩ませる。'},
{role:'ADONIS’ SISTER',ja:'イヴ',en:'EVE',desc:'アドニスの妹。母の死を目撃したショックで目が見えなくなってしまった。お兄ちゃんっ子の甘えん坊。ケートス海賊団処刑の日からずっと行方不明。'}
];
const tabs=[...document.querySelectorAll('.character-tabs button')],cards=[...document.querySelectorAll('.character-cards img')];
tabs.forEach((b,i)=>b.addEventListener('click',()=>{tabs.forEach(x=>x.classList.remove('active'));cards.forEach(x=>x.classList.remove('active'));b.classList.add('active');cards[i].classList.add('active');const t=data[i];document.querySelector('.char-no').textContent=String(i+1).padStart(2,'0');document.querySelector('.role').textContent=t.role;document.querySelector('.character-text h3').innerHTML=`${t.ja} <small>${t.en}</small>`;document.querySelector('.desc').textContent=t.desc;}));
