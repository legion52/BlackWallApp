import Main from "./components/Main/Main";
//dfedgdsffergfekgkjg
function App() {
  const clickHandler = () => {
    alert('Проверка')
  return (
    <div className="App" oneClick={clickHandler}>
      <Main />
    </div>
  );
}

export default App;
