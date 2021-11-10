const resultado = (() => {
    const x = {}

    return {
        a: () => console.log(x),
        b: (key, value) => x[key] = value
    }
})()

resultado.b('hora', 'reloj')
resultado.a()