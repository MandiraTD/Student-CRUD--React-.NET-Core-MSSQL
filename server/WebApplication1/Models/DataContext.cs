using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
       
        public DbSet<User> Users { get; set; }
        public DbSet<Student> Students { get; set; }

    }
}
