import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {GluestackUIProvider} from './components/ui/gluestack-ui-provider';
import {Menu, MenuItem, MenuItemLabel} from './components/ui/menu';
import './global.css';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Menu
        offset={5}
        disabledKeys={['Settings']}
        trigger={({...triggerProps}) => {
          return (
            <TouchableOpacity {...triggerProps}>
              <Text>Home Menu</Text>
            </TouchableOpacity>
          );
        }}>
        <MenuItem key="Add account" textValue="Add account">
          <MenuItemLabel size="sm">Add account</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Community" textValue="Community">
          <MenuItemLabel size="sm">Community</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Plugins" textValue="Plugins">
          <MenuItemLabel size="sm">Plugins</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem>
      </Menu>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GluestackUIProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerRight: () => {
                return (
                  <Menu
                    placement="left top"
                    disabledKeys={['Settings']}
                    trigger={({...triggerProps}) => {
                      return (
                        <Pressable {...triggerProps}>
                          <Text>Menu</Text>
                        </Pressable>
                      );
                    }}>
                    <MenuItem key="Add account" textValue="Add account">
                      <MenuItemLabel size="sm">Add account</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Community" textValue="Community">
                      <MenuItemLabel size="sm">Community</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Plugins" textValue="Plugins">
                      <MenuItemLabel size="sm">Plugins</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Settings" textValue="Settings">
                      <MenuItemLabel size="sm">Settings</MenuItemLabel>
                    </MenuItem>
                  </Menu>
                );
              },
            }}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
