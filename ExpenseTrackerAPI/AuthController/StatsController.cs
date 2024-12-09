using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ExpenseTrackerAPI.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Security.Claims;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class StatsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public StatsController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet("monthly-expense-trends")]
    public async Task<IActionResult> GetMonthlyExpenseTrends()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var trends = await _context.Expenses
            .Where(e => e.UserId == userId)
            .GroupBy(e => new { e.Date.Year, e.Date.Month })
            .Select(g => new
            {
                Year = g.Key.Year,
                Month = g.Key.Month,
                Total = g.Sum(e => e.Amount)
            })
            .ToListAsync();

        return Ok(trends);
    }

    [HttpGet("category-wise-breakdown")]
    public async Task<IActionResult> GetCategoryWiseBreakdown()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var breakdown = await _context.Expenses
            .Where(e => e.UserId == userId)
            .GroupBy(e => e.Category)
            .Select(g => new
            {
                Category = g.Key,
                Total = g.Sum(e => e.Amount)
            })
            .ToListAsync();

        return Ok(breakdown);
    }
}