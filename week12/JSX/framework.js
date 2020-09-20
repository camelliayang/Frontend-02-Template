// 提取公共部分
export class Component {
  constructor(type) {
  }
  setAttribute(name, value) {
      this.root.setAttribute(name, value);
  }
  appendChild(child) {
      child.mountTo(this.root);
  }
  mountTo(parent) {
      parent.appendChild(this.root);
  }
}

export function createElement(type, attributes, ...children) {
let element;
if (typeof type === "string") {
    element = new ElementWrapper(type);
} 
else {
    element = new type;
}

for (let name in attributes) {
    element.setAttribute(name, attributes[name])
}

for (let child of children) {
    if (typeof child === "string") {
        child = new TextWrapper(child);
    }
    element.appendChild(child);
}
return element;
}

// 以下要放在component后面
class TextWrapper extends Component {
constructor(content) {
    this.root = document.createTextNode(content);
}
}

// 帮助把普通Div转换成mountTo的形式
class ElementWrapper extends Component {
constructor(type) {
    this.root = document.createElement(type);
}
}