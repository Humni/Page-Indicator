var PageIndicator = PageIndicator || {};

PageIndicator.config = {
  indicator: ".page-indicator", //default css selector for the page indicator
  menu: ".nav.navbar-nav>li>a"  //efault css selector for the menu items
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
            $(pageindicator).width($(element).innerWidth());
            $(pageindicator).css('margin-left',offset+'px');
        } else {
            offset += $(element).innerWidth();
        }
    });
});
