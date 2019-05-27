var isXTurn = true;
var pieceArray;
var placeHolderCharacter = '-';

$(document).ready(function () {
	console.log('jQuery has loaded.');

	$('#gameGrid .piece').on('click', function () {
		if ($(this).hasClass('disabled')) {
			return;
		}

		pieceSelected(this);
		$(this).addClass('disabled');

		pieceArray = $('#gameGrid .piece').map(function() {
			return $.trim($(this).text());
		 }).get();

		var gameWon = isGameWon(pieceArray);
		if (gameWon) {
			$('#gameGrid .piece').addClass('disabled');
			var winnerMessage = 'The game has been won by ' + $(this).text() + '!'
			$('#gameInfo > span').text(winnerMessage);
			alert(winnerMessage);
			$('#resetButton').addClass('btn-primary');
		}
		else {
			updateGameInfo()
		}
		isXTurn = !isXTurn;
	});
});

function resetBoard() {
	$('#resetButton').removeClass('btn-primary');
	$('#gameGrid .piece').each(function() {
		$(this).text(placeHolderCharacter);
		$(this).removeClass('x o disabled');
	});

	isXTurn = true;
	$('#gameInfo > span').text('X\'s Turn!');
	$('#gameInfo').removeClass('o');
}

function pieceSelected(boardPiece) {
	if (isXTurn) {
		$(boardPiece).addClass('x').text('X');
	}
	else {
		$(boardPiece).addClass('o').text('O');
	}
}

function updateGameInfo() {
	if (isXTurn) {
		$('#gameInfo > span').text('O\'s Turn!');
		$('#gameInfo').addClass('o');
	}
	else {
		$('#gameInfo > span').text('X\'s Turn!');
		$('#gameInfo').removeClass('o');
	}
}

function isGameWon(gamePieces) {
	return (
		// Horizontal
		isValidCombination(gamePieces[0], gamePieces[1], gamePieces[2])
		|| isValidCombination(gamePieces[3], gamePieces[4], gamePieces[5])
		|| isValidCombination(gamePieces[6], gamePieces[7], gamePieces[8])
		// Vertical
		|| isValidCombination(gamePieces[0], gamePieces[3], gamePieces[6])
		|| isValidCombination(gamePieces[1], gamePieces[4], gamePieces[7])
		|| isValidCombination(gamePieces[2], gamePieces[5], gamePieces[8])
		// Diagonal
		|| isValidCombination(gamePieces[0], gamePieces[4], gamePieces[8])
		|| isValidCombination(gamePieces[2], gamePieces[4], gamePieces[6])
	);
}

function isValidCombination(piece1, piece2, piece3) {
	return (
		// $.inArray will return -1 if the sought value is not found.
		($.inArray(placeHolderCharacter, [piece1, piece2, piece3]) === -1)
		&& (piece1 === piece2 && piece2 === piece3)
	);
}