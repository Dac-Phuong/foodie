import Detail from "../Screen/Detail";
import EditProfile from "../Screen/EditProfile";
import Search from "../Screen/Search";
import DrawerNavigate from "./drawer";

  export default function (Stack) {
    return (
      <>
        <Stack.Screen name="DrawerNavigate" component={DrawerNavigate} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </>
    );
  }
  