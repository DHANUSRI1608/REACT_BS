export default function TodoItem({ item, onDone }) {
    return (
        <div className="flex justify-center items-center space-x-4">
            <h1 className="text-orange-500 p-2 w-64 text-2xl m-2">{item}</h1>
            <button
                onClick={onDone}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
                Done
            </button>
        </div>
    );
}
