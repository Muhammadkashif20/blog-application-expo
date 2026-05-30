import { ScrollView, View } from "react-native";
import Header from "../Home/Header";
import Hero from "../Home/Hero";
import BlogCard from "../Home/BlogCard";
import FeaturedBlog from "../Home/ExploreBlogs";

 function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <Hero />
				<BlogCard/>
				<FeaturedBlog/>
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}
export default Home;
