/**
 * Created by pc on 2017/7/20.
 */

window.onload = function () {
    //头部js开始
//网易游戏全目录js开始
    var mulu = document.getElementById("catalog-tit");
    var mulubox = mulu.children[1];
    mulu.onmouseover = function () {
        mulubox.style.display = "block";
        animate(mulubox, {"height": 475, "zIndex": 100}, 10)
    }
    mulu.onmouseout = function () {
        animate(mulubox, {"height": 0}, 10, function () {
            mulubox.style.display = "none";
        })
    }

//网易游戏全目录js结束
    //顶部大图显示
    var adv = document.getElementById("adv");
    var advimgs = adv.children[0].children[0];
    var advimgb = adv.children[1];
    advimgs.onmouseover = function () {
        advimgb.style.display = "block";
        advimgb.style.zIndex = 100;
        advimgs.style.display = "none";

    }
    adv.onmouseleave = function () {
        advimgb.style.display = "none";
        advimgs.style.display = "block";
    }
    //顶部大图结束
    //顶部右侧轮播开始
    var topbox = document.getElementById("topbox");
    var topboxul = topbox.children[0];
    var topboxulstep = -topboxul.children[0].offsetHeight;
    var topboxultimer = null;

    function topboxulauto() {
        animate(topboxul, {"top": topboxulstep * 2}, 100)

        if (topboxul.style.top == topboxulstep * 2 + "px") {
            topboxul.style.top = 0;
        }
    }

    topboxultimer = setInterval(topboxulauto, 3000)
    topbox.onmouseover = function () {
        clearInterval(topboxultimer);
    }
    topbox.onmouseout = function () {
        topboxultimer = setInterval(topboxulauto, 3000)

    }

//顶部右侧轮播结束
//导航js开始
    //导航添加背景图片
    var navul = document.getElementById("navul");
    var navlis = navul.children;

    for (var i = 0; i < navlis.length; i++) {
        navlis[i].style.background = "url(images/topmenu_z.png) no-repeat -" + (980 + (i * 130)) + "px -60px";
        var bgc = null;
        navlis[i].index = i;
        navlis[i].onmouseenter = function () {
            for (var j = 0; j < navlis.length; j++) {
                bgc = this.style.background;
            }
            this.style.background = "url(images/topmenu_z.png) no-repeat -" + (980 + (this.index * 130)) + "px -120px";
            var navdropbox = this.children[1];
            navdropbox.style.display = "block";

            var dropulheight = navdropbox.children[0].offsetHeight;
            animate(navdropbox, {"height": dropulheight}, 10)
        }
        navlis[i].onmouseleave = function () {
            this.style.background = bgc;
            this.children[1].style.display = "none";
            this.children[1].style.height = 0;
        }

    }


//导航js结束
    //header部分开始
    //点击视频播放按钮开始播放
    var videoplaymask = document.getElementById("video-playmask");
    var headervideobox = document.getElementById("headervideo-box");

    headervideobox.onclick = function () {
        videoplaymask.style.display = "block";
        videoplaymask.children[0].children[0].src = "images/d441404c-404c-4878-9355-72a13212f462.mp4"
    }
    document.onclick = function (event) {
        if (event.target === videoplaymask) {
            videoplaymask.style.display = "none";
            videoplaymask.children[0].children[0].src = "";
        }
    }
//header部分结束
    //content部分开始
    //contentleft部分
    //给cllist1中的鼠标放上去有动画效果
    var cllist1 = document.getElementById("cllist1");
    var cllist1ul = cllist1.children[0];
    var cllist1is = cllist1ul.children;
    for (var i = 0; i < cllist1is.length; i++) {
        cllist1is[i].onmouseover = function () {
            var cllisa = this.children[0];
            animate(cllisa, {"top": 5}, 50)
        }
        cllist1is[i].onmouseout = function () {
            var cllisa = this.children[0];
            animate(cllisa, {"top": 15}, 50)
        }
    }
    //给cllist2中上半部分鼠标放上去有3d旋转效果
    var cllist2icon1 = document.getElementById("cllist2icon1");
    var cllist2icon2 = document.getElementById("cllist2icon2");
    var cllist2icon3 = document.getElementById("cllist2icon3");

    var cllist2icon1li = cllist2icon1.parentNode.parentNode;
    var cllist2icon2li = cllist2icon2.parentNode.parentNode;
    var cllist2icon3li = cllist2icon3.parentNode.parentNode;
    var flag = true;
    cllist2icon1li.onmouseenter = function () {
        if (flag) {
            flag = false;
            Yautoplay(cllist2icon1, 0);
        }
    };
    cllist2icon2li.onmouseenter = function () {
        if (flag) {
            flag = false;
            Yautoplay(cllist2icon2, 0);
        }
    }
    cllist2icon3li.onmouseenter = function () {
        if (flag) {
            flag = false;
            Yautoplay(cllist2icon3, 0);
        }
    }

    function Yautoplay(ele, target) {
        clearInterval(ele.timer)
        ele.timer = setInterval(function () {
            if (target < 180) {
                target += 5;
                ele.style.transform = "rotateY(" + target + "deg)";
            }
            else if (target === 180) {
                target = 0;
                ele.style.transform = "rotateY(" + target + "deg)";
                clearInterval(ele.timer);
                flag = true;
            }
        }, 15)

    }

    //给cllist2中的鼠标放上去有动画效果
    var cllist2bottom = document.getElementById("cllist2-bottom");
    var cllist2bottomul = cllist2bottom.children[0];
    var cllist2bottomlis = cllist2bottomul.children;
    for (var i = 0; i < cllist2bottomlis.length; i++) {
        cllist2bottomlis[i].onmouseover = function () {
            var cllisa = this.children[0];
            animate(cllisa, {"top": 5}, 50)
        }
        cllist2bottomlis[i].onmouseout = function () {
            var cllisa = this.children[0];
            animate(cllisa, {"top": 15}, 50)
        }
    }

//content 顶部的轮播图开始
    var slidescreen = document.getElementById("slidescreen");
    var slideimgul = slidescreen.children[0];
    var slideimglis = slideimgul.children;
    var slidesquerul = slidescreen.children[1];
    var slidesquerlis = slidesquerul.children;
    var slideimgwidth = slideimgul.children[0].offsetWidth;
    var slidescreentimer = null;
    for (var j = 0; j < slidesquerlis.length; j++) {
        slidesquerlis[j].index = j;
        slidesquerlis[j].onmouseover = function () {
            for (var i = 0; i < slidesquerlis.length; i++) {
                slidesquerlis[i].removeAttribute("class");
            }
            this.className = "current";
            //改变对应的图片的位置
            var target = -this.index * slideimgwidth;
            animate(slideimgul, {"left": target}, 10)
            //选小方块后让轮播的索引跟着记录
            squer = this.index;
            pic = this.index
        }
    }
    var pic = 0;
    //声明一个小方块的索引变量
    var squer = 0;

    function autoPlay() {
        if (pic === slideimglis.length - 1) {
            slideimgul.style.left = 0;
            pic = 0;
        }
        pic++;
        var target = -pic * slideimgwidth
        animate(slideimgul, {"left": target}, 10)
        //切换图片 ol中的方块也进行切换
        if (squer < slidesquerlis.length - 1) {
            squer++;
        }
        else {
            squer = 0;
        }
        for (var i = 0; i < slidesquerlis.length; i++) {
            slidesquerlis[i].removeAttribute("class");
        }
        slidesquerlis[squer].className = "current";
    }

    slidescreentimer = setInterval(autoPlay, 2000);
    slidescreen.onmouseover = function () {
        clearInterval(slidescreentimer);
    }
    slidescreen.onmouseout = function () {
        slidescreentimer = setInterval(autoPlay, 2000)
    }

//content 顶部的轮播图结束
    //content 部分 指南盒子部分开始
    //指南盒子第一个模块中鼠标放上去有动画效果
    //给guideboxleft中的鼠标放上去有动画效果
    var guideboxlist1 = document.getElementById("guideboxlist1");
    var guideboxlist1ul = guideboxlist1.children[1];
    var guideboxlist1lis = guideboxlist1ul.children;

    for (var i = 0; i < guideboxlist1lis.length; i++) {
        guideboxlist1lis[i].onmouseover = function () {
            var gblisa = this.children[0];
            animate(gblisa, {"top": 0}, 50)
        }
        guideboxlist1lis[i].onmouseout = function () {
            var gblisa = this.children[0];
            animate(gblisa, {"top": 10}, 50)
        }
    }

    //guideboxright盒子更换淡入淡出效果
    var guideboxright = document.getElementById("guideboxright");
    guideboxright.onmouseover = function () {
        animate(guideboxright, {"opacity": 0.6}, 10, function () {
            animate(guideboxright, {"opacity": 1}, 10)
        })
    }
    guideboxright.onmouseout = function () {
        animate(guideboxright, {"opacity": 0.6}, 10, function () {
            animate(guideboxright, {"opacity": 1}, 10)
        })
    }


    //content部分  职业盒子部分开始
    //点男女切换男女按钮背景图  并切换大背景
    var racenavbox = document.getElementById("racenavbox");
    var racelistbox = document.getElementById("racelistbox");

    var sexbtn = racelistbox.getElementsByTagName("span");
    var personBac = racelistbox.getElementsByClassName("person");
    for (var i = 0; i < sexbtn.length; i++) {
        sexbtn[i].index = i;
        sexbtn[i].onmouseover = function () {
            for (var j = 0; j < sexbtn.length; j++) {
                setClassName(sexbtn[j], "active", "lost");
                setClassName(personBac[j], "block", "hide")
            }
            setClassName(this, "lost", "active")
            setClassName(personBac[this.index], "hide", "block")
        }

    }
    //鼠标挡在职业导航上选中模块出现样式 并切换到相应的职业页面 并且让对应页面的名字 职业定位滑动到指定位置 雷达opacity逐渐显示
    var racenavlis = racenavbox.children;
    var racelistlis = racelistbox.children[0].children;

    for (var i = 0; i < racenavlis.length; i++) {
        racenavlis[i].index = i;
        racenavlis[i].onmouseenter = function () {
            for (var j = 0; j < racenavlis.length; j++) {
                racenavlis[j].removeAttribute("class");
                setClassName(racelistlis[j], "block", "hide");
            }
            this.className = "racenavcurrent";
            setClassName(racelistlis[this.index], "hide", "block");
            var thisracelisspan = racelistlis[this.index].getElementsByTagName("span");
            thisracelisspan[1].className = "s-woman active";
            thisracelisspan[0].className = "s-man lost";
            var thisracelisper = racelistlis[this.index].getElementsByClassName("person");
            thisracelisper[1].className = "women person block";
            thisracelisper[0].className = "man person hide";
            //获取当前lis职业盒子中的页面名字和职业定位和雷达
            var racename = racelistlis[this.index].children[0];
            var dingwei = racelistlis[this.index].children[1];
            var detail = racelistlis[this.index].children[2];
            var leida = racelistlis[this.index].children[3];
            var personbox = racelistlis[this.index].children[6];
            racename.style.top = "134px";
            racename.style.opacity = 0;
            dingwei.style.top = "192px";
            dingwei.style.opacity = 0;
            detail.style.top = "192px";
            detail.style.opacity = 0;
            leida.style.opacity = 0;
            personbox.style.left = "100px";
            personbox.style.opacity = 0;
            animate(racename, {"top": 62, "opacity": 1}, 10)
            animate(dingwei, {"top": 134, "opacity": 1}, 10)
            animate(detail, {"top": 134, "opacity": 1}, 10)
            animate(leida, {"opacity": 1}, 50)
            animate(personbox, {"left": -25, "opacity": 1}, 10)


        }
    }

    //content部分  职业盒子部分结束
    //content部分中间底部论坛部分开始
    //点击所选手风琴动画切换盒子
    var memberbox = document.getElementById("memberbox");
    var memberdivlists = memberbox.getElementsByClassName("memberboxlist");

    for (var i = 0; i < memberdivlists.length; i++) {
        memberdivlists[i].onclick = function () {
            for (var j = 0; j < memberdivlists.length; j++) {
                animate(memberdivlists[j], {"width": 100}, 10)
                setClassName(memberdivlists[j], "current", "lost")
            }

            animate(this, {"width": 500}, 10);
            setClassName(this, "lost", "current")

        }
    }


    //content部分中间底部论坛部分结束
    //content 右侧开始
    //content 右侧新闻盒子开始
    var newsboxnav = document.getElementById("newsboxnav");
    var newsboxnavlis = newsboxnav.children[0].children;

    var newsboxlistbox = document.getElementById("newsboxlistbox");
    for (var i = 0; i < newsboxnavlis.length; i++) {
        newsboxnavlis[i].index = i;
        newsboxnavlis[i].onmouseover = function () {
            for (var j = 0; j < newsboxnavlis.length; j++) {
                newsboxnavlis[j].removeAttribute("class");
            }
            this.className = "current";
            var target = -this.index * 320;
            animate(newsboxlistbox, {"left": target}, 10)
        }
    }

    //content 右侧新闻盒子结束


//content 右侧结束
    //content部分结束


}