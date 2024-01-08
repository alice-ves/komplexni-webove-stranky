//menu
const menuIcon = document.querySelector(".menu-icon");
const menuNav = document.querySelector("nav");
const Icons = document.querySelectorAll(".fa-solid");
const hamburgerIcon = Icons[1];

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    menuNav.style.display = "block";
    hamburgerIcon.classList.add("fa-circle-xmark");
    hamburgerIcon.classList.remove("fa-bars");
  } else {
    menuNav.style.display = "none";
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-circle-xmark");
  }
});

//zvetsovani obrazku
const colorbookSheet = document.querySelectorAll(".image");
colorbookSheet.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.1)";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1.0)";
  });
});

//dark a light mode
const ModeChanger = Icons[0];
const about = document.querySelector(".about");
const colorbook = document.querySelector(".colorbook");
const subscribe = document.querySelector(".subscribe");
const button = document.querySelector(".send");

ModeChanger.addEventListener("click", () => {
  const heroPicture = document.querySelector(".hero-section");
  const computedStyle = getComputedStyle(about);
  const backgroundColor = computedStyle.getPropertyValue("background-color");

  if (backgroundColor === "rgb(199, 238, 236)") {
    about.style.backgroundColor = "var(--dark)";
    about.style.color = "var(--light-blue)";
    colorbook.style.backgroundColor = "var(--dark)";
    colorbook.style.color = "var(--light-green)";
    subscribe.style.backgroundColor = "var(--dark)";
    subscribe.style.color = "var(--light-pink)";
    button.style.backgroundColor = "var(--light-pink)";
    heroPicture.style.filter = "brightness(70%)";
  } else {
    about.style.backgroundColor = "var(--light-blue)";
    about.style.color = "var(--lines)";
    colorbook.style.backgroundColor = "var(--light-green)";
    subscribe.style.backgroundColor = "var(--light-pink)";
    subscribe.style.color = "var(--lines)";
    heroPicture.style.filter = "none";
  }
});

//formular
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector(".name");
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  const confirmPassword = document.querySelector(".confirm-password");

  const emptyNameMessage = document.querySelector(".empty-name");
  const invalidMessage = document.querySelector(".mail");
  const okMessage = document.querySelector(".OK");
  const koMessage = document.querySelector(".KO");
  console.log(okMessage);
  const emailPattern =
    /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

  // jmeno
  if (name.value === "") {
    emptyNameMessage.style.display = "block";
  } else {
    emptyNameMessage.style.display = "none";
  }

  // email
  if (!email.value.match(emailPattern)) {
    invalidMessage.style.display = "block";
  } else {
    invalidMessage.style.display = "none";
  }

  // heslo
  if (password.value !== confirmPassword.value) {
    koMessage.style.display = "block";
  } else {
    koMessage.style.display = "none";
  }

  // vse ok
  if (
    name.value !== "" &&
    email.value.match(emailPattern) &&
    password.value === confirmPassword.value
  ) {
    okMessage.style.display = "block";
  } else {
    okMessage.style.display = "none";
  }
});

//vytah nahoru
const lift = document.querySelector(".lift-icon");
window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight / 2) {
    lift.style.display = "block";
  } else {
    lift.style.display = "none";
  }
});
