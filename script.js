// Hide / Show / Toggle
$('#hide').hide();
$('#show').show();
$('#toggle').toggle();

let disabledButton = $('#attr-btn-div');
disabledButton.on('click', function(evt) {
    disabledButton.addClass('disabled');
});