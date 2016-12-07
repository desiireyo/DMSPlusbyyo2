function loadMenu() {
    var username = $.session.get('username');
    var mastMenu = [],
        subMenu1 = [],
        subMenu2 = [],
        rpMenu1 = [],
        rpMenu2 = [],
        rpMenu3 = [];
    // Menu Level 1
    $.ajax({
        type: "GET",
        url: "sqltext",
        contentType : "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        data: {sql: "SELECT A.MENUCODE, B.MENUNAME FROM USERMENU A, MAINMENU B WHERE A.MENUCODE = B.MENUCODE AND A.USERID = '"+username+"' AND B.LEVAL = 1 AND ACTIVE = 'Y' AND SYSTEMCOD = 'DMSPlus' AND A.M_ACCESS = 'Y' AND B.MENUCODE NOT LIKE 'RP%' ORDER BY B.SORT"}
    })
    .done(function(data) {
        mastMenu = data;
    });

    var icon = '';
    var htmlMenu = '<ul class="nav sidebar-menu"><li class="sidebar-label pt20">เมนูหลัก</li>';
    for (var i = 0; i < mastMenu.length; i++) {
        var menuCode = mastMenu[i].MENUCODE.trim();
        var menuName = mastMenu[i].MENUNAME.trim();
        switch(menuCode) {
            case "SET000": icon = 'glyphicons glyphicons-imac'; break;
            case "STK000": icon = 'glyphicons glyphicons-car'; break;
            case "SAL000": icon = 'glyphicons glyphicons-shopping_cart'; break;
            case "FIN000": icon = 'glyphicons glyphicons-usd'; break;
            case "AR000": icon = 'glyphicons glyphicons-parents'; break;
            case "TAX000": icon = 'glyphicons glyphicons-wallet'; break;
            case "ADMIN000": icon = 'glyphicons glyphicons-shield'; break;
        }
        htmlMenu += '<li id="'+menuCode+'"><a class="accordion-toggle" href="#"><span class="'+icon+'"></span><span class="sidebar-title">'+menuName+'</span><span class="caret"></span></a>';
        // Menu Level 2
        $.ajax({
            type: "GET",
            url: "sqltext",
            contentType : "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            data: {sql: "SELECT A.MENUCODE, B.MENUNAME FROM USERMENU A, MAINMENU B WHERE A.MENUCODE = B.MENUCODE AND B.MENUGRP = '"+menuCode+"' AND A.USERID = '"+username+"' AND B.LEVAL = 2 AND B.ACTIVE = 'Y' AND B.SYSTEMCOD = 'DMSPlus' AND A.M_ACCESS = 'Y' ORDER BY B.SORT"}
        })
        .done(function(data, status, xhr) {
            subMenu1 = data;
        });
        htmlMenu += '<ul class="nav sub-nav">';
        for (var j = 0; j < subMenu1.length; j++) {
            var subMenu1Code = subMenu1[j].MENUCODE.trim();
            var subMenu1Name = subMenu1[j].MENUNAME.trim();
            // Menu Level 3
            $.ajax({
                type: "GET",
                url: "sqltext",
                contentType : "application/json;charset=utf-8",
                dataType: "json",
                async: false,
                data: {sql: "SELECT A.MENUCODE, B.MENUNAME FROM USERMENU A, MAINMENU B WHERE A.MENUCODE = B.MENUCODE AND B.MENUGRP = '"+subMenu1Code+"' AND A.USERID = '"+username+"' AND B.LEVAL = 3 AND B.ACTIVE = 'Y' AND B.SYSTEMCOD = 'DMSPlus' AND A.M_ACCESS = 'Y' ORDER BY B.SORT"}
            })
            .done(function(data, status, xhr) {
                subMenu2 = data;
            });
            if (subMenu2.length === 0) {
                htmlMenu += '<li id="'+subMenu1Code+'"><a href="#">'+subMenu1Name+'</a>';
            } else {
                htmlMenu += '<li id="'+subMenu1Code+'"><a class="accordion-toggle" href="#">'+subMenu1Name+'<span class="caret"></span></a>';
            }
            htmlMenu += '<ul class="nav sub-nav">';
            for (var k = 0; k < subMenu2.length; k++) {
                var subMenu2Code = subMenu2[k].MENUCODE.trim();
                var subMenu2Name = subMenu2[k].MENUNAME.trim();
                htmlMenu += '<li id="'+subMenu2Code+'"><a href="#">'+subMenu2Name+'</a></li>';
            };
            htmlMenu += '</ul></li>';
        };
        htmlMenu += '</ul></li>';
    };
    htmlMenu += '<li class="sidebar-label pt20">รายงานระบบ</li>';
    // Report Level 1
    $.ajax({
        type: "GET",
        url: "sqltext",
        contentType : "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        data: {sql: "SELECT A.MENUCODE, B.MENUNAME FROM USERMENU A, MAINMENU B WHERE A.MENUCODE = B.MENUCODE AND A.USERID = '"+username+"' AND B.LEVAL = 1 AND ACTIVE = 'Y' AND SYSTEMCOD = 'DMSPlus' AND A.M_ACCESS = 'Y' AND B.MENUCODE LIKE 'RP%' ORDER BY B.SORT"}
    })
    .done(function(data) {
        rpMenu1 = data;
    });
    for (var i = 0; i < rpMenu1.length; i++) {
        var rpMenu1Code = rpMenu1[i].MENUCODE.trim();
        var rpMenu1Name = rpMenu1[i].MENUNAME.trim();
        switch(rpMenu1Code) {
            case "RP1000": icon = 'text-primary'; break;
            case "RP2000": icon = 'text-success'; break;
            case "RP3000": icon = 'text-info'; break;
            case "RP4000": icon = 'text-warning'; break;
            case "RP5000": icon = 'text-danger'; break;
            case "RP6000": icon = 'text-alert'; break;
        }
        // Report Level 2
        $.ajax({
            type: "GET",
            url: "sqltext",
            contentType : "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            data: {sql:  "SELECT A.MENUCODE, B.MENUNAME FROM USERMENU A, MAINMENU B WHERE A.MENUCODE = B.MENUCODE AND B.MENUGRP = '"+rpMenu1Code+"' AND A.USERID = '"+username+"' AND B.LEVAL = 2 AND B.ACTIVE = 'Y' AND B.SYSTEMCOD = 'DMSPlus' AND A.M_ACCESS = 'Y' ORDER BY B.SORT"}
        })
        .done(function(data) {
            rpMenu2 = data;
        });
        htmlMenu += '<li class="sidebar-proj" id="'+rpMenu1Code+'"><a class="accordion-toggle" href="#"><span class="fa fa-print '+icon+'"></span><span class="sidebar-title">'+rpMenu1Name+'</span><span class="caret"></span></a>';
        htmlMenu += '<ul class="nav sub-nav">';
        for (var j = 0; j < rpMenu2.length; j++) {
            var rpMenu2Code = rpMenu2[j].MENUCODE.trim();
            var rpMenu2Name = rpMenu2[j].MENUNAME.trim();
            // Report Level 3
            $.ajax({
                type: "GET",
                url: "sqltext",
                contentType : "application/json;charset=utf-8",
                dataType: "json",
                async: false,
                data: {sql:  "SELECT A.MENUCODE, B.MENUNAME FROM USERMENU A, MAINMENU B WHERE A.MENUCODE = B.MENUCODE AND B.MENUGRP = '"+rpMenu2Code+"' AND A.USERID = '"+username+"' AND B.LEVAL = 3 AND B.ACTIVE = 'Y' AND B.SYSTEMCOD = 'DMSPlus' AND A.M_ACCESS = 'Y' ORDER BY B.SORT"}
            })
            .done(function(data) {
                rpMenu3 = data;
            });
            if (rpMenu3.length === 0) {
                htmlMenu += '<li id="'+rpMenu2Code+'"><a href="#"><span class="glyphicon glyphicon-duplicate"></span>'+rpMenu2Name+'</a>';
            } else {
                htmlMenu += '<li id="'+rpMenu2Code+'"><a class="accordion-toggle" href="#">'+rpMenu2Name+'<span class="caret"></span></a>';
            }
            htmlMenu += '<ul class="nav sub-nav">';
            for (var k = 0; k < rpMenu3.length; k++) {
                var rpMenu3Code = rpMenu3[k].MENUCODE.trim();
                var rpMenu3Name = rpMenu3[k].MENUNAME.trim();
                htmlMenu += '<li id="'+rpMenu3Code+'"><a href="#"><span class="glyphicon glyphicon-duplicate"></span>'+rpMenu3Name+'</a></li>';
            }
            htmlMenu += '</ul></li>';
        };        
        htmlMenu += '</ul></li>';
    }
    htmlMenu += '</ul>';
    //console.log(htmlMenu);
    $('#leftMenu').append(htmlMenu);
}
