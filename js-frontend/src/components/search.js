$('.book_search').keyup(function () {
    var q = $(this).val();
    $.ajax({
        type: "GET",
        url: "/categories/search",
        dataType: "json",
        data: {
            'keyword': q
        },
        success: function (result) {
            $("#categories").remove();
            $("#cat_search").after('<ul id="categories"></ul>');
            render = true;
            $("#categories").on("click", "li", function () {
                $("#book_category_id").val($(this).data('id'));
                $(".book_search").val($(this).text());
                $("#categories").remove();
            });
            for (term in result) {
                render = false;
                $("#categories").append("<li data-id=" + result[term].id + ">" + result[term].keyword + "</li>");
            }
        }
    })
});