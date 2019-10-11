$(document).ready(function(){
        $('#submit').click(function(){
            var name= $('#name').val();
            var email =$('#email').val();
            var messege= $('#message').val();

            if (name=='' || email=='' || message== ''){
                alert('All fields are required kindly fill in and try again')
            } else{
                alert (`Hey ${name}, Thanks for reaching out, we will get back to you via your email ${email} shortly `)
            }
            
        });
 })