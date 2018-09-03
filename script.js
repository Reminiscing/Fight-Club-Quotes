let quoteDisplay = document.getElementById('quoteDisplay');
let quoteButton = document.getElementById('quoteButton');
let quotes = ["\''It\'s only after we\'ve lost everything that we\'re free to do anything.\''", "\''May I never be complete. May I never be content. May I never be perfect.\''", "\''We buy things we don\'t need, with money we don\'t have, to impress people we don\'t like.\''", "\''This is your life and it\'s ending one minute at a time.\''", "\''You\'re not your job, you\'re not the car you drive, you\'re not the contents of your wallet.\''", "\''You met me at a very strange time in my life\''", "\''I found freedom. Losing all hope was freedom.\''", "\''The things you own end up owning you.\''", "\''Maybe self-improvement isn\'t the answer, maybe self-destruction is the answer.\''"]

window.onload = quoteDisplay.innerHTML = `<p>${quotes[0]}<p>`;

let quoteNumber;
// let lastQuoteNumber;


quoteButton.addEventListener('click', newQuote);

function newQuote(){
    function getRandomNumber() { 
        quoteNumber = Math.floor(Math.random() * (9 - 1) + 1);
    };
    getRandomNumber();
    let nextQuote = quotes[quoteNumber];
    quoteDisplay.innerHTML = `<p>${nextQuote}<p>`        
    
    console.log(quoteNumber);
}



