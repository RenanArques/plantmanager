import { RootStackParamsList } from '../../routes/stack.routes'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

type MyPlantsScreenRouteProp = RouteProp<
  RootStackParamsList,
  'MyPlants'
>

type MyPlantsScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'MyPlants'
>

interface MyPlantsProps extends React.FC {
  route: MyPlantsScreenRouteProp
  navigation: MyPlantsScreenNavigationProp
}