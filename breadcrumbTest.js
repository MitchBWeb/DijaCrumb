$(document).ready(function(){
	/********************************************************
	*				Start by building the crumbs			*
	********************************************************/
	
	// Initialize variables
	var url = 'http://www.dijatek.com/we/are/awesome.php'; // the value of url will equal `location.href` to get current url.
	var crumb = '';
	var crumb_list = '';
	var url_split_array = url.split('/');
	
	// for loop to build crumbs:
	for(var i = 2; i < (url_split_array.length - 1); i++){
		crumb += '<a class="crumb" href="'+ url.substring(0,url.indexOf('/' +url_split_array[i]) + url_split_array[i].length + 1) +'/">'+ url_split_array[i] +'</a> <span class="crumb_seperator"></span> ';
	}
	
	// get the last element in the url and display it as plain text (non hyperlink):
	i = url_split_array.length - 1;
	crumb += '<span class="crumb_current_page">'+url_split_array[i].substr(0, url_split_array[i].indexOf('.')) +'</span>';
	
	crumb_list = crumb;
	
	// write crumbs to screen:
	$('#crumbs').html(crumb_list);
	/**********************************************************
	*			This is the end of building each crumb		  *
	*			and displaying them on the page.		 	  *
	**********************************************************/
	
	

	// START THE BREADCRUMB OPTIONS HERE:
	
	$('#crumbs a, #crumbs span').crumbOptions({
		link:{
			color: 'red'
		},
		hover:{
			color: 'white',
			crumbDecoration: 'none'
		},
		seperator:{
			crumbSeperator: '=='
		}
	});

});