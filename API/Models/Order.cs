using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Order
    {
    public string OrderId { get; set; }
    public string CustomerName { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
    public decimal TotalPrice { get; set; }
    public List<OrderItem> Items { get; set; }
    public bool IsDelivered { get; set; }
    }
}