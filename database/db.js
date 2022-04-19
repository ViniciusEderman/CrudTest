const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:KsaS4UXtQyLZQNHK@cluster0.xmvpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB Atlas Conectado");
    })
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
