import React, { useState } from 'react';
import './App.css';
// import SearchComponent from './components/SearchComponent';
// import ShowCourseComponent from './components/ShowCourseComponent';
// import Usewer

// Menu items data for each category
const menuItems = {
  IndianChinese: [
    "Chili Paneer", "Kung Pao Tofu", "Sweet & Sour Veggies", "Spicy Vegetable Fried Rice", "Veg Manchurian", 
    "Crispy Spring Rolls", "Chili Garlic Noodles", "Szechuan Veggie Stir-Fry", "Vegetable Hakka Noodles", "Tofu & Bell Pepper Stir-Fry", "Vegetable Dim Sum"
  ],
  SouthMeals: [
    "Masala Dosa", "Rava Upma", "Idli Sambar", "Veg Noodles", "Tawa Paneer", "Dam Aloo", "Vada Sambar", "Rava Kesari", "Mysore Pak", "Coconut Rice", "Puliyodarai", "Curd Rice"
  ],
  VegBurger: [
    "Aloo Tikki Burger", "Paneer Makhani Burger", "Pav Bhaji Burger", "Veg Noodles", "Tawa Paneer", "Dam Aloo", 
    "Vegan Tofu Burger", "Veggie Patty Burger", "Spinach and Cheese Burger", "Grilled Veggie Burger", "Mushroom & Swiss Burger", "Classic Veg Burger"
  ],
  Snacks: [
    "Samosa", "Paneer Pakora", "Pav Bhaji", "Veg Noodles", "Tawa Paneer", "Dam Aloo", 
    "Veg Cutlet", "Hara Bhara Kebab", "Chana Chaat", "Papri Chaat", "Dhokla", "Chili Potato"
  ],
  VegMeal: [
    "Paneer Butter Masala", "Chana Masala", "Mixed Veg Curry", "Malai Kofta", "Tawa Paneer", "Dam Aloo", 
    "Dal Tadka", "Aloo Gobi", "Bhindi Masala", "Veg Korma", "Vegetable Pulao", "Jeera Rice"
  ],
  NonVegMeals: [
    "Butter Chicken", "Chicken Tikka Masala", "Fish Curry", "Chicken Biryani", "Tawa Paneer", "Dam Aloo", 
    "Lamb Rogan Josh", "Chicken Korma", "Grilled Tandoori Chicken", "Mutton Curry", "Chicken Seekh Kebab", "Fish Amritsari"
  ],
  waffles: [
    "Chocolate Chip Waffle", "Strawberry Waffle", "Banana Waffle", "Veg Noodles", "Tawa Paneer", "Dam Aloo", 
    "Maple Syrup Waffle", "Nutella Waffle", "Blueberry Waffle", "Cinnamon Sugar Waffle", "Caramel Waffle", "Classic Belgian Waffle"
  ],
  vegWraps: [
    "Veg Hakka Noodle Wrap", "Paneer Tikka Wrap", "Grilled Veg Wrap", "Veg Noodles", "Tawa Paneer", "Dam Aloo", 
    "Mexican Veg Wrap", "Spinach and Cheese Wrap", "Falafel Wrap", "Sweet Potato Wrap", "Mushroom Wrap", "Zucchini Wrap"
  ],
  vegWrapsMeal: [
    "Veg Wrap Meal 1", "Veg Wrap Meal 2", "Veg Wrap Meal 3", "Veg Noodles", "Tawa Paneer", "Dam Aloo", 
    "Veg Wrap Meal 4", "Veg Wrap Meal 5", "Veg Wrap Meal 6", "Veg Wrap Meal 7", "Veg Wrap Meal 8", "Veg Wrap Meal 9"
  ],
  nonVegWraps: [
    "Chicken Tikka Wrap", "Lamb Kebab Wrap", "Chicken Shawarma Wrap", "Veg Noodles", "Tawa Paneer", "Dam Aloo", 
    "Fish Wrap", "Grilled Chicken Wrap", "Buffalo Chicken Wrap", "BBQ Chicken Wrap", "Chicken Caesar Wrap", "Chicken and Spinach Wrap"
  ]
};

const App = () => {
  // State to manage selected category and items
  const [activeCategory, setActiveCategory] = useState('VegBurger');
  
  // Function to load menu based on category
  const loadMenu = (category) => {
    setActiveCategory(category);
  };

  // Dynamically load menu items based on active category
  const currentMenuItems = menuItems[activeCategory];

  return (
    <div className="flex flex-col h-screen">
      {/* Header Section */}
      <div className="header bg-red-500 p-6 flex items-center justify-between">
        <img 
          alt="Logo" 
          src="https://storage.googleapis.com/a1aa/image/mY4NhHALzSIdKlXX9Z2ZjbIxgjkKleAxnENYiBHg5UN6D92JA.jpg" 
          className="h-16" 
        />
        <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-200">New Order</button>
      </div>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="sidebar w-72 bg-gray-800 text-white p-6 overflow-y-auto">
          {Object.keys(menuItems).map(category => (
            <div 
              key={category} 
              className={`sidebar-item p-4 cursor-pointer mb-4 rounded-md transition-all ${activeCategory === category ? 'bg-red-600' : 'hover:bg-gray-600'}`}
              onClick={() => loadMenu(category)}
            >
              {category.replace(/([A-Z])/g, ' $1').trim()} {/* Add space between camelCase */}
            </div>
          ))}
        </div>

        {/* Menu Items (Content Area) */}
        <div className="content flex-grow p-6 bg-gray-100 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {currentMenuItems.map((item, index) => (
              <button 
                key={index} 
                className="bg-gray-200 border-2 border-gray-300 p-4 rounded-lg shadow-lg hover:bg-gray-300 transition duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
