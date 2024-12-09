import { useDropzone as useDropzoneLib } from "react-dropzone";
// import useToast from "./use-toast";

type Params = {
  loading?: boolean;
  onDrop: (files: File[]) => void;
  accept: string[]; // "videos" | "images" | "documents"
};

const useDropzone = ({ loading, onDrop, accept = [] }: Params) => {
  // const { errorToast } = useToast();

  return useDropzoneLib({
    noClick: loading,
    noKeyboard: loading,
    onDrop,
    accept: {
      ...(accept.includes("images") && IMAGES_MIME),
      ...(accept.includes("documents") && DOC_MIME),
      ...(accept.includes("videos") && VIDEO_MIME),
    },
    maxSize: accept.includes("videos") ? undefined : 10_000_000,
    // onDropRejected: () =>
    // errorToast({
    //   title: "Fichier invalide",
    //   description:
    //     "L'un des fichiers que vous avez ajouté ne respond pas aux critères demandés.",
    // }),
  });
};

export default useDropzone;

const IMAGES_MIME = {
  "image/jpeg": [],
  "image/png": [],
  "image/webp": [],
  "image/avif": [],
  "image/heic": [],
};

const DOC_MIME = {
  "application/pdf": [],
  "application/msword": [],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
};

const VIDEO_MIME = {
  "video/mp4": [],
  "video/x-msvideo": [], // pour AVI
  "video/quicktime": [], // pour MOV
};
