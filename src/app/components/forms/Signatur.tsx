import { forwardRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import styles from "./Signatur.module.css";

type SignaturProps = {
  legend: string;
  title?: string;
  placeName: string;
  dateName: string;
  required?: boolean;
  clearLabel: string;
  onClear: () => void;
};

const Signatur = forwardRef<SignatureCanvas, SignaturProps>(
  (
    {
      legend,
      title,
      placeName,
      dateName,
      required = true,
      clearLabel,
      onClear,
    },
    ref,
  ) => {
    return (
      <fieldset className={styles.signatureField}>
        <legend>{legend}</legend>
        <section className={styles.signaturePlaceDate}>
          <label>
            Ort
            <input name={placeName} type="text" required={required} />
          </label>

          <label>
            Datum
            <input name={dateName} type="date" required={required} />
          </label>
        </section>

        <SignatureCanvas
          ref={ref}
          canvasProps={{
            width: 400,
            height: 150,
            className: styles.signatureWrapper,
          }}
        />

        <div className={styles.signatureActions}>
          <button type="button" onClick={onClear}>
            {clearLabel}
          </button>
        </div>

        {title && <p>{title}</p>}
      </fieldset>
    );
  },
);

Signatur.displayName = "Signatur";

export default Signatur;
