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


    $('#loc_count').change(function(){

       var count = $('#loc_count').val();
        estimate = (count * 1200);

       $('#estimate').html("$" + estimate + ".00");

    compare(budget, estimate);
   });

    $('#expand_web').change(function() {
        if($('#expand_web').val() == "yes") {
            var count = $('#loc_count').val();
            var estimate =  count * 3588;
            $('#estimate').html("$" + estimate + ".00");
        }
        compare(budget, estimate);
    });
    
})