function countCTG() {
    const categoryList = document.getElementById('categories');
    const categoryItems = categoryList.querySelectorAll('li.item');
    console.log(`Number of categories: ${categoryItems.length}`);
    
    categoryItems.forEach((category, index) => {
      const categoryHeader = category.querySelector('h2');
      const categoryElements = category.querySelectorAll('ul li');
  
      console.log(
        `Category: ${
          categoryHeader.textContent
        } `);
        console.log(`Number of elements: ${categoryElements.length}`);
      
    });
  }
  
  countCTG();