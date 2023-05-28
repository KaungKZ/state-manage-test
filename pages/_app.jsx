import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import "../styles/styles.scss";
import Layout from "../components/helpers/Layout";

function MyApp({ Component, router, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  function getLayout(_component) {
    if (Component.getLayout) {
      return Component.getLayout(_component);
    }
    return <Layout>{_component}</Layout>;
  }

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
