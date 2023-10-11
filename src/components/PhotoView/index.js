import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function PhotoViewWrapper({ src, className }) {
    return (
        <PhotoProvider>
            <PhotoView src={src}>
                <img src={src} alt="" className={className} />
            </PhotoView>
        </PhotoProvider>
    );
}

export default PhotoViewWrapper;
