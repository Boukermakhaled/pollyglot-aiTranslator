// import baner from 'imgs/worldmap.png'
export default function Header(){
    return(
        <header className="header w-full flex justify-center items-center rounded-t-3xl py-10 md:px-20 gap-7">
            <img src='/public/imgs/parrot.png' alt="parrot-logo" className="w-20 md:w-40"/>
            <div className="titles flex flex-col items-start gap-2.5">
                <h1 className="text-3xl md:text-6xl font-[Oswald] text-green-500 font-bold">PollyGlot</h1>
                <p className=" text-xs md:text-base w-full text-white">perfect translation every time</p>
            </div>
        </header>
    )
}