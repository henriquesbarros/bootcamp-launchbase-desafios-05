const Chef = require('../models/Chef')

module.exports = {
    index(req, res){
        Chef.index(function(chefs){
            return res.render('admin/chefs/index', { chefs })            
        })
    },
    create(req, res){
        return res.render('admin/chefs/create')
    },
    post(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if (req.body[key] == ""){
                return res.send("Por favor, preencha todos os campos!")
            }
        }

        Chef.create(req.body, function(chef){
            return res.redirect(`/admin/chefs/${chef.id}`)
        })
    },
    show(req, res){
        Chef.find(req.params.id, function(chef){
            Chef.getChefRecipes(req.params.id, function(recipes){
                return res.render('admin/chefs/show', { chef, recipes, total: recipes.length })
            })
        })
    },
    edit(req, res){
        Chef.find(req.params.id, function(chef){
            return res.render('admin/chefs/edit', { chef })
        })
    },
    put(req, res){
        const keys = Object.keys(req.body)
        for(key of keys){
            if (req.body[key] == ""){
                return res.send("Por favor, preencha todos os campos!")
            }
        }

        Chef.update(req.body, function(){
            return res.redirect(`/admin/chefs/${req.body.id}`)
        })
    },
    delete(req, res){
        Chef.getChefRecipes(req.body.id, function(recipes){
            if (recipes.length == 0){
                Chef.delete(req.body.id, function() {
                    return res.redirect(`/admin/chefs`)
                })
            } else {
                return res.send("Não é possível deletar um chef que possui receitas cadastradas!")
            }
        })
        
    }
}


