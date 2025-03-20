SELECT user_id, login_time, ip_address 
FROM login_logs 
WHERE login_time >= NOW() - INTERVAL '30 days'
ORDER BY login_time DESC;