import french from '/imgs/fr-flag.png'
import japan from '/imgs/jpn-flag.png'
import spain from '/imgs/sp-flag.png'
export default function Trans(){
    return(
        <section className="trans p-5 mt-10"> 
            <div className="content border-5 border-slate-800 rounded-lg mx-auto p-7 flex flex-col gap-10">
                <div className="input-block flex flex-col gap-5 justify-center items-center">
            <h1 className="title text-blue-800 font-bold text-4xl">Text to translate 👇</h1>
            <textarea className="resize-none w-xl h-50 p-5 text-lg bg-gray-200 rounded-3xl" name="to-translate" id=""></textarea>
            </div>
            <div className="output-block  flex flex-col gap-5 justify-center items-center">
            <h1 className="title text-blue-800 font-bold text-4xl">Translated text 👇</h1>
            <form className="inputs pl-80 mt-5 self-start flex flex-col gap-4">
             <label htmlFor="French" className="flex gap-2 items-center text-xl"> 
            <input type="radio" />French <img src={french} alt="" className='w-7 h-5 border'/></label>
             <label htmlFor="spain" className="flex gap-2 items-center text-xl"> 
            <input type="radio" />Spainish <img src={spain} alt="" className='w-7 h-5 border'/></label>
             <label htmlFor="japan" className="flex gap-2 items-center text-xl"> 
            <input type="radio" />Japanese <img src={japan} alt="" className='w-7 h-5 border'/></label>   
              </form> 
              <button className='bg-blue-800 w-3/4 mt-2 transform hover:scale-105 duration-400 p-3 text-2xl text-white rounded-2xl'>Translate</button>

            </div>
            </div>
        </section>
    )
}