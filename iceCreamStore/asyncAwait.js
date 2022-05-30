let stocks = {
    fruits: ['strawberries', 'grapes', 'bananas', 'apples'],
    liquids: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};


let is_shop_open = true;

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(

                console.log('which topping would you like?')
            )
        }, 3000)
    })
}

/* Recall that a promise has this general structure: 

const order = () => {
    return new Promise((resolve, reject) => {
        if () {
            resolve()
        } else {
            reject()
        }
    })
}

order()
.then()
.then()
.then()
.catch()
.finally()

*/

// async was is much easier... and has this general structure

async function asyncOrderExample() {
    try {
        await someTask;
    }
    catch (error) {
        console.log('someTask doesnt exist', error)
    }
    finally {
        console.log('runs code anyways')
    }
}

// asyncOrderExample()
//     .then(() => {
//     console.log('will print at end')
// })

// lets make the order function for real...

async function kitchen() {
    console.log('a')
    console.log('b')
    console.log('c')
    await toppings_choice()
    console.log('d')
    console.log('e')
}

kitchen()

console.log('doing the dishes')
console.log('cleaning the tables')
console.log('taking new orders')

const order = async () => {
    try {
        await someTask;
    }
    catch (error) {
        console.log('someTask doesnt exist', error)
    }
    finally {
        console.log('runs code anyways')
    }
}
