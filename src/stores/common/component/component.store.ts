import { create } from 'zustand';

import { kStorageKey } from '@/constants/common';

import { UseComponentStoreProps } from './component.type';

const useComponentStore = create<UseComponentStoreProps>((set) => ({
  // #region Sidebar Collapsible
  isSidebarCollapsed:
    JSON.parse(
      localStorage?.getItem(kStorageKey.SidebarCollapsible) || 'null'
    ) || false,
  updateIsSidebarCollapsed: (value) => {
    set((state) => {
      localStorage.setItem(kStorageKey.SidebarCollapsible, value?.toString());
      return { ...state, isSidebarCollapsed: value };
    });
  },
  // #endregion
}));

export default useComponentStore;
