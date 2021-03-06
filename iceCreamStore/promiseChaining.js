let stocks = {
    fruits: ['strawberries', 'grapes', 'bananas', 'apples'],
    liquids: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};


let is_shop_open = true;

const order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject(console.log('our shop is closed'))
        }
    })
}

order(2000, () => console.log(`${stocks.fruits[0]} were selected`))

    .then(() => {
        return order(0000, () => console.log('production has started'))
    })


    .then(() => {
        return order(2000, () => console.log('the fruit was chopped'))
    })


    .then(() => {
        return order(1000, () => {
            console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`)
        })
    })


    .then(() => {
        return order(1000, () => {
            console.log('start the machine')
        })
    })


    .then(() => {
        return order(2000, () => {
            console.log(`ice cream placed on ${stocks.holder[0]}`)
        })
    })

    .then(() => {
        return order(3000, () => {
            console.log(`${stocks.toppings[0]} was put on top`)
        })
    })

    .then(() => {
        return order(1000, () => console.log('ice cream was served'))
    })


    .catch(() => {
        console.log('customer left')
    })

    .finally(() => {
        console.log('day ended, shop is closed')
    })
