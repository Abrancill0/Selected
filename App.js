import React, {Component} from 'react';
import Guest from './src/screens/guest_profile.js';
import Model_profile from './src/screens/model_profile.js';
import Manager_profile from './src/screens/talentmanager_profile.js';
import Registro from "./src/screens/Registro.js"
import Experiencia from "./src/screens/ExperienciaAgenciaView.js"
import Casting_detail from './src/screens/casting_detail.js';
import Login from './src/screens/LoginView';
import Posted from './src/screens/Posted.js'
import styles from './src/styles/appstyle';

export default class App extends Component {
  render() {

    return (
        <Login/>
    );
  }
  
}
