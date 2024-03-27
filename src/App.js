import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";


const theme = createTheme({
    palette: {
        primary: {
            main: "#273746", // สีหลัก
        },
        secondary: {
            main: "#b5bac1", // สีรอง
        },
        textwhite: {
            main: "#ffffff", // ตัวหนังสือสีขาว
        },
        warn: {
            main: "#fdb812", // แจ้งเตือนสีเหลือ
        },
        // เพิ่มค่าสีหรือค่าสไตล์อื่น ๆ ตามต้องการ
    },
    typography: {
        fontFamily: "Kanit, sans-serif",
    },
});

// --------------------------------

function App() {
    return (
        <div
            className="font-Kanit"
            style={{ fontFamily: "Kanit, sans-serif" }}
        >
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
