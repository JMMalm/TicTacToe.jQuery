var xTurn = true;

$(document).ready(function () {
	console.log('jQuery has loaded.');

	$('#gameGrid .piece').on('click', function () {
		if ($(this).hasClass('disabled')) {
			return;
		}

		pieceSelected(this);

		$(this).addClass('disabled');
		xTurn = !xTurn;
	});
});

function resetBoard() {
	$('#gameGrid .piece').each(function() {
		$(this).text('-');
		$(this).removeClass('x o disabled');
	});

	xTurn = true;
	$('#gameInfo > span').text('X\'s Turn!');
	$('#gameInfo').removeClass('o');
}

function pieceSelected(boardPiece) {
	if (xTurn) {
		$(boardPiece).addClass('x').text('X');
		$('#gameInfo > span').text('O\'s Turn!');
		$('#gameInfo').addClass('o');
	}
	else {
		$(boardPiece).addClass('o').text('O');
		$('#gameInfo > span').text('X\'s Turn!');
		$('#gameInfo').removeClass('o');
	}
}