using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>
                {
                    new Product
                    {
                        Name = "Lipstick",
                        Description = "Long-lasting matte lipstick",
                        Price = 9.99M,
                        Category="Make-Up",
                        StockQuantity=12
                    },
                    new Product
                    {
                        Name = "Mascara",
                        Description = "Lengthening and volumizing mascara",
                        Price = 12.99M,
                        Category= "Make-Up",
                        StockQuantity=5
                    },
                    new Product
                    {
                        Name = "Foundation",
                        Description = "Medium-coverage liquid foundation",
                        Price = 14.99M,
                        Category="Skin Care",
                        StockQuantity=5
                    },
                    new Product
                    {
                        Name = "Dove Hair Therapy",
                        Description = "Collagen Shampoo",
                        Price = 7.99M,
                        Category="Hair Care",
                        StockQuantity=2
                    },
                    new Product
                    {
                        Name = "Nivea",
                        Description = "48h Clinical Protection",
                        Price = 8.99M,
                        Category="Parfume Deodorant" ,
                        StockQuantity=4
                    }
                };


            await context.Products.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }
}