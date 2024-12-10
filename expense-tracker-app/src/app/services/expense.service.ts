import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense.model'; // Ensure this path is correct

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = 'http://localhost:5000/api/expenses'; // Adjust the API URL as needed

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

  addExpense(expense: Expense): Observable<any> {
    return this.http.post(this.apiUrl, expense);
  }

  // Other methods as needed
}
