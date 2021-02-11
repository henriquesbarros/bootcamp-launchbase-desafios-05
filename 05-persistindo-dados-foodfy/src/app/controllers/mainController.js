const Recipe = require('../models/Recipe')
const Chef = require('../models/Chef')

module.exports = {
    home(req, res){
        Recipe.index(function(recipes){
            return res.render('main/home', { recipes })
        })
    },
    about(req, res){
        return res.render('main/about')
    },
    index(req, res){
        let { page, limit } = req.query

        page = page || 1
        limit = limit || 6
        let offset = limit * (page - 1)

        const params = {
            page,
            limit,
            offset,
            callback(recipes){
                const pagination = {
                    total: Math.ceil(recipes[0].total / limit),
                    page
                }
                return res.render('main/index', { recipes, pagination })
            }
        }

        Recipe.paginate(params)

    },
    search(req, res){
        const { filter } = req.query

        if (filter) {
            Recipe.findBy(filter, function(recipes){
                return res.render('main/search', { recipes, filter })
            })
        } else {
            Recipe.index(function(recipes){
                return res.render('main/search', { recipes })
            })
        }
    },
    show(req, res){
        Recipe.find(req.params.id, function(recipe){
            res.render('main/show', { recipe })
        })
    },
    chefs(req, res){
        Chef.index(function(chefs){
            return res.render('main/chefs', { chefs })
        })
    }
}

