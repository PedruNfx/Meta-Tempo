const key = "03263539b6f866f946532cb710b45554"



function EscreveHTML(dados){
document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "º Graus"
document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
document.querySelector(".Umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`




let timezoneOffsetSeconds = dados.timezone;

// Obtendo a hora atual em UTC
let nowUtc = new Date();

// Calculando a hora local com base no fuso horário retornado
let localTime = new Date(nowUtc.getTime() + timezoneOffsetSeconds * 1000);

// Extraindo a hora e minutos
let hours = localTime.getUTCHours().toString().padStart(2, '0');
let minutes = localTime.getUTCMinutes().toString().padStart(2, '0');

// Formatando a hora e minutos
let formattedTime = `${hours}:${minutes}`;

console.log("Hora ajustada ao fuso horário retornado pela API:", formattedTime);

document.querySelector(".hora").innerHTML = formattedTime;

}




async function getCidade(cidade) {


    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json() );

    console.log(dados);

    EscreveHTML(dados);
    
}


function Click() {
    const cidade = document.querySelector(".caixa-input").value;

    console.log(cidade);
    getCidade(cidade);

}

