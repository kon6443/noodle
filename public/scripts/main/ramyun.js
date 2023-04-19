/**
 * ramyun.js
 */

function requestOrder() {
    $.ajax({
        type: "post",
        url: "/ramyun",
        dataType: 'json',
        data: {},
        success: function(res) {
            const statusScreen = document.getElementById("status-screen");
            statusScreen.innerHTML = res.message;
        }, 
        error: function(jqXHR, textStatus, errorThrown) {
            const statusScreen = document.getElementById("status-screen");
            statusScreen.innerHTML = jqXHR.responseJSON;
        }
    });
}

function checkStatus() {
    $.ajax({
        type: "get",
        url: "/status",
        dataType: 'json',
        data: {},
        success: function(res) {
            const statusScreen = document.getElementById("status-screen");
            statusScreen.innerHTML = res.status;
        }
    });
}

