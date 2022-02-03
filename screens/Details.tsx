import React, { FC } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Styles from "../styles/Styles";

const Details = (props: any): JSX.Element => {
  const post: any = props.route.params;

  return (
    <ScrollView testID="DetailScreen-wrapper">
      <View style={Styles.container}>
        <Text style={Styles.card}>{JSON.stringify(post.post, null, 10)}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;
