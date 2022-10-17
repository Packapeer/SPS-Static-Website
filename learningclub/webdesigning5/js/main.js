'use strict';

// Remove preload class once page is fully loaded

window.addEventListener('load', function () {
  Array.from(document.getElementsByTagName('body')).forEach(function (el) {
    el.classList.remove('preload');
  });
});

// Add class to navigation when scrolling down

document.addEventListener('scroll', function () {
  const header = document.querySelector('.header-main');
  if (window.scrollY >= 20) {
    header.classList.add('fade-in');
  } else {
    header.classList.remove('fade-in');
  }
});

// Add class when mobile navigation icon is clicked

Array.from(document.getElementsByClassName('nav-toggle')).forEach(function (el) {
  el.addEventListener('click', function () {
    Array.from(document.getElementsByTagName('body')).forEach(function (el) {
      el.classList.toggle('no-scroll');
    });
    Array.from(document.getElementsByClassName('header-main')).forEach(function (el) {
      el.classList.toggle('active');
    });
  });
});

window.onscroll = function () { scrollFunction() };

let isPopupClosed = false;

function scrollFunction() {
  if (isPopupClosed) return;

  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    $('#staticBackdrop').modal('show');
    $('#staticBackdrop').on('hidden.bs.modal', function (event) {
      isPopupClosed = true;
    })
  }
}
// Prevent background from scrolling on mobile when navigation is toggled

document.addEventListener('touchmove', function (evt) {
  evt.preventDefault();
});

const form = document.getElementById('registration-form');

const postToSheet = function (formButton, data) {
  const url = "https://script.google.com/macros/s/AKfycbwjURCeQpiQ-kO3FD6ImU_j9ghHncUlMoEI5vpc8Z9E8Rh0TnxXDtZG77uvDse53TWE/exec";

  formButton.innerText = "SUBMITING PLEASE WAIT";
  formButton.setAttribute("disabled", true);
  $.ajax({
    url: url,
    data: data,
    method: "post",
    success: function (response) {
      location.href = "https://t.me/+Lxul8-bGI5o0MWM1";
      formButton.innerText = "SUBMIT";
      formButton.setAttribute("disabled", false);
      form.reset();
    },
    error: function (err) {
      alert("Something went wrong please try again.");
    },
  });
}


form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const data = Object.fromEntries(new FormData(evt.target).entries());
  const formButton = document.getElementById('form-submit');

  postToSheet(formButton, data);
});