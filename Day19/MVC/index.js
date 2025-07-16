let express = require("express");
let mongoose = require("mongoose");
let { enquiryModel } = require("./models/enquiry.model");
require("dotenv").config();
let app = express();

app.use(express.json());

app.post("/api/enquiry-insert", (req, res) => {
  let { sName, sEmail, sPhone, sMsg } = req.body;
  let enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    phone: sPhone,
    msg: sMsg,
  });

  enquiry
    .save()
    .then(() => {
      res.send({
        status: 1,
        msg: "Enquiry saved successfully",
      });
    })
    .catch((err) => {
      res.send({
        status: 0,
        msg: "Error while saving the enquiry",
        error: err.message,
      });
    });
});

app.get("/api/enquiry-list", async (req, res) => {
  let enquiryList = await enquiryModel.find();
  res.send({
    status: 1,
    msg: "enquiry list",
    data: enquiryList,
  });
});

app.delete("/api/enquiry-delete/:id", async (req, res) => {
  let enquiryId = req.params.id;
  let deleteEnquiry = await enquiryModel.deleteOne({ _id: enquiryId });
  res.send({
    status: 1,
    msg: "Delete Done",
    id: enquiryId,
    delRes: deleteEnquiry,
  });
});

app.put("/api/enquiry-update/:id", async (req, res) => {
  let enquiryId = req.params.id;
  let { sName, sEmail, sPhone, sMsg } = req.body;

  let updateObj = {
    name: sName,
    email: sEmail,
    phone: sPhone,
    msg: sMsg,
  };

  let updatedEnquiry = await enquiryModel.updateOne({ _id: enquiryId },{ $set: updateObj }
  );

  res.send({
    status: 1,
    msg: "Updated Done",
    id: enquiryId,
    updatedRes: updatedEnquiry,
  });
});

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log("Server is running on the Port: " + process.env.PORT);
  });
});
