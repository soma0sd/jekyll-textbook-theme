function rem(count){
  let unit = $('html').css('font-size');
  if (typeof count !== 'undefined' && count > 0){
    return (parseInt(unit) * count);
  }else{
    return parseInt(unit);
  }
}


$("#nav-btn-top").click(function(){
  $("html, body").stop().animate(
    {scrollTop: 0}, 300, 'swing');
});
$("#nav-btn-sidebar").click(function(){
  $("nav-overlay").addClass("active");
  $("nav").addClass("active");
});
$("nav-overlay").click(function(){
  $("nav-overlay").removeClass("active");
  $("nav").removeClass("active");
});


var $articleToc = $("ul#markdown-toc");
var $articleTocItems = $articleToc.find("a");
$articleTocItems.click(function(e){
  let href = $(this).attr("href");
  let offsetTop = href === "#" ? 0 : $(href).offset().top;
  $("html, body").stop().animate(
    {scrollTop: offsetTop}, 300, 'swing'
  );
  $articleTocItems.removeClass("active");
  e.preventDefault();
});

var lastIdx;
var scrollItems = $articleTocItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) return item;
    });
$(window).scroll(function(){
  // 문서 목차와 연동하는 스크롤 스파이
  let h1Size = parseInt($("h1").css('font-size'));
  let fromTop = $(this).scrollTop() + h1Size + 10;
  let cursor = scrollItems.map(function(){
    if ($(this).offset().top < fromTop) return this;
  });
  cursor = cursor[cursor.length-1];
  let idx = cursor && cursor.length ? cursor[0].id : "";
  if (lastIdx !== idx){
    lastIdx = idx;
    $articleTocItems.removeClass("active");
    $articleTocItems.filter("[href='#"+idx+"']").addClass("active");
  }
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    $articleTocItems.removeClass("active");
    $articleTocItems.last().addClass("active");
  }
});

$(window).scroll(function(){
  if ($(this).scrollTop() <= 10) {
    $("#nav-btn-top").fadeOut(300);
  } else {
    if (!$("#nav-btn-top").is(':visible')) {
      $("#nav-btn-top").fadeIn(300);
    }
  }
});

var window_view_small =   600;
var window_view_medium =  960;
var window_view_large =  1280;
var window_view_xlarge = 1920;
$(document).ready(function(){
  if ($(window).width() > window_view_small){
    $("#toc-side").append($("#markdown-toc"));
  }
});
