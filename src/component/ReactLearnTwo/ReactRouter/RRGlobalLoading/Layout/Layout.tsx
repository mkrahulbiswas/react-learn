import { Outlet, useNavigation } from "react-router";
import Footer from "../Includes/Footer";
import Header from "../Includes/Header";

export default function Layout() {
  const navigation = useNavigation()
  console.log(navigation);

  return (
    <>
      {
        (navigation.state === 'loading') ?
          <div>Loading...</div> :
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
      }
    </>
  )
}