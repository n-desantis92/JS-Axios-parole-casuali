const nParole = parseInt(prompt('inserisci il numero di parole da visualizzare'));
const contParole = [];
const mess = document.getElementById('mess');
    
for (let i = 0; i < nParole; i++) {

        axios.get('https://flynn.boolean.careers/exercises/api/random/word')
    .then(function (response) {
        let risposta = response.data.response;
        if (typeof(risposta) == "string") {
            let randomPar = response.data.response;
            contParole.push(randomPar);
        }else if (typeof(risposta) != "string") {
            contParole.push(" ");
        }
        let frase = contParole.join(" ");
        this.mess.innerHTML = frase;

    })
    .catch(function (error) {
        console.log(error);
        this.mess.innerHTML = error.name + "<br>" + error.message;

        if (error.response) {
            console.log(error.response);


        } else if (error.request) {
            console.log(error.request);

        }
    });  


}


if ( contParole.length == 9) {
    console.log('ciao');

}
console.log(contParole.length);
