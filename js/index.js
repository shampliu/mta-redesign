document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('#options > li').forEach(function(li) {
    li.addEventListener('click', function(e) {
      if (li.className == "active") { li.className = "" }
      else { li.className = "active" }

    });
  });
});
