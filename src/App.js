import React from 'react';
import './App.css';
import Form from './components/Form';
import Random_V1 from './components/Random_V1';
import Tag_V1 from './components/Tag_V1';
import useFetch from './customHooks/useFetch';
import useLocalStorage from './customHooks/useLocalStorage';
import useToggle from './customHooks/useToggle';
import useUpdateLogger from './customHooks/useUpdateLogger';

function App() {
  // const [name, setName] = useLocalStorage('name', '')
  // useUpdateLogger(name)

  // const {data, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

  // const [isVisible1, toggleIsVissible1] = useToggle(true)
  // const [isVisible2, toggleIsVissible2] = useToggle()


  return (
    <div className="App">
      {/* <input type="text" value={name} onChange={e => setName(e.target.value)} /> */}

      {/* {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && data.map((d) => (
        <div key={d.id}>
        <h1>{d.title}</h1>
        <p>{d.body}</p>
        </div>
      ))} */}

      {/* <h1>Random GIF App</h1>
      <div className="main-container">
        <Random_V1 />
        <Tag_V1 />
      </div> */}

      {/* <>
      {isVisible1 && <h1>Here, i am</h1>}
      <button onClick={toggleIsVissible1}>Show / Hide</button>
      {isVisible2 && <h1>Here, i am here too</h1>}
      <button onClick={toggleIsVissible2}>Show / Hide</button>
      </> */}

      <Form />
    </div>
  );
}

export default App;
