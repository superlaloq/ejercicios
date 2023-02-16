
            let carousel = document.querySelector("#carousel");
            let imgs = carousel.querySelectorAll("img");
            let current = 0;

            // Esta función hace que el carousel cambie cada dos segundos
            function slideshow() {
                for (let i = 0; i < imgs.length; i++) {
                    imgs[i].classList.remove("active");
                }
                current = (current + 1) % imgs.length;
                imgs[current].classList.add("active");
                setTimeout(slideshow, 2000);
            }

            slideshow();