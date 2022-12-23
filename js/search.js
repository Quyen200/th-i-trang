const a = [{
        id: 1,
        img: 'src="img/image 33.png"',
        trademark: 'Kids',
        name: 'Yellow T-Shirt',
        price: 300,
        discount: 180,
    },
    {
        id: 2,
        img: '',
        trademark: 'Women',
        name: 'Ethnic Kurti',
        price: 300,
        discount: 180,
    },
    {
        id: 3,
        img: '',
        trademark: 'Women',
        name: 'Kurtis, Tunics &; Tops',
        price: 300,
        discount: 180,
    },
    {
        id: 4,
        img: '',
        trademark: 'Men',
        name: 'Round Neck T-shirt',
        price: 300,
        discount: 180,
    }
]

function shope(a) {
    var b = 0;
    for (var i = 0; i < a.length; i++) {
        b += a[i].price;
    }
    return b;
}
shope(a)