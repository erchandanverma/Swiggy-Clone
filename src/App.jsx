import React, { useState, useEffect } from 'react';
import FoodCard from './component/FoodCard';
import Heading from './component/Heading';
import Nav from './component/Nav';
import Footer from './component/Footer';

const App = () => {
  const [indianFood, setIndianFood] = useState([]); // For upper section (always Indian food)
  const [selectedCountry, setSelectedCountry] = useState(""); // For dynamically selected country
  const [countryFood, setCountryFood] = useState([]); // For lower section (selected country's food)
  const [isLoading, setIsLoading] = useState(false);
  const [showLowerSection, setShowLowerSection] = useState(false); // Controls visibility of lower section

  const Mealcountries = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Croatian",
    "Dutch",
    "Egyptian",
    "French",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Jamaican",
    "Japanese",
    "Kenyan",
    "Malaysian",
    "Mexican",
    "Moroccan",
    "Polish",
    "Portuguese",
    "Russian",
    "Spanish",
    "Thai",
    "Tunisian",
    "Turkish",
    "Vietnamese"
  ];

  const handleButtonClick = async (country) => {
    setSelectedCountry(country);
    setShowLowerSection(false); // Reset lower section visibility on new selection
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
      const result = await response.json();
      setCountryFood(result.meals || []);
      setShowLowerSection(true); // Show the lower section after fetching data
    } catch (error) {
      console.error("Error fetching country food data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch Indian food for the upper section
    const fetchIndianFood = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);
        const result = await response.json();
        setIndianFood(result.meals || []);
      } catch (error) {
        console.error("Error fetching Indian food data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchIndianFood();
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        {/* Upper Section: Always shows Indian food */}
        <Heading heading={"Restaurants with online food delivery in India"} />
        {isLoading && !showLowerSection ? (
          <p>Loading meals...</p>
        ) : (
          <FoodCard items={indianFood} rating={"4.5"} time={"25-30 mins"} city={"India"} />
        )}

        {/* Buttons for each country */}
        <Heading heading={"Explore Cuisines"} />
        <div className="d-flex flex-wrap justify-content-center gap-3 my-4">
          {Mealcountries.map((country) => (
            <button
              key={country}
              className="btn btn-light"
              onClick={() => handleButtonClick(country)}
            >
              {country} Cuisine
            </button>
          ))}
        </div>

        {/* Lower Section: Shows food for the selected country */}
        {showLowerSection && (
          <>
            <Heading heading={`Best ${selectedCountry} Restaurants Near Me`} />
            {isLoading ? (
              <p>Loading meals...</p>
            ) : (
              <FoodCard items={countryFood} rating={"4.5"} time={"25-30 mins"} city={selectedCountry} />
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
