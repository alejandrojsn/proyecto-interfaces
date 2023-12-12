import { useNavigate } from 'react-router-dom';
import FileIcon from './assets/file.svg';
import GalleryIcon from './assets/gallery.svg';
import { useCallback } from 'react';

export default function UploadDocumentModal({onClose, shown }) {
    const navigate = useNavigate();
    const uploadDocument = useCallback(() => navigate('/document-name'), [navigate]);
    return (
        <div className={`upload-document-modal justify-content-center ${shown ? 'd-flex' : 'd-none'}`}>
            <div className="me-5 c-pointer" onClick={uploadDocument}>
                <img src={FileIcon} alt="" />
                <div className="text-light fw-bold">Archivos</div>
            </div>
            <div className="c-pointer" onClick={uploadDocument}>
                <img src={GalleryIcon} alt="" />
                <div className="text-light fw-bold">Galería</div>
            </div>
        </div>
    );
}