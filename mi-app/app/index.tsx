import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const ventanaLogin = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [textoSeguro, setTextoSeguro] = useState(true);

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Iniciar sesión</Text>
      
      <Button mode="contained" style={estilos.btnfacebook} contentStyle={estilos.contenidoBoton}>
        Continuar con Facebook
      </Button>
      <Button mode="contained" style={estilos.btngoogle} contentStyle={estilos.contenidoBoton}>
        Continuar con Google
      </Button>
      <Button mode="contained" style={estilos.btnapple} contentStyle={estilos.contenidoBoton} icon="apple" labelStyle={{ color: '#000' }}>
        Continuar con Apple
      </Button>

      <Text style={estilos.o}>o</Text>

      <Text style={estilos.etiqueta}>Correo</Text>
      <TextInput
        placeholder="Ingresa tu correo"
        placeholderTextColor="#bbb"
        value={correo}
        onChangeText={setCorreo}
        style={estilos.entrada}
        mode="outlined"
        outlineColor="#000"
        activeOutlineColor="#fff"
        theme={{
          colors: {
            primary: '#fff',
            text: '#fff',
            placeholder: '#fff',
            background: '#fff',
          },
        }}
      />

      <Text style={estilos.etiqueta}>Contraseña</Text>
      <TextInput
        placeholder="Ingresa tu contraseña"
        placeholderTextColor="#bbb"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry={textoSeguro}
        style={estilos.entrada}
        mode="outlined"
        outlineColor="#000"
        activeOutlineColor="#fff"
        theme={{
          colors: {
            primary: '#fff',
            text: '#fff',
            placeholder: '#fff',
            background: '#000',
          },
        }}
        right={
          <TextInput.Icon
            icon={textoSeguro ? "eye-off" : "eye"}
            color="#fff"
            onPress={() => setTextoSeguro(!textoSeguro)}
          />
        }
      />

      <Button
        mode="contained"
        disabled={!correo || !contrasena}
        style={[estilos.botonLogin, (!correo || !contrasena) && estilos.botonDeshabilitado]}
        contentStyle={estilos.contenidoBoton}
        labelStyle={(!correo || !contrasena) ? estilos.textoDeshabilitado : estilos.textoHabilitado}
      >
        Iniciar sesión
      </Button>
      
      <TouchableOpacity>
        <Text style={estilos.olvidasteContrasena}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={estilos.llaveroIcloud}>Usar el Llavero de iCloud</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 40,
    paddingTop: 80, 
    backgroundColor: '#000',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  btnfacebook: {
    backgroundColor: '#3b5999',
    marginBottom: 10,
    borderRadius: 35,
    width: '100%',
  },
  btngoogle: {
    backgroundColor: '#4286f5',
    marginBottom: 10,
    borderRadius: 35,
    width: '100%',
  },
  btnapple: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 35,
    width: '100%',
  },
  contenidoBoton: {
    height: 50,
  },
  o: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
  },
  etiqueta: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5,
    color: '#fff',
    fontSize: 16,
  },
  entrada: {
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#000', 
  },
  botonLogin: {
    marginTop: 10,
    borderRadius: 25,
    width: '100%',
    color: '#fff',
    backgroundColor: '#FF0000', 
  },
  botonDeshabilitado: {
    backgroundColor: '#292929', 
    color: '#fff',
  },
  textoHabilitado: {
    color: '#fff',
  },
  textoDeshabilitado: {
    color: '#bbb',
  },
  olvidasteContrasena: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
  },
  llaveroIcloud: {
    textAlign: 'center',
    color: '#bbb',
    marginTop: 5,
  },
});

export default ventanaLogin;
