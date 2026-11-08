using InventoryService.Data; // Asegura que encuentre tu AppDbContext
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// 1. Configurar la conexión a Oracle usando la cadena de tu appsettings.json
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseOracle(builder.Configuration.GetConnectionString("OracleConnection")));

// 2. Agregar soporte para los Controladores (nuestros Endpoints CRUD)
builder.Services.AddControllers();

// 3. Configurar las herramientas de Swagger para la interfaz visual
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// 4. Activar la página web de Swagger cuando estemos programando (modo Desarrollo)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 5. Mapear las rutas y arrancar el servidor
app.UseAuthorization();
app.MapControllers();

app.Run();