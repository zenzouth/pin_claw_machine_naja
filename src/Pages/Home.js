import * as React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Chip from "@mui/material/Chip";
import CoverAds from "../Components/CoverAds";
import Footer from "../Components/Footer";
import LoadingBackdrop from "../Components/LoadingBackdrop";

import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SavingsIcon from "@mui/icons-material/Savings";

import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Slide from "@mui/material/Slide";

import TextField from "@mui/material/TextField";
import FormStoreClawMaChine from "../Components/Forms/FormStoreClawMaChine";
import FormSupportMoney from "../Components/Forms/FormSupportMoney";

import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    AOS.init({
      duration: 1000, // กำหนดระยะเวลาในการเล่น animation
    });
  }, []); // ทำให้ AOS ถูกเรียกใช้เมื่อ component ถูก render ครั้งแรก

  return (
    <>
      <CoverAds />

      <Container maxWidth="xl">
        <div data-aos="fade-up">
          <Grid container spacing={2} paddingTop={4}>
            <Grid item xs={12}>
              <Divider>
                <Chip label=" สนใจลงทะเบียนร้านคีบ ฟรี" variant="outlined" />
              </Divider>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="body2" align="center">
                <span style={{ color: "#2ECC71", fontSize: "1.5rem" }}>
                  ลงทะเบียนฟรี !{" "}
                </span>{" "}
                <br></br>
                สำหรับร้านคีบตุ๊กตา
                เพื่อบอกพิกัดตำแหน่งร้านของคุณให้เป็นที่รู้จักมากขึ้นโดยไม่เสียค่าใช้จ่าย
              </Typography>
              <br></br>
              <video
                controls
                autoPlay
                muted
                style={{
                  width: isSmallScreen ? "100%" : "50%", // กำหนด width ของวิดีโอตามเงื่อนไข
                  borderRadius: "15px",
                }}
              >
                <source src="/videos/video_title.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>

            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <FormStoreClawMaChine />
            </Grid>
          </Grid>
        </div>

        <br></br>
        <Typography variant="body2" align="center">
          <span style={{ color: "#F4D03F", fontSize: "1.5rem" }}>
            ลงทะเบียนร้านกับเรา ดียังไง?
          </span>
        </Typography>

        <div data-aos="fade-up">
          <Grid container spacing={2} paddingY={3}>
            <Grid item lg={3} xs={12}>
              <div className="card">
                <div className="card-body">
                  <span style={{ fontSize: "1.2rem" }}>
                    <SearchIcon /> เพิ่มโอกาสในการมองเห็น
                  </span>{" "}
                  <br />
                  เราช่วยให้งานของคุณถูกค้นหาง่ายขึ้น ไม่ว่าจะผ่าน Google,
                  Facebook หรือช่องทางอื่น ๆ 
                </div>
              </div>
            </Grid>

            <Grid item lg={3} xs={12}>
              <div className="card">
                <div className="card-body">
                  <span style={{ fontSize: "1.2rem" }}>
                    {" "}
                    <GroupsIcon /> มีทีมงานช่วยเหลือ
                  </span>{" "}
                  <br></br>
                  เราพร้อมให้ความช่วยเหลือทันทีเมื่อเกิดปัญหา
                  และจะไม่หยุดพัฒนาระบบ
                </div>
              </div>
            </Grid>
            <Grid item lg={3} xs={12}>
              <div className="card">
                <div className="card-body">
                  <span style={{ fontSize: "1.2rem" }}>
                    <WorkspacePremiumIcon /> สิทธิพิเศษ และกิจกรรมต่าง ๆ
                  </span>{" "}
                  <br></br>
                  ยิ่งขายงานได้มาก ยิ่งเข้าถึงสิทธิพิเศษและกิจกรรมต่างๆ จาก
                  Fastwork ได้อีกมากมาย
                </div>
              </div>
            </Grid>
            <Grid item lg={3} xs={12}>
              <div className="card">
                <div className="card-body">
                  <span style={{ fontSize: "1.2rem" }}>
                    <AccountBalanceWalletIcon /> ไม่มีค่าใช้จ่ายใด ๆ เพิ่มเติม
                  </span>{" "}
                  <br></br>
                  ยิ่งขายงานได้มาก ยิ่งเข้าถึงสิทธิพิเศษและกิจกรรมต่างๆ จาก
                  Fastwork ได้อีกมากมาย
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div data-aos="fade-up">
          <Grid container spacing={2}  paddingBottom={3}>
            <Grid item xs={12}>
              <Divider>
                <Chip label="รวมร้านคีบในระบบ 30 ร้าน" variant="outlined" />
              </Divider>
            </Grid>

            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Grid
                item
                xl={2}
                lg={3}
                md={3}
                sm={6}
                xs={6}
                paddingY={2}
                key={index}
              >
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea component={Link} to="/">
                    <CardMedia
                      component="img"
                      height="200" // กำหนดความสูงเพื่อให้มีขนาดเท่ากันทุกอย่าง
                      image={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbSPcWTfOL16YXvD6XZ6qCBnCW2P_qH3PY02Gef89gA&s`} // เปลี่ยน URL รูปภาพตามที่คุณต้องการ
                      alt="green iguana"
                      style={{ objectFit: "cover" }} // ทำให้รูปภาพเต็มพื้นที่และปรับสัดส่วน
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        align="center" // จัดตำแหน่งข้อความกึ่งกลาง
                      >
                        Budy land
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}

            <Grid item xs={12} lg={12} paddingY={2} justify="center">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Chip
                  label="ดูเพิ่มเติม"
                  variant="outlined"
                  style={{ margin: "auto" }}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>

      <div data-aos="fade-up">
        <Grid
          container
          spacing={2}
          paddingX={4}
          paddingY={2}
          style={{ backgroundColor: "#154360", color: "#fff" }}
        >
          <Grid
            item
            xs={12}
            lg={12}
            paddingY={2}
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="body2" align="center">
              <span style={{ color: "#F4D03F", fontSize: "1.5rem" }}>
                ค้นหาร้านคีปตุ๊กตาง่าย ๆ
              </span>
            </Typography>
            <h6 style={{ margin: "auto" }}>
              เลือกปุ่มในการค้นหาได้ตามความต้องการ
              หลังจากนั้นเว็บไซต์จะแสดงผลลัพธ์ตามการค้นหาของคุณ
            </h6>
            <br></br>
            <Stack spacing={2} direction={isMobile ? "column" : "row"}>
              <div data-aos="fade-right">
                <Button variant="contained" size="large" fullWidth={isMobile}>
                  <ShareLocationIcon style={{ marginRight: "5px" }} />{" "}
                  ค้นหาร้านคีบใกล้คุณ
                </Button>
              </div>
              <div data-aos="fade-left">
                <Button
                  variant="outlined"
                  size="large"
                  color="inherit"
                  fullWidth={isMobile}
                >
                  <FilterAltIcon style={{ marginRight: "5px" }} />{" "}
                  ค้นหาแบบตัวกรอง
                </Button>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </div>

      <Container maxWidth="xl">
        <div data-aos="fade-up">
          <Grid container spacing={2} paddingTop={4}>
            <Grid item xs={12}>
              <Divider>
                <Chip label="ผู้สนับสนุน" variant="outlined" />
              </Divider>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="body2" align="center">
                <span style={{ color: "#2ECC71", fontSize: "1.5rem" }}>
                  ขอบคุณผู้สนับสนุนทุกคน !{" "}
                </span>{" "}
                <br></br>
                เงินที่ได้จากการสนับสนุนในแต่ล่ะเดือนจะถูกใช้จ่ายไปเพื่อการพัฒนาระบบ
                และ ค่าเช่าเซิร์ฟเวอร์
              </Typography>

              <div data-aos="fade-up">
                <FormSupportMoney />
              </div>
            </Grid>
          </Grid>
        </div>
        <div data-aos="fade-up">
          <Grid container spacing={2} paddingTop={4}>
            <Grid item xs={12}>
              <Stack direction="row" spacing={1}>
                <Chip
                  avatar={
                    <Avatar
                      alt="Natacha"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAxFVJ6fDrOtkv5so9nFp2_TYpJRG0H9PeVxNuEIglw&s"
                    />
                  }
                  label="ร้านคีบตุ๊กตาบางสน : 1500 บาท"
                  variant="outlined"
                  size="medium"
                />
              </Stack>
            </Grid>
          </Grid>
        </div>
        {/* <Grid container spacing={2} paddingTop={4}>
          <Grid item xs={12}>
            <Divider>
              <Chip label="นักพัฒนาระบบ" variant="outlined" />
            </Divider>
          </Grid>
        </Grid> */}
      </Container>

      <LoadingBackdrop loading={loading} />
      <Footer />
    </>
  );
}
