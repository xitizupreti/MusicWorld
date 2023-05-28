"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Cards";
import { Audio } from "react-loader-spinner";

const Internsathi = () => {
  const [query, setquery] = useState();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [Input, setInput] = useState();

  const qqq = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setquery(Input);
    setLoading(true);
  };

  useEffect(() => {
    async function Data() {
      const options = {
        method: "GET",
        url: "https://deezerdevs-deezer.p.rapidapi.com/search",
        params: { q: `${query}` },
        headers: {
          "X-RapidAPI-Key":
            "7b9fca64efmsh6a6bb634c21f8d4p1fead4jsn066949f3a22a",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    Data();
  }, [loading]);

  return (
    <>
      <form className="search" onSubmit={qqq}>
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search.."
        />
        <button className="but" type="submit">
          Search
        </button>
      </form>
      {loading ? (
        <Audio
          height="300px"
          width="500px"
          color="blue"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      ) : data.length < 1 ? (
        <div>
          <Audio
            height="300px"
            width="500px"
            color="blue"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </div>
      ) : (
        <div>
          {data.map((item, index) => (
            <Card
              key={index}
              src={item.album.cover_big}
              title={item.title}
              Name={item.artist.name}
              play={item.preview}
              link={item.link}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Internsathi;
