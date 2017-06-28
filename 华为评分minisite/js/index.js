/**
 * Created by admin on 2017/5/17.
 */
console.log(123465)
$(".check_i").on("click",function(){
    $(this).toggleClass("check_i_on");
    $(".input_email").toggleClass("input_email_on");
    if($(this).hasClass("check_i_on")){
        $(".input_email").removeAttr("readonly");
    }
    else{
        $(".input_email").attr("readonly","readonly");
    }
});
$('#function-demo1').raty({
    path      : 'images',
    size      : 38,
    starHalf  : 'star-half-big.png',
    starOff   : 'star-off-big.png',
    starOn    : 'star-on-big.png',
    score: 0,
    cancel    : false,
    targetKeep: true,
    precision : true,
    click: function(score, evt) {
        if(score>0&&score<0.8){
            $(".ping1").text("Poor");
            $(".score1").text(1);
        }
        if(score>=0.8&&score<=1){
            $(".ping1").text("Poor");
            $(".score1").text(2);
        }
        if(score>1&&score<1.8){
            $(".ping1").text("Bad");
            $(".score1").text(3);
        }
        if(score>=1.8&&score<=2){
            $(".ping1").text("Bad");
            $(".score1").text(4);
        }
        if(score>2&&score<2.8){
            $(".ping1").text("Fair");
            $(".score1").text(5);
        }
        if(score>=2.8&&score<=3){
            $(".ping1").text("Fair");
            $(".score1").text(6);
        }
        if(score>3&&score<3.8){
            $(".ping1").text("Good");
            $(".score1").text(7);
        }
        if(score>=3.8&&score<=4){
            $(".ping1").text("Good");
            $(".score1").text(8);
        }
        if(score>4&&score<4.8){
            $(".ping1").text("Excellent");
            $(".score1").text(9);
        }
        if(score>=4.8&&score<=5){
            $(".ping1").text("Excellent");
            $(".score1").text(10);
        }

    },
    mouseover: function(score, evt) {

    }

});
$('#function-demo2').raty({
    path      : 'images',
    size      : 38,
    starHalf  : 'star-half-big.png',
    starOff   : 'star-off-big.png',
    starOn    : 'star-on-big.png',
    score: 0,
    cancel    : false,
    targetKeep: true,
    precision : true,
    click: function(score, evt) {
        if(score>0&&score<0.8){
            $(".ping2").text("Poor");
            $(".score2").text(1);
        }
        if(score>=0.8&&score<=1){
            $(".ping2").text("Poor");
            $(".score2").text(2);
        }
        if(score>1&&score<1.8){
            $(".ping2").text("Bad");
            $(".score2").text(3);
        }
        if(score>=1.8&&score<=2){
            $(".ping2").text("Bad");
            $(".score2").text(4);
        }
        if(score>2&&score<2.8){
            $(".ping2").text("Fair");
            $(".score2").text(5);
        }
        if(score>=2.8&&score<=3){
            $(".ping2").text("Fair");
            $(".score2").text(6);
        }
        if(score>3&&score<3.8){
            $(".ping2").text("Good");
            $(".score2").text(7);
        }
        if(score>=3.8&&score<=4){
            $(".ping2").text("Good");
            $(".score2").text(8);
        }
        if(score>4&&score<4.8){
            $(".ping2").text("Excellent");
            $(".score2").text(9);
        }
        if(score>=4.8&&score<=5){
            $(".ping2").text("Excellent");
            $(".score2").text(10);
        }
    },
    mouseover: function(score, evt) {

    }

});

$('#function-demo3').raty({
    path      : 'images',
    size      : 38,
    starHalf  : 'star-half-big.png',
    starOff   : 'star-off-big.png',
    starOn    : 'star-on-big.png',
    score: 0,
    cancel    : false,
    targetKeep: true,
    precision : true,
    click: function(score, evt) {
        if(score>0&&score<0.8){
            $(".ping3").text("Poor");
            $(".score3").text(1);
        }
        if(score>=0.8&&score<=1){
            $(".ping3").text("Poor");
            $(".score3").text(2);
        }
        if(score>1&&score<1.8){
            $(".ping3").text("Bad");
            $(".score3").text(3);
        }
        if(score>=1.8&&score<=2){
            $(".ping3").text("Bad");
            $(".score3").text(4);
        }
        if(score>2&&score<2.8){
            $(".ping3").text("Fair");
            $(".score3").text(5);
        }
        if(score>=2.8&&score<=3){
            $(".ping3").text("Fair");
            $(".score3").text(6);
        }
        if(score>3&&score<3.8){
            $(".ping3").text("Good");
            $(".score3").text(7);
        }
        if(score>=3.8&&score<=4){
            $(".ping3").text("Good");
            $(".score3").text(8);
        }
        if(score>4&&score<4.8){
            $(".ping3").text("Excellent");
            $(".score3").text(9);
        }
        if(score>=4.8&&score<=5){
            $(".ping3").text("Excellent");
            $(".score3").text(10);
        }
    },
    mouseover: function(score, evt) {

    }

});
$('#function-demo4').raty({
    path      : 'images',
    size      : 38,
    starHalf  : 'star-half-big.png',
    starOff   : 'star-off-big.png',
    starOn    : 'star-on-big.png',
    score: 0,
    cancel    : false,
    targetKeep: true,
    precision : true,
    click: function(score, evt) {
        if(score>0&&score<0.8){
            $(".ping4").text("Poor");
            $(".score4").text(1);
        }
        if(score>=0.8&&score<=1){
            $(".ping4").text("Poor");
            $(".score4").text(2);
        }
        if(score>1&&score<1.8){
            $(".ping4").text("Bad");
            $(".score4").text(3);
        }
        if(score>=1.8&&score<=2){
            $(".ping4").text("Bad");
            $(".score4").text(4);
        }
        if(score>2&&score<2.8){
            $(".ping4").text("Fair");
            $(".score4").text(5);
        }
        if(score>=2.8&&score<=3){
            $(".ping4").text("Fair");
            $(".score4").text(6);
        }
        if(score>3&&score<3.8){
            $(".ping4").text("Good");
            $(".score4").text(7);
        }
        if(score>=3.8&&score<=4){
            $(".ping4").text("Good");
            $(".score4").text(8);
        }
        if(score>4&&score<4.8){
            $(".ping4").text("Excellent");
            $(".score4").text(9);
        }
        if(score>=4.8&&score<=5){
            $(".ping4").text("Excellent");
            $(".score4").text(10);
        }
    },
    mouseover: function(score, evt) {

    }

});
$('#function-demo5').raty({
    path      : 'images',
    size      : 38,
    starHalf  : 'star-half-big.png',
    starOff   : 'star-off-big.png',
    starOn    : 'star-on-big.png',
    score: 0,
    cancel    : false,
    targetKeep: true,
    precision : true,
    click: function(score, evt) {
        if(score>0&&score<0.8){
            $(".ping5").text("Poor");
            $(".score5").text(1);
        }
        if(score>=0.8&&score<=1){
            $(".ping5").text("Poor");
            $(".score5").text(2);
        }
        if(score>1&&score<1.8){
            $(".ping5").text("Bad");
            $(".score5").text(3);
        }
        if(score>=1.8&&score<=2){
            $(".ping5").text("Bad");
            $(".score5").text(4);
        }
        if(score>2&&score<2.8){
            $(".ping5").text("Fair");
            $(".score5").text(5);
        }
        if(score>=2.8&&score<=3){
            $(".ping5").text("Fair");
            $(".score5").text(6);
        }
        if(score>3&&score<3.8){
            $(".ping5").text("Good");
            $(".score5").text(7);
        }
        if(score>=3.8&&score<=4){
            $(".ping5").text("Good");
            $(".score5").text(8);
        }
        if(score>4&&score<4.8){
            $(".ping5").text("Excellent");
            $(".score5").text(9);
        }
        if(score>=4.8&&score<=5){
            $(".ping5").text("Excellent");
            $(".score5").text(10);
        }
    },
    mouseover: function(score, evt) {

    }

});