import type IDoctor from './IDoctor';
export default interface IDoctorsResponse {
    doctors: IDoctor[];
    count: number;
    schedule: any[]; // Replace 'any' with a proper type for schedule if possible
}
