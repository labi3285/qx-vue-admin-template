import store from '@/store/index';
import {
    VuexModule,
    Module,
    Mutation,
    Action,
    getModule,
} from 'vuex-module-decorators';
import { log } from '@/utils/index';

import menu from '@/menu/index';

export interface Menu {
  id: string;
  icon: string;
  name: string;
  path: string;
  isFold: boolean;
  subMenu: Menu[];
}

let __menu_id: number = -1;
export function CreateMenu(e: any): Menu {
  __menu_id += 1;
  const id = __menu_id.toString();
  const icon = e.icon || '';
  const name = e.name || '';
  const path = e.path || '';
  const isFold = true;
  const subMenu: Menu[] = [];
  if (e.subMenu !== undefined) {
    for (const e1 of e.subMenu) {
      subMenu.push(CreateMenu(e1));
    }
  }
  return { id, icon, name, path, isFold, subMenu };
}

@Module({ dynamic: true, namespaced: true, store, name: 'Menu' })
class MenuM extends VuexModule {

  private menu: Menu[] = [];
  private isSideMenuFold: boolean = false;

  public get getSideMenu(): Menu[] { return this.menu; }
  public get getIsSideMenuFold(): boolean { return this.isSideMenuFold; }

  @Action({ commit: "updateMenus", rawError: true })
  public async fetchMenus() {
    const arr: Menu[] = [];
    for (const e of menu) {
      arr.push(CreateMenu(e));
    }
    console.log(arr);
    return arr;
  }
  @Action({ commit: "updateIsSideMenuFold", rawError: true })
  public async setIsSideMenuFold(e: boolean) {
    return e;
  }

  @Action({ commit: "updateMenus", rawError: true })
  public async asycMenu() {
    return this.menu;
  }

  @Mutation
  private updateMenus(e: Menu[] | null) {
    this.menu = e || [];
  }
  @Mutation
  private updateIsSideMenuFold(e: boolean) {
    this.isSideMenuFold = e;
  }

}

export const MenuModule = getModule(MenuM);
