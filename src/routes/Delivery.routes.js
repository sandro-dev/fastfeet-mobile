import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Deliveries from '~/pages/Deliveries';
import DeliveryDetail from '~/pages/DeliveryDetail';
import Problems from '~/pages/Problems';

const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
      initialRouteName="Entregas"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Entregas"
        component={Deliveries}
      />
      <Stack.Screen
        name="Detalhes"
        options={{
          title: 'Detalhes da encomenda',
        }}
        component={DeliveryDetail}
      />
      <Stack.Screen
        name="Problemas"
        options={{
          title: 'Visualizar Problemas',
        }}
        component={Problems}
      />
    </Stack.Navigator>
  );
}
