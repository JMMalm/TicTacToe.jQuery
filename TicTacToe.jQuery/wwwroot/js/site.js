var xTurn = true;

$(document).ready(function () {
	console.log('jQuery has loaded.');

	$('input.piece').on('click', function (event) {
		if ($(this).hasClass('disabled')) {
			return;
		}

		if (xTurn) {
			$(this).addClass('x');
			$(this).val('X');
			$('#gameInfo > span').text('O\'s Turn!');
			$('#gameInfo').addClass('o');
		}
		else {
			$(this).addClass('o');
			$(this).val('O');
			$('#gameInfo > span').text('X\'s Turn!');
			$('#gameInfo').removeClass('o');
		}

		$(this).addClass('disabled');
		xTurn = !xTurn;
	});
});