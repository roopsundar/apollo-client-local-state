"use client";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const GET_COUNTRIES = gql`
  query GetCountriesAll {
    countries {
      name
      capital
      code
      emoji
    }
  }
`;

interface Country {
  name: string;
  capital: string;
  code: string;
  emoji: string;
}

export default function Home() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <Link href="/details">Details</Link>
      <div>
        {data.countries.map((country: Country) => (
          <p key={country.code}>{country.name}</p>
        ))}
      </div>
    </>
  );
}
