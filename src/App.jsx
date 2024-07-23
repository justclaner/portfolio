import Page from './components/Page.jsx';

function App() {
  let menus = ['About Me','Projects','Timeline','About this Site'];

  
  //const output = (name) => {console.log(name);}
  return(
    //func = {output}
    <>
        <h1>My Programming Portfolio</h1>
        <Page menus={menus} />
    </>
  );
}

export default App;
