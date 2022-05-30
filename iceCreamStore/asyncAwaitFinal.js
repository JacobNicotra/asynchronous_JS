let stocks = {
    fruits: ['strawberries', 'grapes', 'bananas', 'apples'],
    liquids: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};


let is_shop_open = false;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log('shop is closed'))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.fruits[0]} was selected`)

        await time(0000)
        console.log('start production')

        await time(2000)
        console.log('cut the fruit')

        await time(1000)
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`)

        await time(1000)
        console.log('start the machine')

        await time(2000)
        console.log(`is cream is placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(2000)
        console.log('serve ice cream')

    } catch (error) {
        console.log('customer left', error)
    }
    finally {
        console.log('shop is closed')
    }
}
kitchen()
