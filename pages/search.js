import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapSection from "../components/MapSection";

function Search({ searchResults }) {
  const lat = "30.089726"
  const lng = "31.638698"
  console.log("searchResults", searchResults);
  const showInMapClicked = () => {
    window.open("https://maps.google.com?q="+lat+","+lng );
  };
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedendDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedendDate}`;
  // console.log("router.query",router.query)
  // console.log("formattedStartDate",formattedStartDate)
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main>
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          {searchResults.map((item) => (
            <InfoCard item={item} key={item.img} />
          ))}
        </section>
        <section>
          <button onClick={showInMapClicked}>Map Google</button>
        </section>
        <section>
          <MapSection/>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
