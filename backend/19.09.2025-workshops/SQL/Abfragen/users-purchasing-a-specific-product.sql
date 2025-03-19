SELECT DISTINCT u.id, u.full_name, u.email 
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE p.name = 'Laptop';