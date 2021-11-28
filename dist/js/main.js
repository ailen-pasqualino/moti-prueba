//CALENDARIO
//Links de semana y mes
var calendarWeek = $("#week");
var calendarMonth = $("#month");


//Selección botón mes
calendarMonth.click(function(){
    $(this).addClass("active");
    $(this).attr("aria-pressed","true");

    calendarWeek.removeClass("active");
    calendarWeek.removeAttr("aria-pressed");

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
    $(this).attr("aria-pressed","true");

    calendarMonth.removeClass("active");
    calendarMonth.removeAttr("aria-pressed");

    $("#calendar-month").attr("aria-hidden","true");
    $("#calendar-month").addClass("d-none");

    $("#calendar-week").removeClass("d-none");
    $("#calendar-week").removeAttr("aria-hidden");
    
    $(".current-list, #emotions-log").removeClass("d-none");
    $(".current-list, #emotions-log").addClass("d-block");
});


//Selección días en calendario semanal
$(".calendar-week-day").click(function(){
    var daySpan = $(this).children();

    if( daySpan.length == 2 ){

        $(".other-list").removeClass("d-none");
        $(".other-list").addClass("d-block");
        $(".current-list").addClass("d-none");

    } else {

        $(".current-list").removeClass("d-none");
        $(".current-list").addClass("d-block");
        $(".other-list").removeClass("d-block");
        $(".other-list").addClass("d-none");

    }
});


//PASO REMEINDER
$("#yes").click(function(){
    $("#reminder-time").removeClass("d-none");
    $("#reminder-time").addClass("d-block");
    $("#reminderTime").focus();
});

$("#no").click(function(){
    $("#reminder-time").removeClass("d-block");
    $("#reminder-time").addClass("d-none");
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