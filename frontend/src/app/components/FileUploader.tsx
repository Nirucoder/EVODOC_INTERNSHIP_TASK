interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  uploadedImage: string | null;
}

export function FileUploader({ onFileUpload, uploadedImage }: FileUploaderProps) {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onFileUpload(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div
      className="relative rounded-2xl p-8 backdrop-blur-xl transition-all duration-300"
      style={{
        background: 'rgba(31, 41, 55, 0.3)',
        border: '1px solid rgba(164, 216, 49, 0.2)',
        boxShadow: uploadedImage
          ? 'inset 0 0 20px rgba(164, 216, 49, 0.1), 0 0 40px rgba(164, 216, 49, 0.1)'
          : 'inset 0 0 20px rgba(164, 216, 49, 0.05)'
      }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      {uploadedImage ? (
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-[rgba(164,216,49,0.3)]">
            <img
              src={uploadedImage}
              alt="Uploaded document"
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>
          <label className="cursor-pointer text-[#A4D831] hover:text-[#8FBD29] transition-colors font-mono text-sm">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
            [CHANGE FILE]
          </label>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center min-h-[400px] cursor-pointer group">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />
          <div
            className="relative w-32 h-32 mb-6 rounded-2xl border-2 border-dashed border-[#A4D831] flex items-center justify-center transition-all duration-300 group-hover:border-[#8FBD29] group-hover:shadow-[0_0_30px_rgba(164,216,49,0.4)]"
            style={{
              boxShadow: '0 0 20px rgba(164, 216, 49, 0.2)'
            }}
          >
            <svg
              className="w-16 h-16 text-[#A4D831] transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>
          <h3 className="text-xl mb-2 text-[#A4D831] font-mono tracking-wide">
            UPLOAD MEDICAL DOCUMENT
          </h3>
          <p className="text-gray-400 text-sm font-mono">
            Drag & drop or click to browse
          </p>
          <p className="text-gray-500 text-xs font-mono mt-2">
            Supports: PNG, JPG, JPEG, PDF
          </p>
        </label>
      )}
    </div>
  );
}
