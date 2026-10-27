const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  const dist = path.join(__dirname, "../dist");
  app.use(express.static(dist));
  app.get("*", (req, res) => {
    res.sendFile(path.join(dist, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
