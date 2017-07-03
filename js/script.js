/**
 * Created by Admin on 11-Nov-16.
 */

$(".progress_bar").each(function(){

    var $bar = $(this).find(".bar");
    var $val = $(this).find(".progress_bar span");
    var perc = parseInt( $val.prevObject[0].innerText, 10);
    $({p:0}).animate({p:perc}, {
        duration: 3000,
        easing: "swing",
        step: function(p) {
            $bar.css({
                transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
                // 45 is to add the needed rotation to have the green borders at the bottom
            });
            $val.text(p|0);
        }
    });
});

// document.getElementById('SearCh').onClick = function (e) {
//     e.stopPropagation();
//     document.getElementById('searchInput').style.display = 'block';
// };

//
// document.onclick = function(e) {
//      if(e.target != document.getElementById('SearCh') && e.target != document.getElementById('searchInput')) {
//         document.getElementById('searchInput').style.display = 'none';
//     } else {
//          document.getElementById('searchInput').style.display = 'block';
//      }
// };


$(function() {
    $( '#dl-menu' ).dlmenu();
});



$(document).ready(function () {
    $(document).on('click', function() {
        $('#searchInput').hide();
    });
    $('.fa-search').click(function(){
        event.stopPropagation();
        $('#searchInput').show();
    });
    $('#searchInput').click(function(){
        event.stopPropagation();
        $('#searchInput').show();
    });
});

