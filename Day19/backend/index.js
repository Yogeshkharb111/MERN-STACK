let express = require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");
let app = express();
app.use(express.json())

app.get("/student-read",async (req, res) => {
    let myDb = await dbConnection();
    let studentCollection = myDb.collection("students")
    let data = await studentCollection.find().toArray();
    let obj = {
        status: 1,
        msg: "Student List",
        data,
    }
    res.send(obj);
})

app.post("/student-insert", async (req, res) => {
    let myDb = await dbConnection();
    let studentCollection = myDb.collection("students")
   // res.send("Student Insert API");

    // let obj = {
    //     sName: req.body.sName,
    //     sEmail: req.body.sEmail,
    // }
    let { sName, sEmail } = req.body;
    let obj = { sName, sEmail };
    console.log(obj);

    let checkEmail = await studentCollection.findOne({ sEmail });
    console.log(checkEmail);
    if (checkEmail !== null) {
        return (res.send({
            status: 0,
            msg: "Email ID Already exits"
        }))
    } else { 
        let insetRes = await studentCollection.insertOne(obj);

        let resObj = {
          status: 1,
          msg: "Data insert",
          insetRes,
        };
        res.send(resObj);
    }

});

app.delete("/student-delete/:id", async (req, res) => {
  let myDb = await dbConnection();
  let studentCollection = myDb.collection("students");
  let { id } = req.params;
  console.log(id);

  let deleteData = await studentCollection.deleteOne({ _id: new ObjectId(id) });

  let response = {
    status: 1,
    msg: "DELETE DONE",
    deleteData,
  };

  res.send(response); // ✅ fixed variable shadowing
});

app.put("/student-update/:id", async (req, res) => {
    let myDb = await dbConnection();
    let studentCollection = myDb.collection("students");
    let { id } = req.params;    // where
    let { sName, sEmail } = req.body;    //data
    console.log(req.params)
    // let obj = { sName, sEmail };
    let obj = {}; //data

    if (sName !== "" && sName !== undefined && sName !== null) {
      obj["sName"] = sName;
    }

    if (sEmail !== "" && sEmail !== undefined && sEmail !== null) {
      obj["sEmail"] = sEmail;
    }
    console.log(obj)

    let updateData = await studentCollection.updateOne({ _id: new ObjectId(id) }, { $set: obj });

    let resObj = {
        status: 1,
        msg: "Update Data Done",
        updateData,
    }
    res.send(resObj);


    
})

app.listen("8000");
