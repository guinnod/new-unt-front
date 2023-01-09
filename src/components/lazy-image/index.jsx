import { LazyLoadImage } from "react-lazy-load-image-component";

export const LazyImage = ({src, alt, placeholder, className}) => {
    return (<LazyLoadImage
        src={src}
        alt={alt}
        placeholder={<div style={{backgroundColor: 'blue'}}></div>}
        className={className} 
    />);
};