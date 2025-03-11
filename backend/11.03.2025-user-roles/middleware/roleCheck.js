export const roleCheck = (targetRole) => {
    return (req, res, next) => {
        const userRoles = req.user.roles;

        if (!userRoles.includes(targetRole)) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }

        next();
    };
};