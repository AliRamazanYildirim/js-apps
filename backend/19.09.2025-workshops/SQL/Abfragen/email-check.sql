SELECT id, email, full_name 
FROM users 
WHERE email = 'user@example.com' 
  AND password = crypt('password123', password);