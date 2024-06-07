class car {
    constructor(brand, model, yearOfManufacture = null, seats = 5){
        this.brand = brand
        this.model = model
        this.yearOfManufacture = yearOfManufacture
        this.seats = seats
    }
    getDescription() {
        var brand = 'Ford'
        var model = 'Model T'
        var yearOfManufacture = '1925'
        var seats = '5'
    }
}


class electricCar extends car {
    constructor(brand, model, yearOfManufacture = null, seats = 5, BatteryRange){
        this.brand = brand
        this.model = model
        this.yearOfManufacture = yearOfManufacture
        this.seats = seats
        this.BatteryRange = BatteryRange
    }
    getDescription(){
        var brand = 'Nissan'
        var model = 'Leaf'
        var yearOfManufacture = '2019'
        var seats = '5'
        var BatteryRange = '270 km'

    }

}