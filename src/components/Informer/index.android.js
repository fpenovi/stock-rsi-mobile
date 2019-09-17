import { ToastAndroid } from 'react-native';

export default class Informer {
  static inform(msg) {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  }
}
