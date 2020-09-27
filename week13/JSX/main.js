import { Component, createElement } from "./framework.js";
import { Carousel } from "./Carousel.js";
import { Timeline, Animation } from "./animation-1.js";

let pictures = [
    "http://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-2.png",
    "http://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-6.png",
    "http://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-9.png",
    "http://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-7.png"
]

let a = <Carousel src={pictures} />

//document.body.appendChild(a);

a.mountTo(document.body);

let timeline = new Timeline();
window.timeline = timeline;
window.animation = new Animation({ set a(v) { console.log(v); }}, "a", 0, 100, 1000, null);
timeline.start();
timeline.add(animation);