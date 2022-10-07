
const coffee = {
    espressoCoffee: {
        name: 'Espresso Coffee',
        milk: 'Milk 60',
        cream: 'Cream 75',
        latte: 'Latte 100',
        addOn: function (m = 0, c = 0, l = 0) {
            return m + c + l
        }
    },
    cappuccinoCoffee: {
        name: 'Cappuccino Coffee',
        milk: 80,
        cream: 90,
        latte: 125,
        addOn: function (milk = 0, cream = 0, latte = 0) {
            return milk + cream + latte
        }
    },
    latteCoffee: {
        name: 'Latte Coffee',
        milk: 100,
        cream: 125,
        latte: 150,
        addOn: function (milk = 0, cream = 0, latte = 0) {
            return milk + cream + latte
        }
    }
}

export default coffee;