import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddModal = ({
    isOpen,
    onClose,
}: AddProductModalProps) => {
    const [typeFilter, setTypeFilter] = useState<"lost" | "found">("lost");
    const [preview, setPreview] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;

        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
    };
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Burada məhsul əlavə etmə əməliyyatını yazacaqsan.
        console.log("Product əlavə edildi");

        onClose();
    };

    const handleClose = () => {
        onClose();
        setPreview(null);
        setSelectedFile(null);
    }

    return (
        <div
            className="fixed inset-0 z-100 overflow-y-auto bg-black/50 px-4 py-6"
            onMouseDown={handleClose}
        >
            <div className="flex min-h-full items-start justify-center">
                <div
                    className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl"
                    onMouseDown={(event) => event.stopPropagation()}
                >
                    <div className="mb-6 flex items-center justify-between">
                        <div className="text-left">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Add Product
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Yeni məhsul məlumatlarını daxil edin.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={handleClose}
                            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
                        >
                            <IoClose size={24} />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex justify-center gap-2">
                            <button
                                type="button"
                                onClick={() => setTypeFilter("lost")}
                                className={`rounded-lg px-xl py-2 font-semibold transition-all ${typeFilter === "lost"
                                    ? "bg-primary text-white shadow-md"
                                    : "text-on-surface-variant hover:bg-surface-container"
                                    }`}
                            >
                                Lost Items
                            </button>

                            <button
                                type="button"
                                onClick={() => setTypeFilter("found")}
                                className={`rounded-lg px-xl py-2 font-semibold transition-all ${typeFilter === "found"
                                    ? "bg-primary text-white shadow-md"
                                    : "text-on-surface-variant hover:bg-surface-container"
                                    }`}
                            >
                                Found Items
                            </button>
                        </div>

                        <div>
                            <label
                                htmlFor="productName"
                                className="mb-1.5 block text-sm font-medium text-gray-700"
                            >
                                Product name
                            </label>

                            <input
                                id="productName"
                                name="productName"
                                type="text"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                                placeholder="Məhsulun adını daxil edin"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="description"
                                className="mb-1.5 block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>

                            <textarea
                                id="description"
                                name="description"
                                rows={4}
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                                placeholder="Məhsul haqqında məlumat"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="image"
                                className="flex min-h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 px-4 py-6 text-center transition hover:border-primary hover:bg-surface-container"
                            >
                                {preview ? (
                                    <>
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="mb-3 h-40 w-full rounded-lg object-cover"
                                        />

                                        <p className="font-medium text-green-600">
                                            ✓ Şəkil uğurla seçildi
                                        </p>

                                        <p className="mt-1 text-xs text-gray-500">
                                            {selectedFile?.name}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined mb-2 text-4xl text-primary">
                                            cloud_upload
                                        </span>

                                        <span className="text-sm font-medium text-gray-700">
                                            Şəkil yükləmək üçün klik edin
                                        </span>

                                        <span className="mt-1 text-xs text-gray-500">
                                            PNG, JPG və ya WEBP
                                        </span>
                                    </>
                                )}

                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    accept="image/png, image/jpeg, image/webp"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>

                        <div>
                            <label
                                htmlFor="category"
                                className="mb-1.5 block text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>

                            <select
                                id="category"
                                name="category"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                            >
                                <option value="">Kateqoriya seçin</option>
                                <option value="electronics">Electronics</option>
                                <option value="documents">Documents</option>
                                <option value="clothes">Clothes</option>
                                <option value="keys">Keys</option>
                                <option value="wallets">Wallets</option>
                                <option value="others">Others</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="dateTime"
                                    className="mb-1.5 block text-sm font-medium text-gray-700"
                                >
                                    Date and time
                                </label>

                                <input
                                    id="dateTime"
                                    name="dateTime"
                                    type="datetime-local"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="location"
                                    className="mb-1.5 block text-sm font-medium text-gray-700"
                                >
                                    Location
                                </label>

                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-primary"
                                    placeholder="Məsələn: Kitabxana, 2-ci mərtəbə"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition hover:opacity-90"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddModal;