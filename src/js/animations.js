import gsap from 'gsap';
import 'vanilla-tilt';
import { counterEffect } from './utils/gsap.effects';

gsap.registerEffect(counterEffect);

const nftCounterID = '#nfts-counter';
const ownerCounterID = '#owners-counter';
const soldItemCounterID = '#items-sold-counter';

gsap.effects.counter(nftCounterID);
gsap.effects.counter(ownerCounterID);
gsap.effects.counter(soldItemCounterID);