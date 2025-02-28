import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const ConfigContext = createContext(null);

export function ConfigProvider({ children }) {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/config.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setConfig(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching config:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading configuration...</div>;
  if (error) return <div>Error loading configuration</div>;

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
}

// Add PropTypes validation
ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is provided and valid
};

// Custom hook to use the config context
export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
}
