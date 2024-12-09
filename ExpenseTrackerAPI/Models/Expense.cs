using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerAPI.Models
{
    public class Expense
    {
        public int Id { get; set; }

        [Required]
        public decimal Amount { get; set; }

        public string Category { get; set; }

        [Required]
        public DateTime Date { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }
    }
}