// Universal Screenshot/Video Click-to-Toggle Preview System
// Click: expand to fullscreen, Click again: collapse back to thumbnail
// Supports img/video thumbnails with data-full attribute

(function () {
  "use strict";

  // Create modal elements if they don't exist
  let imageModal = document.getElementById("image-modal");
  let modalImg = document.getElementById("modal-img");
  let modalVideo = document.getElementById("modal-video");

  if (!imageModal) {
    imageModal = document.createElement("div");
    imageModal.id = "image-modal";
    document.body.appendChild(imageModal);

    modalImg = document.createElement("img");
    modalImg.id = "modal-img";
    imageModal.appendChild(modalImg);

    modalVideo = document.createElement("video");
    modalVideo.id = "modal-video";
    modalVideo.controls = true;
    modalVideo.loop = true;
    modalVideo.playsInline = true;
    imageModal.appendChild(modalVideo);
  }

  // Track currently expanded element
  let currentlyExpanded = null;

  function getThumbnails() {
    return document.querySelectorAll(
      [
        "[data-full]",
        ".app-thumb",
        ".thumbnail",
        ".hero-preview",
        ".site-thumb",
        ".screenshots-grid img",
        ".screenshots-grid video",
        ".gallery-visual img",
        ".gallery-visual video",
        ".hero-img img",
        ".hero-img video"
      ].join(", ")
    );
  }

  function setupThumbnail(thumb) {
    // Skip if already processed
    if (thumb.dataset.previewProcessed) return;
    thumb.dataset.previewProcessed = "true";

    // Ensure thumbnails have proper styling
    thumb.style.cursor = "pointer";

    // Click to toggle expanded view
    thumb.addEventListener("click", function handleClick(e) {
      e.preventDefault();
      e.stopPropagation();

      // If clicking the same element that's already expanded, close it
      if (currentlyExpanded === thumb) {
        imageModal.classList.remove("active");
        modalVideo.pause();
        modalVideo.currentTime = 0;
        currentlyExpanded = null;
        return;
      }

      // Close any previously expanded element
      if (currentlyExpanded) {
        imageModal.classList.remove("active");
        modalVideo.pause();
        modalVideo.currentTime = 0;
      }

      // Open new element
      const fullSrc = thumb.dataset.full || thumb.src;
      if (!fullSrc) return;

      const isVideo = thumb.tagName === "VIDEO" || fullSrc.match(/\.(mp4|webm|ogg)$/i);

      if (isVideo) {
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = fullSrc;
        modalVideo.load();
        modalVideo.play().catch(() => {});
      } else {
        modalVideo.style.display = "none";
        modalImg.style.display = "block";
        modalImg.src = fullSrc;
        modalImg.alt = thumb.alt || "";
      }

      imageModal.classList.add("active");
      currentlyExpanded = thumb;
    });
  }

  // Setup all existing thumbnails
  getThumbnails().forEach(setupThumbnail);

  // Click on modal background to close
  imageModal.addEventListener("click", function (e) {
    if (e.target === imageModal) {
      imageModal.classList.remove("active");
      modalVideo.pause();
      modalVideo.currentTime = 0;
      currentlyExpanded = null;
    }
  });

  // Keyboard support - Escape to close
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && imageModal.classList.contains("active")) {
      imageModal.classList.remove("active");
      modalVideo.pause();
      currentlyExpanded = null;
    }
  });

  // MutationObserver for dynamic content
  const observer = new MutationObserver(function () {
    getThumbnails().forEach(setupThumbnail);
  });
  observer.observe(document.body, { childList: true, subtree: true });

  console.log(
    "Screenshot Preview initialized. Click thumbnails to expand, click again to close."
  );
})();
