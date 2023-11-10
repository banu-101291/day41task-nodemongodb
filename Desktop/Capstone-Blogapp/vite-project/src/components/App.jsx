const APP_NAME = import.meta.env.VITE_APP_NAME;

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="mb-5 text-5xl font-bold">
        Welcome to{" "}
        <span className="text-transparent bg-gradient-to-r from-[#ab87ff] to-[#3ce9a4] bg-clip-text">
          {APP_NAME}
        </span>
      </h1>
      <p>
        {APP_NAME} is a simple blog application that allows users to
        effortlessly share their stories and connect with their audience.
      </p>
    </div>
  );
}