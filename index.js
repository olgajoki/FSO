const express = require("express");
const app = express();
app.use(express.json());

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

//get all persons
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

//get person by id
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

//get information about amount of persons
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

//delete person by id
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

//generate id for added person
const generateId = () => {
  const min = Math.ceil(5);
  const max = Math.floor(99);
  console.log(min, max);

  return Math.floor(Math.random() * (max - min) + min);
};

//send data for new person
app.post("/api/persons", (req, res) => {
  const body = req.body;
  console.log(body.name, "body");
  if (!body.name) {
    return res.status(400).json({
      error: "name missing",
    });
  }

  const person = {
    name: body.name,
    number: body.number || false,
    id: generateId(),
  };
  persons = persons.concat(person);
  res.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
