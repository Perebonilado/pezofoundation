const btcBx = document.getElementById('btc-bx')
const ethBx = document.getElementById('eth-bx')
const bnbBx = document.getElementById('bnb-bx')
const xrpBx = document.getElementById('xrp-bx')
const themeBx = document.getElementById('theme-toggler-bx')
const hamBx = document.querySelector('.ham-bx')
const sideMenu = document.getElementById('side-menu')
const closeBx = document.getElementById('close-bx')
const navBar = document.getElementById('nav-bar')
const nestedNavItems = document.querySelectorAll('.nested-nav-item')


// theme toggler functionality

themeBx.addEventListener('click', (e)=>{
    
    if(e.target.classList.contains('fal')){
        console.log(e.target)
        let toggler = e.target

        // light mode
        if (toggler.classList.contains('fa-sun')) {
            toggler.classList.remove('fa-sun')
            toggler.classList.add('fa-moon')

            document.body.classList.remove('dark-theme')
            navBar.classList.remove('nav-dark')
            sideMenu.classList.remove('nav-dark')

            for (const item of nestedNavItems) {
                item.classList.remove('nav-dark')
            }
        }
        // dark mode
        else if (toggler.classList.contains('fa-moon')) {
            toggler.classList.remove('fa-moon')
            toggler.classList.add('fa-sun')

            document.body.classList.add('dark-theme')
            navBar.classList.add('nav-dark')
            sideMenu.classList.add('nav-dark')

            
            for (const item of nestedNavItems) {
                item.classList.add('nav-dark')
            }
        }
    }
})

// side menu functionality
hamBx.addEventListener('click', ()=>{
    if (sideMenu.classList.contains('side-menu-inactive')) {
        sideMenu.classList.remove('side-menu-inactive')
        sideMenu.classList.add('side-menu-active')
    }
})

closeBx.addEventListener('click', ()=>{
    if (sideMenu.classList.contains('side-menu-active')) {
        sideMenu.classList.remove('side-menu-active')
        sideMenu.classList.add('side-menu-inactive')
    }
})




// fetch crypto data for crypto info section

async function getCryptoData(url) {
    const response = await fetch(url)
    if (!response.ok) {
        throw Error('Something went wrong')
    }
    else{
        const data = await response.json()
        return data
    }
}

getCryptoData('https://api.coingecko.com/api/v3/coins').then((data)=>{
    const bitcoin = data[0]
    const ethereum = data[1]
    const bnb = data[2]
    const ripple = data[6]


    // xrp
    function renderXrp() {
        let curPrice = ripple.market_data.current_price.usd
        let high = ripple.market_data.high_24h.usd
        let low = ripple.market_data.low_24h.usd
        let priceChange = ripple.market_data.price_change_percentage_24h.toFixed(2)
        let image = ripple.image.thumb

        if (priceChange === 0) {
            xrpBx.innerHTML = `<p><img src=${image} alt="ripple_image"> XRP/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"> </div><div class="24h-price-change-val"> ${priceChange}%</div></div>`
        }
        else if(priceChange < 0){
            xrpBx.innerHTML = `<p><img src=${image} alt="ripple_image"> XRP/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"><i class="fas fa-arrow-alt-down"></i> </div><div class="24h-price-change-val red"> ${priceChange}%</div></div>`
        }
        else if(priceChange > 0){
            xrpBx.innerHTML = `<p><img src=${image} alt="ripple_image"> XRP/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"><i class="fas fa-arrow-alt-up"></i> </div><div class="24h-price-change-val green"> ${priceChange}%</div></div>`
        }
    }

    // bnb
    function renderBnb() {
        let curPrice = bnb.market_data.current_price.usd
        let high = bnb.market_data.high_24h.usd
        let low = bnb.market_data.low_24h.usd
        let priceChange = bnb.market_data.price_change_percentage_24h.toFixed(2)
        let image = bnb.image.thumb

        if (priceChange === 0) {
            bnbBx.innerHTML = `<p><img src=${image} alt="ripple_image"> BNB/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"> </div><div class="24h-price-change-val"> ${priceChange}%</div></div>`
        }
        else if(priceChange < 0){
            bnbBx.innerHTML = `<p><img src=${image} alt="ripple_image"> BNB/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"><i class="fas fa-arrow-alt-down"></i></div><div class="24h-price-change-val red"> ${priceChange}%</div></div>`
        }
        else if(priceChange > 0){
            bnbBx.innerHTML = `<p><img src=${image} alt="ripple_image"> BNB/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"><i class="fas fa-arrow-alt-up"></i> </div><div class="24h-price-change-val green"> ${priceChange}%</div></div>`
        }
    }

    // ethereum

    function renderEth() {
        let curPrice = ethereum.market_data.current_price.usd
        let high = ethereum.market_data.high_24h.usd
        let low = ethereum.market_data.low_24h.usd
        let priceChange = ethereum.market_data.price_change_percentage_24h.toFixed(2)
        let image = ethereum.image.thumb

        if (priceChange === 0) {
            ethBx.innerHTML = `<p><img src=${image} alt="ripple_image"> ETH/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"> </div><div class="24h-price-change-val"> ${priceChange}%</div></div>`
        }
        else if(priceChange < 0){
            ethBx.innerHTML = `<p><img src=${image} alt="ripple_image"> ETH/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"><i class="fas fa-arrow-alt-down"></i> </div><div class="24h-price-change-val red"> ${priceChange}%</div></div>`
        }
        else if(priceChange > 0){
            ethBx.innerHTML = `<p><img src=${image} alt="ripple_image"> ETH/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"><i class="fas fa-arrow-alt-up"></i> </div><div class="24h-price-change-val green"> ${priceChange}%</div></div>`
        }
    }

    // bitcoin
    function renderBtc() {
        let curPrice = bitcoin.market_data.current_price.usd
        let high = bitcoin.market_data.high_24h.usd
        let low = bitcoin.market_data.low_24h.usd
        let priceChange = bitcoin.market_data.price_change_percentage_24h.toFixed(2)
        let image = bitcoin.image.thumb

        if (priceChange === 0) {
            btcBx.innerHTML = `<p><img src=${image} alt="ripple_image"> BTC/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"> </div><div class="24h-price-change-val"> ${priceChange}%</div></div>`
        }
        else if(priceChange < 0){
            btcBx.innerHTML = `<p><img src=${image} alt="ripple_image"> BTC/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"><i class="fas fa-arrow-alt-down"></i> </div><div class="24h-price-change-val red"> ${priceChange}%</div></div>`
        }
        else if(priceChange > 0){
            btcBx.innerHTML = `<p><img src=${image} alt="ripple_image"> BTC/USD</p>
            <div class="flex-crypto-info "><div class="current-price"><i class="fas fa-dollar-sign"></i> </div><div class="current-price-val">${curPrice}</div></div>
            <div class="flex-crypto-info "><div class="24h-price-change"><i class="fas fa-arrow-alt-up"></i> </div><div class="24h-price-change-val green"> ${priceChange}%</div></div>`
        }

    }

    setInterval(renderBtc, 1000)
    setInterval(renderEth, 1000)
    setInterval(renderBnb, 1000)
    setInterval(renderXrp, 1000)
    
})
.catch((err)=>{
    console.log(err)

    xrpBx.innerHTML = `<div>Unable to fetch data, please reload </div>`
    bnbBx.innerHTML = `<div>Unable to fetch data, please reload </div>`
    ethBx.innerHTML = `<div>Unable to fetch data, please reload </div>`
    btcBx.innerHTML = `<div>Unable to fetch data, please reload </div>`
})




        

