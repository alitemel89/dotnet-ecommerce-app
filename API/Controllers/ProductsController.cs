using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private static List<Product> products = new List<Product>
        {
        };
        private readonly DataContext _context;

        public ProductsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return Ok(await _context.Products.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Product>>> GetProduct(Guid id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return BadRequest("Product not found");
            }
            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult<List<Product>>> AddProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return Ok(await _context.Products.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Product>>> UpdateProduct(Product request)
        {
            var dbProduct = await _context.Products.FindAsync(request.Id);
            if (dbProduct == null)
            {
                return BadRequest("Product not found");
            }
            dbProduct.Name = request.Name;
            dbProduct.Description = request.Description;
            dbProduct.Price = request.Price;
            dbProduct.Category = request.Category;
            dbProduct.StockQuantity = request.StockQuantity;

            await _context.SaveChangesAsync();

            return Ok(await _context.Products.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Product>>> Delete(Guid id)
        {
            var dbProduct = await _context.Products.FindAsync(id);
            if (dbProduct == null)
            {
                return BadRequest("Product not found");
            }
            _context.Products.Remove(dbProduct);
            await _context.SaveChangesAsync();

            return Ok(await _context.Products.ToListAsync());
        }
    }
}