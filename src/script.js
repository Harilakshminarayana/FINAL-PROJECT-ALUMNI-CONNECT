import { useEffect } from 'react';

const useAnimationOnScroll = () => {
    useEffect(() => {
        // This is where the magic happens.
        // It's the same Intersection Observer code from your script.js
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1
        });

        // We're still selecting the same elements to observe
        const elements = document.querySelectorAll('.benefit-card, .success-story-card');
        elements.forEach(element => {
            observer.observe(element);
        });

        // This is a cleanup function. It runs when the component is removed
        // from the screen to prevent memory leaks.
        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []); // The empty array [] means this effect runs only once when the component mounts
};

export default useAnimationOnScroll;