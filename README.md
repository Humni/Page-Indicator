# Page-Indicator
Moves the page indicator to above the menu item which is the current page. Works only with a horizontal menu. 

#Usage
To use the page indicator, import the javascript file and configure it like below.  
*Note: this works best with a Twitter Bootstrap navigation menu*

    <script src="pageindicator.js"></script>
    <!--This will configure the page indicator script -->
    <script>
    	PageIndicator.config.indicator = ".page-indicator";	//default jquery selector for the indicator
    	PageIndicator.config.menu = ".nav.navbar-nav>li>a"; //default jquery selector for the menu items
    </script>
	
The menu jquery selector tag must select the link tag for the menu item. 
This is because it compares the current path to the menu item path and 
then will move the indicator after a match is found.