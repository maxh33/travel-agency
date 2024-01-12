$(document).ready(function(){
    $('#phone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true,
                minlength: 10
            },
            phone: {
                required: false,
                minlength: 14
            }
        },
    });
});