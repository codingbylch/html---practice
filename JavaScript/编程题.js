array = [2, 5, 3, 1, 6]

function bubbleSort(array) {
    //冒泡排序, 会修改原数组
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

function quickSort(array) {
    //快速排序
}

function getBytes(str) {
    // 求一个字符串的字节长度
    // 假设：一个英文字符占用一个字节，一个中文字符占用两个字节
    length = str.length
    result = length // 假设都是英文字符
    for (let i = 0; i < length; i++) {
        if (str.charCodeAt(i) > 255) {
            result += 1;
        }
    }
    return result
}

function clone(obj) {
    // 深拷贝的实现, 递归实现
    let buf;
    if (obj instanceof Array) {
        // 若为数组
        buf = [] //创建一个空数组来存
        let i = obj.length
        while (i--) {
            buf[i] = clone(obj[i])
        }
        return buf
    }
    else if (obj instanceof Object) {
        // 若为对象
        buf = {}   // 创建一个空对象来存
        for (let i in obj) {
            buf[i] = clone(obj[i])
        }
        return buf
    }
    else {
        // 基本数据类型
        return (obj)
    }
}

//如何点击每一列的时候alert其index
let lis = document.getElementById('test').getElementsByTagName('li');
for (let i = 0; i < 3; i++) {
    lis[i].index = i;
    lis[i].onclick = function () {
        alert(this.index)
    }
}

function log(...str) {
    // 定义一个log方法，让它可以代理console.log的方法
    console.log(...str)
}

function getToday() {
    // 输出今天的日期
    // 以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26
    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth() + 1
    let date = d.getDate()

    month = month < '10' ? '0' + month : month;
    date = date < '10' ? '0' + date : date;
    return (`${year}-${month}-${date}`)
}

function getRandom(start, end) {
    //用js实现随机选取10–100之间的10个数字，
    // 存入一个数组，并排序
    let list = []
    choice = end - start
    for (let i = 0; i < 10; i++) {
        list.push(Math.random() * choice + start)
    }
    list.sort()
    return list
}

let url = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e'
function serlizeUrl(url) {
    // 写一段JS程序提取URL中的各个GET参数
    // 关键点：split的使用
    let result = {};
    let str = url.split('?')[1];
    let list = str.split('&');
    for (let i = 0; i < list.length; i++) {
        let key = list[i].split('=')[0];
        let value = list[i].split('=')[1];
        result[key] = value
    }
    return result
}

function getSecond() {
    // 实现每隔一秒钟输出1,2,3...数字
    let i = 0
    setInterval(() => {
        console.log(i)
        i += 1
    }, 1000)
}

str = 'aba'
function palindrome(str) {
    // 判断输入是不是回文字符串
    length = str.length
    half = Math.round(length / 2) - 1
    for (let i = 0; i < half; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false
        }
    }
    return true
}

list = [[1, 2, 3], [{ 4: 3 }, '5']]

function listToOne(list) {
    // 二维数组转一维数组
    len1 = list.length
    result = []
    for (let i = 0; i < len1; i++) {
        len2 = list[i].length
        for (let j = 0; j < len2; j++) {
            result.push(list[i][j])
        }
    }
    return result
}

function ajax(type = 'get', url = null) {
    return new Promise(function (resolve, reject) {
        console.log('sss')
        resolve('1')
    })
}

// 模拟实现new

function Pseron(name) {
    this.name = name;
    this.sayname = function () {
        console.log(this.name)
    }
}

function newOperator(ctor) {
    if (typeof ctor !== 'function') {
        throw 'newOperator function the first param must be a function';
    }


    newOperator.target = ctor // ES6 new.target 是指向构造函数
    // 其实关键的就是如何新建一个对象，并完成prototype的指向
    // new、Object.create和Object.setPrototypeOf可以设置__proto__
    var newObj = Object.create(ctor.prototype) //使用了Object.create()函数
    var argsArr = [].slice.call(arguments, 1) // slice的用法
    var ctorReturnResult = ctor.apply(newObj, argsArr) //将参数传入newObj
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function'
    if (isObject || isFunction) {
        return ctorReturnResult;
    }
    return newObj;

}

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayName() {
        console.log(this.name)
    }
}

class student extends Person {
    constructor(name, age, school) {
        super(name, age)
        this.school = school
    }
    saySchool() {
        console.log(this.school)
    }
}

let stu = new student('ch', 18, 'FZU')