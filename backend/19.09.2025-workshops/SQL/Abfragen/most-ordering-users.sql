SELECT u.id, u.full_name, COUNT(o.order_id) AS total_orders 
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.full_name
ORDER BY total_orders DESC
LIMIT 5;