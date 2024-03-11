const listCategories = document.querySelector('#categories');

const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
  const firstElementChild = category.firstElementChild.textContent;
  console.log('Category:', firstElementChild);

  const lastElementChild = category.lastElementChild;
  const elements = lastElementChild.children.length;
  console.log('Elements:', elements);
});
