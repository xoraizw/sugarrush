const Items = [
    {
        id: 1,
        name: "Basic Buttercream Cakes",
        price: 500,
        img:"buttercream.jpeg",
        class:"cake"
    },
    {
        id: 2,
        name: "Print Cake",
        price: 500,
        img:"print.jpeg",
        class:"cake"
    },
    {
        id: 3,
        name: "Fondant Cake",
        price: 500,
        img:"fondant.jpeg",
        class:"cake"
    },
    {
        id: 4,
        name: "Picture Cake",
        price: 500,
        img:"picture.jpeg",
        class:"cake"
    },
    {
        id: 5,
        name: "Lunchbox Cake",
        price: 500,
        img:"lunchbox.jpeg",
        class:"cake"
    },
    {
        id: 6,
        name: "Plain Cupcakes",
        price: 500,
        img:"plain-cupcakes.jpeg",
        class:"cupcake"
    },
    {
        id: 7,
        name: "Cupcakes with sprinkles",
        price: 500,
        img:"sprinkle-cupcakes.jpeg",
        class:"cupcake"
    },
    {
        id: 8,
        name: "Cupcakes with fondant toppers",
        price: 500,
        img:"fondant-cupcakes.jpeg",
        class:"cupcake"
    },
    {
        id: 9,
        name: "Cookies",
        price: 500,
        img:"cookies.jpeg",
        class:"cookie"
    },
    {
        id: 10,
        name: "Cheesecakes",
        price: 500,
        img:"cheesecake.jpg",
        class:"cheesecake"
    }
]

function itemsFunc(id) 
{
    let productData = Items.find(product => product.id === id);
    if (productData === undefined) 
    {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }
    return productData;
}
export {Items, itemsFunc};
