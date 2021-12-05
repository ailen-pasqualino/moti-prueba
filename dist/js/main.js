//SCROLL A TODOS LOS INPUTS CON FOCO
$('input,button,a').on('focus',function(){
    var inputHeight=$(this).offset().top;
    var inputPosition = inputHeight - 50;
    $("html, body").animate({ scrollTop: inputPosition}, 300);
    return false;
 });


//CALENDARIO
//Links de semana y mes
var calendarWeek = $("#week");
var calendarMonth = $("#month");

//Selección botón mes
calendarMonth.click(function(){
    $(this).addClass("active");
    $(this).attr("aria-expanded","true");

    calendarWeek.removeClass("active");
    calendarWeek.attr("aria-expanded","false");

    $("#calendar-month").removeClass("d-none");
    $("#calendar-month").addClass("d-block");
    $("#calendar-month").removeAttr("aria-hidden");

    $("#calendar-week").attr("aria-hidden","true");
    $("#calendar-week").addClass("d-none");

    $(".current-list, .other-list, #emotions-log").addClass("d-none");
});


//Selección botón mes
calendarWeek.click(function(){
    $(this).addClass("active");
    $(this).attr("aria-expanded","true");

    calendarMonth.removeClass("active");
    calendarMonth.attr("aria-expanded","false");

    $("#calendar-month").attr("aria-hidden","true");
    $("#calendar-month").addClass("d-none");

    $("#calendar-week").removeClass("d-none");
    $("#calendar-week").removeAttr("aria-hidden");
    
    $(".current-list, #emotions-log").not("#emotions-log-empty").removeClass("d-none");
    $(".current-list, #emotions-log").addClass("d-block");
});


//Selección días en calendario semanal
$(".calendar-week-day").click(function(){
    $(this).each(function(){
        var daySpan = $(this).children();

        if( daySpan.hasClass("challenge-number") ){

            $(".current-list").addClass("d-none");

            $(".other-list").removeClass("d-none");
            $(".other-list").addClass("d-block");

            $(".other-list h2,.current-stats-list h2").focus();

        } else {

            $(".other-list").removeClass("d-block");
            $(".other-list").addClass("d-none");

            $(".current-list").removeClass("d-none");
            $(".current-list").addClass("d-block");

            $(".current-list h2,.current-stats-list h2").focus();
        }
    });
});



//PASO REMINDER
$("#yes").click(function(){
    $("#reminder-time").removeClass("d-none");
    $("#reminder-time").addClass("d-block");
    $("#reminderTime").focus();
});

$("#no").click(function(){
    $("#reminder-time").removeClass("d-block");
    $("#reminder-time").addClass("d-none");
});


//EDICIÓN DE META - REMINDER
$("#add-reminder").change(function(){
    if($(this).prop('checked') == false){
        $(".add-reminder-time").removeClass("d-block");
        $(".add-reminder-time").addClass("d-none");
    } else {
        $(".add-reminder-time").removeClass("d-none");
        $(".add-reminder-time").addClass("d-block");
        $("#challenge-time").focus();
    }
});


//PASO CHECKPOINT
$("#checkpoint .btn-check").change(function(){
    $(this).each(function(){
        if($("#other").prop('checked')){
            $("#chekpoint-time").removeClass("d-none");
            $("#chekpoint-time").addClass("d-block");
        } else {
            $("#chekpoint-time").removeClass("d-block");
            $("#chekpoint-time").addClass("d-none");
        }
    })
});


//PASO FRECUENCIA
//Selección de días (switch)
$('#everyday').on('change', function(){
    $('.day').each(function(){

        if($(this).prop('checked')){
            $(this).removeAttr("checked","true");
            $('#everyday').removeAttr("checked","true");
        }else{

        $(this).attr("checked","true");
        $('#everyday').attr("checked","true");
        }
    });
});


//EDICIÓN DE DESAFÍO
//Selección de días (switch)
var unselectedDays = $('.day').filter(function(){
    return $(this).prop("checked") == false;
});

$('#repeat-everyday').on('change', function(){

    unselectedDays.each(function(){

        if($(this).prop('checked')){
            $(this).removeAttr("checked","true");
            $('#everyday').removeAttr("checked","true");
        }else{

        $(this).attr("checked","true");
        $('#everyday').attr("checked","true");
        }
    });
});