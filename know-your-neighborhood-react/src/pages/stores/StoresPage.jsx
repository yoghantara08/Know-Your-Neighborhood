import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchStoreAPI } from "../../api/store-api";
import SearchForm from "../../components/form/SearchForm";
import MainLayout from "../../components/layout/MainLayout";
import StoreCard from "../../components/stores/StoreCard";
import AuthContext from "../../context/auth-context";
import useListStore from "../../hooks/useListStore";

const StoresPage = () => {
  const authCtx = useContext(AuthContext);
  const [listStore, setListStore] = useState([]);
  const [searchParams] = useSearchParams();

  const { stores } = useListStore();

  useEffect(() => {
    if (searchParams.get("search") === null) {
      setListStore(stores);
    }

    if (searchParams.get("search") !== null) {
      searchStoreAPI(searchParams.get("search"), authCtx.token)
        .then((res) => {
          setListStore(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [authCtx.token, searchParams, stores]);

  return (
    <MainLayout>
      <div className="flex justify-between flex-col sm:flex-row my-5">
        <Link
          to="/stores/add"
          className="flex items-center space-x-2 font-medium text-color1 text-lg mb-3 ml-1 sm:mb-0 sm:ml-0"
        >
          <p>Add Store</p> <i className="fa-solid fa-plus"></i>
        </Link>
        <SearchForm />
      </div>
      {listStore && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-1 gap-4">
          {listStore.map((store) => (
            <StoreCard key={store.storeId} store={store} />
          ))}
        </div>
      )}
      {listStore.length <= 0 && (
        <h2 className="text-gray-500 font-medium text-xl">No store found!!</h2>
      )}
    </MainLayout>
  );
};

export default StoresPage;
