document.addEventListener('DOMContentLoaded', () => {
// Theme Switcher Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
themeToggle.addEventListener('click', () => {
const sun = themeToggle.querySelector('.fa-sun');
const moon = themeToggle.querySelector('.fa-moon');
sun.classList.toggle('active');
moon.classList.toggle('active');
document.body.classList.toggle('dark-theme');
});
}
// Watch Demo Trigger
const playDemoBtn = document.getElementById('playDemoBtn');
const videoModal = document.getElementById('videoModal');
const closeVideoBtn = document.getElementById('closeVideoBtn');
const demoDemo = document.getElementById('demoVideo');

playDemoBtn.addEventListener('click', () => {
    videoModal.style.display = "flex";
    demoDemo.currentTime = 0;
    demoDemo.play().catch(error => {
        console.error("Video playback failed:", error);
    });
});

function closeVideo(){
    demoDemo.onpause();
    demoDemo.currentTime = 0;
    videoModal.style.display = "none"
}
closeVideoBtn.addEventListener("click", closeVideo);
videoModal.addEventListener('click', (event) => {
        if (event.target === videoModal){
            closeVideo();
        }
    });
document.addEventListener("keydown",(event) => {
    if (event.key === "Escape" && videoModal.style.display === "flex"){
        closeVideo();
    }
});    

// floating play video
const floatPlayDemoBtn = document.getElementById('floatPlayDemoBtn');
if (floatPlayDemoBtn){
    floatPlayDemoBtn.addEventListener('click', () => {
    videoModal.style.display = "flex";
    demoDemo.currentTime = 0;
    demoDemo.play().catch(error => {
        console.error("Video playback failed:", error);
    });
});
}

// Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
scrollToTopBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
}
// Scroll to Bottom
const scrollToBottomBtn = document.getElementById('scrollToBottom');
if (scrollToBottomBtn) {
scrollToBottomBtn.addEventListener('click', () => {
window.scrollTo({
top: document.body.scrollHeight,
behavior: 'smooth'
});
});
}
// Scroll Down Incremental
const scrollDownBtn = document.getElementById('scrollDownBtn');
if (scrollDownBtn) {
scrollDownBtn.addEventListener('click', () => {
window.scrollBy({
top: window.innerHeight / 2,
behavior: 'smooth'
});
});
}

/* ======================================
   RESPONSIVE NAVIGATION MENU
====================================== */

/* ======================================
   RESPONSIVE NAVIGATION

   Desktop  : >1024px
   Tablet   : 641-1024px
   Mobile   : <=640px
====================================== */

const menuBtn =
    document.getElementById("hamburgerBtn");

const navMenu =
    document.getElementById("navMenu");

const closeBtn =
    document.getElementById("closeMenu");

const overlay =
    document.getElementById("menuOverlay");


const allNavLinks =
    document.querySelectorAll(
        "#desktopNav a, #navMenu a"
    );
    function openMenu() {

    if (!menuBtn || !navMenu || !overlay) {
        return;
    }

    navMenu.classList.add("active");

    overlay.classList.add("active");

    menuBtn.classList.add("active");

    menuBtn.setAttribute(
        "aria-expanded",
        "true"
    );

    document.body.classList.add(
        "drawer-open"
    );


    const icon =
        menuBtn.querySelector("i");

    if (icon) {

        icon.classList.replace(
            "fa-bars",
            "fa-xmark"
        );

    }
}
function closeMenu() {

    if (!menuBtn || !navMenu || !overlay) {
        return;
    }

    navMenu.classList.remove("active");

    overlay.classList.remove("active");

    menuBtn.classList.remove("active");

    menuBtn.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.classList.remove(
        "drawer-open"
    );


    const icon =
        menuBtn.querySelector("i");

    if (icon) {

        icon.classList.replace(
            "fa-xmark",
            "fa-bars"
        );

    }
}
if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            if (
                navMenu.classList.contains(
                    "active"
                )
            ) {

                closeMenu();

            } else {

                openMenu();

            }

        }
    );

}
if (closeBtn) {

    closeBtn.addEventListener(
        "click",
        closeMenu
    );

}


if (overlay) {

    overlay.addEventListener(
        "click",
        closeMenu
    );

}
document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    }
);
allNavLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const id =
                link.getAttribute("href");


            if (
                !id ||
                !id.startsWith("#")
            ) {

                return;

            }


            const section =
                document.querySelector(id);


            if (section) {

                event.preventDefault();

                section.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }


            // Remove active from all links
            allNavLinks.forEach(
                (item) => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            // Make corresponding
            // desktop + drawer links active
            document
                .querySelectorAll(
                    `a[href="${id}"]`
                )
                .forEach(
                    (item) => {

                        item.classList.add(
                            "active"
                        );

                    }
                );


            // Close drawer
            if (
                link.closest("#navMenu")
            ) {

                closeMenu();

            }

        }
    );

});
const sections =
    document.querySelectorAll(
        "main[id], section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            (section) => {

                if (
                    window.scrollY >=
                    section.offsetTop - 120
                ) {

                    current =
                        section.id;

                }

            }
        );


        if (!current) {
            return;
        }


        allNavLinks.forEach(
            (link) => {

                link.classList.toggle(

                    "active",

                    link.getAttribute(
                        "href"
                    ) === `#${current}`

                );

            }
        );

    }
);
const header =
    document.querySelector("header");


window.addEventListener(
    "scroll",
    () => {

        if (header) {

            header.classList.toggle(
                "header-shadow",
                window.scrollY > 30
            );

        }

    }
);

/* ======================================
   CERTIFICATE / DOCUMENT VIEWER MODAL
====================================== */



 
  

// let currentDocPages = [];
// let currentDocIndex = 0;
// let currentZoom = 1;

// function openDocModal(title, pagesArray) {
//   const modal = document.getElementById('docViewerModal');
//   const modalTitle = document.getElementById('modalDocTitle');
//   const downloadBtn = document.getElementById('modalDownloadBtn');

//   if (!modal) return;

//   currentDocPages = pagesArray;
//   currentDocIndex = 0;
//   currentZoom = 1;

//   modalTitle.innerText = title;
//   downloadBtn.setAttribute('href', pagesArray[0]);

//   renderThumbnails();
//   updateModalView();

//   modal.classList.add('active');
//   document.body.style.overflow = 'hidden';
// }

// function closeDocModal() {
//   const modal = document.getElementById('docViewerModal');
//   if (!modal) return;
//   modal.classList.remove('active');
//   document.body.style.overflow = '';
// }

// function renderThumbnails() {
//   const thumbsContainer = document.getElementById('modalThumbnailsList');
//   const pageCounter = document.getElementById('modalPageCounter');

//   thumbsContainer.innerHTML = '';
//   pageCounter.innerText = `${currentDocIndex + 1} / ${currentDocPages.length}`;

//   currentDocPages.forEach((imgSrc, idx) => {
//     const thumb = document.createElement('div');
//     thumb.className = `thumb-item ${idx === currentDocIndex ? 'active' : ''}`;
//     thumb.onclick = () => selectDocPage(idx);
//     thumb.innerHTML = `
//       <img src="${imgSrc}" alt="Page ${idx + 1}">
//     `;
//     thumbsContainer.appendChild(thumb);
//   });
// }

// function selectDocPage(index) {
//   currentDocIndex = index;
//   renderThumbnails();
//   updateModalView();
// }

// function updateModalView() {
//   const modalImg = document.getElementById('modalMainImage');
//   modalImg.src = currentDocPages[currentDocIndex];
//   resetDocZoom();
// }

// function zoomDoc(amount) {
//   const modalImg = document.getElementById('modalMainImage');
//   currentZoom = Math.min(Math.max(0.5, currentZoom + amount), 2.5);
//   modalImg.style.transform = `scale(${currentZoom})`;
// }

// function resetDocZoom() {
//   const modalImg = document.getElementById('modalMainImage');
//   currentZoom = 1;
//   modalImg.style.transform = `scale(1)`;
// }

// // Close Modal on clicking outside the container
// document.addEventListener('DOMContentLoaded', () => {
//   const modal = document.getElementById('docViewerModal');
//   if (modal) {
//     modal.addEventListener('click', (e) => {
//       if (e.target === modal) {
//         closeDocModal();
//       }
//     });
//   }
// });
// ending point
});
