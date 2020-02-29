const userCtrl = {};
const User = require('../models/User');
userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userCtrl.createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        const errors = [];
        if (name.length <= 0) {
            errors.push({ text: 'Introduce tu nombre' });
        }
        if (password != confirmPassword) {
            errors.push({ text: 'Las contraseñas no coinciden' });
        }
        if (password.length < 4) {
            errors.push({ text: 'La contraseña debe tener al menos 5 caracteres' });

        }
        //valida el formulario
        if (errors.length > 0) {
            res.json({"message":"Verifica los campos que esten correctos"})
        } else {
            const emailUser = await User.findOne({ email: email });
            if (emailUser) {
                res.json({"message":"El email ya existe"});
            }else{
                const newUser = new User({ name, email, password });
                newUser.password=await newUser.encryptPassword(password);
                await newUser.save();
                console.log(newUser);
                res.json({"message":"User Created"});
                console.log("ya estas registrado")
            }

            
        }


    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};
userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}
module.exports = userCtrl;