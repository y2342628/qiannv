/**
 * Created by pc on 2017/7/25.
 */
/**
 * 7.25 content右侧精彩视频开始用jQuery写特效
 */

$(function () {
    //header部分开始
    //header部分视频按钮放大缩小效果开始
    function videobtnauto() {
        $("#videobtn").animate({"width": 80, "height": 80, "margin-top": -40, "margin-left": -40}, 1000, function () {
            $(this).animate({"width": 66, "height": 66, "margin-top": -33, "margin-left": -33}, 1000)
        })
    }

    setInterval(videobtnauto, 2000)
    //header部分视频按钮放大缩小效果开始
    //header部分结束

    //content部分开始
    //content部分右侧视频部分开始
    //点击视频导航切换播放的小动画和抬头内容
    $(".contentvideonav>ul>li").click(function () {
        if ($(this).hasClass("active")) {
            return;
        }
        $(this).addClass("active").siblings().removeClass();
        $(".contentvideo>video").attr({"src": $(this).attr("mp4"), "mp4": $(this).attr("dizhi")})
    })
//点击播放按钮 大盒子播放对应的视频
    $(".contentvideobtn").click(function () {
        $("#video-playmask").css("display", "block")
        var bMp4dizhi = "images/" + $(".contentvideo>video").attr("mp4");

        $("#video-playmask>.video-playbox>video").attr("src", bMp4dizhi)
    });


    //让按钮盒子自动扩大缩小


    function videobtn2auto() {
        $("#contentvideobtn").animate({
            "width": 160,
            "height": 100,
            "margin-left": -80,
            "margin-top": -15
        }, 1000, function () {
            $(this).animate({"width": 100, "height": 70, "margin-left": -50, "margin-top": 2}, 1000)
        })
    }

    setInterval(videobtn2auto, 2000)

    //content部分右侧视频部分结束
    //content部分职业争霸赛
    //鼠标移动上去图片放大
    $(".zhengbasaibox>div").mouseenter(function () {
        $(this).stop().animate({"width": 380, "height": 100}, 300, function () {
            $(this).stop().animate({"width": 360, "height": 80}, 300)
        })
    })

    //content部分 真人秀旋转木马
    var config = [
        {
            "width": 72,
            "top": 10,
            "left": 20,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 102,
            "top": 30,
            "left": 50,
            "opacity": 0.6,
            "zIndex": 3
        },//1
        {
            "width": 132,
            "top": 50,
            "left": 120,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 102,
            top: 30,
            left: 185,
            opacity: 0.6,
            zIndex: 3
        },//3
        {
            "width": 72,
            "top": 10,
            "left": 210,
            "opacity": 0.2,
            "zIndex": 2
        }
    ]

    for (var i = 0; i < config.length; i++) {
        var listyle = config[i];
        $(".activityboxbottom>ul>li:eq(" + i + ")").animate(listyle, 300)
    }

    function configauto() {
        config.push(config.shift());
        for (var i = 0; i < config.length; i++) {
            var listyle = config[i];
            $(".activityboxbottom>ul>li:eq(" + i + ")").animate(listyle, 300)
        }
    }

    var activitytimer = null;
    activitytimer = setInterval(configauto, 2000);
    $(".activitybox").mouseover(function () {
        clearInterval(activitytimer);
    })
    $(".activitybox").mouseout(function () {
        clearInterval(activitytimer);
        activitytimer = setInterval(configauto, 2000)
    })


    //content部分结束
    //狐狸部分开始

    $(".tonglan-wrapfa").animate({"width":1349},800)
    //关闭按钮的特效  鼠标放上去旋转  点击以动画形式关闭当前通栏
    var closetimer=null;
    var rotat=0;
    function closeauto(){
    clearInterval(closetimer);
        closetimer=  setInterval(function(){
            rotat+=2;
           if(rotat>=180){
               rotat=0;
               clearInterval(closetimer);
           }
            $(".tonglan-wrapclose").css("transform"," rotate("+rotat+"deg)")
        },2)
    }

    $(".tonglan-wrapclose").mouseover(function(){
        closeauto();
    }).click(function(){
        $(this).parent().parent().animate({"width":0},800);
        $(".tonglan-fox").stop().hide();
        $(".dongfox").css("display","block");
        foxtimer=setInterval(foxa,60);
    })



    //会动的狐狸
    var foxtopindex=0;
    var foxtimer=null;
    function foxa(){
        foxtopindex++;
        var foxtop=-foxtopindex*380+"px";
        if(foxtopindex==42){
            foxtopindex=0;
        }
        $(".dongfox").css("background-position","0px "+foxtop)
    }


    $(".dongfox").click(function(){
        $(".tonglan-wrapfa").animate({"width":1349},800,function(){
            $(".tonglan-fox").stop().show();
            $(".dongfox").css("display","none");
            clearInterval(foxtimer);
        })
    })


    //狐狸部分结束
    //侧边栏特效开始
    //点关闭按钮隐藏侧边栏
    $(".slidebarclose").click(function(){
        if( $(this).find("span").text()=="收起"){
            $(this).parent().animate({"width":37},300)
            $(this).find("span").text("展开");
            $(this).find("i").css("background-position","-1494px -617px")
        }
        else{
            $(this).parent().animate({"width":187},300)
            $(this).find("span").text("收起");
            $(this).find("i").css("background-position","-1494px -600px")
        }

    })
    //切换微信号和电影
    $(".codetitle").mouseenter(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    })
//li中鼠标进入图标往上跳动
    $(".slide-iconsbox>ul>li").mouseenter(function(){
        $(this).find("i").animate({"top":-30},100,function(){
            $(this).css({"top":38,"opacity":0})
           $(this).animate({"top":18,"opacity":1},200);
        })
    })


    //侧边栏特效结束





})



