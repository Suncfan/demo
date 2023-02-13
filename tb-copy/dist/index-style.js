
window.onload = () => {
    //设置往下滚动时，超过搜索栏就会显示出隐藏的搜索栏
    //获取search-two搜索框
    let searchTwo = document.querySelector('.search-two');
    let searchHide = document.querySelector('#search-hide');
    const gotop = document.querySelector('.hide');


    //获取搜索框的位置
    let twoTop = searchTwo.offsetTop;

    //给document设置滚动条事件
    document.onscroll = () => {
        //获取滚动条的距离
        let page = self.pageYOffset;

        //判断滚动条的距离超过twoTop就显示search-hide
        if (page >= twoTop) {
            searchHide.style.top = 0 + 'px';
            gotop.style.display = 'block';
        } else {
            searchHide.style.top = -60 + 'px';
            gotop.style.display = 'none';
        }
    }

    //点击回顶部后，页面往上滑
    gotop.onclick = () => {
        //获取滚动条的距离
        let page = self.pageYOffset;
        if (page > 0) {
            //设置定时器
            window.scrollTo(0, 0);
        }
    }

    //判断本地存储中是否有username
    //有的话则修改#nickname的文字内容改为 你好！name
    const nickname = localStorage.name
    if (localStorage.username) {
        let nickname2 = document.querySelector('#nickname');
        nickname2.innerHTML = `你好！${nickname}`;
        nickname2.href = '#';
    }

    //每过4s，hot-text-box 元素就往上移动20px，移动到80后，则又从0开始
    const hotTextBox = document.querySelector('.hot-text-box');

    //定义速度函数
    setInterval(() => {
        let hotTop = hotTextBox.offsetTop;
        hotTextBox.style.top = hotTop - 20 + 'px';
        if(hotTop <= -60){
            hotTextBox.style.top = 0;
        }
    }, 3000);

}
