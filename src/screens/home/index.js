import { connect } from "react-redux";

import { onPlus, onMinus } from "../../redux/actions/Counter";
import HomeScreen from "./HomeScreen";

const mapStateToProps = state => ({
  count: state.Counter
});
const mapDispatchToProps = dispatch => ({
  cong: () => dispatch(onPlus()),
  tru: () => dispatch(onMinus())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
