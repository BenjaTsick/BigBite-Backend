using BigBiteBackend.GraphQL;

var builder = WebApplication.CreateBuilder(args);

// Configuramos HotChocolate (GraphQL) e indicamos dónde están las consultas
builder.Services
    .AddGraphQLServer()
    .AddQueryType<Query>();

var app = builder.Build();

// Exponemos el endpoint en la ruta /graphql
app.MapGraphQL();

app.Run();