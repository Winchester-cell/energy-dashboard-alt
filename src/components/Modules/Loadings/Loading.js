const Loading = ({ size = "20px", color = "border-[var(--colTextA)]", isSideBarCollapsed }) => {
    return (
        <div className="flex items-center gap-3 text-[var(--colTextA)]">
            <span className={`${isSideBarCollapsed ? 'hidden' : ''}`}>
                درحال بارگذاری
            </span>
            <div
                className={`animate-spin rounded-full border-4 ${color} border-t-transparent`}
                style={{
                    width: size,
                    height: size,
                }}
            />
        </div>
    );
};

export default Loading;
