// MENU NAVBAR CODE
function openNav() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth <= 430) {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.fontSize = "36px";
    
  } else if (screenWidth <= 768) {
    document.getElementById("myNav").style.width = "200px";
  } else {
    document.getElementById("myNav").style.width = "250px";
  }
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function menuHover() {
  document.getElementById("menu").style.opacity = "0.75";
}

function menuHoverleave() {
  document.getElementById("menu").style.opacity = "1";
}














//SORT-MENU FILTER

// Function to sort products based on the custom data-sort-value
function sortProductsByValue(sortValue) {
  const products = document.querySelectorAll('.product');
  const productArray = Array.from(products);

  productArray.sort((a, b) => {
      const valueA = parseFloat(a.getAttribute('data-sort-value'));
      const valueB = parseFloat(b.getAttribute('data-sort-value'));

      if (sortValue === 'relevance') {
          // Sort by relevance in ascending order
          return valueA - valueB;
      } else if (sortValue === 'low-to-high') {
          // Sort by price in ascending order
          return valueA - valueB;
      } else if (sortValue === 'high-to-low') {
          // Sort by price in descending order
          return valueB - valueA;
      }
  });

  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Clear the product list

  productArray.forEach((product) => {
      productList.appendChild(product);
  });

  // Add a class to trigger the fadeIn animation with a transition delay
  setTimeout(() => {
      productArray.forEach((product, index) => {
          product.style.opacity = 0; // Start with opacity 0
          setTimeout(() => {
              product.style.transition = 'opacity 1s'; // Apply transition
              product.style.opacity = 1; // Set opacity to 1 to trigger fadeIn
          }, index * 100); // Apply a delay based on the index
      });
  }, 0);
}
// Function to set custom data-sort-value based on the selected option
function setSortValues(selectedSortOption) {
  const products = document.querySelectorAll('.product');

  products.forEach((product) => {
      if (selectedSortOption === 'relevance') {
          // Set custom data-sort-value for relevance sorting (use data-relevance)
          const relevance = parseFloat(product.getAttribute('data-relevance'));
          product.setAttribute('data-sort-value', relevance);
      } else if (selectedSortOption === 'low-to-high' || selectedSortOption === 'high-to-low') {
          // Set custom data-sort-value for price sorting (use data-price)
          const price = parseFloat(product.getAttribute('data-price'));
          product.setAttribute('data-sort-value', price);
      }
  });
}
const customSelectForItemCount1 = document.querySelector('.custom-select0');
customSelectForItemCount1.addEventListener('change', function () {
  const selectedsort = customSelectForItemCount1.querySelector('input[name="sort-box"]:checked').value;
  setSortValues(selectedsort);
  sortProductsByValue(selectedsort);
});

// Initially, set custom data-sort-value and display all products
setSortValues('relevance');
sortProductsByValue('relevance');

















//flipper to change from products and model



const toggleButton = document.getElementById('toggle-button');
    let isToggled = false;

    toggleButton.addEventListener('click', function() {
      const products = document.querySelectorAll('.product');

      if (isToggled) {
        // Toggle from "Product" to "Model"
        toggleButton.innerHTML = 'Model';
      } else {
        // Toggle from "Model" to "Product"
        toggleButton.innerHTML = 'Product';
      }

      products.forEach(product => {
        const front = product.querySelector('.front');
        const back = product.querySelector('.back');

        front.classList.toggle('front');
        front.classList.toggle('back');
        back.classList.toggle('back');
        back.classList.toggle('front');

        product.classList.add('fade-in'); // Add class for fadeIn animation
        setTimeout(() => {
          product.classList.remove('fade-in'); // Remove the class after animation
        }, 500); // Adjust the time to match the transition duration (0.5s)
      });

      isToggled = !isToggled; // Invert the toggle state
    });






















//CUSTOM SELECT BOX CATEGORY


const customSelect2 = document.querySelector(".custom-select");
const selectBtn = document.querySelector(".select-button");
const selectedValue = document.querySelector(".selected-value");
const optionsList = document.querySelectorAll(".select-dropdown li");

// Add click event to select button
selectBtn.addEventListener("click", () => {
  // Add/remove active class on the container element
  customSelect2.classList.toggle("active");
  // Update the aria-expanded attribute based on the current state
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );

  // Add a global click event listener to close the custom select box when a click is made outside the box
  document.addEventListener("click", clickOutsideHandler);
});

optionsList.forEach((option) => {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      customSelect2.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      customSelect2.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

// Function to close the custom select box when a click is made outside the box
function clickOutsideHandler(e) {
  if (!customSelect2.contains(e.target)) {
    // Click is outside the custom select box, close it
    customSelect2.classList.remove("active");
    selectBtn.setAttribute("aria-expanded", "false");
    // Remove the global click event listener after use
    document.removeEventListener("click", clickOutsideHandler);
  }
}














//CUSTOM SORT SELECT BOX




const customSelect0 = document.querySelector(".custom-select0");
const selectBtn0 = document.querySelector(".select-button0");
const selectedValue0 = document.querySelector(".selected-value0");
const optionsList0 = document.querySelectorAll(".select-dropdown0 li");

// Add click event to select button
selectBtn0.addEventListener("click", () => {
  // Add/remove active class on the container element
  customSelect0.classList.toggle("active");
  // Update the aria-expanded attribute based on the current state
  selectBtn0.setAttribute(
    "aria-expanded",
    selectBtn0.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );

  // Add a global click event listener to close the custom select box when a click is made outside the box
  document.addEventListener("click", clickOutsideHandler0);
});

optionsList0.forEach((option) => {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue0.textContent = this.children[1].textContent;
      customSelect0.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue0.textContent = this.textContent;
      customSelect0.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});

// Function to close the custom select box when a click is made outside the box
function clickOutsideHandler0(e) {
  if (!customSelect0.contains(e.target)) {
    // Click is outside the custom select box, close it
    customSelect0.classList.remove("active");
    selectBtn0.setAttribute("aria-expanded", "false");
    // Remove the global click event listener after use
    document.removeEventListener("click", clickOutsideHandler0);
  }
}

















//SALE ONLY BUTTON
document.addEventListener("DOMContentLoaded", function () {
  // Get the sale only button, sale toggle checkbox, and custom select for category
  const saleOnlyButton = document.getElementById("sale-only-button");
  const saleToggle = document.querySelector("#sale-only-button input[type='checkbox']");
  const customSelectForSale = document.querySelector('.custom-select');

  // Set the initial category selection to "all"
  const initialCategory = 'all';
  customSelectForSale.querySelector(`input[name="category"][value="${initialCategory}"]`).checked = true;

  // Add a change event listener to the checkbox
  saleToggle.addEventListener("change", function () {
      const selectedCategory = customSelectForSale.querySelector('input[name="category"]:checked').value;

      // Get all products
      const products = document.querySelectorAll('.product');

      // Toggle visibility based on the checkbox state and category
      products.forEach((product) => {
          const isDiscounted = product.classList.contains('discounted');
          const isProductInCategory = selectedCategory === 'all' || product.getAttribute('data-category') === selectedCategory;
          const isChecked = saleToggle.checked;

          if ((isChecked && isDiscounted && isProductInCategory) || (!isChecked && isProductInCategory)) {
              product.style.display = 'block';
          } else {
              product.style.display = 'none';
          }
      });

      // Toggle the button text
      const buttonText = saleToggle.checked ? 'SALE ONLY' : 'SALE ONLY';
      saleOnlyButton.querySelector('h3').innerText = buttonText;
  });

  // Add a change event listener to the custom select for category
  customSelectForSale.addEventListener("change", function () {
      // Automatically toggle off the sale toggle button when another category is selected
      saleToggle.checked = false;

      // Trigger the change event to update the products based on the new category and sale toggle state
      saleToggle.dispatchEvent(new Event('change'));
  });

  // Trigger the initial update
  saleToggle.dispatchEvent(new Event('change'));
});















  //Shopping page scroll up arrow
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scroll-to-top");
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100 && (window.innerHeight + window.pageYOffset) < document.body.scrollHeight) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });
  
    scrollButton.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  
  






  





// /// ITEM COUNT
// const itemCountElement = document.getElementById('item-count');
// const customSelectForItemCount = document.querySelector('.custom-select');
// const saleToggle = document.querySelector("#sale-only-button input[type='checkbox']");
// const products = document.querySelectorAll('.product');

// function updateItemCount() {
//     const selectedCategory = customSelectForItemCount.querySelector('input[name="category"]:checked').value;
//     const isSaleToggled = saleToggle.checked;

//     let visibleProductsCount = 0;

//     products.forEach((product) => {
//         const productCategory = product.getAttribute('data-category');
//         const isDiscounted = product.classList.contains('discounted');
//         const isVisibleByCategory = selectedCategory === 'all' || productCategory === selectedCategory;
//         const isVisibleBySale = isSaleToggled ? isDiscounted : true;

//         if (isVisibleByCategory && isVisibleBySale) {
//             visibleProductsCount++;
//         }
//     });

//     itemCountElement.textContent = `${visibleProductsCount} Items`;
// }

// // Trigger the initial count update
// updateItemCount();

// // Add event listeners for category and sale toggle changes
// customSelectForItemCount.addEventListener('change', updateItemCount);
// saleToggle.addEventListener("change", updateItemCount);














// CODE FOR THE NO OF ITEMS LISTED
const itemCountElement = document.getElementById('item-count');
const productsContainer = document.querySelector('.products-container');
const customSelectForItemCount = document.querySelector('.custom-select');

function updateItemCount() {
    const visibleProducts = Array.from(productsContainer.querySelectorAll('.product')).filter(
        (product) => product.offsetParent !== null
    );

    itemCountElement.textContent = `${visibleProducts.length} Items`;
}

// Trigger the initial count update
updateItemCount();

// Add an event listener for category selection changes
customSelectForItemCount.addEventListener('change', function () {
    // Trigger the count update whenever the category changes
    updateItemCount();
});











// const customSelectForItemCount = document.querySelector('.custom-select');



// CATEGORY SORT FILTER
// Function to filter products by category with transitions
function filterProducts(category) {
    productElements.forEach((product, index) => {
        product.style.transition = 'opacity 1s';

        setTimeout(() => {
            const productCategory = product.getAttribute('data-category');
            const isVisible = category === 'all' || productCategory === category;

            product.style.display = isVisible ? 'block' : 'none';
            product.style.opacity = isVisible ? 1 : 0;
        }, index * 100);
    });
    

    // Trigger the count update after filtering
    updateItemCount();
}

// Add an event listener for category selection changes
customSelectForItemCount.addEventListener('change', function () {
    const selectedCategory = customSelectForItemCount.querySelector('input[name="category"]:checked').value;
    filterProducts(selectedCategory);
});

// Initially, display all products
filterProducts('all');
















// shop.js

function filterProductsByCategory(category) {
  var productElements = document.querySelectorAll('.product');
  var customSelectForItemCount = document.querySelector('.custom-select0');

  function filterProducts(category) {
    productElements.forEach((product) => {
      const productCategory = product.getAttribute('data-category');
      const isVisible = category === 'all' || productCategory === category;

      product.style.display = isVisible ? 'block' : 'none';
    });

    // Trigger the count update after filtering
    updateItemCount();
  }

  customSelectForItemCount.addEventListener('change', function () {
    const selectedCategory = customSelectForItemCount.querySelector('input[name="category"]:checked').value;
    filterProducts(selectedCategory);
  });

  filterProducts(category);
}




