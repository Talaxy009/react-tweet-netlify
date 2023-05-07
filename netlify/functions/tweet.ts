import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { getTweet } from "react-tweet/api";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
	console.log(event.queryStringParameters);
  const tweetId = event.queryStringParameters?.id;

  if (event.httpMethod !== "GET" || typeof tweetId !== "string") {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Bad Request." }),
    };
  }

  try {
    const tweet = await getTweet(tweetId);

    return {
      statusCode: tweet ? 200 : 404,
      body: JSON.stringify({ data: tweet ?? null }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message ?? "Bad request." }),
    };
  }
};
