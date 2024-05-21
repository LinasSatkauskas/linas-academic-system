import { create } from "zustand"
import { createNavigationSlice } from "./navigationSlice"
import { useShallow } from "zustand/react/shallow"
import { INavSlice, INotificationSlice } from "./store.t"
import { createNotificationSlice } from "./notificationSlice"

export const shallow = useShallow
export const useBoundStore = create<INotificationSlice & INavSlice>()(
  (...a) => ({
    ...createNotificationSlice(...a),
    ...createNavigationSlice(...a),
  })
)
