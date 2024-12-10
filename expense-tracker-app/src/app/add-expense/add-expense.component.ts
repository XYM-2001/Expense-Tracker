import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../services/expense.service';
import { RouterModule, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, RouterModule],
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense: any = {};
  categories: string[] = ['Food', 'Transportation', 'Utilities', 'Entertainment', 'Other'];

  constructor(private expenseService: ExpenseService, private router: Router, private snackBar: MatSnackBar) {}

  addExpense() {
    this.expenseService.addExpense(this.expense).subscribe(
      () => {
        this.snackBar.open('Expense added successfully!', 'Close', { duration: 3000 });
        this.router.navigate(['/expenses']);
      },
      (error) => {
        console.error('Failed to add expense', error);
        this.snackBar.open('Failed to add expense.', 'Close', { duration: 3000 });
      }
    );
  }
}
