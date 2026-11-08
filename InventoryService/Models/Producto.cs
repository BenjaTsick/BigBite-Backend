using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InventoryService.Models;

public class Producto
{
    public int Id { get; set; }

    [MaxLength(100)] // Le pone un límite sano al texto para que Oracle use NVARCHAR2(100)
    public string Nombre { get; set; } = string.Empty;

    public int Precio { get; set; }

    [Column(TypeName = "NUMBER(1)")] // Obliga a .NET a usar un número de 1 dígito para el booleano
    public bool Disponible { get; set; }
}