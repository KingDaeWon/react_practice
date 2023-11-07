const quotes = [
    {
        quote : "인내는 어떤 실력보다 강하다.",
        author : "Ben Hogan",    
    },
    {
        quote : "길을 아는 것과 그 길을 걷는 것은 분명히 다르다.",    
        author : "모피어스",    
    },
    {
        quote : "나의 미래는 내가 오늘 무엇을 하느냐에 달려있다.",    
        author : "간디",    
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;