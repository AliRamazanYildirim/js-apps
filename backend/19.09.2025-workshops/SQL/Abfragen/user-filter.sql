SELECT id, email, full_name, role 
FROM users 
WHERE is_active = true 
  AND role = 'admin'
ORDER BY created_at DESC;