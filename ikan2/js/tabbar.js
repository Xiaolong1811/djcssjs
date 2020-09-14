var tabbar = [
    		{title:"首页",url:"/"},
    		{title:"自拍",url:"/label/video/"},
    		{title:"影院",url:"/categories/movie/"},
    		{title:"精选",url:"/topic/"},
    		{title:"会员",url:"/user/login/"},
    		];
    $(function(){
    	$("body").append(createTabBar());
        $(".mui-bar-tab a").each(function(index,item){
            $(this).click(function(){
                //切换导航
                $(".mui-bar-tab a").removeClass("mui-active");
                $(this).addClass("mui-active");
                $(".mui-bar-tab a").each(function(index,item){
                    $(item).find("img").attr("src","/static/tabbar/tabbar0"+(index+1)+".png");
                });
                $(this).find("img").attr("src","/static/tabbar/tabbar0"+(index+1)+"_on.png");
            });
        });
       
    });
    
    function createTabBar(){
    	var localUrl = getUrlString();
    	var html = '<nav class="mui-bar mui-bar-tab">';
    		for(var x in tabbar){
    			var index=parseInt(x)+1;
    			if(localUrl==tabbar[x].url || (index==5 && localUrl.indexOf("user")!=-1)){
    				html += '<a class="mui-tab-item mui-active " href="'+tabbar[x].url+'">';
    				html += '<img src="/static/tabbar/tabbar0'+index+'_on.png" height="24px" style="margin-bottom: 5px;" />';
    			}else{
    				html += '<a class="mui-tab-item" href="'+tabbar[x].url+'">';
    				html += '<img src="/static/tabbar/tabbar0'+index+'.png" height="24px" style="margin-bottom: 5px;" />';
    			}
    		
        		html += '<span class="mui-tab-label">'+tabbar[x].title+'</span>';
    			html += '</a>';
    			
    		}
    	html += "<nav>";
    	return html;
    }

    function getUrlString(){
    	return window.location.pathname;
    }