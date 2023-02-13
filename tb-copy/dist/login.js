
//获取登录按钮和input.value
const loginBtn = document.getElementById('login-btn')


loginBtn.onclick = () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (!username || !password) {
        const error = document.querySelector('#error');
        error.innerHTML = '账号密码不能为空'
    } else {
        //发送post请求
        axios({
            method: 'post',
            url: 'http://localhost:3000/login',
            data: {
                username,
                password
            }
        })
            .then(r => r.data)
            .then(r => {
                const { username, password, name } = r.data;
                console.log(username, password, name);
                //将用户信息存入到本地localstorage
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                localStorage.setItem('name', name);
                //跳转到首页
                window.location.href = './index.html';
            })
            .catch(e => {
                //获取p节点，账号或密码错误
                const error = document.querySelector('#error');
                error.innerHTML = `！账号或密码错误`
                // alert('登录失败')
            })

        //取消表单提交默认行为
        return false
    }


}

