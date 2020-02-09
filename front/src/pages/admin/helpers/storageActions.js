const KEY = 'accessToken';

class storageActions {
  static isExist() {
    return !!this.get();
  }

  static get(key) {
    return localStorage.getItem(key);
  }

  static set(key, value) {
    localStorage.setItem(KEY, value);
  }

  static remove(key) {
    localStorage.removeItem(key);
  }
}

export default storageActions;
