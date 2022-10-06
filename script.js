
// const url = ' https://pokeapi.co/api/v2/pokemon/?limit=5'
// const url = ' https://pokeapi.co/api/v2/pokemon/?limit=9'
// https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20
//?offset=0&limit=20 define em quantos começa e termina


// const url2 = "https://pokeapi.co/api/v2/pokemon/?limit=";
// const inputValue = document.getElementById("n-pk");

const inputValue = document.getElementById("n-pk");

//RESPONSÁVEL POR FAZER A PESQUISA E SUBSTITUIU O BTN DE "BUSCAR"
// inputValue.addEventListener("keyup", () => {
//     setTimeout( () => {
//         quantidadePK();
//     },3500)
    
// })
//FIM//



function quantidadePK(){

    setTimeout(() => {
        // alert("Set time!");
        
        const url2 = "https://pokeapi.co/api/v2/pokemon/?limit=";
        const inputValue = document.getElementById("n-pk");
        let url = url2 + inputValue.value;
    // alert(url);

    // function addPokemonFavorito(){
        

    //     fetch(url).then( (res) => {
    //         return res.json()
    //     }).then( (data) => {

    //         let salvos = [];
    //         let data2 = data.results.name

    //         data2.forEach( (pkfv) => {
                
    //             const pokemonSalvo = document.querySelector("#pokemon-salvo");
    //             const nomeS = document.createElement("h1");
    //             nomeS.innerText = `${pkfv.name}`;
    //             // salvos.push();
    //             // alert(salvos);
                
    //             pokemonSalvo.appendChild(nomeS);

    //             alert(data.results.name)
    //         })

           

    //     })
    // }


    const aviso = document.querySelector("#aviso");

    function isNumber(val){
        return typeof val === "string"
      }
      //TENTAR FILTRAR PRA NÃO PASSAR STRING NA PESQUISA, APENAS NUMERO: || isNumber(inputValue.value) == true 

    if(inputValue.value.length <= 0 ){
        // alert("Digite um numero!")
        // console.log(inputValue.value)
       
        aviso.innerText = "Digite um número";
        url2 = "";
        
    }
    aviso.innerText = ""
    inputValue.value = "";
    inputValue.focus();



   

    fetch(url).then( (res) => {
        return res.json();
    }).then( (data) => {
        console.log("Primeiro:")
        console.log(data);

        

        const boxPokemon = document.querySelector("#pokemon-box");
        boxPokemon.classList.add("container");

        boxPokemon.innerHTML = ""

        data.results.forEach( (pk) => {
            console.log(pk);

            fetch(pk.url)
            .then( response => response.json())
            .then(pokemonSingle => {

                //AQUI É ONDE EU VOU VARRER TODOS O NOMES DO ARRAY E CONFIRMAR QUAL BATE
                alert(pk.name)

                // let termo = pk.name.val().toUpperCase()//transformei tudo em maiusculo
                // $("#pokemon-box").each( () => {
                //     if($(this).html().toUpperCase().indexOf(termo) === -1){
                //         $(this).hide()
                //     }
                // })
                // alert(termo)



                //Criando o card:
                const cardPK = document.createElement("div");
                cardPK.classList.add("card");
                boxPokemon.appendChild(cardPK);

                //Criando o nome do pokemon: 
                const namePK = document.createElement("h3");
                namePK.classList.add("namePK")
                namePK.innerText = pk.name;
                cardPK.appendChild(namePK);

                //Criando a imagem do pokemon da frente:
                const imgF = pokemonSingle.sprites.front_default
                const imagePK = document.createElement("div");
                imagePK.innerHTML = `<img src=${imgF}>`;
                cardPK.appendChild(imagePK);

                //PEGANDO O TIPO DO POKEMON:
                
                const txtpk = pokemonSingle.types[0].type.name
                // let txtpk2 = pokemonSingle.types[1].type.name

                const typePK = document.createElement("p");
                typePK.classList.add("type");
                typePK.innerText = `Type: ${txtpk}`
                // cardPK.appendChild(typePK);

                if(pokemonSingle.types.length >=2){
                    const txtpk2 = pokemonSingle.types[1].type.name;
                    console.log(txtpk2);
                    typePK.innerText += ` | ${txtpk2}`
                    // cardPK.appendChild(typePK);
                }
                cardPK.appendChild(typePK);

                //EXPERIENCIA BÁSICA:
                const baseExptxt= pokemonSingle.base_experience
                const exp = document.createElement("p");
                exp.classList.add("base-experience")
                exp.innerText = `Base Experience: ${baseExptxt}`
                cardPK.appendChild(exp);

                //STATUS BÁSICO
                //PEGANDO HP
                const baseStatstxt= pokemonSingle.stats[0].base_stat
                const stats = document.createElement("p");
                stats.classList.add("base-stat")
                stats.innerText = `HP: ${baseStatstxt}`
                cardPK.appendChild(stats)


                //PEGANDO ATTACK
                const baseStatstxt2= pokemonSingle.stats[1].base_stat
                const stats2 = document.createElement("p");
                stats2.classList.add("base-stat")
                stats2.innerText = `Attack: ${baseStatstxt2}`
                cardPK.appendChild(stats2)


                //PEGANDO DEFENSE
                const baseStatstxt3= pokemonSingle.stats[2].base_stat
                const stats3 = document.createElement("p");
                stats3.classList.add("base-stat")
                stats3.innerText = `Defense: ${baseStatstxt3}`
                cardPK.appendChild(stats3)

                //PEGANDO SPECIAL-ATTACK
                const baseStatstxt4= pokemonSingle.stats[3].base_stat
                const stats4 = document.createElement("p");
                stats4.classList.add("base-stat")
                stats4.innerText = `Special-Attack: ${baseStatstxt4}`
                cardPK.appendChild(stats4)

                //PEGANDO SPECIAL-DEFENSE
                const baseStatstxt5= pokemonSingle.stats[4].base_stat
                const stats5 = document.createElement("p");
                stats5.classList.add("base-stat")
                stats5.innerText = `Special-Defense: ${baseStatstxt5}`
                cardPK.appendChild(stats5)

                //PEGANDO SPEED 
                const baseStatstxt6= pokemonSingle.stats[5].base_stat
                const stats6 = document.createElement("p");
                stats6.classList.add("base-stat")
                stats6.innerText = `Speed: ${baseStatstxt6}`
                cardPK.appendChild(stats6)
                console.log(pokemonSingle);


                //ADD BTN
                const btnF = document.createElement("button");
                btnF.classList.add("btn-add")
                btnF.innerText = "Add"
                cardPK.appendChild(btnF)
                btnF.addEventListener("click", (e) => {
                    e.preventDefault();
                    alert("Clicou");

                    alert(pk.name);
                    const pokemonSalvo = document.querySelector("#pokemon-salvo");
                    pokemonSalvo.classList.add("pokemon-salvo")
                   
                    // const nomeS = document.createElement("h1");
                    // nomeS.innerText = `${pk.name}`;

                     //Criando o card:
                    // const cardPK = document.createElement("div");
                    // cardPK.classList.add("card-salvo");
                    // pokemonSalvo.appendChild(cardPK);

                    //Criando o nome do pokemon: 
                    // const namePK = document.createElement("h3");
                    // namePK.classList.add("namePK")
                    // namePK.innerText = pk.name;
                    // cardPK.appendChild(namePK);

                    //Criando a imagem do pokemon da frente:
                    // let imgF = pokemonSingle.sprites.front_default
                    // const imagePK = document.createElement("div");
                    // imagePK.innerHTML = `<img src=${imgF}>`;
                    // cardPK.appendChild(imagePK);
                
                    pokemonSalvo.appendChild(cardPK); //talvez seja inutil 

                    // if(pk.name == pk.name){
                    //     cardPK.innerHTML = " "
                        
                    // }  

                    localStorage.div += `<div class="card-salvo">
                        <h3 class="namePK">${pk.name}</h3>
                        <img src=${imgF}>
                        <p class="type">Type: ${txtpk}</p>
                        <p class="base-experience">Base Experience: ${baseExptxt}</p>
                        <p class="base-stat">HP: ${baseStatstxt}</p>
                        <p class="base-stat">Attack: ${baseStatstxt2}</p>
                        <p class="base-stat">Defense: ${baseStatstxt3}</p>
                        <p class="base-stat">Speacial Attack: ${baseStatstxt4}</p>
                        <p class="base-stat">Special Defense: ${baseStatstxt5}</p>
                        <p class="base-stat">Speed: ${baseStatstxt6}</p>

                    </div>`
                    
                    
                   
                   document.getElementById("pokemon-salvo").innerHTML = localStorage.div
                  
                   

                    
                    // localStorage.nome += `<h3>${pk.name}</h3>`
                    // localStorage.imagem += `<img src=${imgF}>`
                    
                    // document.querySelector(".card-salvo").innerHTML += localStorage.nome
                    // document.querySelector(".card-salvo").innerHTML += localStorage.imagem
                  
                })
                  

            }).catch( (err) => {
                console.log(err)
            })

        })
    })

    


    }, 100)


    
    
}
// document.querySelector(".card-salvo").innerHTML += localStorage.nome
// document.querySelector(".card-salvo").innerHTML += localStorage.imagem

document.getElementById("pokemon-salvo").innerHTML = localStorage.div


// document.querySelector("#pokemon-salvo").innerHTML += localStorage.nome
// document.querySelector("#pokemon-salvo").innerHTML += localStorage.imagem
 
                  


// fetch(url).then((res) => {
//     return res.json();
// }).then((data) => {
//     console.log("Primeiro:")
//     console.log(data);

//     const boxPokemon = document.querySelector("#pokemon-box");
//     boxPokemon.classList.add("container");



//     data.results.forEach((pk) => {
//         console.log(pk);


//         fetch(pk.url).then(response => response.json())
//             .then(pokemonSingle => {


//                 //Criando o card:
//                 const cardPK = document.createElement("div");
//                 cardPK.classList.add("card");
//                 boxPokemon.appendChild(cardPK);

//                 //Criando o nome do pokemon: 
//                 const namePK = document.createElement("h3");
//                 namePK.classList.add("namePK")
//                 namePK.innerText = pk.name;
//                 cardPK.appendChild(namePK);

//                 //Criando a imagem do pokemon da frente:
//                 let imgF = pokemonSingle.sprites.front_default
//                 const imagePK = document.createElement("div");
//                 imagePK.innerHTML = `<img src=${imgF}>`;
//                 cardPK.appendChild(imagePK);

//                 //IMAGEM DE TRÁS DO POKEMON
//                 // let imgB = pokemonSingle.sprites.back_default
//                 // const imagePKB = document.createElement("div");
//                 // imagePKB.innerHTML = `<img src=${imgB}>`;
//                 // cardPK.appendChild(imagePKB);


//                 //Criando saiba mais link a do pokemon: --NAO TO USANDO
//                 // const urlPK = document.createElement("a");
//                 // urlPK.innerHTML = `<a href=${pk.url}>saiba mais</a>`
//                 // cardPK.appendChild(urlPK);

                
//                 //PEGANDO O TIPO DO POKEMON:
                
//                 let txtpk = pokemonSingle.types[0].type.name
//                 // let txtpk2 = pokemonSingle.types[1].type.name

//                 const typePK = document.createElement("p");
//                 typePK.classList.add("type");
//                 typePK.innerText = `Type: ${txtpk}`
//                 // cardPK.appendChild(typePK);

//                 if(pokemonSingle.types.length >=2){
//                     let txtpk2 = pokemonSingle.types[1].type.name;
//                     console.log(txtpk2);
//                     typePK.innerText += ` | ${txtpk2}`
//                     // cardPK.appendChild(typePK);
//                 }
//                 cardPK.appendChild(typePK);
                

                
                
//                 //OBJETIVO AGORA: PEGAR A DESCRIÇÃO DE CADA POKEMON:

//                 //EXPERIENCIA BÁSICA:
//                 const baseExptxt= pokemonSingle.base_experience
//                 const exp = document.createElement("p");
//                 exp.classList.add("base-experience")
//                 exp.innerText = `Base Experience: ${baseExptxt}`
//                 cardPK.appendChild(exp)


//                 //STATUS BÁSICO
//                 const baseStatstxt= pokemonSingle.stats[0].base_stat
//                 const stats = document.createElement("p");
//                 stats.classList.add("base-stat")
//                 stats.innerText = `Base Stats: ${baseStatstxt}`
//                 cardPK.appendChild(stats)
                
//                 console.log(pokemonSingle)



//                 //DOIS DIAS PRA ENCONTRAR ESSE CÓDIGO E FAZER A IMAGEM FUNCIONAR, E FUNCIONOU!!!!
//                 // let img = pokemonSingle.sprites.front_default
//                 // const imagemPokemonDiv = document.createElement("div");
//                 // const imagemPokemon = document.createElement("div");
//                 // imagemPokemon.innerHTML += `
//                 // <img src=${img}>`
//                 // imagemPokemonDiv.appendChild(imagemPokemon);
//                 // boxPokemon.appendChild(imagemPokemonDiv);
//             })



//         // const cardPK = document.createElement("div");
//         // cardPK.classList.add("card");

//         // boxPokemon.appendChild(cardPK);

//         // const namePK = document.createElement("h3");
//         // namePK.innerText = pk.name;
//         // cardPK.appendChild(namePK);

//         // const imagePK = document.createElement("div");
//         // imagePK.innerText = "Imagem aqui";
//         // cardPK.appendChild(imagePK);

//         // const urlPK = document.createElement("a");
//         // urlPK.innerHTML = `<a href=${pk.url}>saiba mais</a>`
//         // cardPK.appendChild(urlPK);


//     })

// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })













//CÓDIGO PEGO DO YOUTUBE COMO REFERENCIA PARA USAR A API:

// var quantidade = document.getElementById('quantidade')
// quantidade.addEventListener('keyup', () => {
//     pegaPokemons(quantidade.value)
// })


// pegaPokemons(4)
// function pegaPokemons(quantidade) {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=' + quantidade)
//         .then(response => response.json())
//         .then(allpokemon => {
//             pokemon = [];
//             2
//             allpokemon.results.map((val) => {


//                 fetch(val.url)
//                     .then(response => response.json())
//                     .then(pokemonSingle => {
//                         pokemon.push({ nome: val.name, imagem: pokemonSingle.sprites.front_default })

//                         if (pokemon.length == quantidade) {
//                             //Finalizamos nossas requisições

//                             let poke_boxes = document.querySelector('.pokemon-boxes')
//                             poke_boxes.innerHTML = "";

//                             pokemon.map((val) => {
//                                 poke_boxes.innerHTML += `
                                    
//                                     <div class="pokemon-box">
//                                     <img src="`+ val.imagem + `">
//                                     <p>`+ val.nome + `</p>
//                                     </div>
//                                 `
//                                 /*
//                                 <div class="pokemon-box">
//                                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png">
//                                 <p>Ditto</p>
//                                 </div>
//                                 */
//                             })
//                         }

//                     })
//             })

//             pokemon.map((val) => {
//                 console.log(val.nome)
//             })
//         })
// }





