import { useConfig } from "../context/ConfigContext";

function Header() {
  const config = useConfig(); // Get config using the custom hook
    return (
        <header className="w-full py-4 bg-gray-800 text-white text-center">
            <h1 className="text-3xl font-bold">{config.NAME}</h1>
        </header>
    );
}

export default Header;
