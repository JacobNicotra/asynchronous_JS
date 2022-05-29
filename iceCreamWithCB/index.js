



// --------------------------- order and production functions --------------------------------
let order = (call_production) => {
    console.log('order placed. please call production')
    call_production()
    console.log('production complete')
}

let production = () => {
    console.log('ordeer received, starting production')
}

order(production)

/* 
order placed. please call production
ordeer received, starting production
production complete
*/

// -----------------------------------------------------------
