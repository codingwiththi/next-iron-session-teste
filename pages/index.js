import fetchJson from "../services/fetchJson";
import useUser from "../services/useUser";
//import useEvents from "../lib/useEvents";

function Home() {
  const { user, mutateUser } = useUser({ redirectTo: "/login" });
  //const { events, loadingEvents } = useEvents(user);

  if (!user?.isLoggedIn) {
    return (
      <>
        <main>
          <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <h1>LOADING</h1>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <h1>Olá, você está logado</h1>
          <button
            className="px-10 mx-10 rounded border-2 border-red-800"
            onClick={async (e) => {
              e.preventDefault();
              mutateUser(
                await fetchJson("/api/logout", { method: "POST" }),
                false
              );
            }}
          >
            logout
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
