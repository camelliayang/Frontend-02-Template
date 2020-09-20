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
        this.root.classList.add("carousel"); // 加一些css
        for (let record of this.attributes.src) {
            // img可以拖拽体验不好
            // let child = document.createElement("img");   
            // child.src = record;
            let child = document.createElement("div");
            child.style.backgroundImage = `url('${record}')`;
            this.root.appendChild(child);
        }

        let current = 0;
        setInterval(() =>{
            let children = this.root.children;
            ++current;
            current = current % children.length; // 播完回到第一张
            for(let child of children){
                child.style.transform =`translateX(-${current * 100}%)`;
            }
            // 只播一帧
            // let children = this.root.children;
            // for(let child of children){
            //     child.style.transform =`translateX(-100%)`;
            // }
        },3000);
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