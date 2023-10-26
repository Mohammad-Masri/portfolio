import Company from "../company";
import Skill from "../skill";

interface ExperienceDate {
  date: Date | null;
  isPresent: boolean;
}

export default interface Experience {
  position: string;
  company: Company;
  startDate: ExperienceDate;
  endDate: ExperienceDate;
  responsibilities: string[];
  skills: Skill[];
  assetURL: string | null;
}
