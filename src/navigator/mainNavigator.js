import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4164233Navigator from '../features/BlankScreen4164233/navigator';
import BlankScreen2143862Navigator from '../features/BlankScreen2143862/navigator';
import BlankScreen1143861Navigator from '../features/BlankScreen1143861/navigator';
import BlankScreen0143860Navigator from '../features/BlankScreen0143860/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4164233: { screen: BlankScreen4164233Navigator },
BlankScreen2143862: { screen: BlankScreen2143862Navigator },
BlankScreen1143861: { screen: BlankScreen1143861Navigator },
BlankScreen0143860: { screen: BlankScreen0143860Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
