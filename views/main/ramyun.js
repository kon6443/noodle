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
            console.log('done.');
            console.log('res', res.message);
            const statusScreen = document.getElementById("status-screen");
            statusScreen.innerHTML = res;
        }, 
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('err:');
            window.alert(jqXHR.responseText);
        }
    });
}

function checkStatus() {
    $.ajax({
        type: "get",
        url: "/ramyun",
        dataType: 'json',
        data: {},
        success: function(res) {
            window.alert(res);
            const statusScreen = document.getElementById("status-screen");
            statusScreen.innerHTML = res;
        }
    });
}

