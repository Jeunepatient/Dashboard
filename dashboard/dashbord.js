let swap = function(a){
    parent = a.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    gestion= a.parentNode
    let item_hidden=parent.querySelector('.contenu.actif')
    let item_shown=parent.querySelector(a.getAttribute('href'))
    if(gestion.classList.contains('active')){
        return false
    }
    //pour changer les navigations entres les onglets
    parent.querySelector('.gestion.active').classList.remove('active')
    gestion.classList.add('active')
    //here we are!for switch the contains of my dashbord
    //pour changer les contenus
    parent.querySelector('.contenu.actif').classList.remove('actif')
    
    if(!parent.querySelector(a.getAttribute('href'))){
        alert('empty link please try to build it , refresh the page in order to be able to use it again!')
    }
    else {
        parent.querySelector(a.getAttribute('href')).classList.add('actif')
    }
    /*
    item_hidden.classList.add('fade')
    item_hidden.classList.remove('in')
    let endtransition = function(e){
        this.classList.remove('actif')
        this.classList.remove('fade')
        item_shown.classList.add('actif')
        item_shown.classList.add('fade')
        item_shown.offsetwidth
        item_shown.classList.add('in')
        item_hidden.removeEventListener('transitionend',endtransition)
    }
    item_hidden.addEventListener('transitionend', endtransition)
    */
   
}

let tab= document.querySelectorAll('.gestion a')
tab.forEach(gestion => {
    gestion.addEventListener('click', function(e){
       swap(this)
    })
})

let url_change = function(e){
    let hash = window.location.hash
    let getter = document.querySelector('a[href="'+hash+'"]')
    if(getter!==null && !getter.parentNode.classList.contains('active')){
        swap(getter)
    }
}
window.addEventListener('hashchange',url_change)
url_change()