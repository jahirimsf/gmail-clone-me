import TextFormatIcon from "@material-ui/icons/TextFormat";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import LockIcon from "@material-ui/icons/Lock";
import CreateIcon from "@material-ui/icons/Create";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export const sendButtonIcon = [
  {
    icon: <TextFormatIcon />,
    title: "Formatting options",
  },
  {
    icon: <AttachFileIcon />,
    title: "Attach files",
  },
  {
    icon: <InsertLinkIcon />,
    title: "Insert link (Ctrl-K)",
  },
  {
    icon: <InsertEmoticonOutlinedIcon />,
    title: "Insert emoji (Ctrl-Shift-2)",
  },
  {
    icon: <CloudUploadIcon />,
    title: "Insert file using Drive",
  },
  {
    icon: <InsertPhotoIcon />,
    title: "Insert photos",
  },
  {
    icon: <LockIcon />,
    title: "Turn confidential mode on/ off",
  },
  {
    icon: <CreateIcon />,
    title: "Insert signature",
  },
];
