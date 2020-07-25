const { User } = require('../../model/user');

const bcrypt = require('bcrypt');

module.exports = async(req, res, next) => {
    const { username, email, password, role, state } = req.body;
    const id = req.query.id;
    let user = await User.findOne({ _id: id });
    // check hashed passwords
    let isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
        await User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        });
        res.redirect('/admin/user');
    } else {
        next(JSON.stringify({ path: '/admin/user-edit', message: 'Password does not match.', id: id }));
    }
}