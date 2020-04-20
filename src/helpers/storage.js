import AsyncStorage from '@react-native-community/async-storage';

export default {
  set: (key, data) => {
    if (typeof data === 'object') {
      AsyncStorage.setItem(key, JSON.stringify(data));
    } else {
      AsyncStorage.setItem(key, data);
    }
  },
  get: async (key, defaultValue) => {
    let item = await AsyncStorage.getItem(key);
    try {
      item = JSON.parse(item);
    } catch (e) {
      return item || defaultValue;
    }
    return item || defaultValue;
  },
  removeAll: async () => {
    const keys = await AsyncStorage.getAllKeys();
    return AsyncStorage.multiRemove(keys);
  },
  removeExceptUsers: async () => {
    const keys = await AsyncStorage.getAllKeys();
    return AsyncStorage.multiRemove(keys.filter(k => k !== 'APP_USERS'));
  },
};
