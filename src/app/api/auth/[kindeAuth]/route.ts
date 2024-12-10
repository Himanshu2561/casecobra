import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = handleAuth({
  async logout(request: NextRequest) {
    // Create a response with explicit CORS headers
    const response = NextResponse.redirect(new URL("/", request.url));

    // Set CORS headers
    response.headers.set(
      "Access-Control-Allow-Origin",
      "https://casecobra-ecru-six.vercel.app"
    );
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    response.headers.set("Access-Control-Allow-Credentials", "true");

    return response;
  },
});

// Add a preflight handler for OPTIONS requests
export const OPTIONS = (request: NextRequest) => {
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://casecobra-ecru-six.vercel.app",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  });

  return response;
};
