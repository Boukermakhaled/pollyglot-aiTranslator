import { useState } from 'react'
import french from '/imgs/fr-flag.png'
import japan from '/imgs/jpn-flag.png'
import spain from '/imgs/sp-flag.png'
//gemini
// import OpenAI from 'openai'
export default function Trans(){
    const [language, setcheck] = useState({
        lang : ''
    })
    const [text, setText] = useState('')
    function langHandeler(e){
          setcheck({lang: e.target.value})
    }
    const [result, setResult] = useState();
    //ai 
   const url = 'https://polly-glot-claud.samedxkhaled.workers.dev'
   async function handleTranslate() {
  try {
    const response = await fetch("../api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        lang: language.lang,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setResult(data.result);
    }

  } catch (e) {
    console.log("error:", e);
  }
}



    return(
        <section className="trans p-5 mt-10"> 
            <div className="content border-5 border-slate-800 rounded-lg mx-auto p-7 flex flex-col gap-10">
                <div className="input-block flex flex-col gap-5 justify-center items-center">
            <h1 className="title text-blue-800 font-bold text-4xl">Text to translate 👇</h1>
            <textarea className="resize-none w-xl h-50 p-5 text-lg bg-gray-200 rounded-3xl" name="to-translate" value={text} onChange={(e) => {
                setText(e.target.value)
            }}></textarea>
            </div>
            {
            !result && (<div className="output-block  flex flex-col gap-5 justify-center items-center">
            <h1 className="title text-blue-800 font-bold text-4xl">Select a language 👇</h1>
            <form className="inputs pl-80 mt-5 self-start flex flex-col gap-4">
             <label htmlFor="French" className="flex gap-2 items-center text-xl"> 
            <input type="radio" name='lang' value='french' onChange={langHandeler}/>French <img src={french} alt="french-flag"  className='w-7 h-5 border' /></label>
             <label htmlFor="spain" className="flex gap-2 items-center text-xl"> 
            <input type="radio" name='lang' value='spanish' onChange={langHandeler}/>Spainish <img src={spain} alt="" className='w-7 h-5 border'/></label>
             <label htmlFor="japan" className="flex gap-2 items-center text-xl"> 
            <input type="radio" name='lang' value='japanese' onChange={langHandeler}/>Japanese <img src={japan} alt="" className='w-7 h-5 border'/></label>   
              </form> 
            
            <button className='bg-blue-800 w-3/4 mt-2 transform hover:scale-105 duration-400 p-3 text-2xl text-white rounded-2xl' onClick={handleTranslate}>Translate</button>

            </div>)
            }
            {
                result && (<div className="input-block flex flex-col gap-5 justify-center items-center">
            <h1 className="title text-blue-800 font-bold text-4xl">Translated text👇</h1>
            <textarea className="resize-none w-xl h-50 p-5 text-lg bg-gray-200 rounded-3xl" name="to-translate" value={result} onChange={false}></textarea>
            <button className='bg-blue-800 w-3/4 mt-2 transform hover:scale-105 duration-400 p-3 text-2xl text-white rounded-2xl' onClick={() => {setResult(null);setText('')}}>Start Over</button>

            </div>
            
            )
            }
        
            </div>
        </section>
    )
}