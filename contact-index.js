// MENU NAVBAR CODE
function openNav() {
    document.getElementById("myNav").style.width = "250px";
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
  








//FOR CONTACT

//WORDCOUNT
document.addEventListener('DOMContentLoaded', function () {
  var textarea = document.getElementById('feedBack-area');
  var letterCountDisplay = document.getElementById('letter-count');
  var maxLetters = 3000;

  textarea.addEventListener('input', function () {
    var letterCount = countLetters(textarea.value);
    letterCountDisplay.textContent = 'Letter count: ' + letterCount + ' / ' + maxLetters;
  });

  function countLetters(text) {
    // Remove non-letter characters (e.g., spaces, numbers, symbols)
    var letters = text.replace(/[^a-zA-Z]/g, '');
    return letters.length;
  }
});







//custom select

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

    
    