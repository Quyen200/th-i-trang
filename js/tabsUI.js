// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)


const tabs = document.querySelectorAll('.content-new__btn')
const panes = document.querySelectorAll('.content-shops')
const tabActives = document.querySelector('.content-new__btn.actives')



tabs.forEach((content, index) => {

    const pane = panes[index]


    content.onclick = function() {
        document.querySelector('.content-new__btn.actives').classList.remove('actives')
            // document.querySelector('.content-shops.actives').classList.add('d-hiden')
        document.querySelector('.content-shops.actives').classList.remove('actives')


        this.classList.add('actives')
        pane.classList.add('actives')
            // pane.classList.remove('d-hiden')
    }
})