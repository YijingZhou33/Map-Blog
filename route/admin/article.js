const { Article } = require('../../model/article');

const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {

    const page = req.query.page;

    let total = await Article.countDocuments({});

    req.app.locals.currentLink = 'article';

    let articles = await pagination(Article).find().page(page).size(5).display(2).populate('author').exec();

    res.render('admin/article', { articles, total });
};