// variables
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// apis
const API_KEY = "ac7c733f0be24b2da74de30c52012211";
const HEADLINE_NEWS = "https://newsapi.org/v2/top-headlines?country=id&apiKey=ac7c733f0be24b2da74de30c52012211";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=ac7c733f0be24b2da74de30c52012211";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=ac7c733f0be24b2da74de30c52012211";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=ac7c733f0be24b2da74de30c52012211";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=ac7c733f0be24b2da74de30c52012211";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";


window.onload =function() {
    newsType.innerHTML="<h4>HeadlLines</h4>";
    fetchQueryNews();
};

businesslBtn.addEventListener("click",function() {
    newsType.innerHTML = "<h4>Bisnis</h4>";
    fetchBuisnessNews();
});

sportslBtn.addEventListener("click",function() {
    newsType.innerHTML = "<h4>Sports</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click",function() {
    newsType.innerHTML = "<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click",function() {
    newsType.innerHTML = "<h4>Teknologi</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click",function() {
        newsType.innerHTML = "<h4>Cari :"+newsQuery.value+ "</h4>";
        fetchQueryNews();
    });


const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchQueryNews = async () =>{

    if(newsQuery.value == null)
        return;
    
    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else{
        console.log(response.status, response.statusText);
    }
    displayNews();
}

function displayNews(){

    newsdetails.innerHTML ="";

    if(newsDataArr.length == 0) {
        newsdetails.innerHTML = "<h5>Data tidak ditemukan"
        return;
    }

    newsDataArr.forEach(news => {
        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width", "100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var description = document.createElement('p');
        description.className="text-muted";
        description.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Baca lebih lanjut";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        
        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

}

