import { RootStackParamsList } from '../../routes/stack.routes'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

type ConfirmationScreenRouteProp = RouteProp<
  RootStackParamsList,
  'Confirmation'
>

type ConfirmationScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Confirmation'
>

interface ConfirmationProps extends React.FC {
  route: ConfirmationScreenRouteProp
  navigation: ConfirmationScreenNavigationProp
}