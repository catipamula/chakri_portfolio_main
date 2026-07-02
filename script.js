function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
<<<<<<< HEAD
=======

function downloadAndViewCV() {
  const fileUrl = "./assets/CHAKRAVARTHII_RESUME.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "CHAKRAVARTHI.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.open(fileUrl, "_blank");
}

function playVideo(videoSrc) {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("demoVideo");
  if (!modal || !video) return;
  video.src = videoSrc;
  modal.style.display = "flex";
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("demoVideo");
  if (!modal || !video) return;
  video.pause();
  video.currentTime = 0;
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      alert("Your message has been sent successfully!");
    });
  }

  const typedEl = document.getElementById("typed-text");
  if (typedEl && typeof Typed !== "undefined") {
    new Typed("#typed-text", {
      strings: [
        "Full Stack Python Developer",
        "Back-End Developer",
        "Data-Science Enthusiast",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
  }

  const hamburgerIcon = document.querySelector(".hamburger-icon");
  if (hamburgerIcon) {
    hamburgerIcon.setAttribute("role", "button");
    hamburgerIcon.setAttribute("tabindex", "0");
    hamburgerIcon.setAttribute("aria-label", "Toggle navigation menu");
    hamburgerIcon.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });
  }
});
>>>>>>> 27a2b6f (Updated portfolio with new features and bug fixes)
