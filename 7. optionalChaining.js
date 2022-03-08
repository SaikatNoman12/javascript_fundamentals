
const products = {
    name1: 'Abdullah Al Nomaan',
    age: 25,
    product:{
        name2:'BD chips',
        age:55,
        page:{
            name3:'BD Products',
            pageGroup:'Face Book'
        }
    },
    company:'BD groups'
};

const page = products.product.page.gift?.fist;
console.log(page);
