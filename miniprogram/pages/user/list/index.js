
const db = wx.cloud.database();
const _ = db.command;
Page({

    data: {
        items: []
    },

    onLoad(options) {
        this.getList()
    },

    getList() {
        db.collection('userInformation')
        .where({})
        .skip(0) // 跳过结果集中的前 10 条，从第 11 条开始返回
        .limit(10) // 限制返回数量为 10 条
        .get()
        .then(res => {
            console.log(res.data)
            this.setData({
                items: res.data
            })
        })
        .catch(err => {
            console.error(err)
        })
    },

})