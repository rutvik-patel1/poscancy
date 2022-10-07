import Cookies from "js-cookie";
class AppStorage {
    constructor(storage){
        this.storage = storage
        if (!this.isSupported()) {
            throw new Error('Storage is not supported by browser!');
          }
    }

    set(key,value){
        this.storage.set(key,value)
    }
    get(key){
      return this.storage.get(key)
    }
    remove(key){
        this.storage.remove(key)
    }
    clear(){
        this.storage.clear()
    }

    isSupported() {
        let supported = true;
         if (!this.storage) {
          supported = false;
        }
        return supported;
      }
}
const appCookieStorage = new AppStorage(Cookies);
export { appCookieStorage }