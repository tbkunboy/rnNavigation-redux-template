import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Cộng" onPress={this.props.cong} />
        <Text> Home </Text>
        <Text>{this.props.count.count}</Text>
        <TouchableOpacity onPress={this.props.tru}>
          <Text>Tru</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
