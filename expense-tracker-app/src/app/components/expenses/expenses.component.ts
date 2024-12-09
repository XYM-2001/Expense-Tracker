import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html'
})
export class ExpensesComponent implements OnInit {
  expenses: any[];

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenseService.getExpenses().subscribe(response => {
      this.expenses = response;
    }, error => {
      console.error('Failed to load expenses', error);
    });
  }
}
