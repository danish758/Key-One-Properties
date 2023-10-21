const useLoginHook = () => {
  const [user, setUser] = useState(null);

  // Function to handle user login
  const login = async (credentials) => {
    try {
      // Make an Axios POST request to your authentication endpoint
      const response = await axios.post("/api/login", credentials);

      // Assuming your API returns user data upon successful login
      setUser(response.data);
    } catch (error) {
      console.error("Login error:", error);
      // We can handle login errors here (e.g., show an error message)
    }
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default useLoginHook;
