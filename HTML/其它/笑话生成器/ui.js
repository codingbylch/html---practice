/*
 * @Author: lch
 * @Date: 2020-03-13 14:52:18
 * @LastEditors: lch
 * @LastEditTime: 2020-03-13 15:46:45
 * @Description: file content
 */
document.getElementById('cn').onclick = () => {
    document.title = '笑话生成器';
    document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
    document.getElementById('lbl-cn').textContent = '中国';
    document.getElementById('lbl-us').textContent = '美国';
    document.getElementById('lbl-uk').textContent = '英国';
    document.getElementById('customname').placeholder = '李雷';
    document.querySelector('.randomize').textContent = '随机生成笑话';
};

document.getElementById('us').onclick =
    document.getElementById('uk').onclick = () => {
        document.title = 'Silly story generator';
        document.getElementById('lbl-customname').textContent = 'Enter custom name:';
        document.getElementById('lbl-cn').textContent = 'CN';
        document.getElementById('lbl-us').textContent = 'US';
        document.getElementById('lbl-uk').textContent = 'UK';
        document.getElementById('customname').placeholder = 'Bob';
        document.querySelector('.randomize').textContent = 'Generate random story';
    };

let customName = document.querySelector('#lbl-customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomValueFromArray(array) {
    i = Math.floor(Math.random() * array.length);
    return array[i];
}
let storyText = 'this is long string.';
let insertX = ['lili', 'huhu', 'huahua'];
let insertY = ['Y1', 'Y2', 'Y3'];
let insertZ = ['Z1', 'Z2', 'Z3'];

randomize.addEventListener('click', result);

function result() {
    let newStory, xItem, yItem, zItem, name;
    newStory = storyText;
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);
    newStory += xItem + yItem + zItem;
    story.textContent = newStory;
}