import { AsyncStorage } from 'react-native';

export default {
  set: (key, data) => {
    if (typeof data === 'object') {
      AsyncStorage.setItem(key, JSON.stringify(data));
    } else {
      AsyncStorage.setItem(key, data);
    }
  },
  get: async (key) => {
    let item = await AsyncStorage.getItem(key);
    try {
      item = JSON.parse(item);
    } catch (e) {
      return item;
    }
    return item;
  },
  removeAll: async () => {
    const keys = await AsyncStorage.getAllKeys();
    const deleted = await AsyncStorage.multiRemove(keys);
    return deleted;
  },
}
