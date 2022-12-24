"use strict";

// Remove preload class once page is fully loaded

window.addEventListener("load", function () {
  Array.from(document.getElementsByTagName("body")).forEach(function (el) {
    el.classList.remove("preload");
  });
});

// Add class to navigation when scrolling down

document.addEventListener("scroll", function () {
  const header = document.querySelector(".header-main");
  if (window.scrollY >= 20) {
    header.classList.add("fade-in");
  } else {
    header.classList.remove("fade-in");
  }
});

// Add class when mobile navigation icon is clicked

Array.from(document.getElementsByClassName("nav-toggle")).forEach(function (
  el
) {
  el.addEventListener("click", function () {
    Array.from(document.getElementsByTagName("body")).forEach(function (el) {
      el.classList.toggle("no-scroll");
    });
    Array.from(document.getElementsByClassName("header-main")).forEach(
      function (el) {
        el.classList.toggle("active");
      }
    );
  });
});

window.onscroll = function () {
  scrollFunction();
};

let isPopupClosed = false;

function scrollFunction() {
  if (isPopupClosed) return;

  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    $("#staticBackdrop").modal("show");
    $("#staticBackdrop").on("hidden.bs.modal", function (event) {
      isPopupClosed = true;
    });
  }
}

// Prevent background from scrolling on mobile when navigation is toggled

document.addEventListener("touchmove", function (evt) {
  evt.preventDefault();
});

const form1 = document.querySelector("#registration-form-1");
const form2 = document.querySelector("#registration-form-2");
const formButton1 = document.querySelector("#form-submit-1");
const formButton2 = document.querySelector("#form-submit-2");
let f2 = 2;

document.getElementById("mobileInput").addEventListener("keyup", (e) => {
  if (form1.elements["Mobile"].value.length !== 10) {
    document.getElementById("error").innerText =
      "Mobile number must contain 10 numbers";
  } else {
    document.getElementById("error").innerText = "";
  }
});
document.getElementById("mobileInputt").addEventListener("keyup", (e) => {
  if (form2.elements["Mobile"].value.length !== 10) {
    document.getElementById("errorr").innerText =
      "Mobile number must contain 10 numbers";
  } else {
    document.getElementById("errorr").innerText = "";
  }
});
const postToSheet = function (formButton, data, f2) {
  if (f2 == 1) {
    if (data.Mobile.length !== 10) {
      return (document.getElementById("errorr").innerText =
        "Mobile number must contain 10 numbers");
    } else {
      document.getElementById("errorr").innerText = "";
    }
  } else if (f2 == 0) {
    if (data.Mobile.length !== 10) {
      return (document.getElementById("errorr").innerText =
        "Mobile number must contain 10 numbers");
    } else {
      document.getElementById("errorr").innerText = "";
    }
  }

  const url =
    "https://script.google.com/macros/s/AKfycbxXQtMbObybqV8zhTVp30luQWGLDzIs_cMSs93g446s9R60z4KpuSNSn4xHJb1tRtSrVA/exec";
  formButton.innerText = "SUBMITING PLEASE WAIT";
  formButton.setAttribute("disabled", true);
  $.ajax({
    url: url,
    data: data,
    method: "post",
    success: function (response) {
      location.href = "../fullstack1/registered/";
      $("#staticBackdrop").modal("hide");
      formButton.innerText = "SUBMIT";
      formButton.setAttribute("disabled", false);
      form1.reset();
    },
    error: function (err) {
      alert("Something went wrong please try again.");
    },
  });
};

form1.addEventListener("submit", function (evt) {
  evt.preventDefault();
  f2 = 0;
  const data = Object.fromEntries(new FormData(evt.target).entries());
  postToSheet(formButton1, data, f2);
});
form2.addEventListener("submit", (evt) => {
  evt.preventDefault();
  f2 = 1;
  const data = Object.fromEntries(new FormData(evt.target).entries());
  postToSheet(formButton2, data, f2);
});
