$(function () {
    $("#container").fullpage({
        sectionsColor: ["", "", "", "", "", "", ""],
        //#84a2d4 #ffeedd
        verticalCentered: false,
        //留一定空间放置导航栏
        paddingTop: "80px",
        css3:true,
        // scrollingSpeed:400,
        // scrollBar:true,
        anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage',"fifthPage","sixthPage"],
        menu: "#myNav",
        scrollOverflow:true,
        slidesNavigation: true,
        loopHorizontal: true,
        // scrollBar:true,
        //插件初始化之后
        afterRender:function(link,index){
            // var order = 0;  //order变量用于图片的计数
            // var change = setInterval(function(){
            // order++;
            // if(order == $(".screen1").length){
            // order = 0;}
            // show(order);
            // },3000);
            // function show(order){
            // $(".screen1").eq(order - 1).fadeOut(600); //将上一张图片隐藏
            // $(".screen1").eq(order).fadeIn(600); //将这张图片出现
            // }

        },
    //     afterLoad:function (anchorLink,index) {
    //         $("#myNav li").removeClass("active");
    //         $("#myNav li").eq(index-1).addClass("active");
    //     }
        afterLoad:function(anchorLink,index){
            if (index!=1){
                $(".csy_nav").addClass("leaved");
            } else {
                $(".csy_nav").removeClass("leaved");
            }
            $('.section').eq(index-1).addClass('now');
        },

        // afterResize:function () {
        //     // $(window).location.reload();
        // },

        // onLeave:function (index,nextIndex,direction) {
        //     if (index==1){
        //         // var opacity=1;
        //         // $(".csy_nav").style.background = 'rgba(70,130,180' + opacity + ')';
        //         console.log(11);
        //         $(".csy_nav").addClass("leaved");
        //     }
        // }
    });
    // $(window).scroll(function () {
    //     if ($(this).scrollTop>$(".screen1").height()){
    //         console.log(222);
    //     }
    // });
    
    // function setScroll(){
    //     $.fn.fullpage.reBuild();
    //     $(".screen2").slimScroll({
    //         height: $(".screen2 .container").height(),
    //         alwaysVisible: true,
    //         opacity:1,
    //         size:"6px",
    //     });
    // }
    // setScroll();
    // $(window).on("resize",setScroll);

});