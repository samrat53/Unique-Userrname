import express from "express";
import bodyParser from "body-parser";
import genUsername from "unique-username-generator";
const app = express();
const PORT = 5173;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const email = req.body["inputEmail"];
  const digits = req.body["inputNumOfDigits"]; //value parsed is passed as integer
  const castedDigit = +digits; //typecasting
  const username = genUsername.generateFromEmail(email, castedDigit);
  console.log(`email: ${email} digits: ${digits}`);
  console.log(`username: ${username}`);
  res.render("index.ejs", { username: username });
});

app.listen(PORT, () => console.log(`Port ${PORT} active`));
