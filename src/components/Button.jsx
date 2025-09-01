export default function Button({label, click}) { 
    return ( 
        <button onClick={() => click()} className="bg-blue-500 text-gray-50 lg:p-3 p-2 text-sm md:text-lg cursor-pointer hover:bg-blue-600 rounded-md transition-all duration-200">{label}</button>
    )
}