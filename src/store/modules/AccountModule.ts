import store from '@/store/index';
import {
    VuexModule,
    Module,
    Mutation,
    Action,
    getModule,
} from 'vuex-module-decorators';
import { log } from '@/utils/index';

export interface User {
    name: string;
}
export interface Credential {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  createTime: number;
  expiresTime: number;
}
export interface Account {
  credential: Credential | null;
  user: User | null;
}

@Module({ dynamic: true, namespaced: true, store, name: 'Account' })
class AccountM extends VuexModule {

  private account: Account = { credential: null, user: null };

  public get getIsLogin(): boolean { return this.account.credential !== null; }
  public get getCredential(): Credential | null { return this.account.credential; }
  public get getUser(): User | null { return this.account.user; }

  @Action({ commit: "updateAccount", rawError: true })
  public async login() {
    return {
      credential: {
        tokenType: '',
        accessToken: '',
        refreshToken: '',
        createTime: 0,
        expiresTime: 0,
      },
      user: {
        name: "Jack"
      },
    };
  }
  @Action({ commit: "updateAccount", rawError: true })
  public async logout() {
    return null;
  }

  @Mutation
  private updateAccount(e: Account | null) {
    if (e === null || e === undefined) {
      this.account = { credential: null, user: null };
    } else {
      this.account = e;
    }
  }

}

export const AccountModule = getModule(AccountM);
