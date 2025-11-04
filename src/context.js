import { createContext,useContext } from "react";

export const myDetailsContext = createContext({
    myname:'',
    updateMyName: ()=>{}
})

export const MyDetailsContextProvider = myDetailsContext.Provider;

export const useMyDetailsContext = () => {
    // custom hook
    const {myname,updateMyName} = useContext(myDetailsContext);
   return {myname,updateMyName}
}