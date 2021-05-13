require('../connection');
const Product = require('../models/Product');

const someFunction = async () => {
    // const result = await Product.findOneAndDelete({name: 'Laptop'}) // eliminar uno sólo
    // const result = await Product.deleteMany({name: 'keyboard'}) // eliminar todos los que coincidan con lo buscado
    // const result = await Product.deleteOne({name: ''}); // elimina sólo uno de los productos que coincidan con lo buscado
    // const result = await Prodcut.findOneAndDelete({name: ''}); // igual que deleteOne pero devuelve los datos del registro borrado
    // const result = await Product.findByIdAndDelete('id'); // elimina por ID

    console.log(result);
}

someFunction();