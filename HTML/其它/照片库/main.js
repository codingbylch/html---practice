/*
 * @Author: lch
 * @Date: 2020-03-13 20:56:42
 * @LastEditors: lch
 * @LastEditTime: 2020-03-13 21:20:07
 * @Description: file content
 */
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
for (let i = 1; i <= 5; i++) {
    path = 'images/pic' + i + '.jpg ';
    const newImage = document.createElement('img');
    newImage.setAttribute('src', path);
    newImage.addEventListener('click', function (e) {
        let src = e.target.getAttribute('src')
        displayedImage.setAttribute('src', src);
    })
    thumbBar.appendChild(newImage);
}

/* 编写 变亮/变暗 按钮 */
btn.addEventListener('click', function (e) {
    let className = e.target.getAttribute('class');
    if (className === 'dark') {
        e.target.setAttribute('class', 'light');
        e.target.textContent = '变亮';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        e.target.setAttribute('class', 'dark');
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        btn.textContent = '变暗';
    }
})