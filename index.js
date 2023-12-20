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













//SECTION ANIMATIONS INDEX PAGE
document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll('.scroll-section');

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function animateIfInView() {
    sections.forEach(function (section) {
      if (isInViewport(section)) {
        section.classList.add('show');
      }
    });

    // Remove the event listener once all sections are visible
    if (Array.from(sections).every(function (section) {
      return section.classList.contains('show');
    })) {
      window.removeEventListener('scroll', animateIfInView);
    }
  }

  window.addEventListener('scroll', animateIfInView);
  animateIfInView(); // Check on page load
});













// CODE FOR IMAGE ZOOM TO FULL SCREEN
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var images = document.querySelectorAll(".look-img");
var closeBtn = document.querySelector(".close");

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
  });
}

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
      modal.style.display = "none";
  }
};







//CHECK THE CODE FOR DISABLED BUTTON IT IS NOT WORKING AND IS INTERRUPTING WITH THE REST OF THE FILE

// // TO disable shop button
// function configureCheckboxAndButtonBehavior() {
//   var checker = document.getElementById('checkme');
//   var sendbtn = document.getElementById('shopButton');

//   checker.addEventListener('change', function () {
//       if (this.checked) {
//           sendbtn.disabled = false;
//           sendbtn.style.opacity = "1";
//       } else {
//           sendbtn.disabled = true;
//           sendbtn.style.opacity = "0.7";
//       }
//   });
// }

// // Call this function when your page is ready to apply the behavior
// configureCheckboxAndButtonBehavior();


// For FAQ
var acc = document.getElementsByClassName("accordion1");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
  });
};





//FOR CONTACT

//WORDCOUNT




//custom select for feedback

document.querySelector('.select-wrapper').addEventListener('click', function() {
  this.querySelector('.select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
      }
  })
}
window.addEventListener('click', function(e) {
  const select = document.querySelector('.select')
  if (!select.contains(e.target)) {
      select.classList.remove('open');
  }
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










//CATEGORIES FILTER DRESS, TOP, PANTS

// Function to filter products by category
function filterProducts(category) {
  const products = document.querySelectorAll('.product');

  products.forEach((product) => {
    const productCategory = product.getAttribute('data-category');
    if (category === 'all' || productCategory === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
// Get the category select element
const categorySelect = document.getElementById('category-select');
// Add an event listener for category selection changes
categorySelect.addEventListener('change', function () {
  const selectedCategory = categorySelect.value;
  filterProducts(selectedCategory);
});

// Initially, display all products
filterProducts('all');












//FOR SIZES SELECT BUTTON

function toggleActive(button) {
  // Toggle 'active' class on the clicked button
  button.classList.toggle('active');

  // Remove 'active' class from all other buttons
  document.querySelectorAll('.size_btn').forEach(function (btn) {
      if (btn !== button && btn.classList.contains('active')) {
          btn.classList.remove('active');
      }
  });
}








// SIZE CHART CODE
function openSizeChart() {
  var sizeChartNav = document.getElementById("sizeChartNav");
  document.body.style.overflow = "hidden";
  if (window.innerWidth >= 768) {
    sizeChartNav.style.width = "530px";
  } else {
    sizeChartNav.style.width = "100%";
  }
  sizeChartNav.style.right = "0";
  sizeChartNav.style.zIndex = "1100"; /* Set z-index higher than the Bootstrap navbar */
  document.body.classList.add("overlay-active"); // Add overlay class to body
}

function closeSizeChart() {
  var sizeChartNav = document.getElementById("sizeChartNav");
  document.body.style.overflow = "auto";
  sizeChartNav.style.width = "0";
  sizeChartNav.style.right = "-100%";
  sizeChartNav.style.zIndex = "1000"; /* Set back to the original z-index of 1000 */
  document.body.classList.remove("overlay-active"); // Remove overlay class from body
}

// Function to close size chart when clicked outside
function closeSizeChartOutside(event) {
  var sizeChartNav = document.getElementById("sizeChartNav");
  var sizeChartButton = document.getElementById("sizeChartButton");

  if (event.target !== sizeChartButton && !sizeChartNav.contains(event.target)) {
    closeSizeChart();
  }
}

// Event listener to close size chart when clicked outside
document.addEventListener("click", closeSizeChartOutside);








document.getElementById('signup_form').addEventListener('submit', function (event) {
  var password = document.getElementById('password_signup').value;
  var confirmPassword = document.getElementById('confirmPassword_signup').value;

  if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      event.preventDefault();
  }
});