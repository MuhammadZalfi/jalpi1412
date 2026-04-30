export default function learnpage() {
    return (
        <div className="bg-white h-screen flex gap-4 justify-center">
        <div className="bg-purple-300 h-72 w-94 flex flex-col justify-between p-8 rounded-4xl text-blue-950"> 
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p> Design </p>
            </div>
            <div>
                <h1 className="text-4xl font-bold"> FIGMA </h1>
                <p className="text-gl"> 8 hours ago</p>
            </div>
        </div>

        <div className="bg-orange-300 h-72 w-94 flex flex-col justify-between p-8 rounded-4xl text-blue-950"> 
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p> Coding </p>
            </div>
            <div>
                <h1 className="text-4xl font-bold"> PYTHON </h1>
                <p className="text-gl"> 4 days ago</p>
            </div>
        </div>

        <div className="bg-pink-300 h-72 w-94 flex flex-col justify-between p-8 rounded-4xl text-blue-950"> 
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p> Design </p>
            </div>
            <div>
                <h1 className="text-4xl font-bold"> SKETCH </h1>
                <p className="text-gl"> 2 days ago</p>
            </div>
        </div>
        </div>
    )
}