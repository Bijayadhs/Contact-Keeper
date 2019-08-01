const express = require("express");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to contact API..." });
});

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
