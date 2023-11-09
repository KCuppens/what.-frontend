import { useUserContext } from '../../contexts/UserContext';

const Navigation = () => {
  const { user, logoutUser } = useUserContext();
  console.log(user)
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          What.
          {user ? (
            <div>
              <p>Welcome, {user.email}</p>
              <button onClick={logoutUser}>Logout</button>
            </div>
          ) : (
            <div className="flex items-center lg:order-2">
              <a href="/" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Log in</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;