SELECT p.id, p.name, COUNT(o.product_id) AS total_orders 
FROM products p
JOIN order_items o ON p.id = o.product_id
GROUP BY p.id, p.name
ORDER BY total_orders DESC
LIMIT 10;