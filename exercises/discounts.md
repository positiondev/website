Welcome to the code challenge part of the application process for Position Development.

## What we're looking for

We expect you to spend 2-4 hours on this, and you might not finish all of the features.
We're looking for well-tested and well-organized code. And we're looking to see how you think about coding. 
So, if possible, document your process, any questions you had, or any assumptions that you made.

## Discount Codes

Our task is to develop a system for processing discount codes for our ecommerce app.
We need to take take orders with and without discount codes, determine the total cost, 
and print out a nicely formatted result.

Don't worry too much if your solution doesn't isn't formatted exactly like the examples or doesn't have all of the features. The key is that the output should be legible, and the total should be correct.


#### Your models:

```ruby
LineItem = Struct.new(:product_id, :quantity)
Order = Struct.new(:line_items, :discount_code)
Discount = Struct.new(:code, :percentage, :type, :product_ids)
Product = Struct.new(:name, :price_cents)
```

#### Sample Products:

```ruby
product_database = { 
  1 => Product.new("Black Jacobins", 20_00),
  2 => Product.new("Freedom Is a Constant Struggle", 15_00)
}
```

#### Sample discounts:
There are two types of discount, `:all` means it applies to any product in the cart, 
and `:product_list` only applies to the products indicated in `:product_ids`.


```ruby
discount_database = { 
  1 => Discount.new(:WELCOME, 50, :all), # this discount gives 50% off any product
  2 => Discount.new(:JAC75, 75, :product_list, [1]) # this discount gives a 75% discount off of "Black Jacobins"
}
```

#### A simple example:

```
> cart = Order.new([LineItem.new(1, 1)])
...
> CartApplication.display_cart(cart)

=>
Your cart:

1 copy of "Black Jacobins" for $20.00
---
Total $20.00
```

#### An example with a discount:

```
> cart = Order.new([
>   LineItem.new(1, 1),
>   LineItem.new(2, 1),
> ], :WELCOME)
...
> CartApplication.display_cart(cart)

=>
Your cart:

$10.00 (Original Price $20.00) for 1 copy of "Black Jacobins" 
 $7.50 (Original Price $15.00) for 1 copy of "Freedom Is a Constant Struggle"
---
Total $17.50
```

#### An example with a product_list discount:

```
> cart = Order.new([
>   LineItem.new(1, 1),
>   LineItem.new(2, 1),
> ], :JAC75)
...
> CartApplication.display_cart(cart)

=>
Your cart:

 $5.00 (Original Price $20.00) for 1 copy of "Black Jacobins" 
$15.00                         for 1 copy of "Freedom Is a Constant Struggle"
---
Total $20.00
```
