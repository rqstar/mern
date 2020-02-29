// Este modulo de COdigo es para Logear el Usuario
const passport = require('passport');
const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/User');

passport.use(new LocalStrategy({
    usernameField:'email'
}, async(email,password,done)=>{ //email, password son campos que van a ser detectados por el Metodo LocalSrategy
    const user=await User.findOne({email:email});//Consulta a la base de datos por el usuario introducido en el formulario de authentcacion
    if(!user){
        console.log("No exite el usuario");
        return done(null,false,{message:'Not user found'});
    }else{
        const match=await user.matchPassword(password);
        if(match){
            console.log("Estas logeado");
            return done(null,user);
        }else{
            return done(null, false ,{message:'Incorrect password'});
        }
    }
}));
passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user);
    });
});// Si esxiste el usuario 


