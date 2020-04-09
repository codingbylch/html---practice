//大致原理：通过数据劫持结合发布者-订阅者模式的方法来实现的。
//数据劫持主要通过Object.defineProperty()来实现。对其中get和set方法进行重写。
//通过改写set方法，在里面放置需要更新的方法，当数据改变时就能触发这个方法就行更新view了。
// 实现一个Observer


//原文地址：https://www.cnblogs.com/canfoo/p/6891868.html
//Github源码：https://github.com/jiangzhenfei/simple-Vue
function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach(function (key) { //key即属性名
        defineReactive(data, key, data[key]); //data[key]就是对应的值
    })
}

// function defineReactive(data, key, val) {
//     observe(val); //递归遍历所有属性值
//     Object.defineProperty(data, key, {
//         enumerable: true,
//         configurable: true,
//         get: function () {
//             return val;
//         },
//         set: function (newVal) {
//             val = newVal;
//             console.log(`属性${key}被监听, 值为${newVal}`);
//         }
//     })
// }

let library = {
    book1: {
        name: ''
    },
    book2: ''
}

observe(library);
library.book1.name = 'hello world';

// 实现一个消息订阅器Dep,基于上面的修改：
function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function () {
        this.subs.forEach((sub) => {
            sub.update();
        })
    }
}


function defineReactive(data, key, val) {
    observe(val); //递归遍历所有属性值
    let dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            if (Dep.target) {
                dep.addSub(Dep.target); // 这里添加订阅者
            }
            return val;
        },
        set: function (newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            console.log(`属性${key}被监听, 值为${newVal}`);
            dep.notify(); //数据变化通知所有订阅者
        }
    })
}

// 实现Watcher

function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get(); //将自己添加进订阅器
}

Watcher.prototype = {
    update: function () {
        this.run();
    },
    run: function () {
        let value = this.vm.data[this.exp];
        let oldVal = this.value;
        if (value !== oldVal) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    get:function(){
        Dep.target = this; // 缓存自己
        var value = this.vm.data[this.exp]; //强行执行监听器里的函数
        Dep.target = null;// 释放自己
        return value;
    }
}

//待续