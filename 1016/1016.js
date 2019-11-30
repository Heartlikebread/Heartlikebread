
function Check_daidai_Ans(ans) {
    var txtdaidai = document.getElementById('txtdaidai');
    var divdaidai = document.getElementById('divdaidai');
    if (ans == "廖心如") {
        $("#divdaidai").hide();
        $("#divHandsome").show();

    }
    else {
        $("#divdaidai").show();
    }
}

function Check_Handsome_Ans(ans) {
    if (ans == "柯彥廷") {
        $("#divHandsome").hide();
        $("#divFirstHoldingHands").show();
    }
    else {
        $("#divHandsome").show();
    }
}
function Check_FirstHoldingHands_Ans(ans) {
    if (ans == "公園") {
        $("#divFirstHoldingHands").hide();
        $("#alertPlace1").show();
        $("#divFirstQuestion").show();
        $("#alertPlace4").hide();
    }
    else {
        $("#alertPlace4").show();
    }
}
function FirstQuestionYES() {
    $("#divFirstQuestion").hide();
    $("#alertPlace1").hide();
    $("#alertPlace2").hide();
    $("#divSecondQuestion").show();
}
function FirstQuestionNO() {
    $("#alertPlace2").show();
}
function SecondQuestionYES() {
    $("#divSecondQuestion").hide();
    $("#alertPlace2").hide();
    $("#divThirdQuestion").show();
}
function SecondQuestionNO() {
    $("#alertPlace2").show();
}
function ThirdQuestioYES() {
    $("#divShowVideo").show();
    $("#divThirdQuestion").hide();
    typing();

}
function ThirdQuestioNO() {

}
function typing() {

}

var str = '呆呆，三週年了! 雖然我不太說肉麻的話，不過很感謝你的貼心，每天到家很累了還要聽我的嘮叨，述說的今天遇到什麼很煩的事情，但是你每次一句話就把我給拉出來(呆:對你來說不算什麼的，你這麼厲害><哈)，暗爽很多點呢!!!兩個人在一起真的不容易，畢業後遇到現實層面的問題也一一浮現，遠距離的相愛，常常會因為訊息接收晚了或者放假一個人獨處等等，難免會有一些孤獨感，但是換個方式想的話~趁現在好好享受一個人的時光囉!因為我們還沒同居所以還有很多小地方都還沒磨合，兩個人要一起面對的問題還很多，但我相信我們未來的挑戰能夠再一起度過的。                by笨笨';
    var i = 0;
    function typing() {
        var divTyping = document.getElementById('divTyping');
        if (i <= str.length) {
            divTyping.innerHTML = str.slice(0, i++) + '_';
            setTimeout('typing()', 200);//遞歸調用
        }
        else {
            divTyping.innerHTML = str;//結束打字,移除 _ 光標
        }
    }
