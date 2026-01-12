/* =====================
   CONFIGURAÇÕES
===================== */

const INSTAGRAM_USER = "primetalmetais";

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

    openInstagramDM(message);
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

    openInstagramDM(message);
  });
}

/* =====================
   INSTAGRAM DM
===================== */
function openInstagramDM(message) {
  copyToClipboard(message);

  const dmUrl = `https://www.instagram.com/direct/new/`;
  window.open(dmUrl, "_blank");

  alert(
    "Abrimos o Instagram DM.\n\n" +
    "A mensagem já foi copiada.\n" +
    "Basta colar e enviar para @primetalmetais."
  );
}

/* =====================
   COPY CLIPBOARD
===================== */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).catch(() => {
    console.warn("Não foi possível copiar automaticamente.");
  });
}
