require('../connection');
const User = require('../models/User');

// 
const otherFunction = async () =>{
    const user = await User.findOneAndUpdate({username: 'cameron'}, {
        name: 'Gordon Clark'
    }, {new: true});

    console.log(user);

}

// Actualizar sin el método update
const someFunction = async () => {
    const user = await User.findOne({username: 'joe'});
    console.log(user);
    user.password = 'minuevacontraseña';
    user.save();
}


// Actualizar con el método update
async function updateUsers(){
    const user = await User.update({username: 'fazt'}, {
        password: 'contraseñasegura'
    });

    console.log(user);
}

// console.log('Update Users:');
// updateUsers();

// console.log('Some Function:');
// someFunction();

console.log('Other Function');
otherFunction();