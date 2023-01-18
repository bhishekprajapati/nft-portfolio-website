import gsap from 'gsap';

export const counterEffect = {
    name: 'counter',
    effect: (target, config) => {
        return gsap.to(target, {
            innerText: target[0].dataset.counterFinalValue,
            ...config
        });
    },
    defaults: {
        duration: 2,
        snap: 'innerText',
        ease: 'power4.out',
        delay: 0.4
    },
};