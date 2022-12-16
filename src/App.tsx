// Components
import TSExample from "./components/TSExample"

function App() {
  return (
    <div className='flex flex-col min-h-screen p-4 bg-orange-300'>
      <header></header>

      <main className="grow flex flex-col items-center bg-orange-400 p-2 rounded-lg">
        <TSExample
          title="Top Two"
          text="This is optional"
          dataList={[{id: 1, name: "Foo"}, {id: 2, name: "Bar"}]}
        />
      </main>

      <footer></footer>
    </div>
  )
}

export default App
