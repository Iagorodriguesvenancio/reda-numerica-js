function gerar() {
    let res = document.getElementById("res")
    let inicio = document.getElementById("txt_i")
    let fim = document.getElementById("txt_f")
    let passo = document.getElementById("txt_p")
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `imposivel de gerar reta numerica`
        window.alert("[ERRO] insira de valor")
    }else {
        res.innerHTML = `contando`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert("impossivel calcular o passo tem que ser mair 0 consideramdo ele como 1")
            p = 1
        }
        if(i < f){
            //ordem crecente
            for(let c = i; c <= f ; c += p){
                res.innerHTML += `${c} >`
            }
        }
        if(i > f){
            //ordem decrecente 
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} >`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}