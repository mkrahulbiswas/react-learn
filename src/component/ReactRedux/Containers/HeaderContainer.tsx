import { connect } from "react-redux";
import Header from "../Components/Header";
const mapDispatchToProps = (dispatch: any) => ({})
const mapStateToProps = (state: any) => ({
  data: state.cardItem
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)