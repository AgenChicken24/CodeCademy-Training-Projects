const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
        this._courses.appetizers.push(appetizerIn)
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(appetizerIn) {
        this._courses.mains.push(appetizerIn)
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(appetizerIn) {
        this._courses.desserts.push(appetizerIn)
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(name) {
        const dishes = this._courses[name];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex]
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        let totalPrice = desserts.price + mains.price + appetizer.price;
        return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The price is $${totalPrice}.`;
    }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('mains', 'Bob', 5.0);
menu.addDishToCourse('mains', 'Tarator', 10.0);
menu.addDishToCourse('desserts', 'torta', 0.50);
let meal = menu.generateRandomMeal();
console.log(meal);