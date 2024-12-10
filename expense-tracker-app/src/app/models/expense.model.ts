export interface Expense {
  id?: number;          // Optional if the backend generates it
  date: Date;
  amount: number;
  category: string;
  description?: string; // Optional field
  // Add other fields as necessary
}
