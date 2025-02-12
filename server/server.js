const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

const { readSync, readdirSync } = require("fs");

const campingRoute = require("./routes/camping");
const profileRoute = require("./routes/profile");
const handleError = require("./middlewares/error");
const bodyPaser = require('body-parser')

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.urlencoded())


// app.use(bodyPaser.urlencoded({ extended: true }))
// app.use(bodyPaser.json())

// console.log(readdirSync('./routes'))
readdirSync("./routes").map((e) => app.use("/api", require("./routes/" + e)));



// app.use("/api", campingRoute);
// app.use("/api",profileRoute)

app.get("/", (req, res) => {
  res.send("Hello From Root Route");
});

app.use(handleError);

const PORT = 3000;
app.listen(`${PORT}`, () => console.log(`Server running on port ${PORT}`));
