import { LazyLoadImage } from "react-lazy-load-image-component";

export const LazyImage = ({ src, alt, placeholder, className, onClick }) => {
    return (<LazyLoadImage
        src={src}
        alt={alt}
        placeholder={placeholder}
        className={className}
        onClick={onClick}
    />);
};