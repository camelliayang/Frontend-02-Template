- 主要盒模型影响的属性是：margin padding border和box sizing
- CSS选择器选中的是元素， 在排版和渲染时可能产生多个盒

- inline-block 的基线随着里面的文字变化

- 小技巧：用一个div画一条中心线
- 不同的vertical-align对行高度的影响很多   

- float：往某个方向去挤，然后根据宽度再进行调整，会影响生成行盒的尺寸，在float所在高度范围内会影响所有行盒的大小
第二个float，所有元素浮动的位置会受上一个元素的影响，不会堆叠在一起。
加clear属性强制换行 比如clear:left

- 上下堆叠两个带margin的BFC：叠出来高度跟最大margin高度一样，叫margin collapse边距折叠，只会发生在BFC里面，跟IFC flex grid无关

- block-level box：外层BFC的
block box：block container + block-level box  里外都会有BFC
能容纳里面不是特殊display模式的，默认就是正常流

display:run-in根据自己上一个元素来，没什么用

### 创建BFC：
- floats
- absolutely positioned elements
- block containers但不是block box，不是block level的
- block box with overflow other than visible

- 能容纳正常流的盒，默认都会创建BFC，block box里外都是BFC,并且overflow是visible。会发生BFC合并。

### Flex:
- no wrap: 不去下一行
- flex-align: 每个元素上的属性  item-align:外面容器上的属性，用来确定元素具体位置

### CSS动画：
控制表现：
- 控制元素位置和尺寸信息
- 控制绘制和实际渲染信息
- 交互与动画的信息

- 小技巧：定义transition而不是animation的timing-function，这样每两个关键帧之间的timing-function可以不用一样
cubic-bezier.com

### CSS绘制：
- 几何图形：border   box-shadow   border-radius
- 文字： font text-decoration
- 位图： background-image

- data uri + svg （svg变成data uri，需要图片的地方用inline的svg）



分类到layout和render的下一层