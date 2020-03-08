import React, { useState, useEffect } from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const UserPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fectchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/places/user/${userId}`
        );
        setLoadedPlaces(responseData.places);
      } catch (err) {
        setLoadedPlaces([]);
      }
    };
    fectchPlaces();
  }, [sendRequest, userId]);

  const onDeleteHandler = (placeId) => {
    setLoadedPlaces(places => places.filter(p => p.id !== placeId));
  }

  return (
  <React.Fragment>
  <ErrorModal error={error} onClear={clearError}/>
  {isLoading && <div className="center">
      <LoadingSpinner asOverlay/>
    </div>}
  {!isLoading  && <PlaceList items={loadedPlaces} onDeletePlace={onDeleteHandler} />}
  </React.Fragment>
  );
};

export default UserPlaces;
