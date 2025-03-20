SELECT id, full_name, email, role 
FROM users 
WHERE role = 'admin' AND is_active = true
ORDER BY full_name ASC;