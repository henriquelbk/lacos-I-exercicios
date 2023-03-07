function tabuada () {
    
    const numeroEscolhido = Number(prompt('Insira um número pae'))
    
    for(let i = 1; i <= 10; i++)
    console.log(`${numeroEscolhido} x ${i} = ${numeroEscolhido * i}`)
}

tabuada()