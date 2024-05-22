import { Route, Routes, Navigate } from "react-router-dom";
import Main from "../main/Main";
import NotFoundPage from "../main/NotFoundPage";
import Content from "../content/Content";
import Fare from "../submenu/Fare";
import NewOffers from "../newsandOffers/NewOffers";
import NewOfferChild from "../newsandOffers/NewOfferChild";
import NewOfferChildNewSide from "../newsandOffers/NewOfferChildNewSide";
import Franchise from "../franchise/Franchise";
import Mainlgrft from "../login/Mainlgrgt";
import DetailsFilm from "../films/DetailsFilm";
import Room from "../roomSeat/Room";
import RoomPay from "../roomSeat/Roompay";
import Registercpn from "../login/Registercpn";
import ConfirmEmail from "../login/ConfirmEmail";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/fee" element={<Fare />} />
      <Route path="/newoffers">
        <Route index="true" element={<NewOffers />} />
        <Route path="newofferchild/:id" element={<NewOfferChild />} />
        <Route
          path="newofferchildnewside/:id"
          element={<NewOfferChildNewSide />}
        />
      </Route>
      <Route path="/detailsFilm/:id" element={<DetailsFilm />} />
      <Route path="/allmovie" element={<Content />} />
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/loginandSignin" element={<Mainlgrft />} />
      <Route path="/registernewmb" element={<Registercpn />} />
      <Route path="/room/:id/:name/:scheduleId/:seat/:day">
        <Route index="true" element={<Room />} />
        <Route path=":listseat" element={<RoomPay />} />
      </Route>
      <Route path="/confirmemail" element={<ConfirmEmail />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default Routers;
