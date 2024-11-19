import React, { useState, useEffect } from 'react';
import FoodCard from './component/FoodCard';
import Heading from './component/Heading';
import Category from './component/Category';
import Nav from './component/Nav';
import Restaurants from './component/Restaurants';
import Footer from './component/Footer';
const App = () => {
 const [data, setdata] = useState([]);
 const CitiesArr = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Surat",
  "Chandigarh",
  "Visakhapatnam",
  "Bhopal",
  "Coimbatore"
];
const countryArray = [
  "Italy",
  "Japan",
  "India",
  "Mexico",
  "France",
  "USA",
  "Thailand",
  "China",
  "Spain",
  "Greece",
  "Turkey",
  "Germany",
  "Australia",
  "Brazil",
  "Canada",
];

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
    const result = await response.json();
    setdata(result.meals)
  }
  fetchData()
},[])

 return (
    <>
    <Nav/>
    <div className="container">
    <div className="container d-flex flex-row align-items-center justify-content-between">
    <Heading heading={"What's on your mind?"}/>
    </div>
    <Category/>
    <hr />
    <Heading heading={"Restaurants with online food delivery in Shahjahanpur"}/>
    <FoodCard items={data} rating={"4.5"} time={"25-30 mins"} city={"Shahjahanpur"}/>
    <Heading heading={"Best Places to Eat Across Cities"}/>
    <Restaurants data={"Best Restaurants in "} Cities={CitiesArr} />
    <Heading heading={"Best Cuisines Near Me"}/>
    <Restaurants data={"Restaurants Near Me"} Cities={countryArray} />
    
    </div>
    <Footer/>
    </>
  )
}

export default App

