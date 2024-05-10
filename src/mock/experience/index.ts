import { SkillsEnum } from "@/constants";
import Company from "@/dto/company";
import Experience from "@/dto/experience";
import Skill from "@/dto/skill";
import moment from "moment";

export const EXPERIENCES: Experience[] = [
  {
    position: "Full Stack Developer",
    company: { name: "Onpassive", link: "https://www.onpassive.com/" },
    startDate: {
      date: moment({
        year: 2024,
        month: 0,
        day: 16,
      }).toDate(),
      isPresent: false,
    },
    endDate: {
      date: null,
      isPresent: true,
    },
    responsibilities: [
      "Developed the backend and the frontend infrastructure for the Web conferencing app (O-Connect) using WebRTC, GraphQL server, and Socket-io",
    ],
    skills: [
      { label: SkillsEnum.Typescript },
      { label: SkillsEnum.NodeJs },
      { label: SkillsEnum.WebRTC },
      { label: SkillsEnum.ReactJs },
    ],
    assetURL: null,
  },
  {
    position: "Full Stack Developer",
    company: { name: "Step By Tech", link: "https://www.stepbytech.com" },
    startDate: {
      date: moment({
        year: 2022,
        month: 8,
        day: 2,
      }).toDate(),
      isPresent: false,
    },
    endDate: {
      date: moment({
        year: 2024,
        month: 0,
        day: 9,
      }).toDate(),
      isPresent: false,
    },
    responsibilities: [
      "Developed the backend infrastructure for the Content Management System (CMS) and Content Server (CS) of the Vidnik App.",
      "Designed and implemented the frontend user interfaces for the CMS and CS of the Vidnik App.",
      "Assumed responsibility for Quality Assurance processes and ensured the high performance and reliability of the Vidnik App.",
      "Spearheaded the development of the Step By Tech Website, contributing to a seamless online presence.",
      "Contributed to the development of the Mark Media Website, enhancing the organization's online portfolio.",
      "Orchestrated DevOps tasks, including deployment, Nginx configuration, AWS infrastructure management, and Docker containerization, to streamline development workflow.",
    ],
    skills: [
      { label: SkillsEnum.Typescript },
      { label: SkillsEnum.NodeJs },
      { label: SkillsEnum.NestJs },
      { label: SkillsEnum.ReactJs },
      { label: SkillsEnum.NextJs },
      { label: SkillsEnum.AWS },
      { label: SkillsEnum.Nginx },
      { label: SkillsEnum.Microservice },
    ],
    assetURL: "/assets/images/web-development-1.png",
  },

  //
  {
    position: "Full Stack Developer",
    company: { name: "Darsoft", link: "https://www.darsoft.net" },
    startDate: {
      date: moment({
        year: 2020,
        month: 0,
        day: 2,
      })
        .utc()
        .toDate(),
      isPresent: false,
    },
    endDate: {
      date: moment({
        year: 2022,
        month: 8,
        day: 1,
      }).toDate(),
      isPresent: false,
    },
    responsibilities: [
      "Led the development of the backend and frontend Dashboards for the Sky Education App, I Tabib App, and Gloss And Glow App, enhancing user experiences and functionality across multiple applications.",
      "Assumed the role of Team Leader in the creation of the Tolerance Real Estate Website, ensuring successful project completion and team coordination.",
      "Spearheaded the development of the Darsoft website, contributing to the company's online presence and branding.",
      "Managed DevOps tasks, including AWS infrastructure setup and management, Nginx configuration, EC2 instances, and S3 storage, optimizing deployment and scalability across projects.",
    ],
    skills: [
      { label: SkillsEnum.Javascript },
      { label: SkillsEnum.Typescript },
      { label: SkillsEnum.NodeJs },
      { label: SkillsEnum.ExpressJs },
      { label: SkillsEnum.NestJs },
      { label: SkillsEnum.ReactJs },
      { label: SkillsEnum.NextJs },
      { label: SkillsEnum.AWS },
      { label: SkillsEnum.Nginx },
    ],
    assetURL: "/assets/images/web-development-2.png",
  },
];
