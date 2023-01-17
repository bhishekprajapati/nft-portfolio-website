import gsap from 'gsap';

const layerFollowingCursor = document.getElementById('layer-following-cursor');

window.addEventListener('mousemove', e => {
    layerFollowingCursor.style.top = `${e.clientY}px`;
    layerFollowingCursor.style.left = `${e.clientX}px`;
});

const nftCounterID = '#nfts-counter';
const ownerCounterID = '#owners-counter';
const soldItemCounterID = '#items-sold-counter';

gsap.registerEffect({
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
});

gsap.effects.counter(nftCounterID);
gsap.effects.counter(ownerCounterID);
gsap.effects.counter(soldItemCounterID);