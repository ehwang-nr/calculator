$(document).ready(function(){

    var estimate = 0;
    var input = $('#budget_value');
    var budget = 0;

    function compare(a,b){

        if(a < b){
            $('.uk-width-3-10').append('<div class="uk-alert uk-alert-danger" id="over"> This is over your budget!<div class="uk-alert-close uk-close" id="close"></div></div>');
                $('#close').click(function(){
                    $('#over').fadeOut();
            })
        }else{
            $('.uk-alert uk-alert-danger').hide();
        }
    };

    $('#budget_form').submit(function(){

        budget = input.val();
        $('#budget').html("$" + budget + ".00");

        compare(budget, estimate);

        input.val(" ");
        return false;

    });

 //Type of service section

    $('#service_type').change(function() {
        if($('#service_type').val() == "local") {
            $('#local-1').fadeIn('slow');
            $('#national-1').css('display', 'none');

        }
        else if($('#service_type').val() == "national"){
            $('#national-1').fadeIn('slow');
            $('#local-1').css('display', 'none');
            $('#local-2').css('display', 'none');
        }
    })

    $('#local-1').change(function() {
        $('#local-2').fadeIn('slow');
    })



    $('#loc_count').change(function(){

       var count = $('#loc_count').val();
        estimate = count * 1200;

       $('#estimate').html("$" + estimate + ".00");

        compare(budget, estimate);
   });

    $('#expand_web').change(function() {
        if($('#expand_web').val() == "yes") {
            var count = $('#loc_count').val();
            estimate =  count * 3588;
            $('#estimate').html("$" + estimate + ".00");
        }
        compare(budget, estimate);
    });


 //New Website Section

    $('#new_web').change(function() {
        if($(this).val() == "yes") {
            $('#web-1').fadeIn('slow');
        }
    })


    $('#template').change(function() {
        if ($(this).val() == "yes") {
            estimate += 5000;
            $('#estimate').html("$" + estimate + ".00");
            $('#web-3').fadeIn('slow');

        } else if ($(this).val() == "no") {
            $('#web-2').fadeIn('slow');
        }
    })


    $('#restaurant').change(function() {
        if ($(this).val() == "yes") {
            estimate = (estimate-5000) + 4000;
            $('#estimate').html("$" + estimate + ".00");
            $('#web-3').fadeIn('slow');

        } else if ($('#template').val() == "no") {
            $('#web-2').fadeIn('slow');
        }
    })

    
})