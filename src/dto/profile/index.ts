import Skill from "../skill";

export default interface Profile {
  firstName: string;
  lastName: string;
  position: string;
  summary: string[];
  email: string;
  profilePhotoLink: string;
  linkedin: string;
  github: string;
  phoneNumber: string;
  whatsappNumber: string;
  skills: Skill[];
}
