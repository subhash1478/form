$(function () {
    var availableTags = [
        "DENBARKER",
        "DENDY",
        "DENHAM",
    ];
    $("#form, #to").autocomplete({
        source: availableTags
    });
    add();
});
function add() {
    var html = $(".copy").html();
    $(".after-add-more").after(html);
}
function remove() {
    $('.checkbox').each(function (i) {
        if ($(this).prop('checked') === true) {
            $(this).parents(".control-group").remove();
        }
    });
}
