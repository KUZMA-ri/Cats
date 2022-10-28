import React, 
    { useState,
      useEffect, 
      useCallback, 
      useMemo, 
      lazy, 
      Suspense }  from "react";
import axios from 'axios';
import styles from './catApp.module.css';
import Catlist from "./components/CatList";
import CatDetails from "./components/CatDetails";
import FormForCat from "./components/FormForCat";


import Example1 from "./components/HOC example/example1";
import Example2 from "./components/HOC example/example2";
import Example3 from "./components/HOC example/example3";


import ClassRefExample from "./components/REFExample/ClassRefExample";
import FuncRefExample from "./components/REFExample/FuncRefExample";


import Title from "./components/Title";
import useIsMobile from "./components/Hooks/useIsMobile";
import Search from "./components/Search";

// дальше импорт lazy component
const LazyComponent = lazy(() => import('./components/LazyComponent')); // под капотом использует промисы
// ------------------------------------------------------------------
const url = 'https://serene-mesa-35124.herokuapp.com/files/cats/list.json';
const url2 = 'https://serene-mesa-35124.herokuapp.com/files';


// useCallback запоминает функцию, useMemo - результат выполнения функции

const sum = (n) => {
  // console.log('work sum');
  return  n + 1;
}

const CatApp = () => {
const [cats, setCats] = useState(null);          // вместо setState
const [selectedCat, setSelectedCat] = useState(null);
const [catsDetails, setCatsDetails] = useState(null);
const [counter, setCounter] = useState(1);
const [param, setParam] = useState(1);

const [isOpenComponent,setIsOpenComponent] = useState(false);

const [inputValue, setInputValue] = useState()

let sumResult = useMemo(sum, [param]);
// ------------------------------------------------------------
const toBuy = useCallback((id) => {                 // useCallback - вторым аргументов идет массив зависимостей
  const selectedCat = cats.filter(cat => {

    if(cat.id === id) {
      return cat
    }
    return null;
  })
  setSelectedCat(selectedCat[0].more);
}, [cats]);
// ----------------------------------------------------------------------------------------------------------------------------

const removeCat = (id, event) => {
  const newArrCats = [...cats];

  const onDelete =  newArrCats.filter((cat) => {
    if(cat.id === id) {
      return cat;
    }
    return null 
  })

  if(event.target.innerText === "Пометить на удаление") {
    newArrCats.push(onDelete[0]);
    newArrCats.splice(newArrCats.indexOf(onDelete[0]), 1);
    event.target.innerText = "Снять пометку";
    event.target.parentNode.parentNode.parentNode.style.opacity = "0.5";    // чет я тут накрутила)) но другого способа не знаю
  }

  else {
    newArrCats.splice(newArrCats.indexOf(onDelete[0]), 1);
    newArrCats.unshift(onDelete[0]);
    event.target.innerText = "Пометить на удаление";
    event.target.parentNode.parentNode.parentNode.style.opacity = "1";
  }
  setCats(newArrCats)
};
// -----------------------------------------------------------------------------------------------------------------------------

useEffect(() => {                     //из componentDidMount
  axios.get(`${url}`)
  .then((response) => {
    const cats = response.data.data;
    setCats(cats)
  })
},[]);

// -------------
useEffect(() => {                   // работает как component Did Update
  if(selectedCat !== null) {        // в этом случае проверка (if) обязательна
    fetchData(selectedCat)
  }
}, [selectedCat]);

// ------------
// работает как componentWillUnmount
useEffect(() => {
  return () => {        // логика для отписки (от события)
    console.log('отписка');
  }
}, []);

// ----------------------------------------
const isMobile = useIsMobile();
useEffect(() => {
  isMobile ? console.log('Mobile version') : console.log('Desctop version');
}, [isMobile])
// ----------------------------------------

const fetchData = (path) => {
  axios.get(`${url2}${path}`)
  .then((response) => {
    const catsDetails = response.data;
    setCatsDetails(catsDetails)
  })
}
// ------------------------------------------------------------------------
const filterCats = () => {
  if(cats) {
    let copyCats = [...cats];      //так как фильтр возвращает новый массив, не забыть делать копию
    if(inputValue) {
      let filterCats = copyCats.filter((cat) => {
        return cat.name.toLowerCase().includes(inputValue.toLowerCase());
      })
      return filterCats
    }
  }
}

const filteredCats = filterCats();
// ------------------------------------------------------------------------

  if (!cats) {
    return(
      <div className={styles.loader_container}>
        <div className={styles.loader}></div>
      </div>
    )
  }

  return (
    <div className = {styles.app}>
      <Search onChange={(e) => setInputValue(e.target.value)}/>
      <Title />
      <div className={styles.mainBlock}>
        <Catlist cats={ filteredCats ? filteredCats : cats } toBuy = {toBuy} removeCat={removeCat}/>
              {/* условный рендеринг */}
      {catsDetails && (
        <CatDetails catsDetails={catsDetails} url={url2}/>
      )}
      </div>
      <br></br>


      <br />
        <h2>{`На меня нажали ${counter} раз`}</h2>
        <button onClick={() => setCounter (counter + 1)}>click</button>
      <br />

      <button onClick={() => setParam(param + 1)}>Change param</button>
      <h2>{!sumResult ? param : sumResult}</h2>

      <br />

      <div>
        {isOpenComponent && (
          <Suspense fallBack={<h1>Loading...</h1>}>
            <LazyComponent />
          </Suspense>
        )}
        <button onClick={() => setIsOpenComponent(true)}>Открыть компонент</button>
      </div>

      <FormForCat />
      <br />
      <Example1 />
      <br />
      <Example2 />
      <br />
      <Example3 />
      <br />
      <ClassRefExample />
      <br />
      <FuncRefExample />
    </div>
  )
}
export default CatApp;