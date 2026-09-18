var recipes = [
    {
        title: "Margherita Pizza",
        description: "Classic Italian pizza with fresh mozzarella and basil",
        image: "images/Margherita Pizza.avif",
        rating: 4.9,
        reviews: 512,
        prepTime: "90 min",
        cookTime: "12 min",
        servings: "2 people",
        difficulty: "Intermediate",
        cuisine: "Italian",
        showWarning: true,
        ingredients: [
            "300g pizza dough",
            "200g crushed tomatoes",
            "250g fresh mozzarella",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "2 cloves garlic, minced",
            "Salt and pepper to taste",
            "Parmesan cheese for topping"
        ],
        instructions: [
            "Let pizza dough come to room temperature and rest for 1 hour.",
            "Preheat oven to maximum temperature (usually 250°C/480°F).",
            "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
            "Roll out dough on a floured surface to desired thickness.",
            "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
            "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan"
        ],
        nutrition: [
            { label: "Calories", value: "580 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "24g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "68g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "22g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "4g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "920mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Use a pizza stone for crispier crust",
            "Don't overload with toppings - less is more",
            "Add basil after baking to keep it fresh",
            "Let dough rest properly for best texture"
        ]
    },
    {
        title: "French Onion Soup",
        description: "Rich beef broth with caramelized onions and melted cheese",
        image: "images/French Onion Soup.avif",
        rating: 4.7,
        reviews: 267,
        prepTime: "15 min",
        cookTime: "60 min",
        servings: "4 people",
        difficulty: "Intermediate",
        cuisine: "Mediterranean",
        showWarning: true,
        ingredients: [
            "4 large onions, thinly sliced",
            "4 tablespoons butter",
            "1 liter beef broth",
            "1/2 cup white wine",
            "2 bay leaves",
            "Fresh thyme",
            "Baguette slices",
            "200g Gruyère cheese, grated"
        ],
        instructions: [
            "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
            "Add white wine and deglaze the pot, scraping up brown bits.",
            "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
            "Meanwhile, toast baguette slices until golden.",
            "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
            "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
        ],
        nutrition: [
            { label: "Calories", value: "380 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "18g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "36g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "18g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "4g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "980mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Patience is key - don't rush the onion caramelization",
            "Use good quality beef broth for best flavor",
            "Gruyère can be substituted with Swiss cheese",
            "Watch carefully when broiling to avoid burning"
        ]
    },
    {
        title: "Pad Thai",
        description: "Popular Thai stir-fried noodles with shrimp and peanuts",
        image: "images/Pad Thai.avif",
        rating: 4.8,
        reviews: 445,
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Intermediate",
        cuisine: "Asian",
        showWarning: false,
        ingredients: [
            "200g rice noodles",
            "200g shrimp, peeled",
            "2 eggs",
            "3 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "Bean sprouts",
            "Crushed peanuts",
            "Lime wedges and cilantro"
        ],
        instructions: [
            "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
            "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
            "Heat wok over high heat. Scramble eggs and set aside.",
            "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
            "Add scrambled eggs and bean sprouts. Toss everything together.",
            "Serve topped with crushed peanuts, lime wedges, and cilantro."
        ],
        nutrition: [
            { label: "Calories", value: "540 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "32g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "62g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "16g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "4g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "1120mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Don't oversoak noodles or they'll be mushy",
            "Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors",
            "Prepare all ingredients before starting to cook"
        ]
    },
    {
        title: "Shrimp Scampi",
        description: "Garlicky shrimp in white wine butter sauce",
        image: "images/Shrimp Scampi.avif",
        rating: 4.8,
        reviews: 356,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Seafood",
        showWarning: false,
        ingredients: [
            "400g large shrimp, peeled",
            "300g linguine pasta",
            "6 cloves garlic, minced",
            "1/2 cup white wine",
            "4 tablespoons butter",
            "2 tablespoons olive oil",
            "Fresh parsley, chopped",
            "Lemon juice and zest",
            "Red pepper flakes"
        ],
        instructions: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
            "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
            "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
            "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
            "Garnish with parsley, lemon zest, and serve immediately."
        ],
        nutrition: [
            { label: "Calories", value: "520 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "36g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "54g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "18g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "3g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "620mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Don't overcook shrimp - they cook very quickly",
            "Use good quality white wine for best flavor",
            "Toss pasta in sauce for maximum flavor absorption",
            "Add extra lemon for bright, fresh taste"
        ]
    },
    {
        title: "Mediterranean Quinoa Bowl",
        description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        image: "images/Mediterranean Quinoa Bowl.avif",
        rating: 4.5,
        reviews: 156,
        prepTime: "20 min",
        cookTime: "35 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Mediterranean",
        showWarning: true,
        ingredients: [
            "1 cup quinoa",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red onion, sliced",
            "Kalamata olives",
            "Feta cheese, crumbled",
            "Fresh parsley",
            "Tahini dressing"
        ],
        instructions: [
            "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
            "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
        ],
        nutrition: [
            { label: "Calories", value: "480 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "18g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "58g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "20g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "10g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "540mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Rinse quinoa well to remove bitter coating",
            "Let quinoa cool before adding fresh ingredients",
            "Make extra tahini dressing - it keeps well in the fridge",
            "Add grilled chicken or chickpeas for extra protein"
        ]
    },
    {
        title: "Greek Moussaka",
        description: "Traditional layered eggplant casserole with lamb",
        image: "images/Greek Moussaka.avif",
        rating: 4.8,
        reviews: 234,
        prepTime: "30 min",
        cookTime: "60 min",
        servings: "4 people",
        difficulty: "Intermediate",
        cuisine: "Mediterranean",
        showWarning: true,
        ingredients: [
            "3 large eggplants, sliced",
            "500g ground lamb",
            "400g canned tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "500ml béchamel sauce",
            "100g parmesan cheese",
            "Cinnamon and oregano",
            "Olive oil"
        ],
        instructions: [
            "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
            "Brush eggplant slices with olive oil, grill or bake until softened.",
            "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
            "Preheat oven to 180°C (350°F).",
            "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
            "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
        ],
        nutrition: [
            { label: "Calories", value: "580 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "36g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "32g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "32g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "8g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "820mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Salt eggplant to remove bitterness",
            "Don't skip the resting time - it helps set the layers",
            "Use ground beef if lamb is unavailable",
            "Make ahead and reheat for easier serving"
        ]
    },
    {
        title: "Caprese Sandwich",
        description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
        image: "images/Caprese Sandwich.avif",
        rating: 4.5,
        reviews: 189,
        prepTime: "10 min",
        cookTime: "5 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Italian",
        showWarning: false,
        ingredients: [
            "1 ciabatta bread",
            "200g fresh mozzarella, sliced",
            "2 large tomatoes, sliced",
            "Fresh basil leaves",
            "3 tablespoons pesto",
            "2 tablespoons balsamic glaze",
            "Olive oil",
            "CSalt and pepper"
        ],
        instructions: [
            "Slice ciabatta bread in half horizontally.",
            "Toast bread lightly until just crispy.",
            "Spread pesto on both sides of bread.",
            "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
            "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
            "Close sandwich, cut in half, and serve immediately."
        ],
        nutrition: [
            { label: "Calories", value: "480 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "22g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "48g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "22g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "3g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "680mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Don't oversoak noodles or they'll be mushy",
            "Cook on high heat for authentic wok flavor",
            "Balance sweet, sour, and salty flavors",
            "Prepare all ingredients before starting to cook"
        ]
    },
    {
        title: "Teriyaki Chicken Bowl",
        description: "Sweet and savory chicken over rice with vegetables",
        image: "images/Teriyaki Chicken Bowl.avif",
        rating: 4.7,
        reviews: 367,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Asian",
        showWarning: false,
        ingredients: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, florets",
            "1 carrot, julienned",
            "Sesame seeds",
            "Green onions, sliced",
            "1 tablespoon sesame oil"
        ],
        instructions: [
            "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
            "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
            "Meanwhile, steam broccoli and carrots until tender-crisp.",
            "Divide rice between bowls.",
            "Top with teriyaki chicken and steamed vegetables.",
            "Garnish with sesame seeds and green onions. Serve hot."
        ],
        nutrition: [
            { label: "Calories", value: "540 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "42g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "58g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "14g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "4g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "1240mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Use chicken thighs for juicier meat",
            "Make homemade teriyaki sauce for better flavor control",
            "Add edamame for extra protein",
            "Meal prep by cooking rice and chicken ahead"
        ]
    },
    {
        title: "BBQ Pulled Pork",
        description: "Slow-cooked tender pork in smoky barbecue sauce",
        image: "images/BBQ Pulled Pork.avif",
        rating: 47,
        reviews: 412,
        prepTime: "15 min",
        cookTime: "240 min",
        servings: "4 people",
        difficulty: "Easy",
        cuisine: "American",
        showWarning: true,
        ingredients: [
            "1kg pork shoulder",
            "1 cup BBQ sauce",
            "1/2 cup apple cider vinegar",
            "2 tablespoons brown sugar",
            "1 tablespoon paprika",
            "1 tablespoon garlic powder",
            "Burger buns",
            "Coleslaw for serving"
        ],
        instructions: [
            "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
            "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
            "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
            "Remove pork and shred with two forks. Discard excess fat.",
            "Return shredded pork to slow cooker, mix with BBQ sauce.",
            "Serve on toasted buns with coleslaw on top."
        ],
        nutrition: [
            { label: "Calories", value: "620 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "48g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "52g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "22g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "3g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "1180mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Use pork shoulder for best results - it stays moisty",
            "Let pork rest before shredding for juicier meat",
            "Make your own BBQ sauce for better flavor",
            "Leftovers freeze well for up to 3 months"
        ]
    },
    {
        title: "Chicken Tikka Masala",
        description: "Rich and creamy Indian curry with tender chicken pieces",
        image: "images/Chicken Tikka Masala.avif",
        rating: 4.7,
        reviews: 389,
        prepTime: "20 min",
        cookTime: "30 min",
        servings: "4 people",
        difficulty: "Intermediate",
        cuisine: "Asian",
        showWarning: true,
        ingredients: [
            "600g chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tablespoons tikka masala paste",
            "400ml coconut cream",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "2 tablespoons ginger, grated",
            "400g canned tomatoes",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
            "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
            "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
            "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
            "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
            "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
        ],
        nutrition: [
            { label: "Calories", value: "450 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "38g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "24g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "22g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "4g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "760mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Marinate chicken overnight for deeper flavor",
            "Use full-fat coconut cream for richest sauce",
            "Adjust spice level by varying the tikka paste amount",
            "Serve with naan bread and basmati rice"
        ]
    },
    {
        title: "Caesar Salad",
        description: "Classic salad with crispy romaine and creamy dressing",
        image: "images/Caesar Salad.avif",
        rating: 4.4,
        reviews: 198,
        prepTime: "15 min",
        cookTime: "0 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Mediterranean",
        showWarning: false,
        ingredients: [
            "1 large romaine lettuce",
            "1/2 cup Caesar dressing",
            "1/2 cup parmesan cheese, shaved",
            "1 cup croutons",
            "2 anchovy fillets (optional)",
            "Lemon wedges",
            "Black pepper"
        ],
        instructions: [
            "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
            "Place lettuce in a large salad bowl.",
            "Add Caesar dressing and toss until evenly coated.",
            "Add croutons and half the parmesan cheese. Toss gently.",
            "Top with remaining parmesan shavings and anchovies if using.",
            "Serve immediately with lemon wedges and fresh black pepper."
        ],
        nutrition: [
            { label: "Calories", value: "320 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "12g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "18g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "22g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "3g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "680mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Use cold, crisp lettuce for best texture",
            "Make homemade croutons for better flavor",
            "Add grilled chicken for a complete meal",
            "Don't dress salad until ready to serve"
        ]
    },
    {
        title: "Koshari",
        description: "Egyptian comfort food with rice, lentils, pasta and crispy onions",
        image: "images/koshari.webp",
        rating: 4.8,
        reviews: 245,
        prepTime: "20 min",
        cookTime: "35 min",
        servings: "4 people",
        difficulty: "Medium",
        cuisine: "Egyptian",
        showWarning: false,
        ingredients: [
            "1 cup rice",
            "1 cup brown lentils",
            "1 cup small pasta",
            "1/2 cup chickpeas",
            "2 large onions, sliced",
            "1 cup tomato sauce",
            "2 tablespoons vinegar",
            "Garlic and cumin",
            "Salt and black pepper"
        ],
        instructions: [
            "Cook the lentils until tender but not too soft.",
            "Cook the rice separately until fluffy.",
            "Boil the pasta and drain well.",
            "Prepare the tomato sauce with garlic, vinegar and spices.",
            "Fry the sliced onions until golden and crispy.",
            "Layer rice, lentils, pasta and chickpeas in a serving bowl.",
            "Top with tomato sauce and crispy onions before serving."
        ],
        nutrition: [
            { label: "Calories", value: "520 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "18g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "86g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "12g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "11g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "620mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Make the onions extra crispy for the best texture",
            "Prepare the sauce ahead of time",
            "Add chickpeas just before serving",
            "Serve with extra spicy sauce if desired"
        ]
    },
    {
        title: "Chicken Shawarma",
        description: "Tender spiced chicken served with creamy garlic sauce and fresh vegetables",
        image: "images/shawerma.webp",
        rating: 4.7,
        reviews: 312,
        prepTime: "20 min",
        cookTime: "25 min",
        servings: "3 people",
        difficulty: "Easy",
        cuisine: "Middle Eastern",
        showWarning: false,
        ingredients: [
            "500g chicken breast",
            "1/2 cup yogurt",
            "2 tablespoons lemon juice",
            "3 garlic cloves, minced",
            "1 teaspoon paprika",
            "1 teaspoon cumin",
            "1/2 teaspoon cinnamon",
            "Salt and black pepper",
            "Pita bread",
            "Garlic sauce and fresh vegetables"
        ],
        instructions: [
            "Slice the chicken into thin strips.",
            "Mix yogurt, lemon juice, garlic and spices in a bowl.",
            "Add chicken and coat well with the marinade.",
            "Cover and refrigerate for at least 1 hour.",
            "Cook the chicken in a hot pan until golden and fully cooked.",
            "Warm the pita bread and spread with garlic sauce.",
            "Add chicken and fresh vegetables, then roll and serve."
        ],
        nutrition: [
            { label: "Calories", value: "430 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "38g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "35g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "15g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "4g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "720mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Marinate the chicken overnight for deeper flavor",
            "Use high heat to get slightly crispy edges",
            "Add pickles for extra freshness",
            "Serve with extra garlic sauce"
        ]
    },
    {
        title: "Fettuccine Alfredo",
        description: "Creamy pasta tossed with parmesan cheese and garlic",
        image: "images/Fettuccine Alfredo.jpg",
        rating: 4.6,
        reviews: 276,
        prepTime: "10 min",
        cookTime: "20 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Italian",
        showWarning: false,
        ingredients: [
            "200g fettuccine pasta",
            "2 tablespoons butter",
            "2 garlic cloves, minced",
            "1 cup heavy cream",
            "1 cup parmesan cheese",
            "1/2 teaspoon black pepper",
            "Salt",
            "Fresh parsley"
        ],
        instructions: [
            "Cook the fettuccine in salted boiling water until al dente.",
            "Melt butter in a large pan over medium heat.",
            "Add garlic and cook until fragrant.",
            "Pour in the cream and simmer gently.",
            "Add parmesan cheese and stir until smooth.",
            "Add the cooked pasta and toss until fully coated.",
            "Season with black pepper and garnish with parsley."
        ],
        nutrition: [
            { label: "Calories", value: "610 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "20g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "65g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "30g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "3g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "580mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Cook pasta until al dente",
            "Reserve some pasta water for the sauce",
            "Use freshly grated parmesan",
            "Serve immediately while the sauce is creamy"
        ]
    },
    {
        title: "Chicken Fajitas",
        description: "Juicy seasoned chicken with colorful peppers and onions",
        image: "images/Chicken Fajitas.webp",
        rating: 4.7,
        reviews: 221,
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "3 people",
        difficulty: "Easy",
        cuisine: "Mexican",
        showWarning: false,
        ingredients: [
            "500g chicken breast",
            "1 red bell pepper",
            "1 green bell pepper",
            "1 large onion",
            "2 tablespoons olive oil",
            "1 teaspoon paprika",
            "1 teaspoon cumin",
            "1/2 teaspoon chili powder",
            "Salt and black pepper",
            "Tortillas"
        ],
        instructions: [
            "Slice the chicken, peppers and onion into thin strips.",
            "Season the chicken with paprika, cumin, chili powder, salt and pepper.",
            "Heat olive oil in a large skillet.",
            "Cook the chicken until golden and fully cooked.",
            "Add peppers and onions and cook until slightly tender.",
            "Warm the tortillas in a dry pan.",
            "Fill tortillas with the chicken and vegetables and serve."
        ],
        nutrition: [
            { label: "Calories", value: "390 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "36g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "32g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "14g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "5g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "540mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Slice everything evenly for even cooking",
            "Do not overcrowd the pan",
            "Add lime juice before serving",
            "Serve with salsa or guacamole"
        ]
    },
    {
        title: "Molokhia with Chicken",
        description: "Traditional Egyptian molokhia served with tender chicken and fragrant garlic",
        image: "images/Molokhia with Chicken.jpeg",
        rating: 4.9,
        reviews: 189,
        prepTime: "15 min",
        cookTime: "35 min",
        servings: "4 people",
        difficulty: "Medium",
        cuisine: "Egyptian",
        showWarning: false,
        ingredients: [
            "500g chicken",
            "500g frozen or fresh molokhia",
            "4 cups chicken broth",
            "5 garlic cloves, minced",
            "1 tablespoon coriander",
            "1 tablespoon butter",
            "Salt and black pepper",
            "Cooked Egyptian rice"
        ],
        instructions: [
            "Cook the chicken in seasoned water until tender.",
            "Remove the chicken and keep the broth warm.",
            "Add molokhia to the warm broth and stir gently.",
            "Prepare the garlic and coriander mixture in butter.",
            "Add the garlic mixture to the molokhia.",
            "Cook gently without bringing it to a strong boil.",
            "Serve hot with chicken and Egyptian rice."
        ],
        nutrition: [
            { label: "Calories", value: "410 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "35g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "35g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "14g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "7g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "690mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Do not over-boil the molokhia",
            "Fresh garlic gives the best flavor",
            "Serve immediately while hot",
            "Pair with rice and pickles"
        ]
    },
    {
        title: "Beef Burger",
        description: "Juicy homemade beef burger with fresh vegetables and melted cheese",
        image: "images/Beef Burger.jpg",
        rating: 4.8,
        reviews: 354,
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "American",
        showWarning: false,
        ingredients: [
            "300g ground beef",
            "2 burger buns",
            "2 slices cheddar cheese",
            "1 tomato",
            "Lettuce leaves",
            "1/2 onion",
            "2 tablespoons burger sauce",
            "Salt and black pepper"
        ],
        instructions: [
            "Divide the ground beef into two equal portions.",
            "Shape each portion into a burger patty.",
            "Season both sides with salt and black pepper.",
            "Cook the patties on a hot skillet until fully cooked.",
            "Add cheese during the final minute of cooking.",
            "Toast the burger buns lightly.",
            "Layer sauce, lettuce, tomato, onion and the burger patty.",
            "Close the bun and serve immediately."
        ],
        nutrition: [
            { label: "Calories", value: "590 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "34g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "42g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "32g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "3g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "760mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Do not press the burger while cooking",
            "Toast the buns for better texture",
            "Let the patty rest for a few minutes",
            "Add your favorite sauce before serving"
        ]
    },
    {
        title: "Falafel Bowl",
        description: "Crispy Egyptian falafel served with tahini, vegetables and fresh herbs",
        image: "images/Falafel Bowl.jpeg",
        rating: 4.6,
        reviews: 167,
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Medium",
        cuisine: "Egyptian",
        showWarning: false,
        ingredients: [
            "8 falafel pieces",
            "1 cup cooked chickpeas",
            "1 tomato",
            "1 cucumber",
            "1/2 cup tahini sauce",
            "Fresh parsley",
            "Lemon juice",
            "Pickles",
            "Pita bread"
        ],
        instructions: [
            "Prepare the falafel until crispy and golden.",
            "Chop the tomato and cucumber into small pieces.",
            "Arrange vegetables and chickpeas in a serving bowl.",
            "Add the warm falafel pieces.",
            "Drizzle with tahini and lemon juice.",
            "Garnish with fresh parsley and pickles.",
            "Serve with warm pita bread."
        ],
        nutrition: [
            { label: "Calories", value: "450 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "17g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "54g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "20g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "12g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "640mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Serve falafel while still crispy",
            "Use fresh tahini sauce",
            "Add pickled vegetables for extra flavor",
            "Warm the pita before serving"
        ]
    },
    {
        title: "Margherita Pizza",
        description: "Classic Italian pizza topped with tomato sauce, mozzarella and fresh basil",
        image: "images/Margherita Pizza.jpeg",
        rating: 4.7,
        reviews: 289,
        prepTime: "20 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Medium",
        cuisine: "Italian",
        showWarning: false,
        ingredients: [
            "1 pizza dough",
            "1/2 cup tomato sauce",
            "150g mozzarella cheese",
            "Fresh basil leaves",
            "1 tablespoon olive oil",
            "Salt",
            "Black pepper"
        ],
        instructions: [
            "Preheat the oven to a high temperature.",
            "Stretch the pizza dough into a round shape.",
            "Spread tomato sauce evenly over the dough.",
            "Add mozzarella cheese across the surface.",
            "Bake until the crust is golden and the cheese is melted.",
            "Add fresh basil leaves after baking.",
            "Drizzle with olive oil and serve hot."
        ],
        nutrition: [
            { label: "Calories", value: "540 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "24g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "68g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "20g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "4g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "810mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Preheat the oven thoroughly",
            "Do not overload the pizza with toppings",
            "Use fresh mozzarella for better texture",
            "Add basil after baking"
        ]
    },
    {
        title: "Grilled Salmon",
        description: "Tender grilled salmon seasoned with lemon, garlic and fresh herbs",
        image: "images/Grilled Salmon.jpeg",
        rating: 4.8,
        reviews: 203,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Mediterranean",
        showWarning: false,
        ingredients: [
            "2 salmon fillets",
            "1 tablespoon olive oil",
            "2 garlic cloves",
            "1 lemon",
            "Fresh dill",
            "Salt and black pepper",
            "Mixed vegetables"
        ],
        instructions: [
            "Pat the salmon fillets dry with a paper towel.",
            "Season with olive oil, garlic, salt and black pepper.",
            "Heat a grill pan over medium-high heat.",
            "Place the salmon skin-side down and cook gently.",
            "Flip carefully and continue cooking until done.",
            "Squeeze fresh lemon juice over the salmon.",
            "Garnish with dill and serve with vegetables."
        ],
        nutrition: [
            { label: "Calories", value: "420 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "39g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "8g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "27g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "2g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "410mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Do not overcook the salmon",
            "Use fresh lemon for the best flavor",
            "Let the salmon rest briefly before serving",
            "Pair with roasted vegetables"
        ]
    },
    {
        title: "Pancakes",
        description: "Fluffy golden pancakes served with maple syrup and fresh berries",
        image: "images/Pancakes.jpg",
        rating: 4.7,
        reviews: 241,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "3 people",
        difficulty: "Easy",
        cuisine: "American",
        showWarning: false,
        ingredients: [
            "1 cup all-purpose flour",
            "1 tablespoon sugar",
            "1 teaspoon baking powder",
            "1 egg",
            "3/4 cup milk",
            "2 tablespoons melted butter",
            "1 teaspoon vanilla",
            "Fresh berries",
            "Maple syrup"
        ],
        instructions: [
            "Mix flour, sugar and baking powder in a bowl.",
            "Whisk the egg, milk, melted butter and vanilla separately.",
            "Combine the wet and dry ingredients until just mixed.",
            "Heat a lightly buttered pan over medium heat.",
            "Pour small portions of batter into the pan.",
            "Cook until bubbles form, then flip and cook the other side.",
            "Serve warm with berries and maple syrup."
        ],
        nutrition: [
            { label: "Calories", value: "380 kcal", icon: "fa-fire", type: "calories" },
            { label: "Protein", value: "10g", icon: "fa-dumbbell", type: "protein" },
            { label: "Carbohydrates", value: "55g", icon: "fa-wheat-awn", type: "carbs" },
            { label: "Fat", value: "14g", icon: "fa-droplet", type: "fat" },
            { label: "Fiber", value: "3g", icon: "fa-plant-wilt", type: "fiber" },
            { label: "Sodium", value: "430mg", icon: "fa-cube", type: "sodium" }
        ],
        tips: [
            "Do not overmix the batter",
            "Cook pancakes over medium heat",
            "Flip only when bubbles appear",
            "Serve immediately for the best texture"
        ]
    }
];
function switchTab(tabName, clickedBtn) {
    document.querySelectorAll('#recipeTabs .nav-link').forEach(btn => {
        btn.classList.remove('active', 'text-danger', 'border-bottom', 'border-2', 'border-danger', 'fw-semibold');
        btn.classList.add('text-secondary');
    });
    clickedBtn.classList.add('active', 'text-danger', 'border-bottom', 'border-2', 'border-danger', 'fw-semibold');
    clickedBtn.classList.remove('text-secondary');
    document.querySelectorAll('.tab-pane-custom').forEach(pane => pane.classList.remove('active'));
    document.getElementById(`${tabName}-list`).classList.add('active');
}
function getRandomRecipe() {
    var recipe = recipes[Math.floor(Math.random() * recipes.length)];
    document.getElementById("recipe-title").textContent = recipe.title;
    document.getElementById("recipe-desc").textContent = recipe.description;
    document.getElementById("recipe-img").src = recipe.image;
    document.getElementById("recipe-rating").textContent = recipe.rating;
    document.getElementById("recipe-reviews").textContent = recipe.reviews;
    document.getElementById("prep-time").textContent = recipe.prepTime;
    document.getElementById("cook-time").textContent = recipe.cookTime;
    document.getElementById("servings").textContent = recipe.servings;
    document.getElementById("badge-difficulty").textContent = recipe.difficulty;
    document.getElementById("badge-cuisine").textContent = recipe.cuisine;
    var alertBox = document.getElementById("alert-box");
    if (recipe.showWarning) {
        alertBox.classList.remove("d-none");
        alertBox.classList.add("d-flex");
    } else {
        alertBox.classList.remove("d-flex");
        alertBox.classList.add("d-none");
    }
    document.getElementById("ingredients-list").innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
    document.getElementById("instructions-list").innerHTML = recipe.instructions.map(inst => `<li>${inst}</li>`).join('');
    document.getElementById("nutrition-list").innerHTML = recipe.nutrition.map(n => `
        <div class="nutrition-card">
            <div class="d-flex align-items-center gap-3">
                <div class="nutrition-icon-box icon-${n.type}">
                    <i class="fa-solid ${n.icon}"></i>
                </div>
                <span class="fw-semibold text-dark fs-7">${n.label}</span>
            </div>
            <span class="fw-bold text-dark fs-7">${n.value}</span>
        </div>
    `).join('');
    document.getElementById("tips-list").innerHTML = recipe.tips.map(tip => `
        <div class="tip-card">
            <i class="fa-solid fa-circle-check tip-icon"></i>
            <span class="fs-7">${tip}</span>
        </div>
    `).join('');
}
window.onload = getRandomRecipe;
document.getElementById("next-recipe-btn").addEventListener("click", getRandomRecipe);