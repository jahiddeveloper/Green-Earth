
// Category

let loadCategory = () => {
    fetch('https://openapi.programming-hero.com/api/categories')
        .then(res => res.json())
        .then(data => {
            // console.log(data.categories)
            displayCategory(data.categories)
        })

    let displayCategory = (categories) => {

        let categoryContainer = document.getElementById("category-container")

        categories.forEach(category => {

            let btn = document.createElement("button");

            btn.innerHTML = `
            <button class="w-70 text-left py-3 hover:bg-[#15803d] hover:text-white rounded-sm pl-5 text-lg hover:transition duration-350">${category.category_name}</button>
            `

            categoryContainer.append(btn)
        })
    }
}

loadCategory();

// All tree btn

document.getElementById("all-tree-btn")
    .addEventListener('click', () => {

        fetch("https://openapi.programming-hero.com/api/plants")
            .then(res => res.json())
            .then(json => {
                // console.log(json.plants)
                displayAllPlant(json.plants);
            })

        let displayAllPlant = (plants) => {

            let cartContainer = document.getElementById("cart-container")

            plants.forEach(plant => {

                let div = document.createElement("div")
                div.innerHTML = `
            
            <div class="p-4 bg-white rounded-lg shadow-sm w-100 md:w-full mx-auto block">
                        <img class="h-46 w-full object-cover rounded-lg" src="${plant.image}" alt="">
                        <h2 class="text-xl font-bold mt-3">${plant.name}</h2>
                        <p class="text-gray-500 mt-2">${plant.description}</p>

                        <div class="flex justify-between items-center mt-2">
                            <h4 class="bg-[#dcfce7] px-5 py-2 rounded-3xl">${plant.category}</h4>
                            <p class="font-bold">৳<span>${plant.price}</span></p>
                        </div>
                        <button
                            class="mx-auto block w-full bg-[#15803d] py-3 text-white mt-3 rounded-3xl cursor-pointer hover:bg-[#22c55d] hover:transition duration-400">Add
                            to Cart</button>
                    </div>

            `

            cartContainer.append(div);
            })
        }
    })

// login btn 

document.getElementById("login-btn")
    .addEventListener('click', () => {

        window.location.href = "login.html";
    })