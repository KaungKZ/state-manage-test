import { wrapper } from "../redux/store";
import { requireAuthentication } from "../contexts/function/withAuth";
import HomeIndex from "../components/HomeIndex";

export default function Home(props) {
  return props.success ? (
    <HomeIndex data={props.data.data} />
  ) : (
    <div className="inner-all-content-wrapper py-9 px-12">No information</div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(() =>
  requireAuthentication(async () => {
    let success;
    let data;

    try {
      const response = await fetch(
        "https://www.balldontlie.io/api/v1/players?per_page=10"
      );

      data = await response.json();

      success = true;
      if (response.status !== 200 || data.data.length < 0) {
        success = false;
        data = null;
      }
    } catch (error) {
      data = null;

      success = false;
    }

    return {
      props: {
        data,
        success,
      },
    };
  })
);
