import Education, { EducationDate } from "@/dto/education";
import moment from "moment";

export const EDUCATION: Education = new Education(
  "Damascus University",
  new EducationDate(
    moment({
      year: 2016,
      month: 9,
      day: 2,
    }).toDate(),
    false
  ),
  new EducationDate(
    moment({
      year: 2021,
      month: 6,
      day: 2,
    }).toDate(),
    false
  ),
  "Software Engineering",
  "aaaa"
);
