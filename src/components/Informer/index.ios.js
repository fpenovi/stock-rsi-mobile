import { ActionSheetIOS } from 'react-native';

export default class Informer {
  static inform(msg) {
    const options = ['Dismiss'];
    ActionSheetIOS.showActionSheetWithOptions(
      { message: msg, options, destructiveButtonIndex: 0 },
      i => i
    );
  }
}
