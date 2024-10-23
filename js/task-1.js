const allCatagories = document.querySelectorAll('.item');

console.log(`Number of categories: ${allCatagories.length}`)

allCatagories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
