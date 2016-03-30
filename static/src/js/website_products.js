// var $template = $(".template");

// var hash = 2;

// $(".btn-add-panel").on("click", function () {

//     var $newPanel = $template.clone();
//     $newPanel.find(".collapse").removeClass("in");
//     $newPanel.find(".accordion-toggle").attr("href",  "#" + (++hash))
//              .text("Dynamic panel #" + hash);
//     $newPanel.find(".panel-collapse").attr("id", hash).addClass("collapse").removeClass("in");
//     $("#accordion1").append($newPanel.fadeIn());
// });

$(document).ready(function(){
    $(".btn-danger").click(function() {
        // var self = this;
        var session = new openerp.Session();
        var Orders = new openerp.Model(session, "sale.order");

        var id_s = Orders.call('confirm_confirm', [[]]).done(function (results) {
            window.alert("16");
            window.alert(id_s);
        });
    window.alert("32");
    });
});
