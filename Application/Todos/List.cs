using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Todos
{
    public class List
    {
        public class Query: IRequest<List<Domain.Todo>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Domain.Todo>>
        {
            private readonly DataContext _context;
            
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Domain.Todo>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Todos.ToListAsync();
            }
        }
    }
}
