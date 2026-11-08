using Microsoft.EntityFrameworkCore;
using InventoryService.Models;

namespace InventoryService.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    // Esto le dice a C# que cree una tabla llamada "Productos" usando tu modelo
    public DbSet<Producto> Productos { get; set; }
}