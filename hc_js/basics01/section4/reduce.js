// const Nums = [1, 2, 3];

// const total = Nums.reduce( (acc,current_val) => {
//     console.log(`acc: ${acc} and current: ${current_val}`);
//     return acc + current_val;
// }, 0 )

// console.log(total);

const Cart = [
    {
        itemName: "Js",
        price: 3549,
    },
    {
        itemName: "DSA",
        price: 9999,
    },
    {
        itemName: "WebDev",
        price: 7999,
    },
]
const totalPrice = Cart.reduce( (acc,item) => acc + item.price, 0 )
console.log(`total price of all courses is  Rs. ${totalPrice}`);