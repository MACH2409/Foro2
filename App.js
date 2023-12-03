import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google"
import {GoogleAuthProvider, onAuthStateChanged, signInWithCredential} from "firebase/auth"
import {auth} from "./firebaseConfig.js"
import React from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity, TextInput, Button, ScrollView, ActivityIndicator } from "react-native";
import { BlurView } from 'expo-blur';
import { AppRegistry } from 'react-native';
import SignInScreen from "./screens/SingInScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

AppRegistry.registerComponent('Foro2', () => App);

const uri = 'https://www.teahub.io/photos/full/48-482483_theme-android.jpg'
const logo = 'https://lh3.googleusercontent.com/uOUVvXCkdt3wH1lN3kDjthWW7rWrz9Cy0jiFSO-LnsOnkPv3s01151m2XN7SB4D_dex61Obt6cDIj1tghLAz0g=w16383'


WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "602855319291-iu9khk9vc65t5psh3plpjivomb9c81kd.apps.googleusercontent.com",
  });

  React.useEffect(() =>{
    if(response?.type === "success"){
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response])

  return <SignInScreen promptAsync={promptAsync}/>
    // <View style={styles.container}>
    //   <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
    //   <ScrollView contentContainerStyle = {
    //     {
    //       flex: 4,
    //       width: '100%',
    //       height: '100%',
    //       alignItems: 'center',
    //       justifyContent: 'center'
    //     }
    //   }>
    //     <BlurView intensity={30}>
    //       <View style={styles.login}>
    //       <Image source={{ uri: logo }} style={styles.logo} />
    //       {/* PRUEBA JS */}
    //       <View>
    //         <Text style={{fontSize: 17, fontWeight: '400', color: '#87eff8'}}>E-mail</Text>
    //         <TextInput style={[styles.input, {color: '#e8f5f7'}]} placeholder="correo@gmail.com" placeholderTextColor='#e8f5f7' />
    //       </View>
    //       <View>
    //         <Text style={{fontSize: 17, fontWeight: '400', color: '#87eff8'}}>Password</Text>
    //         <TextInput style={[styles.input, {color: '#e8f5f7'}]} placeholder="*********" placeholderTextColor='#e8f5f7' secureTextEntry={true}/>
    //       </View>
    //       <TouchableOpacity style={styles.button}>
    //       <Text style={{fontSize: 17, fontWeight: '400', color: '#000000'}}>Login</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.button2}>
    //       <Text style={{fontSize: 17, fontWeight: '400', color: '#000000'}}>Create Account</Text>
    //       </TouchableOpacity>
    //       </View>
    //     </BlurView>

    //   </ScrollView>
    // </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 490,
    borderColor: '#2d5f65',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  logo:{
    width: 100,
    height: 82,
    marginVertical: 30,
  },
  input:{
    width: 250,
    height: 40,
    padding: 10,
    marginVertical: 10,
    color: '#e8f5f7',
    marginBottom: 20,
  },
  button:{
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#e8f5f7',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button2:{
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#ff5208',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  }
});
