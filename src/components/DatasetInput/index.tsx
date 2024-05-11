import React, { useRef } from "react";
import IconButton from "../IconButton";
import Close from "@mui/icons-material/Close";
import Upload from "@mui/icons-material/Upload";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Typography from "../Typography";
import TextField from "../TextField";
import {
  Control,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

const DatasetInput = (props: { id: string }) => {
  const fileRef = useRef<any>(null);
  const handleUploadButton = () => {
    fileRef.current?.click();
  };

  const { control, setValue, register } = useFormContext();

  const { field: datasetNameField } = useController({
    control: control,
    name: `${props.id}.name`,
  });

  const { field: fileField } = useController({
    control: control,
    name: `${props.id}.file`,
  });

  return (
    <div className="border border-black p-4 flex flex-col gap-4">
      <div className="grid gap-2 grid-cols-[1fr_auto] items-center">
        <Typography variant="caption">No file uploaded</Typography>
        <IconButton onClick={handleUploadButton}>
          <Upload />
        </IconButton>
        <input
          type="file"
          className="hidden"
          {...register(`${props.id}.file`)}
          ref={(e) => {
            register(`${props.id}.file`).ref(e);
            fileRef.current = e; // you can still assign to ref
          }}
        />
      </div>
      <div>
        <TextField InputProps={{ ...datasetNameField }} />
      </div>
      {/* <div>
        <IconButton color="error" onClick={handleUploadButton}>
          <DeleteOutline />
        </IconButton>
      </div> */}
    </div>
  );
};

export default DatasetInput;
