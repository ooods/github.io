// Smooth scrolling via animate()
$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

// Navigation change on scroll
$(document).ready(function() {
  var maxOffset = 1;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $("nav.navbar").addClass("navbar-shrink");
    } else {
      $("nav.navbar").removeClass("navbar-shrink");
    }
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar'
})

// Closes the Responsive Menu on Menu Item Click
$('ul.nav li a').click(function() {
  $("ul.nav").addClass("hidden");
});

// toggle nav by button
$(document).ready(function() {
  $("button.navbar-toggle").click(function() {
    $("ul.nav").toggleClass("hidden");
  });
});

// Async contact form
$("form[id=contactForm]").submit(function() {
  $.post(
    $(this).attr("action"),
    $(this).serialize(),
    function(data, textStatus, jqXHR) {
      $("form[id=contactForm] #success").hide();
      $("form[id=contactForm] #error").hide();
      if (jqXHR.status == 200) {
        $("form[id=contactForm] #success").show();
      }
    },
    "json"
  ).fail(function() {
    $("form[id=contactForm] #success").hide();
    $("form[id=contactForm] #error").hide();
    $("form[id=contactForm] #error").show();
  });
  return false;
});

// Contact form validation
$.validate({
  modules: "html5, toggleDisabled"
});
