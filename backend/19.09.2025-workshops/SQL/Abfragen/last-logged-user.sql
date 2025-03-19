SELECT u.id, u.full_name, l.login_time 
FROM users u
JOIN login_logs l ON u.id = l.user_id
ORDER BY l.login_time DESC
LIMIT 1;