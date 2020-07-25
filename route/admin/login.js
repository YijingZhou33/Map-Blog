const { User } = require('../../model/user');

const bcrypt = require('bcrypt');

module.exports = async(req, res) => {
    const { email, password } = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: 'Invalid email address or password' });
    }
    let user = await User.findOne({ email });
    if (user) {
        let isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
            req.session.username = user.username;
            req.session.role = user.role;
            req.app.locals.userInfo = user;
            if (user.role == 'admin') {
                res.redirect('/admin/user');
            } else {
                res.redirect('/home/');
            }
        } else {
            return res.status(400).render('admin/error', { msg: 'Invalid email address or password' });
        }
    } else {
        return res.status(400).render('admin/error', { msg: 'Invalid email address or password' });
    }
}