document.addEventListener('DOMContentLoaded', function() {
    // Music player functionality
    const playBtn = document.querySelector('.play-btn');
    let isPlaying = false;
    
    // Create audio element
    const audio = new Audio('music/Oasis - Wonderwall (Remastered).mp3');
    
    playBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            playBtn.textContent = 'Play Music';
        } else {
            audio.play();
            playBtn.textContent = 'Pause Music';
        }
        isPlaying = !isPlaying;
    });
    
    // Image slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    // Add click events to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const slider = document.querySelector('.slider');
    
    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left - next slide
            showSlide(currentSlide + 1);
        }
        if (touchEndX > touchStartX) {
            // Swipe right - previous slide
            showSlide(currentSlide - 1);
        }
    }
    
    // Create flowers and hearts in the background
    function createFlowersAndHearts() {
        const background = document.querySelector('.background-animation');
        const numFlowers = 70;
        const numHearts = 70;

        // Clear existing
        background.innerHTML = '';

        // Flower emoji options with blue tints
        const flowerEmojis = ["🌹", "🌷", "🌸", "💐", "🌼", "🏵️", "🌺", "🌻"];
        const flowerColors = ["#66B3FF", "#1E90FF", "#4682B4", "#00BFFF", "#87CEFA", "#6495ED"];

        // Create flowers
        for (let i = 0; i < numFlowers; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.textContent = flowerEmojis[i % flowerEmojis.length];
            flower.style.color = flowerColors[i % flowerColors.length];
            flower.style.position = 'absolute';
            flower.style.left = `${Math.random() * 100}vw`;
            flower.style.top = `${Math.random() * 100}vh`;
            flower.style.animationDelay = `${Math.random() * 8}s`;
            flower.style.fontSize = `${24 + Math.random() * 20}px`;
            flower.style.zIndex = '1';
            flower.style.opacity = '0';
            flower.style.willChange = 'transform, opacity';
            background.appendChild(flower);
        }

        // Create hearts
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '❤️';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.animationDelay = `${Math.random() * 6}s`;
            heart.style.animationDuration = `${6 + Math.random() * 8}s`;
            heart.style.fontSize = `${20 + Math.random() * 15}px`;
            heart.style.color = `hsl(${Math.random() * 60 + 200}, 100%, 70%)`;
            heart.style.opacity = '0';
            heart.style.willChange = 'transform, opacity';
            background.appendChild(heart);
        }
    }
    
    // Initialize the background animation
    createFlowersAndHearts();
    
    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('.music-player, .letter, .gallery, .play-btn, .slider-dot');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});