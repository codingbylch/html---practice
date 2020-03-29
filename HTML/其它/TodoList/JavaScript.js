/*
 * @Author: your name
 * @Date: 2020-03-11 22:15:58
 * @LastEditTime: 2020-03-14 15:23:08
 * @LastEditors: lch
 * @Description: In User Settings Edit
 * @FilePath: \Paper\Html\JavaScript.js
 */
let
    todo = document.querySelector('#todoText'),
    list = document.querySelector('#list');


function addTodo() {
    if (todo.value !== '') {
        newTodo()
    }
}
function newTodo() {
    // 新增条目
    let p = document.createElement('li')
    p.innerText = todo.value
    // p.disabled = true
    list.appendChild(p)
    // 条目下添加删除按钮
    let delete_button = document.createElement('button')
    delete_button.innerText = '删除'
    p.appendChild(delete_button)
    delete_button.onclick = function () {
        delete_button.parentNode.parentNode.removeChild(delete_button.parentNode)
    }
    todo.value = ''
}

function deleteAll() {
    list.innerText = ''
}

function getkey() {
    if (event.keyCode === 13) {
        addTodo();
    }
}

