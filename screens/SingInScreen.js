import React from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity, TextInput, Button, ScrollView, SafeAreaView } from "react-native";
import { BlurView } from 'expo-blur';
import { AppRegistry } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

AppRegistry.registerComponent('Foro2', () => App);

const uri = 'https://www.teahub.io/photos/full/48-482483_theme-android.jpg'
const logo = 'https://lh3.googleusercontent.com/uOUVvXCkdt3wH1lN3kDjthWW7rWrz9Cy0jiFSO-LnsOnkPv3s01151m2XN7SB4D_dex61Obt6cDIj1tghLAz0g=w16383'

export default function SignInScreen({promptAsync}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView contentContainerStyle = {
        {
          flex: 4,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }>
        {/* <BlurView intensity={30}>
          <View style={styles.login}>
          <Image source={{ uri: logo }} style={styles.logo} />
          <View>
            <Text style={{fontSize: 17, fontWeight: '400', color: '#87eff8'}}>E-mail</Text>
            <TextInput style={[styles.input, {color: '#e8f5f7'}]} placeholder="correo@gmail.com" placeholderTextColor='#e8f5f7' />
          </View>
          <View>
            <Text style={{fontSize: 17, fontWeight: '400', color: '#87eff8'}}>Password</Text>
            <TextInput style={[styles.input, {color: '#e8f5f7'}]} placeholder="*********" placeholderTextColor='#e8f5f7' secureTextEntry={true}/>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => promptAsync}>
          <Text style={{fontSize: 17, fontWeight: '400', color: '#000000'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
          <Text style={{fontSize: 17, fontWeight: '400', color: '#000000'}}>Create Account</Text>
          </TouchableOpacity>
          </View>
    </BlurView> */
    <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Ionicons name="logo-firebase" size={100} color="#FFA611" />
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>
          Sign In with{" "}
          <Text style={{ color: "#4285F4" }}>
            G<Text style={{ color: "#EA4336" }}>o</Text>
            <Text style={{ color: "#FBBC04" }}>o</Text>
            <Text style={{ color: "#4285F4" }}>g</Text>
            <Text style={{ color: "#34A853" }}>l</Text>
            <Text style={{ color: "#EA4336" }}>e</Text>
          </Text>
        </Text>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>And Firebase</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#4285F4",
            width: "90%",
            padding: 10,
            borderRadius: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
            marginTop: 80,
            marginBottom: 150,
          }}
          onPress={() => promptAsync()}
        >
          <AntDesign name="google" size={30} color="white" />
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 17 }}>
            Sign In with Google
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      
    }

      </ScrollView>
    </View>
  );
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
