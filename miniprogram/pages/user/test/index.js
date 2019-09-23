// pages/Luckydraw/Luckydraw.js
let timer;
let cjIn = false;
let cjChange = 0; //抽奖过程KEY
Page({

    /**
     * 页面的初始数据
     */
    data: {
        prizeList: [
            { id: '001', index: 1, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '一等奖' },
            { id: '002', index: 2, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '二等奖' },
            { id: '003', index: 3, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '三等奖' },
            { id: '004', index: 4, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '四等奖' },
            { id: '005', index: 5, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '五等奖' },
            { id: '006', index: 6, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '六等奖' },
            { id: '007', index: 7, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '七等奖' },
            { id: '008', index: 8, imgsrc: 'https://www.baidu.com/img/bd_logo1.png', prizeName: '谢谢参与' },
        ],

        cjChange: null, //抽奖过程KEY
        prizeResult: null, //抽奖结果KEY
        prizeName: null, //抽奖结果KEY对应的奖品名称

        showAgain: false, //是否抽奖后显示再抽一次按钮

    },






    //抽奖操作
    cj() {
        if (cjIn) {
            return;
        } else {
            cjIn = true;
        }

        let This = this;

        clearInterval(timer);
        timer = setInterval(This.changePrize, 80);



        // test start
        let res = {
            stutus: 1,
            prizeResult: 7,
            prizeName: '奖品名称88888888888888',

        }
        if (res.stutus == 1) {
            setTimeout(function () {
                clearInterval(timer);
                timer = setInterval(This.changePrize, 160);
                setTimeout(function () {
                    clearInterval(timer);
                    timer = setInterval(This.changePrize, 300);

                    setTimeout(function () {
                        This.setData({
                            prizeResult: res.prizeResult,
                            prizeName: res.prizeName,
                        });
                    }, 1000)
                }, 1000)
            }, 2000)
        }
        // test end



    },
    //抽奖过程奖品切换
    changePrize() {
        cjChange++;
        cjChange = cjChange > 8 ? 1 : cjChange;

        let This = this;
        This.setData({
            cjChange: cjChange
        });

        if (This.data.prizeResult == cjChange) {
            clearInterval(timer);
            This.setData({
                showAgain: true
            });
            console.log('获得奖品：' + This.data.prizeName)
        }
    },
    //点击再抽一次按钮
    againBtn() {
        cjIn = false;
        cjChange = 0; //抽奖过程KEY

        let This = this;
        This.setData({
            cjChange: null, //抽奖过程KEY
            prizeResult: null, //抽奖结果KEY
            prizeName: null, //抽奖结果KEY对应的奖品名称
            showAgain: false, //是否抽奖后显示再抽一次按钮
        });
    },
})