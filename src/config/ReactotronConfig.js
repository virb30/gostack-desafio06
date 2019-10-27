import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ name: 'React Native' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
