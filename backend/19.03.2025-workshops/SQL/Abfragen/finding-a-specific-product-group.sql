SELECT DISTINCT u.id, u.full_name, u.email 
FROM users u
WHERE u.id IN (
    SELECT o.user_id
    FROM orders o
    JOIN order_items oi ON o.order_id = oi.order_id
    JOIN products p ON oi.product_id = p.id
    WHERE p.category = 'Electronics'
);