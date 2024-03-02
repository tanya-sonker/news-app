# news-app
<ins>purpose</ins>

to track apple's decisions on progressive web apps using news api by sourcing from the verge and techcrunch. 

<ins>rationale</ins>

apple is ending support for PWAs on iOS starting v17.4 (eu only for now). before that decision was officially made, i was working on creating a PWA on iOS so i created this react app to keep track of whether this decision will be made across the board.

## notes
- create a .env file with your [news api](https://newsapi.org/) key saved to
```
REACT_APP_NEWS_API_KEY='your key goes here'
```
- update apiKey inside the useEffect hook for the news component
```
// News.jsx
  useEffect(() => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const phrase = "apple AND iphone web app";
    const query = encodeURIComponent(phrase);

    // Fetch news data
    axios.get(`https://newsapi.org/v2/everything?q=${query}&domains=theverge.com, techcrunch.com&apiKey=${apiKey}&language=en`)
      .then(response => setNews(response.data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);
```
- now run app to view the fetched articles as cards
```
npm start
```
<img width="1508" alt="Screenshot 2024-03-02 at 3 13 39 PM" src="https://github.com/tanya-sonker/news-app/assets/39142854/a4b9c711-2fca-47e7-b480-a271c6e2bf69">

- sorry, i'm still trying to set up a github actions workflow to pull my api key without pushing my .env >.<
