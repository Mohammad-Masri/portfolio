import Company from "../company";
import Skill from "../skill";

export class ExperienceDate {
  date: Date | null;
  isPresent: boolean;
  constructor(date: Date | null, isPresent: boolean) {
    this.date = date;
    this.isPresent = isPresent;
  }
}

export default class Experience {
  position: string;
  company: Company;
  startDate: ExperienceDate;
  endDate: ExperienceDate;
  responsibilities: string[];
  skills: Skill[];
  assetURL: string | null;

  constructor(
    position: string,
    company: Company,
    startDate: ExperienceDate,
    endDate: ExperienceDate,
    responsibilities: string[],
    skills: Skill[],
    assetURL: string | null
  ) {
    this.position = position;
    this.company = company;
    this.startDate = startDate;
    this.endDate = endDate;
    this.responsibilities = responsibilities;
    this.skills = skills;
    this.assetURL = assetURL;
  }
}
