
let stocks = {
    fruits: ['strawberries', 'grapes', 'bananas', 'apples'],
    liquids: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};


// --------------------------- order and production functions --------------------------------

// Below is an example of callback hell:

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    }, 2000);
}

let production = () => {
    setTimeout(() => {
        console.log("production has started");
        setTimeout(() => {
            console.log('the fruit has been chopped');
            setTimeout(() => {
                console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added`);
                setTimeout(() => {
                    console.log('machine has been started');
                    setTimeout(() => {
                        console.log(` ice cream was placed on the ${stocks.holder[0]}`)
                        setTimeout(() => {
                            console.log(` ${stocks.toppings[0]} was put on top`)
                            setTimeout(() => {
                                console.log(`serve ice cream`)
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
}

order(0, production)



// -----------------------------------------------------------
