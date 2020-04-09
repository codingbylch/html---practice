// vue 中如何实现响应式:
//1. 什么是响应式：修改data属性以后，vue能立刻监听到
//2. 利用Object.defineProperty 设置set和get，在里面监听。

let obj = {
    name: 'lch',
    age: 17
}

Object.defineProperty(obj, 'name', {
    get: function () {
        console.log('get')
        return name
    },

    set: function (newVal) {
        console.log('set')
        name = newVal
    }
})


// 模拟实现：
var mv = {}  //将 data 的属性代理到 vm上 
var data = {
    price: 100,
    name: 'zhangsan'
}

var key, value
for (key in data) {
    (function (key) {
        Object.defineProperty(mv, key, {
            get: function () {
                console.log("get")
                return data[key]
            },
            set: function (newVal) {
                console.log('set')
                data[key] = newVal
            }
        })
    })(key)
}

//vue 中如何解析模板

// VUE的整个实现流程
// 解析模板成render函数
// 模板中用到的 data 中的属性，都变成了 JS 变量
// 模板中的v-model v-for v-on 都变成了 JS 逻辑
// render 函数返回 vnode
//响应式监听
// Object.defineProperty  
//将 data 的属性代理到 vm上  
//首次渲染，显示页面，且绑定依赖
//data属性变化，触发rerender

// 3.    MVVM
// MVVM 由 Model，View，ViewModel三部分构成：

// （1）Model层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；

// （2）View 代表UI组件，它负责将数据模型转化成UI 展现出来；

// （3）ViewModel 是一个同步View 和 Model的对象。


// 请简单实现双向数据绑定mvvm


// <input id="input"/>

const data = {}
const input = document.getElementById('input')
Object.defineProperty(data, 'text', {
    set(value) {
        input.value = value;
        this.value = value;
    }
})

input.onChange = function(a){
    data.text = e.target.value
}



function c (){
    function b(){
        console.log(b.caller) // 返回调用当前函数的函数
    }
    b()
}

function d(){
    console.log(arguments.callee) //返回当前这个函数
}

