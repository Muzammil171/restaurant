// ------------------------------------dark-mode-----------------------------------

function isVisible(el) {
    return el && el.offsetParent !== null;
}

const toggles = document.querySelectorAll('.darkToggle');

toggles.forEach(toggle => {
    if (isVisible(toggle)) {
        toggle.addEventListener('click', () => {
            toggles.forEach(btn => btn.classList.toggle('dark-mode-toggle'));
            document.body.classList.toggle('dark-mode');
        });
    }
});

// ------------------------------------dark-mode-----------------------------------


window.addEventListener("scroll", function () {
    var searchi = document.getElementById("searchContainer");
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 150) {
        navbar.classList.add("blur");
        searchi.style.display = "none"; // Hide on scroll
    } else {
        navbar.classList.remove("blur");
        searchi.style.display = "inline"; // ✅ Show again when scrolled back up
    }
});

// <!-- /* --------------------------------------- */ -->

const searchContainer = document.getElementById("searchContainer");
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");

searchIcon.addEventListener("click", () => {
    searchContainer.classList.toggle("active");

    if (searchContainer.classList.contains("active")) {
        searchInput.focus();
    } else {
        searchInput.blur();
    }
});




// <!-- /* -----------------slider-slide--------------------- */ -->


const slides = document.querySelectorAll('.head');
const dotsContainer = document.getElementById('dots');
let current = 0;
let autoSlide;

function createDots() {
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            current = i;
            showSlide(current);
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
    updateDots(index);
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 4000);
}

window.nextSlide = nextSlide;
window.prevSlide = prevSlide;

createDots();
autoSlide = setInterval(nextSlide, 4000);




// <!-- /* -----------------sitemmmmm--------------------- */ -->



function scrollSlider(val) {
    const slider = document.getElementById("sliderw");
    slider.scrollLeft += val;
}

const links = document.querySelectorAll('.slider-item');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
            link.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        }
    });
});


// <!-- /* -----------------deals-------------------- */ -->

document.querySelectorAll('.heart-icon').forEach(function (icon) {
    icon.addEventListener('click', function () {
        icon.classList.toggle('liked');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    });
});



// ---------------------------------hamburger-------------------------------
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    closeBtn.style.display = "none";
    hamburger.style.display = "block";
});