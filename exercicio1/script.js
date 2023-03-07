function casaDaCoxinha() {
    let fome = prompt('Você quer uma coxinha? "S" para sim e "N" para não').toUpperCase()

    let conta = 0

    while (fome === 'S'){
        conta += 4.5
        fome = prompt('Você quer mais uma coxinha? "S" para sim e "N" para não').toUpperCase()
    }
    console.log(`A sua conta deu ${conta} reais`)
}

casaDaCoxinha()

//tofixed e +=