const express = require("express");
const app = express();

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-642312",
    id: 4,
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/info", (req, res) => {
  //set date to headers
  res.setHeader("Date", new Date().toUTCString());
  //get date header
  const dateHeader = res.get("Date");
  console.log(dateHeader);

  res.send(
    `Phonebook has info for people ${persons.length} <br> ${dateHeader}`
  );
});

/*
fetch("http://localhost:3001/info").then((resp) => {
  console.log(resp.headers.get("Date"));
});
*/
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
