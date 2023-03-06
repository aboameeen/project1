// let imgarr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
// window.onload = function () {};
// document.querySelector(
//   ".landing-page"
// ).style.backgroundImage = `url(image/${imgarr[0]})`;
// setInterval(() => {
//   document.querySelector(
//     ".landing-page"
//   ).style.backgroundImage = `url(image/${Math.floor(Math.random() * 5)}.jpg)`;
// }, 10000);
// >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>

// let randombtns = document.querySelectorAll(".setting-project .option button");

// let abc = true;
// let xy;

// randombtns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     randombtns.forEach(function (btn) {
//       btn.classList.remove("active");
//     });
//     btn.classList.add("active");
//     console.log(btn.dataset.random);
//     if (btn.dataset.random === "yes") {
//       abc = true;
//       asd();
//     } else {
//       abc = false;
//       clearInterval(xy);
//     }
//   });
// });
// function asd() {
//   if (abc === true) {
//     xy = setInterval(() => {
//       document.querySelector(
//         ".landing-page"
//       ).style.backgroundImage = `url(image/${Math.floor(
//         Math.random() * 5
//       )}.jpg)`;
//     }, 1000);
//   }
// }
// asd();

// if (window.localStorage.getItem("random")) {
//   randombtns.forEach(function (btn) {
//     btn.classList.remove("active");
//   });
//   document
//     .querySelector(`.setting-project .option .${window.localStorage.random}`)
//     .classList.add("active");
// }
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let randombtns = document.querySelectorAll(".setting-project .option button");
let randomize = true;
let randonImage;
randomation();
randombtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    randombtns.forEach(function (btn) {
      btn.classList.remove("active");
      btn.removeAttribute("disabled", "disabled");
    });
    btn.classList.add("active");
    btn.setAttribute("disabled", "disabled");
    console.log(btn.dataset.random);
    window.localStorage.random = btn.dataset.random;
    if (btn.dataset.random === "yes") {
      randomize = true;
      randomation();
    } else {
      clearInterval(randonImage);
      randomize = false;
    }
  });
});

function randomation() {
  if (randomize === true) {
    randonImage = setInterval(() => {
      document.querySelector(
        ".landing-page"
      ).style.backgroundImage = `url(image/${Math.floor(
        Math.random() * 5
      )}.jpg)`;
    }, 3000);
  }
}

if (window.localStorage.getItem("random")) {
  randombtns.forEach(function (btn) {
    btn.classList.remove("active");
  });
  document
    .querySelector(`.setting-project .option .${window.localStorage.random}`)
    .classList.add("active");
}
if (window.localStorage.getItem("random")) {
  if (window.localStorage.random === "yes") {
    randomize = true;
    randomation();
  } else {
    clearInterval(randonImage);
  }
}
// >>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>
// console.log(Math.ceil(Math.random() * 5));
let btn = document.querySelector(".btn");
let linkat = document.querySelector(".linkat");
let close = document.querySelector(".close");
btn.onclick = function () {
  linkat.classList.add("active");
};
close.onclick = function () {
  linkat.classList.remove("active");
};
window.onkeyup = function (e) {
  if (e.key === "Escape") {
    linkat.classList.remove("active");
  }
};
let lis = document.querySelectorAll(".linkat li");

lis.forEach(function (li) {
  li.addEventListener("click", function () {
    linkat.classList.remove("active");
  });
});
// >>>>>>>>>>>>
// setting
let settingProject = document.querySelector(".setting-project");
let icon = document.querySelector(".setting-project .icon");
icon.onclick = function () {
  settingProject.classList.toggle("open");
  document.querySelector(".icon i").classList.toggle("fa-spin");
};
// >>>>>>>>>>>>>>>>>>>>>>>>>
let liscolor = document.querySelectorAll(".setting-project li");
liscolor.forEach(function (li) {
  li.addEventListener("click", function (e) {
    console.log(li.dataset.color);
    liscolor.forEach(function (li) {
      li.classList.remove("active");
    });
    li.classList.add("active");
    window.localStorage.color = li.dataset.color;
    document.documentElement.style.setProperty(
      "--main-color",
      window.localStorage.color
    );
  });
});
window.onload = function () {
  if (window.localStorage.getItem("color")) {
    document.documentElement.style.setProperty(
      "--main-color",
      window.localStorage.color
    );

    liscolor.forEach(function (li) {
      if (li.dataset.color === window.localStorage.color) {
        li.classList.add("active");
      } else {
        li.classList.remove("active");
      }
    });
  }
};
// window.localStorage.clear();
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
console.log(">>>>>>>");
let spans = document.querySelectorAll(".skills span");

window.onscroll = function () {
  if (window.scrollY >= 1400) {
    spans.forEach(function (span) {
      span.style.width = `${span.dataset.width}%`;
      span.innerHTML = `${span.dataset.width}% `;
    });
  } else {
    spans.forEach(function (span) {
      span.style.width = 0;
    });
  }
};
// >>>>>>>>>>>>>
// Start Our Gellary
let imgs = document.querySelectorAll(".gallery img");
imgs.forEach(function (img) {
  img.addEventListener("click", function () {
    // console.log(img.alt);
    let imagediv = document.createElement("div");
    imagediv.className = "imagediv";

    //>>>>>>>>>>>>>>>>>>
    let imagediv2 = document.createElement("div");
    imagediv2.className = "imagediv2";
    // >>>>>>>>>>
    if (img.alt != "") {
      let h3 = document.createElement("h3");
      h3.appendChild(document.createTextNode(img.alt));
      imagediv2.appendChild(h3);
    }
    // >>>>>>>>>
    let imag = document.createElement("img");
    imag.setAttribute("src", img.src);
    imagediv2.appendChild(imag);
    // >>>>>>>>>
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("X"));
    imagediv2.appendChild(span);
    // >>>>>>>>>>>
    span.addEventListener("click", function () {
      imagediv.remove();
    });

    // >>>>>>>>>>>
    imagediv.appendChild(imagediv2);

    // >>>>>>>
    document.body.appendChild(imagediv);
  });
});
//End Our Gellary
// Testimonial

let images = ["aa.png", "bb.png", "cc.png"];
let names = ["mohamed", "ahmed", "ameen"];
let currentImage = 1;
let currentName = 1;

let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

nextBtn.onclick = next;
prevBtn.onclick = prev;

function next() {
  if (currentImage < images.length && currentName < names.length) {
    currentImage++;
    currentName++;
    checker();
  }
}
function prev() {
  if (currentImage > 1 && currentName > 1) {
    --currentImage;
    --currentName;
    checker();
  }
}
let TestiImage = document.querySelector(".testimonial img");
let TestTxt = document.querySelector(".testimonial .hh");
function checker() {
  TestiImage.src = `image/${images[currentImage - 1]}`;
  TestTxt.textContent = names[currentName - 1];
}
checker();
// Testimonial
// Navigation
let navigations = document.querySelectorAll(".nav-bullets .bullets");

navigations.forEach(function (nav) {
  nav.addEventListener("click", function () {
    document.querySelector(`#${nav.dataset.web}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navigation
let links = document.querySelectorAll(".landing-page .header-area ul li a");

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // location.hash = `${link.dataset.sec}`;
    document.querySelector(`${link.dataset.sec}`).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// البديل
// يتم عمل فنكشن تقوم بالمهمة بدلا من التكرار
//
// function ss(element) {
//   element.addEventListener("click", function (ele) {
//     ele.preventDefault();
//     document.querySelector(`${element.dataset.sec}`).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// }
// links.forEach(ss);
// Bullets

let bullets = document.querySelectorAll(".bullets-option button");

bullets.forEach(function (bullet) {
  bullet.addEventListener("click", function () {
    bullets.forEach(function (bullet) {
      bullet.classList.remove("active");
    });
    bullet.classList.add("active");
    window.localStorage.bullets = bullet.dataset.bullet;
    bull();
  });
});
if (window.localStorage.getItem("bullets")) {
  bullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
  document
    .querySelector(`.bullets-option .${window.localStorage.bullets}`)
    .classList.add("active");
}
function bull() {
  if (window.localStorage.bullets == "no") {
    document.querySelector(".nav-bullets").style.display = "none";
  } else {
    document.querySelector(".nav-bullets").style.display = "block";
  }
}
bull();
// reset
let reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  window.localStorage.clear();
  location.reload();
});
