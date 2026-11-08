using BigBiteBackend.Models;
using System.Collections.Generic;

namespace BigBiteBackend.GraphQL
{
    public class Query
    {
        // Esta función será accesible desde GraphQL
        public List<Producto> GetMenu()
        {
            return new List<Producto>
            {
                new Producto { Id = 1, Nombre = "Doble Cheese Cuarto de Libra", Precio = 6500, Disponible = true },
                new Producto { Id = 2, Nombre = "Big Crispy Chicken", Precio = 5800, Disponible = true },
                new Producto { Id = 3, Nombre = "Combo Clásico", Precio = 8500, Disponible = false }
            };
        }
    }
}