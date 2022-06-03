import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';
import './App.css';

function App() {
  const [alert, setAlert] = useState('');
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [buttonText, setButtonText] = useState('Submit');
  let [items, setItems] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let [inputPlaceholder, setInputPlaceholder] = useState('Input item');
  let [editId, setEditId] = useState(-1);
  const submitHandler = (e) => {
    e.preventDefault();
    if (buttonText === 'Edit') {
      if (inputValue === '') {
        setAlert('Invalid input!');
        setIsAlertShown(true);
      } else {
        setItems(items.map((item) => {
        if (item.key === editId) {
          return {key: item.key, value: inputValue};
        } else {
          return item;
        }
        }));
        setAlert('Item edited');
        setIsAlertShown(true);
        setInputPlaceholder('Input item');
      }
    } else {
      setItems([...items, {key: uuid(), value: inputValue}]);
      setAlert('Item added');
      setIsAlertShown(true);
      setInputPlaceholder('Input item');
    }
    setInputValue('');
    setButtonText('Submit');
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlertShown(false);
      return () => clearTimeout(timeout);
    }, 5000)
  }, [isAlertShown])
  return (
    <section className="App">
      {isAlertShown ? <p>{alert}</p> : <></>}
      <h2>Grocery Bud</h2>
      <form>
        <input type="text" placeholder={inputPlaceholder} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={submitHandler}>{buttonText}</button>
      </form>
      {items.map(item => {
        return (
          <div key={item.key} postid={item.key}>
            <p>{item.value}</p>
            <h2 onClick={(e) => {
              let newItem = items.filter((item) => item.key === e.target.parentNode.getAttribute('postid'))
              setEditId(newItem[0].key);
              setInputPlaceholder(newItem[0].value);
              setButtonText('Edit');
            }}>E</h2>
            <h2 onClick={(e) => {
              setItems(items.filter((item) => item.key !== e.target.parentNode.getAttribute('postid')))
              setAlert('Item deleted');
              setIsAlertShown(true);
            }}>X</h2>
          </div>
        )
      })}
      <button onClick={() => {
        setItems([]);
        setAlert('Items deleted!');
        setIsAlertShown(true);
      }}>Clear Items</button>
    </section>
  );
}

export default App;
