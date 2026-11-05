const Search = () => {
    return (
        <div className="search">
          <input
            type="text"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          ></input>
          <button className="search-btn"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.name.toLowerCase().includes(searchItem.toLowerCase());
              })
              setListOfRestaurant(filteredRes);
          }}
          >Search</button>
        </div>
    )
}

export default Search;