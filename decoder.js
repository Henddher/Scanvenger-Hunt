$(document.body).ready(function () {

    var css = 'span.pill { border: 1px solid black; border-radius: 5px; padding: 2px; marging: 10px; }';
    head = document.getElementsByTagName('head')[0];
    style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    }
    else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);

    var $output = $("#jp-output");
    if ($output.length == 0) {
        $output = $("<div id='jp-output'></div>");
        $output.append([
            $("<div class='alert'></div>"),
            $("<p class='pills'></p>")
        ]);
        $output.prependTo($("#content.mw-body"));
    }
    else {
        $output.children("p.pills").empty();
    }

    var MIN = 2;
    var MAX = 5;
    var CM = { " " : " ", true : "-", false : "." };
    var STYLE = { " " : " ", true : "bg-warning", false : "bg-primary" };

    console.log("Hello Juan Pablo");

    var c = [1, 0, 1, -1, 0, 1, 0, -1, 1, 1, 1, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 1, 1, 0, -1, 0, 0, 0, -1, 1, 0, 0, 1, 0, -1, 1, 0, -1, 0, -1, 0, 1, 1, -1, 1, 0, 0, 1, 0, -1, 1, 1, 0, -1, 0, 1, 0, -1, 1, 1, 1, -1, 1, 1, 1, -1, 0, 0, 0, 1, -1, 0, -1, 1, 1, 0, 0, 1, 1, -1, 1, 0, 0, 1, 0, -1, 0, 1, -1, 1, 1, -1, 1, 0, 0, 1, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, -1, 0, 1, 0, -1, 0, 0, -1, 1, 1, 0, -1, 0, 0, 0, 0, -1, 1, -1, 0, 0, 1, 1, 0, 0, -1];

    t = $("p[class!='pill']").text();
    t = t.replace(/\W/g, " ");
    ws = t.split(" ");
    console.log(ws.length, c.length);
    var i = 0;
    var wm = [];
    _.each(ws, function (w) {
        if (i < ws.length) {
            var j = i;
            if (c[i] == -1) {
                wm.push(" ");
                i++;
            }
            else if (c[i] == 0 && w.length == MIN) {
                wm.push(w);
                i++;
            }
            else if (c[i] == 1 && w.length >= MAX) {
                wm.push(w);
                i++;
            }
        }
    });

    console.log(wm.length, c.length);

    var acr = "alert-danger";
    var am = "MESSAGE INCOMPLETE - TRY ANOTHER PAGE";
    if (wm.length == c.length) {
        acr = "alert-success";
        am = "HIDDEN MESSAGE FOUND";
    }
    $output.children(".alert")
        .removeClass("alert-success", "alert-danger").addClass(acr)
        .text(am);

    var $outpills = $output.children("p.pills");

    cc = _.map(wm, function (w) {
        //return w == " " ? CM[w] : CM[w.length >= MAX];
        return w + " ";
    });
    cc = cc.join("");
    console.log(cc);

    _.each(wm, function (w) {
        var s = $("<span class='pill'></span>");
        s.addClass(w == " " ? "" : STYLE[w.length >= MAX]);
        s.text(w + " ");
        if (w == " ") {
            s.html("&nbsp;&nbsp; ");
            s.removeClass("pill");
        }
        $outpills.append(s);
    });
});
