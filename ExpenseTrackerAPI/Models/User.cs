using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace ExpenseTrackerAPI.Models
{
    public class User : IdentityUser
    {
        public string FullName { get; set; }
        public ICollection<Expense> Expenses { get; set; }
        public ICollection<Budget> Budgets { get; set; }
    }
}