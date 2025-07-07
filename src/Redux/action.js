export function filterProducts(state) {
  const { category, priceRange, sort, searchTerm } = state.filters;
  let result = [...state.allProducts];

  if (category !== "All") {
    result = result.filter((item) => item.category === category);
  }

  result = result.filter(
    (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
  );

  if (sort === "low-to-high") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "high-to-low") {
    result.sort((a, b) => b.price - a.price);
  }

  if (searchTerm && searchTerm.trim() !== "") {
    result = result.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  state.filteredProducts = result;
}
