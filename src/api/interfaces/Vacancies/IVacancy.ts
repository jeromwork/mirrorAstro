
export default interface IVacancy {
    id: number; // Unique identifier for the Vacancy
    title: string; // Title of the job position
    description?: string; // Description of the job position, can be empty
    url: string; // URL path to the job listing details
    published: number; // Indicator of whether the job listing is published (1 for true, 0 for false)
    price: string; // Salary range for the position
    content: string; // Detailed HTML content describing the Vacancy
    clinics: number[]; // Array of clinic IDs where the job is available
    images: string[]; // Array of image URLs related to the Vacancy
    resource_id: number; // Identifier for the resource
}
