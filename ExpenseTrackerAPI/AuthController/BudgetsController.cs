using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ExpenseTrackerAPI.Data;
using ExpenseTrackerAPI.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Security.Claims;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class BudgetsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public BudgetsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/budgets
    [HttpGet]
    public async Task<IActionResult> GetBudgets()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null)
        {
            return Unauthorized();
        }

        var budgets = await _context.Budgets.Where(b => b.UserId == userId).ToListAsync();
        return Ok(budgets);
    }

    // POST: api/budgets
    [HttpPost]
    public async Task<IActionResult> CreateBudget([FromBody] Budget budget)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (userId == null)
        {
            return Unauthorized();
        }

        budget.UserId = userId;
        _context.Budgets.Add(budget);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetBudgets), new { id = budget.Id }, budget);
    }

    // Implement Update and Delete methods similarly
}