import { useStyle } from "./Styles";
import { Button, Modal, TextField, InputAdornment } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().max(50, "Too Long!").required("Required"),
  imageUrl: Yup.string().max(200, "Too Long!").required("Required"),
  count: Yup.number("Must be a number!")
    .positive("Must be positive!")
    .required("Required"),
  size: Yup.object({
    width: Yup.number("Must be a number!")
      .positive("Must be positive!")
      .required("Required"),
    height: Yup.number("Must be a number!")
      .positive("Must be positive!")
      .required("Required"),
  }),
  weight: Yup.number().required("Required"),
});

export const ProductModal = ({ open, onClose, onConfirm, mode, product }) => {
  const classes = useStyle();

  return (
    <Modal open={open} onClose={onClose}>
      <div className={classes.modal}>
        <h2 className={classes.title}>{mode} Product</h2>
        <Formik
          initialValues={product}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            values.weight = values.weight + "g";
            onConfirm(values);
          }}
        >
          <Form>
            <Field name="name">
              {({ field }) => (
                <>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label="Name"
                    {...field}
                  />
                  <ErrorMessage name={field.name} />
                </>
              )}
            </Field>

            <Field name="imageUrl">
              {({ field }) => (
                <>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label="Image"
                    {...field}
                  />
                  <ErrorMessage name={field.name} />
                </>
              )}
            </Field>

            <Field name="count">
              {({ field }) => (
                <>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label="Count"
                    {...field}
                  />
                  <ErrorMessage name={field.name} />
                </>
              )}
            </Field>

            <Field name="size.width">
              {({ field }) => (
                <>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label="Width"
                    {...field}
                  />
                  <ErrorMessage name={field.name} />
                </>
              )}
            </Field>

            <Field name="size.height">
              {({ field }) => (
                <>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label="Height"
                    {...field}
                  />
                  <ErrorMessage name={field.name} />
                </>
              )}
            </Field>

            <Field name="weight">
              {({ field }) => (
                <>
                  <TextField
                    className={classes.field}
                    fullWidth
                    label="Weight"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">g</InputAdornment>
                      ),
                    }}
                    {...field}
                  />
                  <ErrorMessage name={field.name} />
                </>
              )}
            </Field>

            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              {mode}
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};
