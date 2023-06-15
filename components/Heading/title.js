export default function Title() {
    return (
        <div>
            <div className="h-10"></div> {/* Empty div for spacing */}
            <h1 className="text-6xl font-bold flex justify-center items-center text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 background-animate">
                    Item Price Tracker
                </span>
            </h1>
        </div>
    );
}