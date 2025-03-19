SELECT id, full_name, role 
FROM users 
WHERE role IN ('admin', 'editor', 'moderator');