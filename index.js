/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ContextProvider} from './src/Context/Context';

const wrapper = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};
AppRegistry.registerComponent(appName, () => wrapper);
