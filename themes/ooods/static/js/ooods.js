// Smooth scrolling via animate()
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Navigation change on scroll
$(document).ready(function () {
  const f = () => {
    if ($(window).scrollTop() >= maxOffset) {
      $("nav.navbar").addClass("navbar-shrink");
    } else {
      $("nav.navbar").removeClass("navbar-shrink");
    }
  };
  var maxOffset = 1;
  $(window).scroll(function () {
    f();
  });
  f();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar'
})

// Closes the Responsive Menu on Menu Item Click
$('ul.nav li a').click(function () {
  $("ul.nav").addClass("hidden");
});

// toggle nav by button
$(document).ready(function () {
  $("button.navbar-toggle").click(function () {
    $("ul.nav").toggleClass("hidden");
  });
});

// youtibe
$(document).ready(function () {
  var players = [];
  $('.modal-content iframe').each((i, el) => {
    players.push(
      new YT.Player($(el).attr('id'))
    )
  });
  const closers = $('[data-dismiss="modal"]');
  closers.each((i, el) => {
    $(el).bind('click', () => {
      players.forEach(player => player.stopVideo());
    });
  });
});
