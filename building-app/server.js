let express = require("express");
const path = require("path");

let app = express();

app.use(express.static("angular-tasks-practice-build"));
app.use(express.json());

app.get("/home/?*", (req, res) => {
  const filePath = path.join(
    __dirname,
    "angular-tasks-practice-build",
    "index.html"
  );
  return res.sendFile(filePath);
});

app.listen(4444, "172.16.1.135", (err) => {
  if (!err) console.log("JSON Server is running on : 172.16.1.135:4444");
  else console.log(err);
});
