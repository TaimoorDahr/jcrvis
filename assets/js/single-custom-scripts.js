document.addEventListener("DOMContentLoaded", () => {
  const allIDs = document.querySelectorAll(".column.is-9 article.hentry h3[id],.column.is-9 article.hentry h2[id]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const elem = document.querySelector(`.sidebar__toc__list-item a[href="#${id}"]`);
      if (entry.intersectionRatio > 0 && elem) {
        document.querySelectorAll(".sidebar__toc__list-item").forEach((item) => {
          item.classList.remove("active");
        });
        elem.parentElement.classList.add("active");
      }
    });
  });

  allIDs.forEach((section) => {
    observer.observe(section);
  });

  document.querySelectorAll(".toc_btn, .toc_info_btn").forEach((elem) =>
    elem.addEventListener("click", () => {
      document.querySelector(".toc").classList.toggle("opened");
    })
  );

  document.querySelector(".back-to-top").addEventListener("click", () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  });
});
