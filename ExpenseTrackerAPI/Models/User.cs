namespace ExpenseTrackerAPI.Models
{
    public class User : IdentityUser
    {
        public ICollection<Expense> Expenses { get; set; }
        public ICollection<Budget> Budgets { get; set; }
    }
}