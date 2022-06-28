// function moneybox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneybox(5);
// moneybox(5);

// function moneyBox() {
//     let saveCoins = 0;

//     function countCoins(coins){
//         saveCoins += coins;
//         console.log(`MoneyBox: $${saveCoins}`);
//     }
//     return countCoins;
// }

// const myMoneyBox = moneyBox();
// myMoneyBox(5);
// myMoneyBox(5);
// myMoneyBox(15);

// console.log('--------------------')

// const moneyBoxAna = moneyBox();
// moneyBoxAna(10);
// moneyBoxAna(20);
// moneyBoxAna(5);

function savings(){
    let savedMoney = 0;
    function saveMoney(action, money){
        if(action === 'save'){
            savedMoney += money;
            console.log(`You have saved $${money}cop`);
            console.log(`Savings total: $${savedMoney}cop`);
        }else if (action === 'withdraw'){
            if(savedMoney < money){
                console.log(`Sorry, your savings are $${savedMoney}`);
            }else{
                savedMoney -= money;
                console.log(`You have withdrawed $${money}cop`);
                console.log(`Savings total: $${savedMoney}cop`);
            }
        }
    }

    return saveMoney;
}

const SantiagoSavings = savings();
SantiagoSavings('save', 5000);
SantiagoSavings('withdraw', 6000);
SantiagoSavings('save', 1000);
SantiagoSavings('withdraw', 6000);