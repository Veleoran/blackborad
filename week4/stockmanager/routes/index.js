var express = require('express');
var productsRoutes = require("./routes/products");
var recallsRoutes = require("./routes/recalls");
const app = express()
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/recalls", recallsRoutes);
const app = require("./app")
var router = express.Router();

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Server running on port ${PORT}' ));


module.exports = router;
