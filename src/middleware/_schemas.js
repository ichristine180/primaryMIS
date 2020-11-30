/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import Joi from "@hapi/joi";
import { join } from "lodash";

const schemas = {};

const email = Joi.string()
  .trim()
  .lowercase()
  .email()
  .required()
  .label("Email is required and should look like this : example@email.com!");
const password = Joi.string()
  .min(3)
  .required()
  .label(
    "Password is required,  it must have at least 5 letters"
  );

schemas.createUser = Joi.object().keys({
  names: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z_-]+$/)
    .min(5)
    .label(
      "First name and second name are required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"
    ),
  email,
  phone: Joi.string()
    .min(3)
    .required()
    .label(
      "Phone is required,  it must have at least 3 letters and must contain only letters"
    ),
  role: Joi.string()
    .valid("TEACHER", "DOS", "HEAD_MASTER")
    .required()
    .label("Role is required, it must be admin or moderator"),
  password,
});

schemas.login = Joi.object().keys({
  email,
  password,
});
schemas.resetPassword=Joi.object().keys({
  userid:Joi.any().required().label(
    "User id is required"
  ),
  password
})

schemas.registerStudent = Joi.object().keys({
  studentnames: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z_-]+$/)
    .min(5)
    .label(
      "First name and second name are required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"
    ),
  parentsemail: Joi.string()
    .trim()
    .lowercase()
    .email()
    .required()
    .label("Email is required and should look like this : example@email.com!"),
  parentsphonenumber: Joi.string()
    .min(3)
    .required()
    .label(
      "Phone is required,  it must have at least 3 letters and must contain only letters"
    ),
});
schemas.createSubject = Joi.object().keys({
  subjectname: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z_-]+$/)
    .min(5)
    .label(
      "Subject name are required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"
    ),
  catmax: Joi.number()
    .required()
    .label("CAT maximum marks is required and must be a number"),
  exammax: Joi.number()
    .min(3)
    .required()
    .label("Exam maximumu marks is required and must be number"),
  levelid: Joi.any().required().label("Level id n is required"),
  teacherid: Joi.any().required().label("Techer id is required"),
});

schemas.schoolSchema = Joi.object().keys({
  schoolName: Joi.string()
    .required()
    .min(3)
    .label("School name is required and must contain at least 3 letters"),
  schoolLogo: Joi.string()
    .required()
    .min(3)
    .label("School logo is required and must contain at least 3 letters"),
  schooolemail: Joi.string()
    .email()
    .required()
    .min(5)
    .label(
      "School email is required and must contain at least  letters, format xxx@gmail.com"
    ),
  schoolPhone: Joi.string()
    .required()
    .min(10)
    .label("School phone is required and must contain at least 10 digits"),
  schoolWebsite: Joi.string()
    .required()
    .min(5)
    .label("School website is required and must contain at least 5 letters"),
  province: Joi.string()
    .required()
    .min(3)
    .label("School province is required and must contain at least 3 letters"),
  district: Joi.string()
    .required()
    .min(3)
    .label("School district is required and must contain at least 3 letters"),
  sector: Joi.string()
    .required()
    .min(3)
    .label("School sector is required and must contain at least 3 letters"),
});

export default schemas;
