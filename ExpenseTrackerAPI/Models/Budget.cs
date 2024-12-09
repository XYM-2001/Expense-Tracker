using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerAPI.Models
{
    public class Budget
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; } = string.Empty;

        [Required]
        public int Month { get; set; }

        [Required]
        [Range(0.01, double.MaxValue)]
        public decimal BudgetAmount { get; set; }

        public User User { get; set; } = new User();
    }
}