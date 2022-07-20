$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();
    $('#emailvalidation').hide();

    var Error=true;
    var password_error=true;
    var confirm_password_error=true;
    var email_error=true;

    $('#username').keyup(function(){
        username_validation();
    });

    function username_validation(){
        var username_val=$('#username').val();
        if(username_val.length==''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username Cannot be Empty');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
        if(username_val.length<4){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should contain atleast 4 characters');
            $('#usernamevalidation').css('color','red');
            Error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();
        }
    }
    $('#password').keyup(function(){
        password_validation();
    });

    function password_validation(){
        var password_val=$('#password').val();
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(password_val.length==''){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password Cannot be Empty');
            $('#passwordvalidation').css('color','red');
            password_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }
        if(!strongRegex.test(password_val)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Invalid Password');
            $('#passwordvalidation').css('color','red');
            password_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }
    }
    $('#confirmpassword').keyup(function(){
        confirm_password();
    });

    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        var password_val=$('#password').val();
        if(password_val!=confirm_password_val)
        {
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password did not match');
            $('#confirmpasswordvalidation').css('color','red');
        }
        else{
            $('#confirmpasswordvalidation').hide();
        }
    }
    $('#email').keyup(function(){
        email_validation();
    });

    function email_validation(){
        var email_val=$('#email').val();
        var emailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if(email_val.length==''){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email Cannot be Empty');
            $('#emailvalidation').css('color','red');
            email_error=false;
            return false;
        }
        else{
            $('#emailvalidation').hide();
        }
        if(!emailregex.test(email_val)){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Invalid Email');
            $('#emailvalidation').css('color','red');
            email_error=false;
            return false;
        }
        else{
            $('#emailvalidation').hide();
        }
    }

    $('#submitvalidation').click(function(){
        username_validation();
        password_validation();
        confirm_password();
        email_validation();

        if(Error==true && password_error==true && confirm_password_error==true && email_error==true)
        return true;
        else
        return false;
    });
});