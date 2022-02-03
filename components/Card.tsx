import React from "react";
import { View, Text } from "react-native";
import Styles from "../styles/Styles";
import { TouchableRipple } from "react-native-paper";

type Props = {
  post: any;
  navigation: {
    navigate: Function;
  };
};

const Card = ({ post, navigation }: Props) => {
  return (
    <TouchableRipple
      style={Styles.card}
      onPress={() => {
        navigation.navigate("details", { post: post.item });
      }}
    >
      <View>
        <View>
          <Text>
            <Text style={Styles.bText}>ID: </Text>
            <Text>{post.item.id}</Text>
          </Text>
        </View>
        <View>
          <Text>
            <Text style={Styles.bText}>Title: </Text>
            <Text>{post?.item?.title}</Text>
          </Text>
        </View>
        <View>
          <Text>
            <Text style={Styles.bText}>Body: </Text>
            <Text>{post.item.body}</Text>
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

export default Card;
