import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { ArticleScreen } from './screens/ArticleScreen';
import { ClipScreen } from './screens/ClipScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

{/* <MaterialIcons name="favorite-border" size={24} color="black" /> */ }
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOption = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'HomeTab') {
      iconName = focused
        ? 'home-filled'
        : 'home';
    } else if (route.name === 'ClipTab') {
      iconName = focused ? 'favorite' : 'favorite-border';
    }

    // You can return any component that you like here!
    return <MaterialIcons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
})

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>{
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false, title: 'Home' }} />
        <Tab.Screen name="ClipTab" component={ClipScreen} options={{ headerShown: false, title: 'Clip' }} />
      </Tab.Navigator>
    }</NavigationContainer>

  );

}


