(function($) {
  $(function() {
    var day = 1000 * 60 * 60 * 24, days = $("#days")
    , sofar = Math.round(Math.abs(+(new Date()-+(new Date(1982, 12, 22))))/day);
    days.html("<div class='centered'><h1>"+sofar+"</div></h1>");
  });
})(jQuery);