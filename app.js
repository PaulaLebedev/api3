let occupations = {
    3222: {name: 'sünnitusabi keskastme spetsialist', rate: 0},
    3431: {name: 'Fotograaf', rate: 0},
    3432: {name: 'Sisekujundajad ja dekoraatorid', rate: 0},
    3514: {name: 'Veebitehnikud', rate: 0},
    5111: {name: 'Reisi- ja lennusaatjad', rate: 0},
    2111: {name: 'Füüsikud ja astronoomid', rate: 0},
    2113: {name: 'Keemikud', rate: 0},
    2120: {name: 'Matemaatikud, aktuaarid ja statistikud', rate: 0},
    2250: {name: 'Loomaarstid', rate: 0},
    2320: {name: 'Kutseõpetajad', rate: 0},
    2652: {name: 'Muusikud, lauljad ja heliloojad',rate: 0},
    5120: {name: 'Kokad', rate: 0},
    5141: {name: 'juuksurid', rate: 0},
}
fetch('http://andmebaas.stat.ee/sdmx-json/data/PA633/34+35+36+38+64+74+DBL98+DBL120+DBL158+DBL197+DBL200+76+83+DBL242+DBL245+DBL248.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions')
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data)
    data.structure.dimensions.observation[0].values.forEach(el => {
        console.log(el.name.split(' ')[0])
        
    });
})
