const mongoose = require("mongoose");

const databaseName = "linkee";

mongoose
  .connect(process.env.DB + "/" + databaseName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(`MongoDB Connected: ${process.env.DB}/${databaseName}`)
  )
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
// mongoose.Promise = global.Promise;
