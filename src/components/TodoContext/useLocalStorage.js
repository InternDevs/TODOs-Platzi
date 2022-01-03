import {useState,useEffect} from "react";

function useLocalStorage(key, initialValue){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(()=> {
        try {
          let localStorageItem = JSON.parse(localStorage.getItem(key));
    
          if(!localStorageItem) {
            localStorageItem = initialValue;
            localStorage.setItem(key, JSON.stringify(localStorageItem));
          }
  
          setItem(localStorageItem);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
        
      }, 1000);
    }, []);
  
    const saveItem = (newItem) => {
      try{
        localStorage.setItem(key, JSON.stringify(newItem));
        setItem(newItem);
      }catch(error){
        setError(true);
      }
      
    };
  
    return {item, saveItem, loading, error};
}

export {useLocalStorage};