import * as yup from "yup";

export let userSchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(4, "şifre 4 karakter olmalıdır").max(4).required(),
});
