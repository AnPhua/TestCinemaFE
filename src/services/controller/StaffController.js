import axios from "../Customize-axios";
const GetMovieUnreference = () => {
  return axios.get(
    "api/staff/GetMovieUnreference?PremiereDate=2024/04/10&pageSize=20&pageNumber=1"
  );
};
const GetMovieShowing = () => {
  return axios.get(
    "api/staff/GetMovieShowing?PremiereDate=2024%2F04%2F10&pageSize=20&pageNumber=1"
  );
};
const GetSneakShow = () => {
  return axios.get(
    "api/staff/GetAllMovie?MovieTypeId=6&pageSize=20&pageNumber=1"
  );
};
const GetAllMovie = () => {
  return axios.get("api/staff/GetAllMovie?pageSize=20&pageNumber=1");
};
const GetMovieById = (movieId) => {
  return axios.get(`api/staff/GetMovieById?movieId=${movieId}`);
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

export {
  GetMovieUnreference,
  GetMovieShowing,
  GetSneakShow,
  GetAllMovie,
  GetMovieById,
  GetAllFood,
  GetSchedulesByMovie,
  GetSchedulesById,
};
