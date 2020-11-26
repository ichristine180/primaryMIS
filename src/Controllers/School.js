import moment from "moment";
import random from "random";
import SchoolService from "../services/SchoolService";
class School {
  async registerSchool(req, res) {
    const values = [
      random.int(1, 4),
      req.body.schoolname,
      req.body.schoolLogo,
      req.body.schooolemail,
      req.body.schoolPhone,
      req.body.schoolWebsite,
      req.body.province,
      req.body.district,
      req.body.sector,
      moment(new Date()),
    ];

    SchoolService.createSchool(values)
      .then((school) => {
        res.status(school.status).send({
          status: school.status,
          message: school.message,
          student: school.school.rows[0],
        });
      })
      .catch((err) => {
        res.status(400).send({
          status: 400,
          error: err.message,
        });
      });
  }
}
export default new School();
