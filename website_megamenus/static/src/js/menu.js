$(document).ready(function($) {
	$('#m10_tabs').on('click', '.card-header-tabs a', function(){
		$(this).closest('.dropdown').addClass('dontClose');
	})

	$('li.nav-item.dropdown.position-static').on('hide.bs.dropdown', function(e) {
		if ( $(this).hasClass('dontClose') ){
			e.preventDefault();
		}
		$(this).removeClass('dontClose');
	});
})
