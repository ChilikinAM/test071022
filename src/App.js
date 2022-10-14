import {Route, Routes} from "react-router-dom";
import {Main} from "./components/pages/main";
import {Second} from "./components/pages/second";
import {useEffect, useState} from "react";
import {Test} from "./components/test";

function App() {

    const [content, setContent] = useState([]);
    const [bacon, setBacon] = useState(0)

    //console.log(bacon);

    const changeBacon = () => {
        if (bacon) {
            setBacon(0)
        }
        if (!bacon) {
            setBacon(1)
        }
    }

    const request = async () => {
            const res = await fetch(`https://baconipsum.com/api/?type=meat-and-filter?start-with-lorem=${bacon}`, {method: "GET"});
            const data = await res.json();
            setContent(data);
            changeBacon();
    }



    useEffect(() => {
        if (!content.length) {
            request();
        }
    }, [])



    //console.log(content)
    return (
        <>
          <Routes>
              <Route path='/' element={<Main content={content} request={request} />} />
              <Route path='/:id' element={<Second content={content} />} />
              <Route path='/test' element={<Test />} />
          </Routes>
        </>
      );
}

export default App;
