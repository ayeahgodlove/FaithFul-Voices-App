import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { setTokenAction } from "../../slice/token.slice";

const useToken = () => {
  const token = useSelector<IRootState, null | string>(
    (state) => state.token.token
  );

  const dispatch = useDispatch();

  const setToken = (token: null | string) => {
    dispatch(setTokenAction(token));
  };

  return {
    token,
    setToken,
  };
};

export { useToken };
