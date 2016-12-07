function searchAll(show, returnid) {
    $("body").css("overflow", "hidden");
    var width = $(document).width();
    var height = $(document).height();
    var sqltxt  = "";
    var fields  = [];
    var keyno   = "";
    var data    = [];
    var datafields = [];
    var source  = {
        localdata: data,
        datatype: 'json',
        datafields: datafields
    };
    var gridDataAdapter = new $.jqx.dataAdapter(source);

    //ตรวจสอบว่าจะค้นหาข้อมูลอะไร พร้อมระบุ Field ที่จะแสดง
    if (show === "invlocat") {
        datafields = [
            { name: 'LOCATCD', type: 'string' },
            { name: 'LOCATNM', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสาขา', datafield: 'LOCATCD', minwidth: 100,width: 250 },
            { text: 'ชื่อสาขา', datafield: 'LOCATNM', minwidth: 200, width: 250 },
        ];
        keyno = 'LOCATCD';
    }
    else if (show === "setgroup") {
        datafields = [
            { name: 'GCODE', type: 'string' },
            { name: 'GDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสกลุ่มสินค้า', datafield: 'GCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'GDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'GCODE';
    }
    else if (show === "settype") {
        datafields = [
            { name: 'TYPECOD', type: 'string' },
            { name: 'TYPEDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสยี่ห้อสินค้า', datafield: 'TYPECOD', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'TYPEDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'TYPECOD';
    }
    else if (show === "setmodel") {
        datafields = [
            { name: 'MODELCOD', type: 'string' },
            { name: 'MODELDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสรุ่นสินค้า', datafield: 'MODELCOD', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'MODELDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'MODELCOD';
    }
    else if (show === "setbaab") {
        datafields = [
            { name: 'BAABCOD', type: 'string' },
            { name: 'BAABDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสแบบสินค้า', datafield: 'BAABCOD', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'BAABDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'BAABCOD';
    }
    else if (show === "setcolor") {
        datafields = [
            { name: 'COLORCOD', type: 'string' },
            { name: 'COLORDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสีสินค้า', datafield: 'COLORCOD', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'COLORDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'COLORCOD';
    }
    else if (show === "invparking") {
        datafields = [
            { name: 'LOCATPARK', type: 'string' },
            { name: 'LOCATPARKNM', type: 'string' },
            { name: 'LOCATCD', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสถานที่จอด', datafield: 'LOCATPARK', minwidth: 100,width: 250 },
            { text: 'ชื่อสถานที่จอด', datafield: 'LOCATPARKNM', minwidth: 200, width: 250 },
            { text: 'รหัสสาขา', datafield: 'LOCATCD', minwidth: 100,width: 250 },
        ];
        keyno = 'LOCATPARK';
    }
    else if (show === "payfor") {
        datafields = [
            { name: 'FORCODE', type: 'string' },
            { name: 'FORDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสชำระค่า', datafield: 'FORCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'FORDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'FORCODE';
    }
    else if (show === "paytyp") {
        datafields = [
            { name: 'PAYCODE', type: 'string' },
            { name: 'PAYDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสชำระโดย', datafield: 'PAYCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'PAYDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'PAYCODE';
    }
    else if (show === "regflag") {
        datafields = [
            { name: 'REGCODE', type: 'string' },
            { name: 'REGDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสถานะทางทะเบียน', datafield: 'REGCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'REGDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'REGCODE';
    }
    else if (show === "unit") {
        datafields = [
            { name: 'GCODE', type: 'string' },
            { name: 'GDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสหน่วยนับ', datafield: 'GCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'GDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'GCODE';
    }
    else if (show === "optmast") {
        datafields = [
            { name: 'OPTCODE', type: 'string' },
            { name: 'OPTNMTH', type: 'string' },
        ];
        fields = [
            { text: 'รหัสอุปกรณ์', datafield: 'OPTCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'OPTNMTH', minwidth: 200, width: 250 },
        ];
        keyno = 'OPTCODE';
    }
    else if (show === "optmastlocat") {
        datafields = [
            { name: 'LOCAT', type: 'string' },
            { name: 'OPTCODE', type: 'string' },
            { name: 'OPTNMTH', type: 'string' },
        ];
        fields = [
            { text: 'สาขา', datafield: 'LOCAT', minwidth: 100,width: 250 },
            { text: 'รหัสอุปกรณ์', datafield: 'OPTCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'OPTNMTH', minwidth: 200, width: 250 },
        ];
        keyno = 'OPTCODE';
    }
    else if (show === "setmod") {
        datafields = [
            { name: 'OPTCODE', type: 'string' },
            { name: 'OPTNAME', type: 'string' },
        ];
        fields = [
            { text: 'รหัสอุปกรณ์', datafield: 'OPTCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'OPTNAME', minwidth: 200, width: 250 },
        ];
        keyno = 'OPTCODE';
    }
    else if (show === "setfleet") {
        datafields = [
            { name: 'FLEETCOD', type: 'string' },
            { name: 'FLEETNAM', type: 'string' },
        ];
        fields = [
            { text: 'รหัส Fleet', datafield: 'FLEETCOD', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'FLEETNAM', minwidth: 200, width: 250 },
        ];
        keyno = 'FLEETCOD';
    }
    else if (show === "bookingstatus") {
        datafields = [
            { name: 'BOOKINGCODE', type: 'string' },
            { name: 'BOOKINGDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสถานะ', datafield: 'BOOKINGCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'BOOKINGDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'BOOKINGCODE';
    }
    else if (show === "typcont") {
        datafields = [
            { name: 'TYPCODE', type: 'string' },
            { name: 'TYPDESC', type: 'string' },
        ];
        fields = [
            { text: 'รหัสสถานะสัญญา', datafield: 'TYPCODE', minwidth: 100,width: 250 },
            { text: 'คำอธิบาย', datafield: 'TYPDESC', minwidth: 200, width: 250 },
        ];
        keyno = 'TYPCODE';
    }
    fields.unshift({
        text: 'ลำดับ',
        sortable: false,
        filterable: false,
        editable: false,
        groupable: false,
        draggable: false,
        resizable: false,
        align: 'center',
        cellsalign: 'center',
        datafield: '',
        columntype: 'number',
        width: 40,
        exportable: false,
        cellsrenderer: function (row, column, value) {
            return "<div style='margin:4px;'>" + (value + 1) + "</div>";
        },
        aggregates: ['count'],
        aggregatesrenderer: function (aggregates) {
            var renderstring = "";
            $.each(aggregates, function (key, value) {
                renderstring += '<div style="position: relative; margin: 4px; overflow: hidden; font-weight: bold;">' + value + '</div>';
            });
            return renderstring;
        }
    });
    $("#tbSearch").jqxGrid({
        width: width-40,
        height: height-180,
        sortable: true,
        columnsresize: true,
        altrows: true,
        selectionmode: 'singlerow',
        source: gridDataAdapter,
        columns: fields
    });

    $('#okButton').jqxButton({ disabled: true });
    $('#tbSearch').jqxGrid('clearselection');
    $('#search').jqxWindow('open');

    //ฟังก์ชั่น คลิกปุ่มค้นหา และแสดงรายการที่ค้นหาพบ
    $("#searchButton").off().on( "click",function(e) {
        $('#tbSearch').jqxGrid('showloadelement');
        var param1 = $('#searchInput').val().toUpperCase();

        //SQL Statement
        if (show === "invlocat") {
            sqltxt = "SELECT * FROM INVLOCAT WHERE UPPER(LOCATCD||LOCATNM) LIKE '%"+param1+"%' ORDER BY LOCATCD";
        }
        else if (show === "setgroup") {
            sqltxt = "SELECT * FROM SETGROUP WHERE UPPER(GCODE||GDESC) LIKE '%"+param1+"%' ORDER BY GCODE";
        }
        else if (show === "settype") {
            sqltxt = "SELECT * FROM SETTYPE WHERE UPPER(TYPECOD||TYPEDESC) LIKE '%"+param1+"%' ORDER BY TYPECOD";
        }
        else if (show === "setmodel") {
            sqltxt = "SELECT * FROM SETMODEL WHERE UPPER(MODELCOD||MODELDESC) LIKE '%"+param1+"%' ORDER BY MODELCOD";
        }
        else if (show === "setbaab") {
            sqltxt = "SELECT * FROM SETBAAB WHERE UPPER(BAABCOD||BAABDESC) LIKE '%"+param1+"%' ORDER BY BAABCOD";
        }
        else if (show === "setcolor") {
            sqltxt = "SELECT * FROM SETCOLOR WHERE UPPER(COLORCOD||COLORDESC) LIKE '%"+param1+"%' ORDER BY COLORCOD";
        }
        else if (show === "invparking") {
            sqltxt = "SELECT * FROM INVPARKING WHERE UPPER(LOCATPARK||LOCATPARKNM) LIKE '%"+param1+"%' AND LOCATCD = '"+xlocat+"' ORDER BY LOCATPARK";
        }
        else if (show === "payfor") {
            sqltxt = "SELECT * FROM PAYFOR WHERE UPPER(FORCODE||FORDESC) LIKE '%"+param1+"%' ORDER BY FORCODE";
        }
        else if (show === "paytyp") {
            sqltxt = "SELECT * FROM PAYTYP WHERE UPPER(PAYCODE||PAYDESC) LIKE '%"+param1+"%' ORDER BY PAYCODE";
        }
        else if (show === "regflag") {
            sqltxt = "SELECT * FROM REGFLAG WHERE UPPER(REGCODE||REGDESC) LIKE '%"+param1+"%' ORDER BY REGCODE";
        }
        else if (show === "unit") {
            sqltxt = "SELECT * FROM SETGROUP WHERE UPPER(GCODE||GDESC) LIKE '%"+param1+"%' ORDER BY GCODE";
        }
        else if (show === "optmast") {
            sqltxt = "SELECT * FROM OPTMAST WHERE UPPER(OPTCODE||OPTNMTH) LIKE '%"+param1+"%' ORDER BY OPTCODE";
        }
        else if (show === "optmastlocat") {
            sqltxt = "SELECT * FROM OPTMASTLOCAT A LEFT JOIN OPTMAST B ON(A.OPTCODE=B.OPTCODE) WHERE UPPER(A.OPTCODE||B.OPTNMTH) LIKE '%"+param1+"%' ORDER BY A.OPTCODE";
        }
        else if (show === "setmod") {
            sqltxt = "SELECT * FROM SETMOD WHERE UPPER(OPTCODE||OPTNAME) LIKE '%"+param1+"%' ORDER BY OPTCODE";
        }
        else if (show === "setfleet") {
            sqltxt = "SELECT * FROM SETFLEET WHERE UPPER(FLEETCOD||FLEETNAM) LIKE '%"+param1+"%' ORDER BY FLEETCOD";
        }
        else if (show === "bookingstatus") {
            sqltxt = "SELECT * FROM BOOKING_STATUS WHERE UPPER(BOOKINGCODE||BOOKINGDESC) LIKE '%"+param1+"%' ORDER BY BOOKINGCODE";
        }
        else if (show === "typcont") {
            sqltxt = "SELECT * FROM TYPCONT WHERE UPPER(TYPCODE||TYPDESC) LIKE '%"+param1+"%' ORDER BY TYPDESC";
        }

        // Qurey Data
        $.ajax({
            url: "sqltext",
            data: { sql: sqltxt },
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                source.localdata = data;
                $('#tbSearch').jqxGrid('updatebounddata');
                $('#tbSearch').jqxGrid('autoresizecolumns');
                $('#tbSearch').jqxGrid('hideloadelement');
            }
        });
    });

    // Get Value On Click Rows
    $('#tbSearch').on('rowclick', function (event) {
        var args = event.args;
        var rowindex = args.rowindex;
        var data = $('#tbSearch').jqxGrid('getcellvalue', rowindex, keyno);
        $('#okButton').jqxButton({ disabled: false });
        $("#returnvalue").val(data);
    });
    // Click OK
    $('#okButton').off().on('click', function() {
        var id = '#'+returnid;
        $(id).val($("#returnvalue").val());
        $(id).triggerHandler('blur');
        $('#search').jqxWindow('close');
    });
    $('#tbSearch').on('rowdoubleclick', function (event) {
        $('#okButton').click();
    });
    $('#search').on('close', function (event) {
        $('#tbSearch').jqxGrid('clear');
        $("body").css("overflow", "");
    });
}
