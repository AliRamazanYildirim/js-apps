INSERT INTO users (email, password, full_name, created_at) 
VALUES ('newuser@example.com', crypt('securepassword', gen_salt('bf')), 'Ali Kilic', NOW());