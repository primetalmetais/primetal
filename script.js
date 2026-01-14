/* =====================
   CONFIGURAÇÕES
===================== */

// Número do WhatsApp no formato internacional (55 + DDD + número)
const WHATSAPP_NUMBER = "5521986741890";

/* =====================
   FAQ TOGGLE
===================== */
document.querySelectorAll(".faq__item").forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".faq__answer");
    answer.classList.toggle("open");
  });
});

/* =====================
   BOTÕES DE PRODUTO
===================== */
document.querySelectorAll(".product-card__button").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".product-card");
    const weight = card.querySelector(".product-card__title").innerText;

    const message = `
Olá, gostaria de solicitar um orçamento.

Produto: Prata pura 999 granulada
Quantidade: ${weight}
    `.trim();

    openWhatsApp(message);
  });
});

/* =====================
   CTA FINAL
===================== */
const ctaButton = document.querySelector(".cta__button");

if (ctaButton) {
  ctaButton.addEventListener("click", () => {
    const message = `
Olá, gostaria de mais informações sobre a prata pura 999 fornecida pela PRIMETAL.
    `.trim();

    openWhatsApp(message);
  });
}

/* =====================
   FUNÇÃO WHATSAPP
===================== */
function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(waUrl, "_blank");
}
