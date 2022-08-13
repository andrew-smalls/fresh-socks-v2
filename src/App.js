import CategoryMenu from "./components/category-menu/category-menu.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Books",
      imageUrl:
        "https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg",
    },
    {
      id: 2,
      title: "eBooks",
      imageUrl:
        "https://bogdanpopescu.com/wp-content/uploads/2020/07/free-ebooks.jpeg",
    },
    {
      id: 3,
      title: "Accessories",
      imageUrl:
        "https://m.media-amazon.com/images/I/81pLy81nyiL._AC_SL1500_.jpg",
    },
  ];

  return <CategoryMenu categories={categories} />;
};

export default App;
