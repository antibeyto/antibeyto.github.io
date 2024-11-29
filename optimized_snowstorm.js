
(function() {
    // Snowstorm class for the snowfall effect
    class SnowStorm {
        constructor() {
            this.flakes = [];
            this.flakeCount = 50; // Maximum number of snowflakes
            this.flakeSize = 8;   // Smaller snowflake size
            this.wind = 1;        // Wind speed
            this.speed = 1;       // Snowfall speed

            // Initialize snowfall
            this.init();
        }

        init() {
            for (let i = 0; i < this.flakeCount; i++) {
                const flake = document.createElement('div');
                flake.className = 'snowflake';
                flake.style.width = `${this.flakeSize}px`;
                flake.style.height = `${this.flakeSize}px`;
                flake.style.position = 'absolute';
                flake.style.background = 'white';
                flake.style.borderRadius = '50%';
                flake.style.pointerEvents = 'none';
                flake.style.opacity = Math.random().toFixed(2);
                flake.style.top = `${Math.random() * window.innerHeight}px`;
                flake.style.left = `${Math.random() * window.innerWidth}px`;
                document.body.appendChild(flake);
                this.flakes.push({
                    el: flake,
                    speed: Math.random() * this.speed + 0.5, // Random speed for each flake
                    xDirection: Math.random() > 0.5 ? 1 : -1, // Random horizontal movement
                });
            }

            // Start the animation
            this.animate();
        }

        animate() {
            this.flakes.forEach(flake => {
                const rect = flake.el.getBoundingClientRect();
                const xMove = flake.xDirection * this.wind * 0.5; // Wind impact
                const yMove = flake.speed;

                // Move snowflake
                flake.el.style.transform = `translate(${xMove}px, ${yMove}px)`;

                // Reset position if out of bounds
                if (rect.top > window.innerHeight) {
                    flake.el.style.top = `-${this.flakeSize}px`;
                    flake.el.style.left = `${Math.random() * window.innerWidth}px`;
                }
            });

            // Recursively call animate for smooth effect
            requestAnimationFrame(() => this.animate());
        }
    }

    // Add styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .snowflake {
            position: absolute;
            background: white;
            border-radius: 50%;
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    // Start snowfall
    new SnowStorm();
})();
