import axios from "../Customize-axios";
const GetMovieUnreference = () => {
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "/");
  return axios.get(
    `api/staff/GetMovieUnreference?PremiereDate=${formattedDate}&pageSize=20&pageNumber=1`
  );
};
const GetMovieShowing = () => {
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "/");
  return axios.get(
    `api/staff/GetMovieShowing?PremiereDate=${formattedDate}&pageSize=20&pageNumber=1`
  );
};
const GetSneakShow = () => {
  return axios.get("api/staff/GetAllMovieSpecial?pageSize=20&pageNumber=1");
};
const GetMovieByTypeId = async (movieTypeId) => {
  return await axios.get(
    `api/staff/GetAllMovie?MovieTypeId=${movieTypeId}&pageSize=20&pageNumber=1`
  );
};
const GetAllMovie = () => {
  return axios.get("api/staff/GetAllMovie?pageSize=20&pageNumber=1");
};
const GetMovieById = (movieId) => {
  return axios.get(`api/staff/GetMovieById?movieId=${movieId}`);
};
const GetMovieByIdSort = (movieId) => {
  return axios.get(`api/staff/GetMovieByIdForSort?movieId=${movieId}`);
};
const GetAllFood = () => {
  return axios.get("api/admin/GetAllFoods?PageNumber=1&PageSize=10");
};
const GetSchedulesByMovie = async (movieId) => {
  return await axios.get(
    `api/staff/GetSchedulesListHour/${movieId}?pageSize=50&pageNumber=1`
  );
};
const GetSchedulesById = async (scheduleId) => {
  return await axios.get(`/api/admin/GetSchedulesById/${scheduleId}`);
};
const CreateBill = async (addbill) => {
  try {
    const res = await axios.post(`api/Member/CreateBill`, addbill);
    return res;
  } catch (error) {
    alert(error.message + " Lỗi");
    throw error;
  }
};
const CreatePaymentUrl = async (idbill, token) => {
  try {
    const res = await axios.post(
      `Vnpay/CreatePaymentUrl/${idbill}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    alert(error.message + " Lỗi CreatePaymentUrl");
    throw error;
  }
};
const GetSchedulesForAllDays = async () => {
  return axios.get(
    `/api/staff/GetSchedulesForAllDays?pageSize=20&pageNumber=1`
  );
};
const GetScheduleDayListHours = async (day) => {
  return axios.get(
    `api/staff/GetSchedulesDayListHour?TheDay=${day}&pageSize=20&pageNumber=1`
  );
};
export {
  GetMovieUnreference,
  GetMovieShowing,
  GetSneakShow,
  GetAllMovie,
  GetMovieById,
  GetAllFood,
  GetSchedulesByMovie,
  GetSchedulesById,
  CreateBill,
  CreatePaymentUrl,
  GetMovieByTypeId,
  GetSchedulesForAllDays,
  GetScheduleDayListHours,
  GetMovieByIdSort,
};
