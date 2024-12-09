using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace ExpenseTrackerAPI.Models
{
    public class User : IdentityUser
    {
        public string FullName { get; set; } = string.Empty;
        public ICollection<Expense> Expenses { get; set; } = new List<Expense>();
        public ICollection<Budget> Budgets { get; set; } = new List<Budget>();
    }
}