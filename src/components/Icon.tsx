import { useMemo } from "react";
import { BiEditAlt, BiSolidCameraOff } from "react-icons/bi";
import { BsClipboard2CheckFill, BsClipboard2XFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import {
  FaFileCircleXmark,
  FaFilePdf,
  FaPix,
  FaQuestion,
} from "react-icons/fa6";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { HiCamera } from "react-icons/hi2";
import {
  IoAlertCircleOutline,
  IoClose,
  IoDocumentTextOutline,
  IoEyeOutline,
  IoFilterSharp,
} from "react-icons/io5";
import { IconBaseProps } from "react-icons/lib";
import { MdEditDocument } from "react-icons/md";
import { PiPrinter } from "react-icons/pi";
import {
  RiAdminLine,
  RiBarcodeBoxLine,
  RiFileExcel2Fill,
} from "react-icons/ri";
import { TbAlertTriangleFilled, TbCameraQuestion } from "react-icons/tb";

const iconVariant = {
  CgFileDocument: CgFileDocument,
  BiSolidCameraOff: BiSolidCameraOff,
  FaFileCircleXmark: FaFileCircleXmark,
  FaFilePdf: FaFilePdf,
  FaPix: FaPix,
  HiCamera: HiCamera,
  RiBarcodeBoxLine: RiBarcodeBoxLine,
  MdEditDocument: MdEditDocument,
  TbAlertTriangleFilled: TbAlertTriangleFilled,
  TbCameraQuestion: TbCameraQuestion,
  RiFileExcel2Fill: RiFileExcel2Fill,
  HiEye: HiEye,
  HiEyeOff: HiEyeOff,
  IoClose: IoClose,
  IoFilterSharp: IoFilterSharp,
  IoEyeOutline: IoEyeOutline,
  PiPrinter: PiPrinter,
  RiAdminLine: RiAdminLine,
  BsClipboard2CheckFill: BsClipboard2CheckFill,
  BsClipboard2XFill: BsClipboard2XFill,
  IoAlertCircleOutline: IoAlertCircleOutline,
  BiEditAlt: BiEditAlt,
  IoDocumentTextOutline: IoDocumentTextOutline,
} as const;

export type Icon = keyof typeof iconVariant;

type IconProps = { name?: Icon };

export const Icon = ({ name, ...rest }: IconProps & IconBaseProps) => {
  const Icon = useMemo(() => {
    if (!name) return <FaQuestion color={rest.color} size={15} />;

    const Icon = iconVariant[name];

    return Icon ? (
      <Icon {...rest} />
    ) : (
      <FaQuestion color={rest.color} size={15} />
    );
  }, [name, rest]);

  return Icon;
};
