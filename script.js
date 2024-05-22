document.addEventListener("DOMContentLoaded", function() {
    // Toggle dark mode
    const toggleIcon = document.querySelector('.toggle-icon');
    toggleIcon.addEventListener('click', () => {
        toggleIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    });

    
    window.addEventListener('scroll', () => {
        let header = document.querySelector('.header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }
    });

    
const playVideoBtn = document.getElementById('play-video-btn');
const videoContainer = document.getElementById('video-container');


playVideoBtn.addEventListener('click', function(event) {
   
    event.preventDefault();
    
    videoContainer.style.display = 'block';
});
    
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true, 
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev", 
        }
    });

    // Animate progress circles
    var circles = document.querySelectorAll('.progress-circle');
    circles.forEach(function(circle) {
        var progress = circle.getAttribute('data-progress');
        var radius = parseInt(circle.querySelector('.progress-bar').getAttribute('r'));
        var circumference = 2 * Math.PI * radius;
        var offset = circumference - (progress / 100) * circumference;
        circle.querySelector('.progress-bar').style.strokeDasharray = circumference;
        circle.querySelector('.progress-bar').style.strokeDashoffset = offset;
    });
});


function filterHobbies(category) {
    var hobbyBoxes = document.querySelectorAll('.hobbies-box');
    
    hobbyBoxes.forEach(function(box) {
        if (category === 'all' || box.classList.contains(category)) {
            box.classList.remove('hidden'); 
        } else {
            box.classList.add('hidden'); 
        }
    });
}


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    document.getElementById('success-message').style.display = 'block';
    
   
    document.getElementById('contact-form').reset();
});




