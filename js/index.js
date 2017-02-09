document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('#options > li').forEach(function(li) {
    li.addEventListener('click', function(e) {
      if (li.className == "active") { li.className = "" }
      else { li.className = "active" }

    });
  });

  document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault();
    anime({
      targets: ['#getting-there','.planner', 'nav.nav'],
      opacity: 0,
      translateY: "-1rem",
      delay: function(el, ind) {
        return ind * 200;
      },
      easing: 'easeInOutQuad',
      complete: function() {
        anime({
          targets: '.jumbotron',
          opacity: 0,
          easing: 'easeOutSine',
          duration: 400,
          complete: function() {
            window.location.replace("./planner.html");
          }
        })

      }
    })
  });

  setTimeout(init, 1000);



});

function init() {
  anime({
    targets: '.loader',
    opacity: 0,
    duration: 400,
    easing: 'easeOutSine',
    complete: function() {
      anime({
        targets: 'header.jumbotron',
        opacity: 1,
        duration: 700,
        easing: 'easeOutSine',
        complete: function() {
          anime({
            targets: 'nav.nav',
            opacity: 1,
            marginTop: ["-75px", "0px"],
            easing: 'easeOutSine',
            duration: 400,
            complete: function() {
              anime({
                targets: '.planner',
                opacity: 1,
                translateY: "-1rem",
                easing: 'easeInOutQuad',
                duration: 600,
                complete: function() {
                  anime({
                    targets: '#getting-there > .theres > li',
                    opacity: 1,
                    delay: function(el, ind) {
                      return ind * 150
                    },
                    easing: 'easeOutSine'
                  })
                }
              })
            }
          })
        }
      })
    }
  });

}
