const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
    recipe.addEventListener('click', function(){
        const recipeId = recipe.getAttribute('id')
        window.location.href = `/recipes/${recipeId}`
    })
}

// SHOW AND HIDE

const recipeInfo = document.querySelectorAll('.recipe-information') 
const showInfo = document.querySelectorAll('.show') 

for (let i = 0; i < showInfo.length; i++) {
    showInfo[i].addEventListener('click', function(){
        if(recipeInfo[i].classList.contains('hidden')){
            recipeInfo[i].classList.remove('hidden')
            showInfo[i].innerHTML = "ESCONDER"
        } else {
            recipeInfo[i].classList.add('hidden')
            showInfo[i].innerHTML = "MOSTRAR"
        }
    })
}

// PAGINATION

function paginate(selectedPage, totalPages){
    let pages = [],
    oldPage

    for (let currentPage = 1; currentPage <= totalPages; currentPage++){

        let finalAndInitial = currentPage == 1 || currentPage == 2 || currentPage == totalPages - 1 || currentPage == totalPages
        const pagesAfter = currentPage <= selectedPage + 1
        const pagesBefore = currentPage >= selectedPage - 1

        if (finalAndInitial || pagesAfter && pagesBefore ){
            
            if (oldPage && currentPage - oldPage > 2){
                pages.push("...")
            }

            if (oldPage && currentPage - oldPage == 2){
                pages.push(oldPage + 1)
            }

            pages.push(currentPage)

            oldPage = currentPage
        }
    }

    return pages
}

const pagination = document.querySelector(".pagination")
const page = +pagination.dataset.page
const total = +pagination.dataset.total
const pages = paginate(page, total)

let elements = ""

for (let page of pages) {
    if (String(page).includes("...")) {
        elements += `<span>${page}</span>`
    } else {
        elements += `<a href="?page=${page}">${page}</a>`
    }
}

pagination.innerHTML = elements


