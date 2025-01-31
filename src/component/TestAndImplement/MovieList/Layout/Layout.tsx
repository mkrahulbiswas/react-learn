import { Outlet, useNavigation } from "react-router";
import Footer from "../Includes/Footer";
import Header from "../Includes/Header";
import { useContext, useState } from "react";
import { LoaderContext } from "../Context/LoaderContext";

export default function Layout() {
  const navigation = useNavigation()
  const { loader }: any = useContext(LoaderContext)
  console.log(loader);
  const [newLoader, setNewLoader] = useState(0)

  return (
    <>
      {
        // (newLoader) ?
        (navigation.state === 'loading') ?
          <div>Loading...</div> :
          <div className="mainSection">
            <Header />
            {newLoader}
            <Outlet context={{ newLoader, setNewLoader }} />
            <Footer />
          </div>
      }
    </>
  )
}