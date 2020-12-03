import { async } from "regenerator-runtime";
import {
  catOneSumPerTerm,
  catOneSumPerYear,
  catTwoSumPerTerm,
  catTwoSumPerYear,
  examSumPerTerm,
  examSumPerYear,
  maxMarks,
} from "../database/queries/Points";
import db from "../database/connection/query";

export const getReportSumationInTerm = async (payload) => {
  let sumCatOnePerTerm = await db.query(catOneSumPerTerm, payload);
  if (sumCatOnePerTerm) {
    let sumCatTwoPerTerm = await db.query(catTwoSumPerTerm, payload);
    if (sumCatTwoPerTerm) {
      let examSumPerTermRes = await db.query(examSumPerTerm, payload);
      if (examSumPerTermRes) {
        let maxkMarksRes = await db.query(maxMarks);
        if (maxkMarksRes) {
            const  average=((sumCatOnePerTerm.rows[0].catonesuminterm+sumCatTwoPerTerm.rows[0].cattwosuminterm+examSumPerTermRes.rows[0].examsumperterm)*100)/maxkMarksRes.rows[0].totalmax;
          return {"report":{
            catOneSumInTerm: sumCatOnePerTerm.rows[0].catonesuminterm,
            catTwoSumInTerm: sumCatTwoPerTerm.rows[0].cattwosuminterm,
            examSumInTerm: examSumPerTermRes.rows[0].examsumperterm,
            maxMarks:maxkMarksRes.rows[0],
            average
          }};
        } else {
          return {
            status: 400,
            message: "Error occured on markMarksRes query",
          };
        }
      } else {
        return {
          status: 400,
          message: "Error occured on examSumPerTerm query",
        };
      }
    } else {
      return {
        status: 400,
        message: "Error occured on sumCatTwoPerTerm query",
      };
    }
  } else {
    return { status: 400, message: "Error occured on sumCatOnePerTerm query" };
  }

  
};

export const getReportSumationInYear = async (payload) => {
    let sumCatOnePerYear = await db.query(catOneSumPerYear, payload);
    if (sumCatOnePerYear) {
      let sumCatTwoPerYear = await db.query(catTwoSumPerYear, payload);
      if (sumCatTwoPerYear) {
        let examSumResPerYear = await db.query(examSumPerYear, payload);
        if (examSumResPerYear) {
            console.log(sumCatOnePerYear.rows[0]);
            console.log(sumCatTwoPerYear.rows[0]);
            console.log(examSumResPerYear.rows[0]);
          let maxkMarksRes = await db.query(maxMarks);
          if (maxkMarksRes) {
              const  average=((sumCatOnePerYear.rows[0].catonesuminyer+sumCatTwoPerYear.rows[0].cattwosuminyear+examSumResPerYear.rows[0].examsumperyear)*100)/maxkMarksRes.rows[0].totalmax;
            return {"report":{
              catOneSumInTerm: sumCatOnePerYear.rows[0].catonesuminyer,
              catTwoSumInTerm: sumCatTwoPerYear.rows[0].cattwosuminyear,
              examSumInTerm: examSumResPerYear.rows[0].examsumperyear,
              maxMarks:maxkMarksRes.rows[0],
              average
            }};
          } else {
            return {
              status: 400,
              message: "Error occured on markMarksRes query",
            };
          }
        } else {
          return {
            status: 400,
            message: "Error occured on examSumPerTerm query",
          };
        }
      } else {
        return {
          status: 400,
          message: "Error occured on sumCatTwoPerTerm query",
        };
      }
    } else {
      return { status: 400, message: "Error occured on sumCatOnePerTerm query" };
    }
  
    
  };
  
