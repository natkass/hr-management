export interface Candidate {
    id: number;
    name: string;
    email: string;
    phone: string;
    appliedPosition: string;
    status: string; // e.g., "Pending", "Selected", "Rejected"
  }
  