$(()=>{
    //µ¼º½Ð§¹û
    var change = $(".usa");
    var change1 = $(".cannada");
    var change2 = $(".usa-cannada");
    var change3 = $(".dingzhi");
    var list1 = $('.trip-list-1');
    var list2 = $('.trip-list-2');
    var list3 = $('.trip-list-3');
    var list4 = $('.trip-list-4');
    var list5 = $('.trip-list-5');
    var list6 = $('.trip-list-6');
    var list7 = $('.trip-list-7');
    var list8 = $('.trip-list-8');
    for(var val of [list1,list5]){
        val.on('mouseenter',function(){
            list5.show();
            list1.css("background","#fff");
            change.css("color","black");
        });
        val.on('mouseleave',function(){
            list5.hide();
            list1.css("background","");
            change.css("color","#fff");
        });
    }
    for(var val of [list2,list6]){
        val.on('mouseenter',function(){
            list6.show();
            list2.css("background","#fff");
            change1.css("color","black");
        });
        val.on('mouseleave',function(){
            list6.hide();
            list2.css("background","");
            change1.css("color","#fff");
        });
    }
    for(var val of [list3,list7]){
        val.on('mouseenter',function(){
            list7.show();
            list3.css("background","#fff");
            change2.css("color","black");
        });
        val.on('mouseleave',function(){
            list7.hide();
            list3.css("background","");
            change2.css("color","#fff");
        });
    }
    for(var val of [list4,list8]){
        val.on('mouseenter',function(){
            list8.show();
            list4.css("background","#fff");
            change3.css("color","black");
        });
        val.on('mouseleave',function(){
            list8.hide();
            list4.css("background","");
            change3.css("color","#fff");
        });
    }
})