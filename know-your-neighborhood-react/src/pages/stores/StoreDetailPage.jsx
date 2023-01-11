import React from "react";
import { Link, useParams } from "react-router-dom";
import { store1, userDefault } from "../../assets";
import MainLayout from "../../components/layout/MainLayout";
import Breadcrumbs from "../../components/stores/Breadcrumbs";
import useStore from "../../hooks/useStore";

const StoreDetailPage = () => {
  const { storeId } = useParams();
  const { store, user, editPermission, error } = useStore(storeId);

  const profilePicture = user.imageUrl;

  return (
    <MainLayout>
      {!error && (
        <>
          <Breadcrumbs storeName={store.storeName} />
          <div className="grid grid-cols-1 md:grid-cols-7 mt-3 gap-5">
            <img
              src={store1}
              alt="store"
              className="md:col-span-4 w-full rounded-md shadow aspect-video object-cover"
            />
            <div className="md:col-span-3 text-gray-500 font-medium">
              <h2 className="text-primary font-semibold text-2xl mb-3">
                {store.storeName}
              </h2>
              <div className="flex">
                <i className="fa-sharp fa-solid fa-location-dot text-lg w-7" />
                <p>
                  {store.country}, {store.city}
                </p>
              </div>
              <div className="flex">
                <i className="fa-regular fa-envelope text-lg w-7" />
                <p>{store.storeEmail}</p>
              </div>
              <div className="flex">
                <i className="fa-solid fa-phone text-lg w-7" />
                <p>{store.phoneNumber}</p>
              </div>

              <div className="flex mt-5 bg-gray-50 rounded-lg py-2 px-3 md:w-[350px] shadow ">
                <Link to={`/profile/${user.name}/${user.userId}`}>
                  <img
                    src={profilePicture ? profilePicture : userDefault}
                    alt="profile_picture"
                    className="w-[64px] h-[64px] rounded-full mr-4 hover:opacity-80 transition duration-150"
                  />
                </Link>
                <div>
                  <Link to={`/profile/${user.name}/${user.userId}`}>
                    <p className="text-primary text-xl hover:text-color1 transition duration-150">
                      {user.name}
                    </p>
                  </Link>
                  <p className="text-md">{user.email}</p>
                </div>
              </div>

              {editPermission && (
                <Link
                  to="edit"
                  className="block text-center py-2 text-secondary mt-5 rounded bg-yellow-500 sm:w-[150px]"
                >
                  Edit Store
                </Link>
              )}
            </div>
          </div>

          <div className="mt-3">
            <p className="text-primary font-semibold text-xl">Description:</p>
            <p className="text-gray-500 font-medium">
              {store.description ? store.description : "No description"}
            </p>
          </div>
        </>
      )}

      {error && <p className="text-primary">Store not found!!</p>}
    </MainLayout>
  );
};

export default StoreDetailPage;
