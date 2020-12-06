import '@csstools/normalize.css';
import './scss/main.scss'
import { options } from './js/anim-fon/animationFon'
import { tsParticles } from "tsparticles";

tsParticles.load("tsparticles", options);


let div1 = document.querySelector('.parallacs-div-one');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    div1.style.transform = 'translate(-' + x * 80 + 'px, -' + y * 80 + 'px)';
});
let div2 = document.querySelector('.parallacs-div-two');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    div2.style.transform = 'translate(-' + x * 150 + 'px, -' + y * 150 + 'px)';
});
let div3 = document.querySelector('.parallacs-div-three');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    div3.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
});





