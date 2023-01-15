const initialData ={
    items: [

    {
         itemName : 'Apple iPhone 13 Pro Max (512GB) - Silver',
         itemImage : 'https://m.media-amazon.com/images/I/61D84NtVgVL._AC_UY218_.jpg',
         itemPrice : '₹1,49,999'   
    },
    {
        itemName : 'Apple iPhone 13 Pro (512GB) - Graphite',
        itemImage : 'https://m.media-amazon.com/images/I/61eDXs9QFNL._AC_UY218_.jpg',
        itemPrice : '₹1,34,000'   
   },
   {
    itemName : 'Apple iPhone 14 Plus 256GB Starlight',
    itemImage : 'https://m.media-amazon.com/images/I/61b7Ew7kjYL._AC_UY218_.jpg',
    itemPrice : '₹98,000'   
},
{
    itemName : ' Apple iPhone 14 Plus 256GB Blue',
    itemImage : 'https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_UY218_.jpg',
    itemPrice : '₹99,999'   
},
{
    itemName : 'Apple iPhone 13 (128GB) - Starlight',
    itemImage : 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY218_.jpg',
    itemPrice : '₹65,799'   
},
{
    itemName : 'Apple iPhone 13 (128GB) - Green',
    itemImage : 'https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY218_.jpg',
    itemPrice : '₹65,599'   
},
{
    itemName : 'Apple iPhone 13 (128GB) - (Product) RED',
    itemImage : 'https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY218_.jpg',
    itemPrice : '₹93,149'   
},
{
    itemName : ' Apple iPhone 13 (256GB) - Pink',
    itemImage : 'https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY218_.jpg',
    itemPrice : '₹75,500'   
},
{
    itemName : ' Apple iPhone 12 (64GB) - Purple',
    itemImage : 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY218_.jpg',
    itemPrice : '₹50,999 '   
},
{
    itemName : ' Apple iPhone 13 Mini (128GB) - Starlight',
    itemImage : 'https://m.media-amazon.com/images/I/61cpernSJuL._AC_UY218_.jpg',
    itemPrice : '₹59,000'   
},
{
    itemName : 'Apple iPhone 13 Pro Max (512GB) - Silver',
    itemImage : 'https://m.media-amazon.com/images/I/61D84NtVgVL._AC_UY218_.jpg',
    itemPrice : '₹1,49,000'   
},
{
    itemName : ' Apple iPhone XR 128GB Black',
    itemImage : 'https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY218_.jpg',
    itemPrice : '₹65,000'   
},
  ]
}
function itemsReducer(state = initialData, action) {
    switch (action.type){
        case 'ADD_ITEM':return{
            ...state,
            items:[...state.items,action.payload]
        }
    }
    return state
}
export default itemsReducer