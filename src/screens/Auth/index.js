import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { goToMainTabs } from '../../navigation';

class AuthScreen extends Component {
  loginHandler = () => {
    goToMainTabs();
  };

  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button onPress={this.loginHandler} title="Login" />
      </View>
    );
  }
}

export default AuthScreen;
