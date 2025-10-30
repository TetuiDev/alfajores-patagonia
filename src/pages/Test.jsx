export default function Test (){
    return(
        <>
        <div className="bg-indigo-500 hover:bg-indigo-600">
            <p>Pablo <span> Canales</span> </p>
            <label htmlFor="">Simon</label>
        </div>

        <div className="">
            <img className="size-1 shrink-0" src="src/assets/images/logo_test.jpg" alt="ChitChat Logo" />  
            
            <p className="text-green">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, consequatur. Sed atque veritatis aperiam facere, quasi pariatur ut sapiente reiciendis magni voluptatum aspernatur eos non eius molestiae asperiores totam voluptatem?</p>
        </div>

        <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">  
            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="src/assets/images/logo_test.jpg" alt="" />  
            <div className="space-y-2 text-center sm:text-left">   
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">Erin Lindford</p>      
                    <p className="font-medium text-gray-500">Product Engineer</p>
                </div>
                <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">      Message    </button>
            </div>
        </div>
        
        </>
    )
}
