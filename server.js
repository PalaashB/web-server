import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, web!');
});


app.get('/aboutme', (req, res) => {
  res.send('my name ');
});



app.get('/experience', (req, res) => {
  res.send('I have done these internships and research programs');
});

///





app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});










const projects = [
  { name: 'Weatherapp', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/projects', (req, res) => {
  const tag = req.query.tag;
  let matches;

  if (tag) {
    matches = projects.filter((p) => p.tag === tag);
  } else {
    matches = projects;
  }

  
  res.send(matches);
});


app.get('/projects', (req, res) => {
  const sort = req.query.name;
  let matches;

  if (sort) {
    matches = projects.filter((p) => p.name === sort);
    console.log("sort")
  } else {
    matches = projects;
  }
console.log("sort")
  
  res.send(matches);
});