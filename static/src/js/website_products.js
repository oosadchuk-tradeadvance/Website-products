var $template = $(".template");

var hash = 2;

$(".btn-add-panel").on("click", function () {

    var $newPanel = $template.clone();
    $newPanel.find(".collapse").removeClass("in");
    $newPanel.find(".accordion-toggle").attr("href",  "#" + (++hash))
             .text("Dynamic panel #" + hash);
    $newPanel.find(".panel-collapse").attr("id", hash).addClass("collapse").removeClass("in");
    $("#accordion1").append($newPanel.fadeIn());
});

