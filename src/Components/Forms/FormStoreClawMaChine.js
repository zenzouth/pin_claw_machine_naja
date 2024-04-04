import * as React from "react";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import provinces from "../Arrays/ArrayProvinces";
import LoadingBackdrop from "../LoadingBackdrop";

export default function FormStoreClawMaChine() {
  const [loading, setLoading] = useState(false);

  // --------------------------------------------

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // --------------------------------------------

  const validationSchema = yup.object().shape({
    u_nane: yup.string().required("กรุณากรอกชื่อร้านคีปตุ๊กตาของคุณ"),
    u_phone: yup
      .string()
      .matches(/^[0-9]+$/, "กรุณากรอกเฉพาะตัวเลข")
      .min(10, "เบอร์โทรศัพท์ต้องมี 10 หลัก")
      .max(10, "เบอร์โทรศัพท์ต้องมี 10 หลัก")
      .required("กรุณากรอกเบอร์โทรศัพท์"),
    u_line: yup.string().required("กรุณากรอก ID LINE ของคุณ"),
    u_province: yup.string().required("กรุณาเลือกจังหวัดที่ตั้งร้านของคุณ"),
  });

  const {
    handleSubmit: handleSubmit,
    register: registerStoreClawMaChiine,
    reset: resetStoreClawMaChiine,
    control: control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      // let response = await LoginAndRegisterApi.checkLogin(data);
      let response = "123";
      const userToken = response.data.token;
      localStorage.setItem("user_token", userToken);
      resetStoreClawMaChiine();
      setLoading(false);

      toast.success("กำลังเข้าสู่ระบบ...", {
        autoClose: 1500,
        onClose: () => {
          setTimeout(() => {
            window.location.href = "/";
          }, 1500); // รอ 2 วินาทีก่อนเปลี่ยนเส้นทาง
        },
      });
    } catch (error) {
      console.error(error);

      toast.error("ไม่พบผู้ใช้หรือข้อมูลไม่ถูกต้อง", {
        autoClose: 4000,
      });

      setLoading(false);
    }
  };

  return (
    <>
      <Stack spacing={2} direction="row" paddingTop={3}>
        <Button variant="contained" size={"large"} onClick={handleClickOpen}>
          <StorefrontIcon style={{ marginRight: "5px" }} /> ลงทะเบียนตอนนี้
        </Button>
      </Stack>
      <LoadingBackdrop loading={loading}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Slide}
        transitionDuration={300}
        transitionDirection="up"
      >
        <DialogTitle id="alert-dialog-title">
          <StorefrontIcon style={{ marginRight: "5px" }} />{" "}
          {"ลงทะเบียนร้านคีปตุ๊กตา"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />
            <TextField
              id="outlined-basic"
              label="ชื่อร้าน *"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "15px", marginTop: "10px" }}
              {...registerStoreClawMaChiine("u_nane")}
              error={errors.u_nane ? true : false}
              helperText={errors.u_nane?.message}
            />
            <TextField
              id="outlined-basic"
              label="เบอร์โทรศัพท์ *"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "15px" }}
              {...registerStoreClawMaChiine("u_phone")}
              error={errors.u_phone ? true : false}
              helperText={errors.u_phone?.message}
            />
            <TextField
              id="outlined-basic"
              label="ID LINE *"
              variant="outlined"
              fullWidth
              style={{ marginBottom: "15px" }}
              {...registerStoreClawMaChiine("u_line")}
              error={errors.u_line ? true : false}
              helperText={errors.u_line?.message}
            />

            <Controller
              name="u_province"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  id="combo-box-demo"
                  options={provinces}
                  fullWidth
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="จังหวัด"
                      error={errors.u_province ? true : false}
                      helperText={errors.u_province?.message}
                    />
                  )}
                />
              )}
            />

            <Stack spacing={2} direction="row" paddingTop={2}>
              <Button variant="contained" size="large" type="submit">
                ลงทะเบียน
              </Button>
              <Button variant="outlined" size="large" type="reset">
                ยกเลิก
              </Button>
            </Stack>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ปิด</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
