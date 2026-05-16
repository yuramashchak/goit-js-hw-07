const newCategoties = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${newCategoties.length}`);

newCategoties.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});