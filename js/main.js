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
if (playDemoBtn) {
playDemoBtn.addEventListener('click', () => {
alert('Play Demo Video');
});
}

// floating play video
const floatPlayDemoBtn = document.getElementById('floatPlayDemoBtn');
if (floatPlayDemoBtn){
    floatPlayDemoBtn.addEventListener('click', () => {
        alert('Play Demo Video')
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


// ending point
});
