'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});
// TODO: refine script.js layout spacing

      <section className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
        <h3 className="text-sm font-medium text-zinc-200">New section</h3>
        <p className="mt-1 text-xs text-zinc-400">Added in recent update</p>
      
      <button className="rounded-xl bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-500">
        Action
      </button>

      <button className="rounded-xl bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-500">
        Action
      </button>

      <section className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
        <h3 className="text-sm font-medium text-zinc-200">New section</h3>
        <p className="mt-1 text-xs text-zinc-400">Added in recent update</p>
      </section>

      <section className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
        <h3 className="text-sm font-medium text-zinc-200">New section</h3>
        <p className="mt-1 text-xs text-zinc-400">Added in recent update</p>
      </section>

      <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-500">
        Action
      </button>

      <section className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
        <h3 className="text-sm font-medium text-zinc-200">New section</h3>
        <p className="mt-1 text-xs text-zinc-400">Added in recent update</p>
      </section>

      <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-500">
        Action
      </button>

      <section className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-5">
        <h3 className="text-sm font-medium text-zinc-200">New section</h3>
        <p className="mt-1 text-xs text-zinc-400">Added in recent update</p>
      </section>

      <button className="rounded-md bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-500">
        Action
      </button>

      <section className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
        <h3 className="text-sm font-medium text-zinc-200">New section</h3>
        <p className="mt-1 text-xs text-zinc-400">Added in recent update</p>
      </section>
</section>
// state update 4
// Foodie update
// TODO: refine script.js layout spacing
// TODO: refine script.js layout spacing
// state update 10
// Foodie update
// TODO: refine script.js layout spacing
// TODO: refine script.js layout spacing
// state update 16
// Foodie update
// TODO: refine script.js layout spacing
// TODO: refine script.js layout spacing
// state update 22
// Foodie update
// TODO: refine script.js layout spacing
// TODO: refine script.js layout spacing
// Foodie update
// TODO: refine script.js layout spacing
// state update 34
// TODO: refine script.js layout spacing
// TODO: refine script.js layout spacing
