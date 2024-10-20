"use client";

export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-amber-600">Page Not Found</h1>
      <p className="mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="hover:text-amber-600 underline mt-4 block">
        Go back to Home
      </a>
    </div>
  );
}
