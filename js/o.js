const $ = (query) => document.querySelector(query);
const AppbarLink = (link) => `<a href="#" class="appbar__link">${link}</a>`;

//
const links = ["Parrots", "Snakes", "Lions", "Monkeys"];
const appbarLinks = $("#appbarLinks");

setTimeout(() => {
  appbarLinks.innerHTML = links.reduce((acc, cur) => acc + AppbarLink(cur), "");
  console.log(appbarLinks.innerHTML);
}, 3000);
