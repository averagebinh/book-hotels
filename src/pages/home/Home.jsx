import NavBarItem from "./NavBarItem";
import ComponentHeader from "./ComponentHeader";
import ComponentInput from "./ComponentInput";
import ComponentCity from "./ComponentCity";
import ComponentType from "./ComponentType";
import ComponentHotelList from "./ComponentHotelList";
import ComponentEmail from "./ComponentEmail";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <main>
        <NavBarItem />
        <ComponentHeader />
        <ComponentInput />
        <ComponentCity />
        <ComponentType />
        <ComponentHotelList />
        <ComponentEmail />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
