import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ExpenseService } from '../services/expense.service';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [MatTableModule, MatCardModule],
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = []; // Use the Expense interface
  displayedColumns: string[] = ['date', 'amount', 'category'];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenseService.getExpenses().subscribe(
      (response: any) => {
        this.expenses = response;
      },
      (error: any) => {
        console.error('Failed to load expenses', error);
      }
    );
  }
}
