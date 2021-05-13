require('../connection');
const Product = require('../models/Product');

const createProducts = async () => {
    const laptopone = new Product({
        name: 'laptop hp',
        description: 'hp pavilion 15'
    });

    await laptopone.save();

    const laptoptwo = new Product({
        name: 'laptop lenovo',
        description: 'hp x1'
    });

    await laptoptwo.save();

    const keyboardMarvo = new Product({
        name: 'keyboard',
        description: 'marvo mechanical keyboard'
    });

    await keyboardMarvo.save();

    const keyboardMarvoTwo = new Product({
        name: 'keyboard',
        description: 'second marvo mechanical keyboard'
    });

    await keyboardMarvoTwo.save();

    console.log(laptopone, laptoptwo, keyboardMarvo, keyboardMarvoTwo);
}

createProducts();