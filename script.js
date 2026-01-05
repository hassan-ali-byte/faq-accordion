const faqList = document.querySelector(".faq-list");

let activeItem = null;

faqList.addEventListener("click", (e) => {
  const btn = e.target.closest(".faq-question");
  if (!btn) return;

  const clickedItem = btn.closest(".faq-item");

  if (clickedItem === activeItem) {
    clickedItem.classList.remove("show");
    btn.setAttribute("aria-expanded", "false");
    activeItem = null;
    return;
  }

  if (activeItem) {
    const activeBtn = activeItem.querySelector(".faq-question");

    activeItem.classList.remove("show");
    activeBtn.setAttribute("aria-expanded", "false");
  }

  clickedItem.classList.add("show");
  btn.setAttribute("aria-expanded", "true");
  activeItem = clickedItem;
});
