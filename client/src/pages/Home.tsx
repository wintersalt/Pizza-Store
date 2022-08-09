import Banner from "../components/Banner/Banner"
import DishContainer from "../components/DishContainer/DishContainer"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Banner />
      <DishContainer container_id={"pizza"} data={[]} />
      <DishContainer container_id={"combo"} data={[]} />
      <DishContainer container_id={"snacks"} data={[]} />
      <DishContainer container_id={"drinks"} data={[]} />
      <DishContainer container_id={"desserts"} data={[]} />
      <Footer />
    </>
  )
}

export default Home
