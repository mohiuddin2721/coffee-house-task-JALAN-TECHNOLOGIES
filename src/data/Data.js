
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
        milk: 'Milk 80',
        cream: 'Cream 90',
        latte: 'Latte 125',
        addOn: function (m = 0, c = 0, l = 0) {
            return m + c + l
        }
    },
    latteCoffee: {
        name: 'Latte Coffee',
        milk: 'Milk 100',
        cream: 'Cream 125',
        latte: 'Latte 150',
        addOn: function (m = 0, c = 0, l = 0) {
            return m + c + l
        }
    }
}

export default coffee;