import React, { useState } from "react";



function FormTest() {
    const [hidenDiv, setHidenDiv] = useState(false);

    const toggleHiden = () => {
        setHidenDiv(!hidenDiv)
        console.log('test')
    }

    const testDiv = (

        <div>
            <p>penis</p>
        </div>
    )
    const testDiv2 = (
        <div>
            <p>penos</p>
        </div>
    )

    return (
        <div>
            <button onClick={toggleHiden} > hey </button>

            {hidenDiv ? testDiv : testDiv2}
            <textarea>

            </textarea> 
            </div>
    )

}

export default FormTest