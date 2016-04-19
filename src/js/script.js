$(document).ready(function(){

    var loc_count = 0;
    var template = 0;
    var estimate = 0;

    function calcEstimate (){
        estimate = loc_count + template;
       // return estimate;
        $('#estimate').html("$" + estimate + ".00");

    }
    var input = $('#budget_value');
    var budget = 0;

    function compare(a,b){

        if(a < b){
            $('#warning').html('<div class="uk-alert uk-alert-danger" id="over"> This is over your budget!<div class="uk-alert-close uk-close" id="close"></div></div>');
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
        loc_count = count * 1200;
        calcEstimate();
        //$('#estimate').html("$" + estimate + ".00");
        compare(budget, estimate);
   });

    $('#expand_web').change(function() {
        if($('#expand_web').val() == "yes") {
            var count = $('#loc_count').val();
            loc_count =  count * 3588;
            calcEstimate();
          //  $('#estimate').html("$" + estimate + ".00");
        }else{
            loc_count =  $('#loc_count').val() * 1200;
            calcEstimate();
          //  $('#estimate').html("$" + estimate + ".00");
        }
    });


 //New Website Section

    $('#new_web').change(function() {
        if($(this).val() == "yes") {
            $('#web-1').fadeIn('slow');
        }
    })


    $('#template').change(function() {
        if ($(this).val() == "yes") {
            template = 5000;
            calcEstimate();
         //   $('#estimate').html("$" + estimate + ".00");
            compare(budget, estimate);
            $('#web-3').fadeIn('slow');

        } else if ($(this).val() == "no") {
            template = 0;
            calcEstimate();
          //  $('#estimate').html("$" + estimate + ".00");
            compare(budget, estimate);
            $('#web-2').fadeIn('slow');
        }
    })


    $('#restaurant').change(function() {
        if ($(this).val() == "yes") {
            template = (template-5000) + 4000;
            calcEstimate();
          //  $('#estimate').html("$" + estimate + ".00");
            compare(budget, estimate);
            $('#web-3').fadeIn('slow');

        } else if ($(this).val() == "no") {
            template = 5000;
            calcEstimate();
         //   $('#estimate').html("$" + estimate + ".00");
            compare(budget, estimate);
            $('#web-2').fadeIn('slow');
        }
    })

    
})