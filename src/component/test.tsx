"use client";
import { fetchQueryWithPagination } from "@airstack/airstack-react";

const userPoapsEventIdsQuery = /* GraphQL */ `
  query MyQuery($user: Identity!) {
    Poaps(input: { filter: { owner: { _eq: $user } }, blockchain: ALL }) {
      Poap {
        eventId
        poapEvent {
          isVirtualEvent
        }
      }
    }
  }
`;

const Component = () => {
  const test = async () => {
    const poapsDataResponse = await fetchQueryWithPagination(
      userPoapsEventIdsQuery,
      {
        user: "0x28864ed550625794f32eE4950dA89D30aF130754",
      }
    );
    console.log(poapsDataResponse);
  };

  return (
    <>
      <button onClick={test}>Test</button>
    </>
  );
};

export default Component;
