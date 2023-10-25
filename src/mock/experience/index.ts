import { SkillsEnum } from "@/constants";
import Company from "@/dto/company";
import Experience, { ExperienceDate } from "@/dto/experience";
import Skill from "@/dto/skill";
import moment from "moment";

export const EXPERIENCES: Experience[] = [
  new Experience(
    "Full Stack Developer",
    new Company("Step By Tech", "https://www.stepbytech.com"),
    new ExperienceDate(
      moment({
        year: 2022,
        month: 8,
        day: 2,
      }).toDate(),
      false
    ),
    new ExperienceDate(null, true),
    [
      "Developed the backend infrastructure for the Content Management System (CMS) and Content Server (CS) of the Vidnik App.",
      "Designed and implemented the frontend user interfaces for the CMS and CS of the Vidnik App.",
      "Assumed responsibility for Quality Assurance processes and ensured the high performance and reliability of the Vidnik App.",
      "Spearheaded the development of the Step By Tech Website, contributing to a seamless online presence.",
      "Contributed to the development of the Mark Media Website, enhancing the organization's online portfolio.",
      "Orchestrated DevOps tasks, including deployment, Nginx configuration, AWS infrastructure management, and Docker containerization, to streamline development workflow.",
    ],
    [
      new Skill(SkillsEnum.Typescript),
      new Skill(SkillsEnum.NodeJs),
      new Skill(SkillsEnum.NestJs),
      new Skill(SkillsEnum.ReactJs),
      new Skill(SkillsEnum.NextJs),
      new Skill(SkillsEnum.AWS),
      new Skill(SkillsEnum.Nginx),
      new Skill(SkillsEnum.Microservice),
    ],
    "/assets/images/web-development-1.png"
  ),
  new Experience(
    "Full Stack Developer",
    new Company("Darsoft", "https://www.darsoft.net"),
    new ExperienceDate(
      moment({
        year: 2020,
        month: 0,
        day: 2,
      })
        .utc()
        .toDate(),
      false
    ),
    new ExperienceDate(
      moment({
        year: 2022,
        month: 8,
        day: 1,
      }).toDate(),
      false
    ),
    [
      "Led the development of the backend and frontend Dashboards for the Sky Education App, I Tabib App, and Gloss And Glow App, enhancing user experiences and functionality across multiple applications.",
      "Assumed the role of Team Leader in the creation of the Tolerance Real Estate Website, ensuring successful project completion and team coordination.",
      "Spearheaded the development of the Darsoft website, contributing to the company's online presence and branding.",
      "Managed DevOps tasks, including AWS infrastructure setup and management, Nginx configuration, EC2 instances, and S3 storage, optimizing deployment and scalability across projects.",
    ],
    [
      new Skill(SkillsEnum.Javascript),
      new Skill(SkillsEnum.Typescript),
      new Skill(SkillsEnum.NodeJs),
      new Skill(SkillsEnum.ExpressJs),
      new Skill(SkillsEnum.NestJs),
      new Skill(SkillsEnum.ReactJs),
      new Skill(SkillsEnum.NextJs),
      new Skill(SkillsEnum.AWS),
      new Skill(SkillsEnum.Nginx),
    ],
    "/assets/images/web-development-2.png"
  ),
];
