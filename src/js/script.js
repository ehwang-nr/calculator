$(document).ready(function(){
    $('#budget_form').submit(function(){

        var input = $('#budget_value').val();
        $('#budget').append("<h4>" + input + "</h4>");
        
        return false;

    });

    var estimate = 0;


   // $('#loc_count').change(function(){
   //
   //     var count = $('#loc_count').val();
   //     estimate += count * 1200;
   //
   //     $('#estimate').html("<h3>$" + estimate + ".00</h3>");
   //
   // });

    if($('$loc_count').change()){
        var count = $('#loc_count').val();
        estimate += count * 1200;

        $('#estimate').html("<h3>$" + estimate + ".00</h3>");

    }

    if($('#expand_web').val() === 'yes'){
        
            var count = $('#loc_count').val();
            estimate = count * 3588;
            $('#estimate').html("<h3>$" + estimate + ".00</h3>");
        }

    });


    

})