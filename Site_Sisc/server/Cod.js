let mysql = require ("mysql");
const express = require ("express");
const bodyParser = require ("body-parser");

//Initializing server
const app = express();
app.use(bodyParser.json());
const port = 8081;
app.listen(port, () => {
  console.log("Server online on: " + port);
});
app.use("/", express.static("../front-end"));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rezervari party halloween"
});
connection.connect(function (err) {
  console.log("Connected to database!");
  const sql =
    "CREATE TABLE IF NOT EXISTS persoane_inscrise(nume VARCHAR(255),prenume VARCHAR(255),telefon VARCHAR(255),email VARCHAR(255)";
  connection.query(sql, function (err, result) {
    if (err) {throw err;
    }
  });
});
app.post("/inscriere", (req, res) => {
  const persoana = {
    nume: req.body.nume,
    prenume: req.body.prenume,
    telefon: req.body.telefon,
    email: req.body.email
  }
  let error = [];

  console.log(persoana);
  if (!persoana.nume || !persoana.prenume || !persoana.telefon || !persoana.email ) {
    error.push("Unul sau mai multe campuri nu au fost introduse!");
    console.log("Unul sau mai multe campuri nu au fost introduse!");
  } else {
    if (persoana.nume.length < 2 || persoana.nume.length > 30) {
      console.log("Nume invalid!");
      error.push("Nume invalid!");
    } else if (!persoana.nume.match("^[a-z,A-Z]+$")) {
      console.log("Numele trebuie sa contina doar litere!");
      error.push("Numele trebuie sa contina doar litere!");
    }
    if (persoana.prenume.length < 2 || persoana.prenume.length > 30) {
      console.log("Prenume invalid!");
      error.push("Prenume invalid!");
    } else if (!persoana.prenume.match("^[a-z,A-Z]+$")) {
      console.log("Prenumele trebuie sa contina doar litere!");
      error.push("Prenumele trebuie sa contina doar litere!");
    }
    if (persoana.telefon.length != 10) {
      console.log("Numarul de telefon trebuie sa fie de 10 cifre!");
      error.push("Numarul de telefon trebuie sa fie de 10 cifre!");
    } else if (!persoana.telefon.match("^[0-9]+$")) {
      console.log("Numarul de telefon trebuie sa contina doar cifre!");
      error.push("Numarul de telefon trebuie sa contina doar cifre!");
    }
    if (!persoana.email.includes("@") && !persoana.email.includes("@")) {
      console.log("Email invalid!");
      error.push("Email invalid!");
    }
  }
  if (error.length === 0) {
    let sql =
      `INSERT INTO persoane_inscrise (nume,prenume,telefon,email) VALUES (?,?,?,?)`;
    connection.query(sql,
      [
        persoana.nume,
        persoana.prenume,
        persoana.telefon,
        persoana.email
      ],
      function (err, result) {
        if (err) {throw err};
        console.log("persoana inscrisa in baza de date!");
        res.status(200).send({
          message: "persoana inscrisa in baza de date!"
        });
        console.log(sql);
      });
  } else {
    res.status(500).send(error);
    console.log("Eroare la inserarea in baza de date!");
  }

});