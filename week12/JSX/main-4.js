import { Component, createElement } from "./framework.js";

class Carousel extends Component {
    constructor() {
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    appendChild(child) {
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.render());// 保证render时机是在取到数据之后
    }
    render() {
        console.log(this.attributes.src);
        this.root = document.createElement("div");
        for (let record of this.attributes.src) {
            let child = document.createElement("img");   
            child.src = record;
            this.root.appendChild(child);
        }
        return this.root;
    }
}

let pictures = [
    "http://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-2.png",
    "http://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-6.png",
    "http://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-9.png",
    "http://www.pngall.com/wp-content/uploads/2016/03/Cat-PNG-7.png"
]

let a = <Carousel src={pictures} />

//document.body.appendChild(a);


a.mountTo(document.body);