const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: "success", data: "Hello world" });
});

const students = [
  { name: "Ab", class: "12b", age: 12 },
  { name: "Ac", class: "12a", age: 12 },
  { name: "Ad", class: "12b", age: 12 },
  { name: "Ae", class: "12c", age: 12 },
  { name: "Af", class: "12d", age: 12 }
];

app.get('/students', (req, res) => {
  res.json({ students });
});

app.get('/:class/students/:name', (req, res) => {
  const { class: clas, name } = req.params;

  const student = students.find(
    s => s.name.toLowerCase() === name.toLowerCase() &&
         s.class.toLowerCase() === clas.toLowerCase()
  );

  if (student) {
    res.json({ student });
  } else {
    res.json({ error: "Student not found" });
  }
});

app.get('/:class', (req, res) => {
  const { class: clas } = req.params;

  const classStudents = students.filter(
    s => s.class.toLowerCase() === clas.toLowerCase()
  );

  if (classStudents.length > 0) {
    res.json({ students: classStudents });
  } else {
    res.json({ error: "No students found in this class" });
  }
});

app.use((req, res) => {
  res.json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});