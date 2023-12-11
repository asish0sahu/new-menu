import Swap from "./components/Swap";
const App = () => {
  return (
    <div className="w-full h-screen font-bold  bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="p-4">
        <h1 className="text-4xl mb-8 text-center">Accordion Menu</h1>
        <Swap />
      </div>
    </div>
  );
};

export default App;
