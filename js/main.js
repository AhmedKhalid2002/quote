var quotes=[
    {
        quote:"Without music, life would be a mistak.",
        writer:"--Friedrich Nietzsch",
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        writer:"--Albert Einstein",
    },
    {
        quote:"So many books, so little time",
        writer:"--Frank Zappa",
    },
    {
        quote:"A room without books is like a body without a soul",
        writer:"--Marcus Tullius Cicero",
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        writer:"-- Bernard M. Baruch",
    },
    {
        quote:"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening",
        writer:"--  William W. Purkey",
    },
    {
        quote:"If you tell the truth, you don't have to remember anything",
        writer:"--Mark Twain",
    },
    {
        quote:"A friend is someone who knows all about you and still loves you",
        writer:"--Elbert Hubbard",
    },
    {
        quote:"To live is the rarest thing in the world. Most people exist, that is all",
        writer:"--Oscar Wilde",
    }
];
var quoteOutput= document.getElementById('quote-output');
var writer= document.getElementById('writer');
function showData(){
    var random=Math.floor(Math.random()*quotes.length);
    quoteOutput.innerHTML=quotes[random].quote;
    writer.innerHTML=quotes[random].writer;
}
