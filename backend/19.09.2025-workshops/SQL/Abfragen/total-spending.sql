SELECT u.id, u.full_name, SUM(o.total_amount) AS total_spent 
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.full_name
ORDER BY total_spent DESC;