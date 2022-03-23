import { useDispatch, useSelector } from "react-redux";
import {userRequest } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.users || {});

  const handleOnClick = () => {
    dispatch(userRequest());
  };

  const checkForUserState = () =>{
      if(userState?.users?.length > 0){
        return true
      }
      return false
  }

  return (
    <div className="App">
      <button onClick={handleOnClick}>Dispatch</button>
      {checkForUserState() && 
      userState?.users?.map((item)=>{
        return(
          <h3 key={`item_${item?.id}`}>{item?.name}</h3>
        )
      })}
    </div>
  );
};

export default App;
