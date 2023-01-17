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
        console.log(target);
        return gsap.to(target, {
            innerText: target[0].dataset.counterFinalValue,
            duration: config.duration,
            snap: config.snap,
            ease: config.ease,    
        });
    },
    defaults: {
        duration: 2,
        snap: 'innerText',
        ease: 'power4.out',
    },
});

gsap.effects.counter(nftCounterID);
gsap.effects.counter(ownerCounterID);
gsap.effects.counter(soldItemCounterID);