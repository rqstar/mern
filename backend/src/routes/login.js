const { Router } = require('express');
const router = Router();
const passport = require('passport');

router.post('/', function(req,res,next){
    passport.authenticate('local',function(err,user,info) {
        //succesRedirect:'/api/notes',
        //failureRedirect:'/api/login',
        //failureWithError:true
        console.log(info); // Esta es la clave'''''''''''''''''''''''''''
        if(err){
            return next(err);
        }
        if(!user){
            return res.send({
                success:false, message:'Autheticated failed, '+ info.message
            });
        }
        req.login(user,loginErr=>{
            if(loginErr){
                return next(loginErr);
            }
            return res.send({success:true, message:'autentication succeded'});
        });

    }) (req,res,next);
});


module.exports = router;

