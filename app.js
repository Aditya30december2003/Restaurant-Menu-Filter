let grid=document.querySelector('.grid')
let buttons=document.querySelectorAll('.button')
let menuArray=[
    {
       id:1,
       type:'curry',
       title:"Butter Chicken",
       img:'imgs/butterc.jpg',
       desc:'In its purest form, it is yogurt-and-spice-marinated chicken dressed in a velvety red bath comprising butter, onions, ginger and tomatoes scented with garam masala, cumin and turmeric, with a cinnamon tang'
    },
    {
        id:2,
        type:'bread',
        title:"Butter Naan",
        img:'imgs/butterN.jpg',
        desc:"It crackly-soft flatbreads singed by heat and yielding to tenderness within, with a faint tang of yogurt. It is exactly the sort of thing you’d love to dip in a pool of curry"
     },
     {
        id:3,
        type:'curry',
        title:"Butter Paneer",
        img:'imgs/butterp.jpg',
        desc:'Cottage cheese cubes are smothered in a creamy, lightly spiced tomato sauce that is downright delicious.'
     },
    {
        id:4,
        type:'main',
        title:"Chicken Biryani",
        img:'imgs/chicken-biryani.jpg',
        desc:"An impeccable amalgamation of creamy butter chicken and majestic biryani. This biryani has a proper butter chicken base, cooked and layered with fried onions, garnished with coriander and roasted cashews."
    },
    {
        id:5,
        type:'starter',
        title:"Chicken Lollipop",
        img:'imgs/chicken-lollipop.jpg',
        desc:"Meat that is luscious, rich, sweet, and zesty. Among the crispy finger-licking chicken appetisers from Indo-Chinese cuisine, this Chicken lollipop is one of the most loved chicken wings starters."
    },
    {
        id:6,
        type:'curry',
        title:"Chicken Tikka Masala",
        img:'imgs/chickent.jpg',
        desc:"Chicken tikka masala, dish consisting of marinated boneless chicken pieces that are traditionally cooked in a tandoor and then served in a subtly spiced tomato-cream sauce."
    },
    {
        id:7,
        type:'main',
        title:"Chole Bhature",
        img:'imgs/chole-bhature.jpg',
        desc:"Punjabi Chole Bhature is not just food; it’s one of the most tempting delicacies to provide ultimate satisfaction to your taste buds."
    },
    {
        id:8,
        type:'bread',
        title:"Garlic Naan",
        img:'imgs/garlicN.jpg',
        desc:"The dough is infused with fresh garlic making it extra delicious."
    },
    {
        id:9,
        type:'curry',
        title:"Kadai Paneer",
        img:'imgs/kadaip.webp',
        desc:"Kadai Paneer is a vibrant, tangy, deeply spiced paneer recipe that is perfect for enjoying all year round. Made with pantry staples like onions, tomatoes, capsicum (green bell peppers) and Indian spices."
    },
    {
        id:10,
        type:'bread',
        title:"Kulcha",
        img:'imgs/Kulcha.jpg',
        desc:"The classic Indian flatbread Kulcha is best enjoyed with a robust Punjabi Chana Masala"
    },
    {
        id:11,
        type:'starter',
        title:"Paneer Tikka",
        img:'imgs/paneer-tikka.jpg',
        desc:"Paneer Tikka is a popular and delicious tandoori snack where Paneerare marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven."
    },
    {
        id:12,
        type:'main',
        title:"Pav Bhaji",
        img:'imgs/pav-bhaji.jpg',
        desc:"Mashed spiced vegetables; served with a side of cotton-like soft, buttery dinner rolls, crunchy onions, herby fresh coriander and tangy lemon. To sum up, the Pav Bhaji – a famous street food."
    },
    {
        id:13,
        type:'starter',
        title:"Tandoori Chicken",
        img:'imgs/tandoori-chicken.jpg',
        desc:"Tandoori chicken, a dish of roasted chicken marinated in yogurt and generously spiced, giving the meat its trademark red colour.Made in the tandoor."
    },
    {
        id:14,
        type:'bread',
        title:"Tandoori Roti",
        img:'imgs/tandooriR.jpg',
        desc:"With crisp edges, a soft interior, and a chewy texture, this whole wheat roti recipe is perfect for serving with any kind of Punjabi food, especially rich curry dishes."
    },
]

// menu-display

function menuDisplay(menu){
    let displaymenu=menu.map((menu)=>{
        return `<div data-id=${menu.type}> 
         <h2 class="title">${menu.title}</h2>
        <img src=${menu.img} alt="" width="200px" height="100px" class="imgs">
        <p class="desc">${menu.desc}</p> 
    </div>`
    })
    displaymenu=displaymenu.join("")
    grid.innerHTML=displaymenu;
}

window.addEventListener('DOMContentLoaded',()=>{
    menuDisplay(menuArray)
})

//filter menu
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let buttonId=e.currentTarget.dataset.id
        let menuFilter=menuArray.filter((menuItem)=>{
            if(menuItem.type===buttonId){
                return menuItem
            }
        })
        if(buttonId=="all"){
           menuDisplay(menuArray)
        }
        else{
            menuDisplay(menuFilter)
        }
    })
})


