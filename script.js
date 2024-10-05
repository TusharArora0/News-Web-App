const apikey = "f908798d6d8848c7a96f4b29cff25cf6";

const getNews = async () => {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`);
    const data = await response.json();
    console.log(data);
    data.articles.forEach(article => {
        console.log(article.title);
    }); 
}

getNews();






