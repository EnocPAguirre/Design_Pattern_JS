const perro = {
    raza: 'Kilterrier',
    ladrar: function() {
        console.log(`Soy una raza ${this.raza}`)
    }
}

const kiltro = Object.create(perro);

kiltro.ladrar()

kiltro.raza = 'Schnauzer'

kiltro.ladrar()