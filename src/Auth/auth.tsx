import auth from '@react-native-firebase/auth';

const register = (fullName, email, password, comfrimPassword) => {
  if (
    fullName == '' ||
    email == '' ||
    password == '' ||
    comfrimPassword == ''
  ) {
    alert('Enter complete information');
  } else {
    return auth()
      .createUserWithEmailAndPassword(email.trim(), password)
      .then(cred => {
        const {uid} = cred.user;
        auth().currentUser.updateProfile({
          displayName: fullName,
        });
        return uid;
      })
      .catch(err => alert(err.code));
  }
};
const login = (email, password) => {
  if (!email || !password) {
    alert('Enter input');
  } else {
    return auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(() => {
        console.log(auth().currentUser.uid);
      })
      .catch(err => alert(err.code, err.massage));
  }
};
const Logout = () => {
  return auth().signOut();
};
const Auth = {
  login,
  register,
  Logout,
};
export default Auth;
