const mongoose = require("mongoose")
mongoose.connect(
  "mongodb+srv://<db_username>:<db_password>@cluster0.2xnsyay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
        dbName: "Day16",
        
  }
);