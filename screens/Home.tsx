import React, { FC, useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { connect } from "react-redux";
import Card from "../components/Card";
import { getPosts } from "../redux/actions/action";
import Styles from "../styles/Styles";
import { ActivityIndicator } from "react-native-paper";

interface Props {
  getPosts: Function;
  posts: any;
  navigation: {
    navigate: Function;
  };
}

const Home: FC<Props> = ({ getPosts, posts, navigation }): JSX.Element => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPost(page);
  }, [page]);

  const getPost = async (pageNum: number) => {
    await getPosts(pageNum);
    // console.log(posts);
    setLoading(false);
  };

  return (
    <View testID="HomeScreen-wrapper" style={Styles.container}>
      <View style={Styles.title}>
        <Text style={Styles.titleText}>Posts</Text>
      </View>
      {/* <Text>{JSON.stringify(posts, null, 10)}</Text> */}
      <FlatList
        data={posts}
        keyExtractor={(post: any) => post.key}
        renderItem={(postData) => <Card navigation={navigation} post={postData} />}
        ListEmptyComponent={<Text>No Posts found</Text>}
        onEndReached={() => {
          setLoading(true);
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.1}
        refreshing={loading}
        style={{ height: "100%" }}
      />
      <View>{loading && <ActivityIndicator size="small" color="black" />}</View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  posts: state.reducer.posts,
});

export default connect(mapStateToProps, { getPosts })(Home);
