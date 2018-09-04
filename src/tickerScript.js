function initTicker(divwrapperid) {

        var wrapperID = divwrapperid; /* <-- Write the ID for the wrapper div over the UL list*/
        
        var listID = $("#"+wrapperID+" ul").attr("id");
        
        //var listID = "ticker-ul"; /* <-- Write the ID for the UL list*/


        /* TICKER Script */
        var tickerWidth = 0;
        $('#' + listID + ' li').each(function(index) {
            console.log($(this).outerWidth(true));
            tickerWidth += $(this).outerWidth(true);
            console.log(tickerWidth);
        });
        $('#' + listID).width(tickerWidth + 50);

        var leftVal = 0;
        var wrapperWidth = $('#' + wrapperID).width();
        var ulWidth = $('#' + listID).width();

        /*HOVER*/
        var pauseTicker = false;
        $("#" + listID).mouseenter(function() {
            pauseTicker = true;
        });
        $("#" + listID).mouseleave(function() {
            pauseTicker = false;
        });

        setInterval(function() {
            if (!pauseTicker) {
                leftVal += 0.5;
                $('#' + listID).css('left', '-' + leftVal + 'px');
                if ((leftVal + wrapperWidth) > ulWidth) {
                    $('#ticker-ul').css('left', '0px');
                    leftVal = 0;
                }
            };
        }, 10);

    };