
const db = wx.cloud.database();
const _ = db.command;
Page({

    data: {

    },

    onLoad (options) {

    },

    signIn(e){
        let username = e.detail.value.username
        let password = e.detail.value.password
        let nickname = e.detail.value.nickname

        if (username == '') {
            wx.showToast({
                title: '请输入帐号',
                icon: 'none'
            })
            return
        }
        if (password == '') {
            wx.showToast({
                title: '请输入密码',
                icon: 'none'
            })
            return
        }
        if (nickname == '') {
            wx.showToast({
                title: '请输入诨号',
                icon: 'none'
            })
            return
        }
        console.log(e.detail.value)

        // 判断数据中是否已经存在改帐号
        db.collection('userInformation').where({
            username: _.eq(username)
        }).get({
            success (res) {
                console.log('查询结果')
                console.log(res.data.length)
                if (res.data.length === 1) {
                    wx.showToast({
                        title: '帐号已存在',
                        icon: 'none'
                    })
                    return
                } else{
                    // 注册
                    db.collection('userInformation').add({
                        // data 字段表示需新增的 JSON 数据
                        data: {
                            username: username,
                            password: password,
                            nickname: nickname,
                        },
                        success (res) {
                            wx.showToast({
                                title: '注册成功',
                            })
                            setTimeout(res => {
                                wx.navigateBack();   
                            }, 1500)
                            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                            console.log(res);
                            console.log(res.errMsg);
                        }
                    })
                }
            }
        })

    },

})