using System;
using System.ComponentModel.DataAnnotations;

namespace ExpenseTrackerAPI.Models
{
    public class Expense
    {
        public int Id { get; set; }

        public decimal Amount { get; set; }

        public string Category { get; set; } = string.Empty;

        public DateTime Date { get; set; }

        public string UserId { get; set; } = string.Empty;
        public User User { get; set; } = new User();
    }
}