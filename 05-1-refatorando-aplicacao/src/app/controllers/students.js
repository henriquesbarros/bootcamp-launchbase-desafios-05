const { age, grade, date } = require('../../lib/utils')

module.exports = {
    index(req, res){
        return
    },
    create(req, res){
        return 
    },
    post(req, res){
        const keys = Object.keys(req.body)
        for(key of keys) {
            if (req.body[key] == "") {
                return res.send("Por favor, preencha todos os campos!")
            }
        }
    
        
    },
    show(req, res){
        return
    },
    edit(req, res){
        return
    },
    update(req, res){
        return
    },
    delete(req, res){
        return
    }
}

