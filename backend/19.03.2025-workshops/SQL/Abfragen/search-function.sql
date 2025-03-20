SELECT id, name, price, description 
FROM products 
WHERE name ILIKE '%laptop%' 
   OR description ILIKE '%laptop%'
ORDER BY price ASC;