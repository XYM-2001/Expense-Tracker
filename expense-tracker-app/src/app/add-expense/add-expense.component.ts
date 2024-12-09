import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, RouterModule],
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense: any = {};

  constructor(private expenseService: ExpenseService, private router: Router) { }

  addExpense() {
    this.expenseService.addExpense(this.expense).subscribe(response => {
      this.router.navigate(['/expenses']);
    }, error => {
      console.error('Failed to add expense', error);
    });
  }
}
