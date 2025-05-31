const express = require("express");
const app = express();
const serverInfoRoute = require("./routes/serverInfo");

app.use("/api", serverInfoRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
