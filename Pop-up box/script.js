$(document).ready(function(){
    var check=false;
    $('.clicks').on('click',function(){
        if (check==false){
            check=true;
            $('#box').addClass('show');
        }
        else{
            check=false;
            $('#box').removeClass('show');
        }
    })

    $('.submission').on('click',function(){
            check=false;
            $('#box').removeClass('show');
    });

    $('.cross').on('click',function(){
            check=false;
            $('#box').removeClass('show');
    });
});
