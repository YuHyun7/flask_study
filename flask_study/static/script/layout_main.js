$(window).load(function() {
    var content_height = 30 + $("header>h1").height() + $("#left_box").height();
    $("main").height(content_height);
    console.log(content_height);
});