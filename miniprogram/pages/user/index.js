Page({
    data: {
        avatarUrl: '../../images/user-unlogin.png',
        nickName: ''
    },

    onLoad(options) {
        let that = this
        wx.getStorage({
            key: 'userInfo',
            success(res) {
                that.setData({
                    avatarUrl: res.data.avatarUrl,
                    nickName: res.data.nickName
                })
            },
        })
    },


    onGetUserInfo(e) {
        if (!this.logged && e.detail.userInfo) {
            wx.setStorageSync('userInfo', e.detail.userInfo)
            this.setData({
                logged: true,
                avatarUrl: e.detail.userInfo.avatarUrl,
                nickName: e.detail.userInfo.nickName,
                userInfo: e.detail.userInfo
            })
        }
    },


    // 页面跳转
    jumps(e) {
        let url = e.currentTarget.dataset.url
        wx.navigateTo({
            url: url,
        })
    },
})