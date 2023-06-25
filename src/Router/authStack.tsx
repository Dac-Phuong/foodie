import Login from '../Screen/Login';
import Onboarding from '../Screen/Onboarding';
import Register from '../Screen/Register';
import Splash from '../Screen/Splash';
import WellCome from '../Screen/Wellcome';
export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="WellCome" component={WellCome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </>
  );
}
