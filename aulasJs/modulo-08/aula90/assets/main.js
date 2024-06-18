document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()
    
    if(tag === 'a'){
        e.preventDefault()
        carrePagina(el)
    }
})

async function carrePagina(el){
    try {
        const href = el.getAttribute('href')
        const response = await fetch(href)
        if(response.status !== 200) throw new Error(Error)
        const html = await response.text()
        carregaResultado(html)    
    } catch (error) {
        console.log(error)
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response

}