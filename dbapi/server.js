const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

//mysql connection

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "newdbcyber",
  port: "3306",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to Mysql database=", err);
    return;
  }
  console.log("Mysql successfully connected!");
});

//create routes
app.post("/create", async (req, res) => {
  const { email, name, password } = req.body;

  try {
    connection.query(
      "INSERT INTO users(email,fullname,password) VALUES(?,?,?)",
      [email, name, password],
      (err, results, field) => {
        if (err) {
          console.log("Eror While Insert a user into database", err);
          return res.status((400).send)();
        }
        return res.status(201).json({
          message: "new user sucess create",
        });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

//read
app.get("/users", async (req, res) => {
  try {
    connection.query("SELECT * FROM users", (err, results, field) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      res.status(200).json(results);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

//read just email
app.get("/users/single/:email", async (req, res) => {
  const email = req.params.email;
  try {
    connection.query(
      "SELECT * FROM users WHERE email=?",
      [email],
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

// UPDATE data
app.patch("/update/:email", async (req, res) => {
  const email = req.params.email;
  const newPassword = req.body.newPassword;

  try {
    connection.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [newPassword, email],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res
          .status(200)
          .json({ message: "Users password updated successfully!" });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

//delete
app.delete("/delete/:email", async (req, res) => {
  const email = req.params.email;

  try {
    connection.query(
      "Delete FROM users Where email=?",
      [email],
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: "no user in table " });
        }
        return res.status(200).json({ message: "delete ok " });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

//project
//read
app.get("/linegreen", async (req, res) => {
  try {
    connection.query(
      "SELECT *  FROM `linegreenyear`",
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

// app.get("/linered",async(req,res)=>{
//     try{
//         connection.query("SELECT * FROM `lineredyear`",(err,results,field)=>{
//             if(err){
//                 console.log(err);
//                 return res.status(400).send();
//             }
//             res.status(200).json(results)
//         })
//     }catch(err){
//         console.log(err);
//         return res.status(500).send();

//     }
// })

app.get("/line2024", async (req, res) => {
  try {
    connection.query(
      "SELECT `jan`,`feb`,`mar`,`apr`,`may`,`jun`,`july`,`aug`,`sept`,`oct`,`nov`,`dec` FROM `top5yearsql` WHERE `year` = '2024';",
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

app.get("/pie2024", async (req, res) => {
  try {
    connection.query(
      "SELECT `type`,( `jan` + `feb` + `mar` + `apr` + `may` + `jun` + `july` + `aug` + `sept` + `oct` + `nov` + `dec` ) AS total FROM `top5yearsql` WHERE `year` = '2024';",
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});



app.get("/risk2024", async (req, res) => {
  try {
    connection.query(
      "SELECT `year`,`financial`,`operational`,`personnel`,`governance`,`reputation` FROM `riskyearsql` WHERE `year` ='2024';",
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});


app.get("/im2024", async (req, res) => {
  try {
    connection.query(
      "SELECT `im_fi`,`im_op`,`im_pe`,`im_go`,`im_re`  FROM `riskyearsql` WHERE `year`='2024';",
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

app.get("/p2024", async (req, res) => {
  try {
    connection.query(
      "SELECT `p_fi`,`p_op`,`p_pe`,`p_go`,`p_re`from riskyearsql WHERE `year`='2024';",
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});




// app.get("/p2024", async (req, res) => {
//   try {
//     connection.query(
//       "SELECT `p_fi`,`p_op`,`p_pe`,`p_go`,`p_re` FROM `riskyearsql` WHERE `year`='2024';",
//       (err, results, field) => {
//         if (err) {
//           console.log(err);
//           return res.status(400).send();
//         }
//         res.status(200).json(results);
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send();
//   }
// });

// app.get("/p2024", async (req, res) => {
//   try {
//     connection.query(
//       "SELECT `p_fi`,`p_op`,`p_pe`,`p_go`,`p_re` FROM `riskyearsql` WHERE `year`='2024';",
//       (err, results, field) => {
//         if (err) {
//           console.log(err);
//           return res.status(400).send();
//         }
//         res.status(200).json(results);
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send();
//   }
// });

// app.get("/selectdata/:year", async (req, res) => {
//   const year = req.params.year;
//   try {
//     connection.query(
//       "SELECT `year`,`financial`,`operational`,`personnel`,`governance`,`reputation` FROM `riskyearsql` WHERE `year` = ?;",
//       [email],
//       (err, results, field) => {
//         if (err) {
//           console.log(err);
//           return res.status(400).send();
//         }
//         res.status(200).json(results);
//       }
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send();
//   }
// });


app.get("/selectdata/:year", async (req, res) => {
  const year = req.params.year; // รับค่าปีจากพารามิเตอร์ URL
  try {
    connection.query(
      "SELECT `year`,`financial`,`operational`,`personnel`,`governance`,`reputation` FROM `riskyearsql` WHERE `year` = ?;",
      [year], // ส่ง year เป็นพารามิเตอร์ให้กับ query
      (err, results, fields) => {
        if (err) {
          console.log(err);
          return res.status(400).send(); // ถ้าเกิดข้อผิดพลาดในการ query
        }
        res.status(200).json(results); // ส่งผลลัพธ์กลับเป็น JSON
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send(); // จัดการข้อผิดพลาดในส่วนของเซิร์ฟเวอร์
  }
});


app.get("/line/:year", async (req, res) => {
  const year = req.params.year; // รับค่าปีจากพารามิเตอร์ URL
  try {
    connection.query(
      "SELECT `jan`, `feb`, `mar`, `apr`, `may`, `jun`, `july`, `aug`, `sept`, `oct`, `nov`, `dec` FROM `top5yearsql` WHERE `year` = ?;",
      [year], // ส่ง year เป็นพารามิเตอร์ให้กับ query
      (err, results) => {
        if (err) {
          console.log(err);
          return res.status(400).send(); // ถ้าเกิดข้อผิดพลาดในการ query
        }
        res.status(200).json(results); // ส่งผลลัพธ์กลับเป็น JSON
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send(); // จัดการข้อผิดพลาดในส่วนของเซิร์ฟเวอร์
  }
});


app.get("/pie/:year", async (req, res) => {
  const year = req.params.year; // รับค่าปีจากพารามิเตอร์ URL
  try {
    connection.query(
      "SELECT `p_fi`,`p_op`,`p_pe`,`p_go`,`p_re`from riskyearsql WHERE `year`=?;",
      [year], // ส่ง year เป็นพารามิเตอร์ให้กับ query
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

app.get("/risk/:year", async (req, res) => {
  const year = req.params.year; // รับค่าปีจากพารามิเตอร์ URL
  try {
    connection.query(
      "SELECT `year`,`financial`,`operational`,`personnel`,`governance`,`reputation` FROM `riskyearsql` WHERE `year` =?;",
      [year], // ส่ง year เป็นพารามิเตอร์ให้กับ query
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

app.get("/im/:year", async (req, res) => {
  const year = req.params.year; // รับค่าปีจากพารามิเตอร์ URL
  try {
    connection.query(
      "SELECT `im_fi`,`im_op`,`im_pe`,`im_go`,`im_re`  FROM `riskyearsql` WHERE `year`=?;",[year],
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

app.get("/pie/:year", async (req, res) => {
  const year = req.params.year; // รับค่าปีจากพารามิเตอร์ URL
  try {
    connection.query(
      "SELECT `p_fi`,`p_op`,`p_pe`,`p_go`,`p_re`from riskyearsql WHERE `year`=?;",[year],
      (err, results, field) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

app.listen(3001, () => console.log("server is running on port 3001"));

