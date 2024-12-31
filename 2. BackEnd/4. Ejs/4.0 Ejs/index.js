import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    app.render("index.ejs", {date: "it,s a weekday", advice: "Go to work"});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

