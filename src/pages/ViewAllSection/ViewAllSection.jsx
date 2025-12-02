import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../../components/Loading/Loading";
import SingleCard from "../../components/SingleCard/SingleCard";

const ViewAllSection = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [excludeOutOfStock, setExcludeOutOfStock] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data);
        setLoading(false);

        const prices = data.map((item) => item.price);
        setPriceRange([Math.min(...prices), Math.max(...prices)]);
      });

    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

  useEffect(() => {
    let temp = [...cards];

    temp = temp.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    if (selectedCategory.length > 0) {
      temp = temp.filter((item) => selectedCategory.includes(item.category));
    }

    if (excludeOutOfStock) {
      temp = temp.filter((item) => item.slotsAvailable > 0);
    }

    setFilteredCards(temp);
  }, [priceRange, selectedCategory, excludeOutOfStock, cards]);

  const handleCategoryChange = (category) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((c) => c !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };

  const handleReset = () => {
    setPriceRange([0, Math.max(...cards.map((c) => c.price))]);
    setSelectedCategory([]);
    setExcludeOutOfStock(false);
  };

  if (loading) return <Loading />;

  const categories = [...new Set(cards.map((card) => card.category))];

  return (
    <div className="w-11/12 mx-auto py-10">
      {/* MOBILE TOP FILTER BAR */}
      <div className="lg:hidden mb-5 p-4 bg-white  rounded-xl shadow-sm">
        <h3 className="font-semibold text-lg mb-3">Filters</h3>

        {/* Price */}
        <div className="mb-4">
          <label className="text-sm font-medium">Price Range</label>
          <input
            type="range"
            min={0}
            max={1000}
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-1">
            ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>

        {/* Category Scroll */}
        <div className="mb-4">
          <label className="text-sm font-medium block mb-2">Category</label>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1 rounded-full border text-sm whitespace-nowrap ${
                  selectedCategory.includes(cat)
                    ? "bg-[#137A63] text-white"
                    : "bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex gap-2 items-center mb-3">
          <input
            type="checkbox"
            checked={excludeOutOfStock}
            onChange={() => setExcludeOutOfStock(!excludeOutOfStock)}
          />
          <span className="text-sm text-gray-700">Exclude Out of Stock</span>
        </div>

        <button
          className="text-sm text-blue-600 underline"
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex gap-6">
        {/* DESKTOP SIDEBAR */}
        <div className="hidden lg:block lg:w-1/4 lg:min-h-screen">
          <div className="sticky top-24 bg-white p-6 rounded-xl shadow-md ">
            <FilterUI
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              excludeOutOfStock={excludeOutOfStock}
              setExcludeOutOfStock={setExcludeOutOfStock}
              selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
              categories={categories}
              handleReset={handleReset}
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
          {filteredCards.map((card, index) => (
            <div
              key={card.skillId}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <SingleCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FilterUI = ({
  priceRange,
  setPriceRange,
  excludeOutOfStock,
  setExcludeOutOfStock,
  selectedCategory,
  handleCategoryChange,
  categories,
  handleReset,
}) => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-lg">Filters</h3>
        <button
          onClick={handleReset}
          className="text-sm text-blue-600 underline"
        >
          Reset
        </button>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <label className="font-medium">Price</label>
        <input
          type="range"
          min={0}
          max={1000}
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="w-full"
        />
        <p className="text-sm text-gray-600">
          ${priceRange[0]} - ${priceRange[1]}
        </p>
      </div>

      {/* Stock */}
      <div className="flex gap-2 items-center mb-4">
        <input
          type="checkbox"
          checked={excludeOutOfStock}
          onChange={() => setExcludeOutOfStock(!excludeOutOfStock)}
        />
        <span className="text-sm">Exclude Out of Stock</span>
      </div>

      {/* Categories */}
      <div>
        <label className="font-medium">Category</label>
        <div className="flex flex-col mt-2 gap-2">
          {categories.map((cat, idx) => (
            <label key={idx} className="flex gap-2 items-center text-sm">
              <input
                type="checkbox"
                checked={selectedCategory.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewAllSection;
