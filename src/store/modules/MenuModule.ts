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

    const arr1: any[] = [];
    for (let i = 0; i < 10; i ++) {
      const arr2: any[] = [];
      for (let j = 0; j < 10; j ++) {
        const arr3: any[] = [];
        for (let k = 0; k < 10; k ++) {
          const arr4: any[] = [];
          for (let l = 0; l < 10; l ++) {
            arr4.push({
              icon: 'gift',
              name: '菜单-' + i + "-" + j + "-" + k + "-" + l,
              path: 'path' + i + "-" + j + "-" + k + "-" + l,
              subMenu: [],
            });
          }
          arr3.push({
            icon: 'gift',
            name: '菜单-' + i + "-" + j + "-" + k,
            path: 'path' + i + "-" + j + "-" + k,
            subMenu: arr4,
          });
        }
        arr2.push({
          icon: 'gift',
          name: '菜单-' + i + "-" + j,
          path: 'path' + i + "-" + j,
          subMenu: arr3,
        });
      }
      arr1.push({
        icon: 'gift',
        name: '菜单-' + i,
        path: 'path' + i,
        subMenu: arr2,
      });
    }

    for (const e of arr1) {
      arr.push(CreateMenu(e));
    }
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
