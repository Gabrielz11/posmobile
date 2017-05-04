$(document).ready(function() {
    $("#contentPage2").hide();
    $("#contentPage3").hide();

    $("#idPage1").click(function () {
        $("#contentPage1").show();
        $("#contentPage2").hide();
        $("#contentPage3").hide();
    });

    $("#idPage2").click(function () {
        $("#contentPage1").hide();
        $("#contentPage2").show();
        $("#contentPage3").hide();
    });

    $("#idPage3").click(function () {
        $("#contentPage1").hide();
        $("#contentPage2").hide();
        $("#contentPage3").show();
    });
});
