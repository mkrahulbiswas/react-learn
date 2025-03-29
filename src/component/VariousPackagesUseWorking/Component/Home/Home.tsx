import { useContext } from "react";
import { PackagesContext } from "../../Context/PackagesContext";
import { RouteContext } from "../../Context/RouteContext";
import { CommonContext } from "../../Context/CommonContext";

export const Home = () => {
  const { textTwo }: any = useContext(RouteContext)
  const { textOne }: any = useContext(CommonContext)
  return (
    <>
      Home
    </>
  )
}
