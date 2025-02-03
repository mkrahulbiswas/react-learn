import { connect } from "react-redux";
import Home from "../Components/Home";
import { addToCart } from "../Services/Actions/Actions";
const mapDispatchToProps = (dispatch: any) => ({
  addToCartHandler: (data: any) => dispatch(addToCart(data))
})
const mapStateToProps = () => ({})
// const mapStateToProps = (state: any) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Home)