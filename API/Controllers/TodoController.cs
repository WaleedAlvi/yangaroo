using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Todos;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TodoController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Todo>>> GetTodos()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpPost]
        public async Task<IActionResult> CreateTodo([FromBody]Todo todoItem)
        {
            return Ok(await _mediator.Send(new Create.Command { TodoItem = todoItem }));
        }
    }
}
