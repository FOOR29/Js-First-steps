const car = {
    make: 'tesla',
    model: 'model 3',
    year: '2025',

    getDescription () {
        return `Este carro es ${this.year} ${this.make} ${this.model}.`;
    },

    uptadeModel: function(newModel){
        this.model = newModel
        return`El model es actualizado a ${this.model}`
    }
    
}


console.table(car);

