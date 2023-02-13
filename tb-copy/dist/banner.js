//获取banner容器元素
const bnBox = document.querySelector('.banner-box img');
//获取banner中的按钮和banner整个元素
const banner = document.querySelector('.banner');
const btn = document.querySelector('.banner .btn');
//获取前后两个按钮
const after = document.querySelector('.before');
const before = document.querySelector('.after');
//获取status状态点,这里是个伪数组
let status = document.querySelectorAll('.status a')
const [li1, li2, li3, li4, li5] = [...status]
const statusAll = [li1, li2, li3, li4, li5];


const imgArr = [
    './img/banner/1.jpg',
    './img/banner/2.jpg',
    './img/banner/3.jpg',
    './img/banner/4.jpg',
    './img/banner/5.jpg',
]
let index = 0;

//默认第一个点亮
statusAll[index].classList.add('select')



//定义一个函数，保存定时器要执行的功能
let update = () => {
    index++

    if (index > imgArr.length - 1) {
        index = 0;
        statusAll[imgArr.length - 1].classList.remove('select');
    } else if (index < imgArr.length) {
        //删除之前的高亮
        statusAll[index - 1].classList.remove('select');
    }

    bnBox.src = imgArr[index];

    //根据当前图片的索引来设置当前第几个点亮起
    statusAll[index].classList.add('select');

}
//默认执行定时器
let timer = setInterval(update, 2000);


//当鼠标移入到banner中btn的透明度为1
banner.onmouseover = () => {
    btn.style.opacity = '1';
    clearInterval(timer)
}
//鼠标移出banner
banner.onmouseout = () => {
    btn.style.opacity = '0';
    timer = setInterval(update, 2000);
}

//点击after后，图片向后
after.onclick = () => {
    index++

    if (index > imgArr.length - 1) {
        index = 0;
        statusAll[imgArr.length - 1].classList.remove('select');
    } else if (index < imgArr.length) {
        //删除之前的高亮
        statusAll[index - 1].classList.remove('select');
    }

    bnBox.src = imgArr[index];

    statusAll[index].classList.add('select');

}

//点击before后，图片向前
before.onclick = () => {
    index--;

    if (index < 0) {
        index = imgArr.length - 1;
        statusAll[0].classList.remove('select');
    } else if (index >= 0) {
        //删除之前的高亮
        statusAll[index + 1].classList.remove('select');
    }

    bnBox.src = imgArr[index];
    statusAll[index].classList.add('select');
}