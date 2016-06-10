var PageIndicator = PageIndicator || {};

PageIndicator.config = {
  indicator: ".page-indicator", 	//default css selector for the page indicator
  menu: ".nav.navbar-nav>li>a",  	//default css selector for the menu items
  fill_width: true					//sets the width of the indicator to the width of the menu item
};


$( window ).load(function() {
    //get page indicator
    var pageindicator = $(PageIndicator.config.indicator).first();
    
    //iterate through the menu items to get the offset
    var offset = 0;
    var cur = window.location.pathname.toUpperCase();
    $(PageIndicator.config.menu).each(function( index, element ) {
        var test = element.pathname.toUpperCase();
        if(cur === test){
            if(PageIndicator.config.fill_width) $(pageindicator).width($(element).innerWidth());
            $(pageindicator).css('margin-left',offset+'px');
        } else {
            offset += $(element).innerWidth();
        }
    });
});
