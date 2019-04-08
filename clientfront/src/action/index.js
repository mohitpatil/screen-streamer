import streams from "../apis/streams";
import history from "../history";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  //console.log('userid', {userId});
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({
    type: "CREATE_STREAM",
    payload: response.data
  });
  history.push("/");
};

export const fetchAllStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({
    type: "FETCH_ALL_STREAMS",
    payload: response.data
  });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: "FETCH_STREAM",
    payload: response.data
  });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: "DELETE_STREAM",
    payload: id
  });
  history.push("/");
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({
    type: "EDIT_STREAM",
    payload: response.data
  });
  history.push("/");
};
