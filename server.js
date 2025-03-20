require("dotenv").config();
const app = require("./src/app");
const sequelize = require("./src/config/db");

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  .then(() => {
    console.log("Database synced!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Database connection failed:", error));
