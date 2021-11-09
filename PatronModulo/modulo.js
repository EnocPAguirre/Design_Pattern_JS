const modulo = {
    prop: 'mi prop',
    config: {
        language: 'es',
        cache: true
    },
    setConfig: config => {
        modulo.config = conf
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? 'Si' : 'No')
    }
}