import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 54,
      author: { _id: 1, name: "Marion Jhon" },
      _id: 1,
      description: "This is a description",
      image:
        "https://i5.walmartimages.com/seo/Toysery-Bot-Robot-Pioneer-Colorful-Lights-Music-Kids-Moving-Multifunctional-Play-Toy-Boys-Girls-Best-Gift-Idea-Colors-may-very_0839a5d4-8760-43be-b53f-821e35c7fee6.8235383cd6d43a7d8fb86734446f6895.jpeg",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startup"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => <StartupCard key={post?._id} post={post}/>)
          ) : (
            <p className="no-results">No startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
