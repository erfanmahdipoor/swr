import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home-page/HomePage";
import { SWRConfig } from "swr";
import { Suspense } from "react";
import ErrorBoundary from "./components/error/errorBoundary/ErrorBoundary";
import axios from "axios";
import myMiddleware from './components/middleware/myMiddleware'
import testMiddleware from './components/middleware/testmiddleware'
function App() {
  return (
    <div>
    <ErrorBoundary fallback={"oops this is error"}>
     <BrowserRouter>
        <Suspense fallback={<h1>loading...........</h1>}>
          <SWRConfig value={{
            use:[myMiddleware,testMiddleware],
            suspense:true,
            // refreshInterval:1000,
           fetcher : (args) =>axios.get(args).then((res)=>res.data),
           reavlidateOnFocus:false,
           errorRetryInterval:5000
          }}> 
            <HomePage/>
          </SWRConfig>
         </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
    </div>
  );
}

export default App;
