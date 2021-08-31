using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Todos
{
    public class Create
    {
        public class Command : IRequest
        {
            public Domain.Todo TodoItem { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Todos.Add(request.TodoItem);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}
