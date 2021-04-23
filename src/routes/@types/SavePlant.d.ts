import { RootStackParamsList } from '../../routes/stack.routes'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

type SavePlantScreenRouteProp = RouteProp<
  RootStackParamsList,
  'SavePlant'
>

type SavePlantScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'SavePlant'
>

interface SavePlantProps extends React.FC {
  route: SavePlantScreenRouteProp
  navigation: SavePlantScreenNavigationProp
}