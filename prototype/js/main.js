const menuButton=document.querySelector('.menu');
const nav=document.querySelector('.header nav');
menuButton?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#request-form')?.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const message=`Здравствуйте! Меня зовут ${data.get('name')}. Хочу обсудить: ${data.get('topic')}. Связаться: ${data.get('contact')}.`;
  const result=event.currentTarget.querySelector('.form-result');
  result.textContent='Заявка в демо-режиме. Перед запуском подключить отправку менеджеру.';
  const link=document.createElement('a');
  link.href=`https://t.me/share/url?url=${encodeURIComponent('https://martdecor.online')}&text=${encodeURIComponent(message)}`;
  link.target='_blank';link.rel='noreferrer';link.className='text-link';link.textContent='Открыть Telegram с готовым сообщением ↗';
  result.append(' ',link);
});
