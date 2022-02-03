import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";
import moment from "moment";

type Props = {
  post: any;
  navigation: {
    navigate: Function;
  };
};

// for random image

const Card = ({ post, navigation }: Props) => {
  const [clock, setClock] = useState(new Date());

  const randomDate = (start: any, end: any) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };
  useEffect(() => {
    setClock(randomDate(new Date(2012, 0, 1), new Date()));
    console.log(clock);
  }, []);
  return (
    <TouchableRipple
      onPress={() => {
        navigation.navigate("details", { post: post.item });
      }}
    >
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://picsum.photos/200/200",
          }}
          style={styles.imageStyle}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.dateText}>
            {/* {new Intl.DateTimeFormat("us", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            }).format(new Date(clock))} */}
            {moment(clock).format("MMM Do YY")}
          </Text>
          <Text style={styles.title} numberOfLines={2}>
            {post?.item?.title}
          </Text>
          <Text style={styles.body} numberOfLines={3}>
            {post?.item?.body}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#212121",
    borderRadius: 4,
    marginHorizontal: 12,
    marginVertical: 6,
  },
  imageStyle: {
    flex: 3,
    aspectRatio: 1 / 1,
    resizeMode: "cover",
    borderRadius: 4,
  },
  rightContainer: {
    paddingLeft: 10,
    flex: 7,
  },
  dateText: {
    color: "lightgrey",
    fontWeight: "400",
    fontSize: 12,
  },
  title: {
    color: "whitesmoke",
    fontSize: 17,
    fontWeight: "500",
  },
  body: {
    color: "grey",
    fontSize: 13,
    fontWeight: "normal",
  },
  excerpt: {
    color: "grey",
    fontSize: 11,
    paddingTop: 5,
  },
  rounded: { borderRadius: 5 },
});

export default Card;
