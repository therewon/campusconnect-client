export type FormData = {
  // Step1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;

  // Step2
  university: string;
  degree: string;
  faculty: string;
  specialty: string;
  admissionYear: string;
  studentCard: File | null;

  // Step3
  categories: [],

  // Step4
  agreeToTerms: boolean;
};