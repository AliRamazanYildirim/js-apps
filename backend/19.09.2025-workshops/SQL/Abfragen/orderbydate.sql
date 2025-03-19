SELECT order_id, user_id, total_amount, created_at 
FROM orders 
WHERE created_at BETWEEN '2025-03-01' AND '2025-03-19'
ORDER BY created_at DESC;