import { GOT_API } from "./utils/consts";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import Header from "./Components/Header/Header";
import useFetch from "./Components/Hooks/useFetch";
import Gallery from "./Components/Gallery/Gallery";
import { useCallback, useMemo, useState } from "react";

const App = ({ initialLength }) => {
  const [pageSize] = useState(initialLength);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError } = useFetch(GOT_API);

  const limit = pageSize * currentPage;
  const characters = useMemo(() => data.slice(0, limit), [data, limit]);
  const hasNext = limit < data.length;

  const handleOnClickShowMore = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {isError ? (
            <Error />
          ) : (
            <div>
              <Gallery characters={characters} />
              <Footer
                disabled={!hasNext}
                handleOnClickShowMore={handleOnClickShowMore}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
