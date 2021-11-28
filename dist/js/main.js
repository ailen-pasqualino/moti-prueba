//Links de semana y mes
var calendarWeek = $("#week");
var calendarMonth = $("#month");


console.log(calendarWeek);
console.log(calendarMonth);


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

    $("#challenges, #emotions-log").addClass("d-none");
});

calendarWeek.click(function(){
    $(this).addClass("active");
    $(this).attr("aria-pressed","true");

    calendarMonth.removeClass("active");
    calendarMonth.removeAttr("aria-pressed");

    $("#calendar-month").attr("aria-hidden","true");
    $("#calendar-month").addClass("d-none");

    $("#calendar-week").removeClass("d-none");
    $("#calendar-week").removeAttr("aria-hidden");
    
    $("#challenges, #emotions-log").removeClass("d-none");
    $("#challenges, #emotions-log").addClass("d-block");
});

//PASO RMEINDER
$("#yes").click(function(){
    $("#reminder-time").removeClass("d-none");
    $("#reminder-time").addClass("d-block");
    $("#reminderTime").focus();
});

$("#no").click(function(){
    $("#reminder-time").removeClass("d-block");
    $("#reminder-time").addClass("d-none");
});
