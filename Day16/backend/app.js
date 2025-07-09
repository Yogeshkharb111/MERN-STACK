// const express = require("express")
// const app = express();

// app.get("/", (req, res) => {
//     res.json({
//         isSucess: true,
//         message: "Server is Running...",
//         data: {},
//     })
// })

// app.listen(2900, () => {
//     console.log("-------Server Started")
// })

// nodemon app.js

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const port = 3000;

// const githubData = {
//   login: "Yogeshkharb111",
//   id: 115645162,
//   node_id: "U_kgDOBuSa6g",
//   avatar_url: "https://avatars.githubusercontent.com/u/115645162?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/Yogeshkharb111",
//   html_url: "https://github.com/Yogeshkharb111",
//   followers_url: "https://api.github.com/users/Yogeshkharb111/followers",
//   following_url:
//     "https://api.github.com/users/Yogeshkharb111/following{/other_user}",
//   gists_url: "https://api.github.com/users/Yogeshkharb111/gists{/gist_id}",
//   starred_url:
//     "https://api.github.com/users/Yogeshkharb111/starred{/owner}{/repo}",
//   subscriptions_url:
//     "https://api.github.com/users/Yogeshkharb111/subscriptions",
//   organizations_url: "https://api.github.com/users/Yogeshkharb111/orgs",
//   repos_url: "https://api.github.com/users/Yogeshkharb111/repos",
//   events_url: "https://api.github.com/users/Yogeshkharb111/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/Yogeshkharb111/received_events",
//   type: "User",
//   user_view_type: "public",
//   site_admin: false,
//   name: "Yogesh kharb",
//   company: null,
//   blog: "",
//   location: "HISAR,INDIA",
//   email: null,
//   hireable: null,
//   bio: "Hello there, I'm Yogesh kharb.\r\n I am currently pursing  Btech from lovely professional university.\r\n",
//   twitter_username: null,
//   public_repos: 25,
//   public_gists: 0,
//   followers: 0,
//   following: 0,
//   created_at: "2022-10-12T14:27:35Z",
//   updated_at: "2025-06-16T07:51:58Z",
// };
  

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/twitter", (req,res) => {
//     res.send("yogeshdotcom")
// })
// app.get("/login", (req,res) => {
//     res.send("<h1>Please login to login slash</h1>")
// })
// app.get("/youtube", (req, res) => {
//     res.send("<h2>please login to Youtube page</h2>")
// })

// app.get("/github", (req, res) => {
//     res.json(githubData)
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`);
// });
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is ready...");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 0,
      title: "joke1",
      content: "this is a joke",
    },
    {
      id: 1,
      title: "joke1",
      content: "this is a joke",
    },
    {
      id: 2,
      title: "joke2",
      content: "this is a joke",
    },
    {
      id: 3,
      title: "joke3",
      content: "this is a joke",
    },
    {
      id: 4,
      title: "joke4",
      content: "this is a joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
