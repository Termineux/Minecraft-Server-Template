$(function() {
    const hash = window.location.hash;
    if (hash.startsWith('#free-rank-code=')) {
        ndznCustomPopup('show', '#ndzn-free-rank');
        $('#ndzn-free-rank input.code').val(hash.split('=')[1]).focus();
        history.replaceState(null, null, ' ');
    }
});