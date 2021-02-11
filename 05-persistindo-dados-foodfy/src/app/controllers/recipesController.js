const Recipe = require('../models/Recipe')

module.exports = {
    index(req, res){
        Recipe.index(function(recipes){
            return res.render('admin/recipes/index', { recipes })
        })
    },
    create(req, res){
        Recipe.chefSelect(function(chefs){
            return res.render('admin/recipes/create', { chefOptions: chefs })
        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)
        for(key of keys){
            if (req.body[key] == ""){
                return res.send("Por favor, preencha todos os campos!")
            }
        }
    
        Recipe.create(req.body, function(recipe){
            return res.redirect(`/admin/recipes/${recipe.id}`)
        })
    },
    show(req, res){
        Recipe.find(req.params.id, function(recipe){
            return res.render('admin/recipes/show', { recipe })
        })
    },
    edit(req, res){
        Recipe.find(req.params.id, function(recipe){
            Recipe.chefSelect(function(chefs){
                return res.render('admin/recipes/edit', { recipe, chefOptions: chefs })
            })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)
        for(key of keys){
            if (req.body[key] == ""){
                return res.send("Por favor, preencha todos os campos!")
            }
        }
    
        Recipe.update(req.body, function(){
            return res.redirect(`/admin/recipes/${req.body.id}`)
        })
    },
    delete(req, res) {
        Recipe.delete(req.body.id, function(){
            return res.redirect(`/admin/recipes`)
        })
    }
}
