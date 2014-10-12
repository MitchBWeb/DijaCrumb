(function($){
	$.fn.crumbOptions = function(options){
	
		var settings = $.extend(true,{
			link:{
				color:'white',
				crumbDecoration: 'underline',
				crumbTransform: '',
				allCaps: false,
				crumbAlign: '',
				crumbSize: ''
			},
			hover:{
				color:'white',
				crumbDecoration: 'underline',
				crumbTransform: '',
				allCaps: false,
				crumbSize: ''
			},
			seperator:{
				crumbSeperator: '>>'
			}
			
		},options);
	
		return this.each(function(){
			if(settings.link.color){
				$(this).css('color',settings.link.color);
			}
			
			if(settings.link.crumbDecoration && $(this).hasClass('crumb')){
				$(this).css('text-decoration', settings.link.crumbDecoration);
			}
			
			if(settings.link.crumbTransform && $(this).hasClass('crumb')){
				$(this).css('text-transform', settings.link.crumbTransform);
			}
			
			if(settings.link.allCaps){
				$(this).text($(this).text().toUpperCase());
			}
			
			if(settings.seperator.crumbSeperator){
				$('.crumb_seperator').text(settings.seperator.crumbSeperator);
			}
			
			$(this).mouseover(function(){
				if(settings.hover.color && $(this).hasClass('crumb')){
					$(this).css('color',settings.hover.color);
				}
				if(settings.hover.crumbDecoration && $(this).hasClass('crumb')){
					$(this).css('text-decoration', settings.hover.crumbDecoration);
				}
			})
			.mouseout(function(){
				if($(this).hasClass('crumb')){
					$(this).css({'color':settings.link.color, 
								 'text-decoration':settings.link.crumbDecoration});
				}
			});
			
			if(settings.link.crumbAlign){
				if(settings.link.crumbAlign == 'right'){
					$('#crumbs').css('text-align','right');
				}
				else if(settings.link.crumbAlign == 'center'){
					$('#crumbs').css('text-align','center');
				}
			}
			
			if(settings.link.crumbSize && !$(this).hasClass('crumb_seperator')){
				$(this).css('font-size', settings.link.crumbSize);
			}
			
		});
		
	};
}(jQuery));