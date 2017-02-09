document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('ul.list > li').forEach(function(el) {
    el.addEventListener('click', function(ev) {

      var child = el.querySelector('.instructions');
      if (child.className == "instructions") {
        child.className += " selected";
        el.querySelector('.list-wrapper > .arrow > i').style.transform = "rotate(180deg)";
      } else {
        child.className = "instructions";
        el.querySelector('.list-wrapper > .arrow > i').style.transform = "rotate(0deg)";
      }

    });
  });
});
