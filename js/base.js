/**
 * 封装 Byself
 */


///**
// * 获取文本兼容性写法
// * @param ele
// * @returns {*}
// */
//function textInner(element) {
//    if (typeof element.innerText == "string") {
//        return element.innerText;
//    }
//    else {
//        return element.textContent;
//    }
//}
//
///**
// * 设置文本兼容性写法 （所有浏览器都支持）
// * @param ele
// * @param content
// */
//function setInnerText(element, content) {
//    if (typeof element.innerText === "string") {
//        element.innerText = content;
//    }
//    else {
//        element.textContent = content;
//    }
//}
//
///**
// * 获取下一个兄弟元素的IE 6 7 8兼容性处理
// * @param element
// * @returns {*}
// */
//
//function getNextElement(element) {
//    if (element.nextElementSibling) {
//        return element.nextElementSibling
//    }
//    else {
//        var next = element.nextSibling;
//        while (next && next.nodeType !== 1) {
//            next = next.nextSibling;
//        }
//        return next;
//    }
//}
//
///**
// * 获取上一个兄弟元素的IE 6 7 8兼容性处理
// * @param element
// * @returns {*}
// */
//function getPreviousElement(element) {
//    if (element.previousElementSibling) {
//        return element.previousElementSibling
//    }
//    else {
//        var prev = element.previousSibling;
//        while (prev && prev.nodeType !== 1) {
//            prev = prev.previousSibling;
//        }
//        return prev;
//    }
//}
//
///**
// * 第一个子元素的兼容性处理
// * @param element
// * @returns {*}
// */
//function getFirstElement(element) {
//    if (element.firstElementChild) {
//        return element.firstElementChild;
//    }
//    else {
//        var node = element.firstChild;
//        while (node && node.nodeType !== 1) {
//            node = node.nextSibling;
//        }
//        return node;
//    }
//}
///**
// * 最后一个子元素的兼容性处理
// * @param element
// * @returns {*}
// */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    }
    else {
        var node = element.lastChild;
        while (node && node.nodeType !== 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
///**
// * 通过classname获取标签  IE6 7 8 兼容性写法
// * @param element
// * @param className
// * @returns {NodeList}
// */
function getElementClassName(element, className) {
    //如果有获取类名方法
    //直接使用
    if (element.getElementsByClassName(className)) {
        return element.getElementsByClassName(className);
    }
    //如果没有  进入下面判断
    else {
        //命名一个空数组
        var filitArr = [];
        //先获取元素下面所有的标签
        var biaoqians = element.getElementsByTagName("*");
        //遍历获取到的所有标签的数组
        for (var i = 0; i < biaoqians.length; i++) {
            //把每个标签的类名用空格进行分割
            var ClassNameArr = biaoqians[i].className.split(" ");
            //遍历分割后的类名数组
            for (var j = 0; j < ClassNameArr.length; j++) {
                //判断 如果类名输入中的某一项等于所要找的类名
                if (ClassNameArr[j] === className) {
                    //则把此标签放入到数组
                    filitArr.push(biaoqians[i]);
                    break;
                }
            }
        }
        //返回得到的数组
        return filitArr;
    }
}
///**
// * 替换元素类名
// * @param element
// * @param oldStr
// * @param newStr
// */
function setClassName(element, oldStr, newStr) {
    var nameARR = element.className.split(" ");
    for (var i = 0; i < nameARR.length; i++) {
        if (nameARR[i] === oldStr) {
            nameARR[i] = newStr;
        }
    }
    element.className = nameARR.join(" ");
}
//
///**
// * 封装获取页面被卷去的头部高度和左侧宽度的 兼容函数
// * @returns {{top: (Number|number), left: (Number|number)}}
// */
function getScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
///**
// * 封装获取页面可视化区域的宽度和高度的兼容函数
// * @returns {{width: (Number|number), height: (Number|number)}}
// */
function getClient() {
    return {width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
    }

}

/**
 * 封装 能够让 任意对象 的指定属性 变到指定值 的动画函数
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj, json,stp,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//特殊处理
                //var leader = parseInt(getStyle(obj, k)) || 0;
                var leader = getStyle(obj, k) * 100;//1
                // 0 || 1 结果是1 那么如果透明度当前的值是0 就会变成1
                //所以这里不能给默认值 而且也没有必要
                //透明度没有单位px 所以也不用parseInt 参与运算自动变为数字
                var target = json[k] * 100;//0.5
                var step = (target - leader) / stp;//0.5-1=-0.5
                step = step > 0 ? Math.ceil(step) : Math.floor(step);//-1
                leader = leader + step;
                //obj.style[k] = leader + "px";
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//无需渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / stp;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader !== target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {//如果有才调用
                fn();//动画执行完成后执行
            }
        }
    }, 15);
}


/**
 * // 封装兼容性获取计算后的样式
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    }
    else {
        return obj.currentStyle[attr];
    }
}

/**
 * 获取事件对象的兼容性写法  兼容ie 6 7 8
 * @param evt
 */
//document.onclick = function (event) {
//    //console.log(event);//主流浏览器
//    var event=event||window.event;
//    var pageX=event.pageX||event.clientX+document.documentElement.scrollLeft;
//    var pageY=event.pageY||event.clientY+document.documentElement.scrollTop;
//
//};








/**
 * Created by pc on 2017/7/8.
 */





