// Universal Screenshot/Video Hover Preview System
// Mouseover: fullscreen overlay, Click: dismiss
// Supports img/video thumbnails with data-full attribute

(function () {
  "use strict";

  // Create preview elements if they don't exist
  let hoverPreview = document.getElementById("hover-preview");
  let hoverPreviewImg = document.getElementById("hover-preview-img");
  let hoverPreviewVideo = document.getElementById("hover-preview-video");
  let imageModal = document.getElementById("image-modal");
  let modalImg = document.getElementById("modal-img");
  let modalVideo = document.getElementById("modal-video");

  if (!hoverPreview) {
    hoverPreview = document.createElement("div");
    hoverPreview.id = "hover-preview";
    document.body.appendChild(hoverPreview);

    hoverPreviewImg = document.createElement("img");
    hoverPreviewImg.id = "hover-preview-img";
    hoverPreview.appendChild(hoverPreviewImg);

    hoverPreviewVideo = document.createElement("video");
    hoverPreviewVideo.id = "hover-preview-video";
    hoverPreviewVideo.loop = true;
    hoverPreviewVideo.muted = true;
    hoverPreviewVideo.playsInline = true;
    hoverPreview.appendChild(hoverPreviewVideo);
  }

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

  // Get all thumbnails (img/video with data-full)
  const thumbnails = document.querySelectorAll(
    '[data-full][class*="thumb"], .thumbnail, .app-thumb, .hero-preview',
  );

  thumbnails.forEach((thumb) => {
    // Hover preview (desktop)
    thumb.addEventListener("mouseenter", () => {
      const fullSrc = thumb.dataset.full;
      if (
        thumb.tagName === "VIDEO" ||
        fullSrc.endsWith(".mp4") ||
        fullSrc.endsWith(".webm")
      ) {
        hoverPreviewImg.style.display = "none";
        hoverPreviewVideo.src = fullSrc;
        hoverPreviewVideo.style.display = "block";
        hoverPreviewVideo.load();
        hoverPreviewVideo.currentTime = 0;
        hoverPreviewVideo.play().catch(() => {}); // Silent fail for autoplay policy
      } else {
        hoverPreviewVideo.style.display = "none";
        hoverPreviewImg.src = fullSrc;
        hoverPreviewImg.style.display = "block";
        hoverPreviewImg.alt = thumb.alt || "";
      }
      hoverPreview.classList.add("active");
    });

    thumb.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!hoverPreview.matches(":hover")) {
          hoverPreview.classList.remove("active");
          hoverPreviewVideo.pause();
          hoverPreviewVideo.currentTime = 0;
        }
      }, 150);
    });

    // Click modal fallback (mobile/touch)
    thumb.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const fullSrc = thumb.dataset.full;
      if (thumb.tagName === "VIDEO" || fullSrc.match(/\.(mp4|webm|ogg)$/i)) {
        modalImg.style.display = "none";
        modalVideo.src = fullSrc;
        modalVideo.style.display = "block";
        modalVideo.load();
        modalVideo.play();
      } else {
        modalVideo.style.display = "none";
        modalImg.src = fullSrc;
        modalImg.style.display = "block";
        modalImg.alt = thumb.alt || "";
      }
      imageModal.classList.add("active");
    });
  });

  // Hover preview interactions
  hoverPreview.addEventListener("mouseenter", () =>
    hoverPreview.classList.add("active"),
  );
  hoverPreview.addEventListener("mouseleave", () =>
    hoverPreview.classList.remove("active"),
  );
  hoverPreview.addEventListener("click", () => {
    hoverPreview.classList.remove("active");
    hoverPreviewVideo.pause();
    hoverPreviewVideo.currentTime = 0;
  });

  // Modal interactions
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      imageModal.classList.remove("active");
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  });

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (hoverPreview.classList.contains("active")) {
        hoverPreview.classList.remove("active");
        hoverPreviewVideo.pause();
      }
      if (imageModal.classList.contains("active")) {
        imageModal.classList.remove("active");
        modalVideo.pause();
      }
    }
  });

  // MutationObserver for dynamic content
  const observer = new MutationObserver(() => {
    // Re-attach to new thumbnails
    const newThumbs = document.querySelectorAll(
      '[data-full][class*="thumb"], .thumbnail, .app-thumb, .hero-preview',
    );
    // Only process new ones not already processed
    newThumbs.forEach((thumb) => {
      if (!thumb.dataset.processed) {
        thumb.dataset.processed = "true";
        // Add event listeners to new thumbnails (same logic as above)
        // ... (duplicate the forEach logic here if needed)
      }
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  console.log(
    `Screenshot Preview initialized. Found ${thumbnails.length} thumbnails.`,
  );
})();
