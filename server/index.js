const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345678",
    database: "sspl",
});

app.post("/group", (req, res) => {
    const groupname = req.body.groupname;
    const groupheadid = req.body.grouphead;
    const divisionheadid = req.body.divisionhead;
    const to = req.body.to;
    const oic = req.body.oic;

    db.query(
        "INSERT INTO sspl.group (group_name, group_head_id, division_head_id, to_id, oic_id) VALUES (?,?,?,?,?)",
        [groupname, groupheadid, divisionheadid, to, oic],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted of Group");
            }
        }
    );
});

app.post("/employee", (req, res) => {

    const icno = req.body.icno;
    const fname = req.body.fname;
    const mname = req.body.mname;
    const lname = req.body.lname;
    const designation = req.body.designation;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const dojsspl = req.body.dojsspl;
    const dojdrdo = req.body.dojdrdo;
    const dojdpr = req.body.dojdpr;
    const inum = req.body.inum;
    const mnum = req.body.mnum;
    const pma = req.body.pma;
    const cadre = req.body.cadre;
    const pop = req.body.pop;
    const pra = req.body.pra;
    const imail = req.body.imail;
    const smail = req.body.smail;
    const groupdivision = req.body.groupdivision;
    const groupofficer = req.body.groupofficer;
    const divisionofficer = req.body.divisionofficer;
    const techdirector = req.body.techdirector;
    const image = req.body.image;
    const remarks = req.body.remarks;


    db.query(
        "INSERT INTO sspl.employee (icno,f_name,m_name,l_name,designation,gender,DOB,DOJSSPL,DOJDRDO,DPR,internal_no,mobile_no,permanent_add,place_of_posting,cadre,present_add,internet_mail,sspl_mail,group_division,group_officer,division_officer,technical_director,profile_image,remarks) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [icno, fname, mname, lname, designation, gender, dob, dojsspl, dojdrdo, dojdpr, inum, mnum, pma, pop, cadre, pra, imail, smail, groupdivision, groupofficer, divisionofficer, techdirector, image, remarks],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted of Employee");
            }
        }
    );
});

app.get("/getemployees", (req, res) => {
    db.query("SELECT * FROM sspl.employee", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});



app.post("/designation", (req, res) => {
    const icno = req.body.icno;
    const designation = req.body.designation;

    db.query(
        "INSERT INTO sspl.designation (icno,designation_name) VALUES (?,?)",
        [icno, designation],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted of Designation");
            }
        }
    );
});

app.put("/updateEmployeeName", (req, res) => {
    const icno = req.body.icno;
    const newname = req.body.newname;
    db.query(
        "UPDATE sspl.employee SET f_name = ? WHERE icno = ?",
        [newname, icno],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.put("/updateEmployeeDesignation", (req, res) => {
    const icno = req.body.icno;
    const newdesignation = req.body.newdesignation;
    db.query(
        "UPDATE sspl.employee SET designation = ? WHERE icno = ?",
        [newdesignation, icno],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.put("/updateEmployeeDob", (req, res) => {
    const icno = req.body.icno;
    const newdob = req.body.newdob;
    db.query(
        "UPDATE sspl.employee SET DOB = ? WHERE icno = ?",
        [newdob, icno],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.put("/updateEmployeeDojsspl", (req, res) => {
    const icno = req.body.icno;
    const newdojsspl = req.body.newdojsspl;

    db.query(
        "UPDATE sspl.employee SET DOJSSPL = ? WHERE icno = ?",
        [newdojsspl, icno],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.put("/updateEmployeeDojdrdo", (req, res) => {
    const icno = req.body.icno;
    const newdojdrdo = req.body.newdojdrdo;
    db.query(
        "UPDATE sspl.employee SET DOJDRDO = ? WHERE icno = ?",
        [newdojdrdo, icno],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.put("/updateEmployeeDopr", (req, res) => {
    const icno = req.body.icno;
    const newdopr = req.body.newdopr;

    db.query(
        "UPDATE sspl.employee SET DOPR = ? WHERE icno = ?",
        [newdopr, icno],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.put("/updateEmployeeMobile", (req, res) => {
    const icno = req.body.icno;
    const newmobile = req.body.newmobile;
    db.query(
        "UPDATE sspl.employee SET mobile_no = ? WHERE icno = ?",
        [newmobile, icno],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});


app.delete("/deleteEmployee/:icno", (req, res) => {
    const icno = req.params.icno;

    db.query("DELETE FROM sspl.employee WHERE icno = ?", [icno], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});




app.listen(3001, () => {
    console.log("Server is Running...")
});


