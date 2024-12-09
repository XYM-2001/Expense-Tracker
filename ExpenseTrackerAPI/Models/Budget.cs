namespace ExpenseTrackerAPI.Models
{
    public class Budget
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public int Month { get; set; }
        public decimal BudgetAmount { get; set; }
        
        public User User { get; set; }
    }
}