const WHATSAPP_NUMBER = '5554984216408';

const PLAN_MESSAGES = {
  start: 'Oi Gabriel, quero começar a consultoria START (3 meses)!',
  evolution: 'Oi Gabriel, quero evoluir com a consultoria EVOLUTION (6 meses)!',
  elite: 'Oi Gabriel, quero a consultoria ELITE (12 meses) para resultado máximo!',
  geral: 'Oi Gabriel, quero saber mais sobre a consultoria!'
};

function buildWhatsAppLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-plan]').forEach((el) => {
    const message = PLAN_MESSAGES[el.getAttribute('data-plan')] || PLAN_MESSAGES.geral;
    el.setAttribute('href', buildWhatsAppLink(message));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
});
