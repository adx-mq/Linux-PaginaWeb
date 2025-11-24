const {
  gsap: {
    registerPlugin,
    set,
    to,
    timeline,
    delayedCall,
    utils: { random } },

  MorphSVGPlugin,
  Draggable } =
window;
registerPlugin(MorphSVGPlugin);

// Used to calculate distance of "tug"
let startX;
let startY;

const CORD_DURATION = 0.1;
const INPUT = document.querySelector('#light-mode');
const ARMS = document.querySelectorAll('.bear__arm');
const PAW = document.querySelector('.bear__paw');
const CORDS = document.querySelectorAll('.toggle-scene__cord');
const HIT = document.querySelector('.toggle-scene__hit-spot');
const DUMMY = document.querySelector('.toggle-scene__dummy-cord');
const DUMMY_CORD = document.querySelector('.toggle-scene__dummy-cord line');
const PROXY = document.createElement('div');
const endY = DUMMY_CORD.getAttribute('y2');
const endX = DUMMY_CORD.getAttribute('x2');
// set init position
const RESET = () => {
  set(PROXY, {
    x: endX,
    y: endY });