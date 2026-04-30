export default function Task2page() {
    return (
        <div className="bg-white h-screen flex gap-4 justify-center">
        <div className="bg-blue-100 h-72 w-94 flex flex-col justify-between p-8 rounded-4xl text-blue-950"> 
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p> Design </p>
            </div>
            <div>
                <h1 className="text-4xl font-bold"> Adobe Photoshop </h1>
                <p className="text-gl"> in 3 days</p>
            </div>
        </div>

        <div className="bg-green-100 h-72 w-94 flex flex-col justify-between p-8 rounded-4xl text-blue-950"> 
            <div className="flex gap-4">
                <img src="/carambola.svg"/>
                <p> AI </p>
            </div>
            <div>
                <h1 className="text-4xl font-bold"> Dall.E2, Midjourney , Stabble Diffusion </h1>
                <p className="text-gl"> in 5 days</p>
            </div>
        </div>

        
        </div>
    )
}