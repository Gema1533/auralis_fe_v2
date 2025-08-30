import { modalAction } from "@/redux/slices/sidebarSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const useSidebarAction = () => {
  const dispatch = useDispatch();

  const action = (open: boolean) => {
    dispatch(modalAction({ open }));
  };

  return { action };
};


export const useSidebarSelector = (): RootState["sidebar"] => {
  return useSelector((state: RootState) => state.sidebar);
};