const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {/* Circle 1 */}
            <div
                className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#DD0303]/5 blur-3xl animate-float-slow"
                style={{ animationDelay: "0s" }}
            />

            {/* Circle 2 */}
            <div
                className="absolute bottom-[15%] right-[10%] w-96 h-96 rounded-full bg-[#DD0303]/5 blur-3xl animate-float-slower"
                style={{ animationDelay: "-2s" }}
            />

            {/* Circle 3 */}
            <div
                className="absolute top-[40%] left-[50%] w-48 h-48 rounded-full bg-[#DD0303]/5 blur-3xl animate-float"
                style={{ animationDelay: "-4s" }}
            />
        </div>
    );
};

export default FloatingShapes;
