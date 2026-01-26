import { Site } from "@/src/shared/ui/icon";
import { Project } from "@/src/widgets/ui/ProjectDetails/model/type";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const Modal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="custom-scroll relative bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <div>
                  <span className="font-semibold">담당업무</span> {project.role}
                </div>
                <span className="hidden md:inline text-gray-400">|</span>
                <div>
                  <span className="font-semibold">기여도</span>{" "}
                  {project.contribution}
                </div>
              </div>
              <div>
                <span className="font-semibold">기술스킬</span> {project.skills}
              </div>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.summary}
              </div>
            </div>
          </div>

          {/* 사이트 타입 */}
          {project.type === "site" && (
            <div className="relative bg-[var(--color-primary)] border border-[var(--border)] shadow-lg rounded-2xl overflow-hidden transition-transform h-[400px]  ">
              <Image
                width={800}
                height={500}
                src={project.image}
                alt={project.title}
                className="w-full contrast-40 "
              />
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10  inline-flex items-center gap-3 px-6 py-3 bg-white text-[var(--color-accent)] rounded-full font-semibold hover:scale-105 transition-transform "
              >
                <span>사이트 보러가기</span>
                <Site />
              </a>
            </div>
          )}

          {/* 키오스크 타입 */}
          {project.type === "kiosk" && (
            <div className="space-y-6">
              {project.kioskPhotos?.map((photoGroup, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-lg"
                  style={{
                    backgroundColor: photoGroup.bgColor || "transparent",
                  }}
                >
                  {photoGroup.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="bg-black rounded-lg overflow-hidden"
                    >
                      <Image
                        width={800}
                        height={800}
                        src={img}
                        alt={`kiosk ${imgIdx + 1}`}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* 대시보드 타입 */}
          {project.type === "dashboard" && project.photos && (
            <div className="space-y-6">
              {project.photos.map((photo, idx) => (
                <div key={idx}>
                  <Image
                    width={800}
                    height={800}
                    src={photo}
                    alt={`dashboard ${idx + 1}`}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}

          {/* 클라우드 타입 */}
          {project.type === "cloud" && project.photos && (
            <div className="space-y-6">
              {project.photos.map((photo, idx) => (
                <div key={idx}>
                  <Image
                    width={800}
                    height={800}
                    src={photo}
                    alt={`cloud ${idx + 1}`}
                    className="w-full rounded-lg"
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#ccc" : "#e2e2e2",
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
