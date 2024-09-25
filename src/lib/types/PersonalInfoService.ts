import type { PersonalInfo } from "./PersonalInfo"

export type PersonalInfoService = {
  get(): PersonalInfo;
}