var xTurn = true;

$(document).ready(function () {
	console.log('jQuery has loaded.');

	$('input.piece').on('click', function () {
		if ($(this).hasClass('disabled')) {
			return;
		}

		pieceSelected(this);

		$(this).addClass('disabled');
		xTurn = !xTurn;
	});
});

function resetBoard() {
	$('#gameGrid input.piece').each(function() {
		$(this).val('');
		$(this).removeClass('x o disabled');
	});

	xTurn = true;
	$('#gameInfo > span').text('X\'s Turn!');
	$('#gameInfo').removeClass('o');
}

function pieceSelected(boardPiece) {
	if (xTurn) {
		$(boardPiece).addClass('x').val('X');
		$('#gameInfo > span').text('O\'s Turn!');
		$('#gameInfo').addClass('o');
	}
	else {
		$(boardPiece).addClass('o').val('O');
		$('#gameInfo > span').text('X\'s Turn!');
		$('#gameInfo').removeClass('o');
	}
}