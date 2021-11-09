const modulo = {
    prop: 'mi prop',
    config: {
        language: 'es',
        cache: true
    },
    setConfig: conf => {
        modulo.config = conf
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? 'Si' : 'No')
    }
}

modulo.setConfig({language: 'en', cache: false})
modulo.isCacheEnabled()
console.log(modulo)