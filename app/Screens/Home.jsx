import { ScrollView, View } from "react-native";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import BlogCard from "../Home/BlogCard";
import ExploreBlogs from "../Home/ExploreBlogs";

 function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <Hero />
				<BlogCard/>
				<ExploreBlogs/>
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}
export default Home;
