import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

import MapboxGL from '@rnmapbox/maps'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UiPage from './UiPage';
import HomePage from './HomePage';

import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import MapScreen from './MapScreen';

import listIcon from './images/iconListBold.png';
import searchIcon from './images/iconSearchBold.png';
import viewIcon from './images/iconViewBold.png';
import typingIcon from './images/iconTypingBold.png';

const Tab = createBottomTabNavigator();
const myToken = 'sk.eyJ1IjoiZW1hc2xlc2ExIiwiYSI6ImNsbHpieDhjbjB3NDYzY3A2dHJiOHR2NDAifQ.3BBR9d_8x53M_93MzyqHHw';

MapboxGL.setAccessToken(myToken);
MapboxGL.setTelemetryEnabled(false);
MapboxGL.setWellKnownTileServer('Mapbox');

const BottomTabs = () => {

    

  return (
    <Tab.Navigator 
    initialRouteName="Map"
    screenOptions={({  }) => ({
        headerShown: false,
            tabBarStyle: {
                backgroundColor: 'lightgrey', // Background color of the tab bar
                //margin: 20,
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
              },
              
    })}
    
    >
        
        <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                      /*
                        <AntDesignIcon
                          name="bars"
                          color={focused ? 'white' : 'black'}
                          size={size}
                        />
                        */
                        <View
                        style={[
                          styles.tabIconContainer,
                          {
                            backgroundColor: focused ? 'black' : 'white',
                            width: 50, // Adjust the width of the background
                            height: 50, // Adjust the height of the background
                            borderRadius: 10, // Adjust the border radius as needed
                          },
                        ]}
                      >
                        <Image
                        source={listIcon}
                        style={{
                          width: 25*1.5,
                          height: 25*1.5,
                          tintColor: focused ? 'white' : 'black',
                        }}
                      />
                      </View>
                        ),
                    }}
                />
                <Tab.Screen
                name="Search"
                component={UiPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        /*<AntDesignIcon
                          name="search1"
                          color={focused ? 'white' : 'black'}
                          size={size}
                        />*/
                        <View
                          style={[
                            styles.tabIconContainer,
                            {
                              backgroundColor: focused ? 'black' : 'white',
                              width: 50, // Adjust the width of the background
                              height: 50, // Adjust the height of the background
                              borderRadius: 10, // Adjust the border radius as needed
                            },
                          ]}
                        >
                        <Image
                        source={searchIcon}
                        style={{
                          width: 25*1.5,
                          height: 25*1.5,
                          tintColor: focused ? 'white' : 'black',
                        }}
                      />
                      </View>
                        ),
                    }}
                />
            <Tab.Screen
                name="UI"
                component={UiPage}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        /*<AntDesignIcon
                          name="eyeo"
                          color={focused ? 'white' : 'black'}
                          size={size}
                        />*/
                        <View
                          style={[
                            styles.tabIconContainer,
                            {
                              backgroundColor: focused ? 'black' : 'white',
                              width: 50, // Adjust the width of the background
                              height: 50, // Adjust the height of the background
                              borderRadius: 10, // Adjust the border radius as needed
                            },
                          ]}
                        >
                        <Image
                        source={viewIcon}
                        style={{
                          width: 25*1.5,
                          height: 16*1.5,
                          tintColor: focused ? 'white' : 'black',
                        }}
                      />
                      </View>
                        ),
                    }}
                />
            
            <Tab.Screen
            name="HomePage" 
            component={HomePage}
                options={{
                    tabBarLabel: '',//EntypoIcon
                    tabBarIcon: ({ color, size, focused }) => (
                        /*<EntypoIcon
                          name="typing"
                          color={focused ? 'white' : 'black'}
                          size={size}
                        />*/
                        <View
                          style={[
                            styles.tabIconContainer,
                            {
                              backgroundColor: focused ? 'black' : 'white',
                              width: 50, // Adjust the width of the background
                              height: 50, // Adjust the height of the background
                              borderRadius: 10, // Adjust the border radius as needed
                            },
                          ]}
                        >
                        <Image
                        source={typingIcon}
                        style={{
                          //backgroundColor: focused ? 'black' : 'white',
                          width: 26*1.5,
                          height: 20*1.5,
                          tintColor: focused ? 'white' : 'black',
                        }}
                      />
                   </View>
                        ),
                    }}
                />
   
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabIconContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  
});

export default BottomTabs