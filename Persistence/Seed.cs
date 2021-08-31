using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedTodos(DataContext context)
        {
            if (context.Todos.Any()) return;

            var SampleTodo = new Todo
            {
                TodoName = "This is the first Todo",
            };

            await context.Todos.AddAsync(SampleTodo);
            await context.SaveChangesAsync();
        }
    }
}
