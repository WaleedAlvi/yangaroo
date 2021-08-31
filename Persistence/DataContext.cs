using Domain;
using Microsoft.EntityFrameworkCore;


namespace Persistence
{
    public class DataContext : DbContext
    {
        public DbSet<Todo> Todos { get; set; }


        public DataContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Todo>().HasKey(key => key.TodoID);
            modelBuilder.Entity<Todo>().Property(p => p.TodoName).IsRequired();
        }
    }
}