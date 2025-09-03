import { colorVariantSelector } from "@/data/themeVariants";
import { usePathname } from "next/navigation";

const Loading = ({ size = "20px", color = "border-[var(--colTextA)]", isSideBarCollapsed }) => {

    const pathname = usePathname()
    const style = colorVariantSelector(pathname)

    return (
        <div className={`flex items-center gap-3 ${style.textStyleA}`}>
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
